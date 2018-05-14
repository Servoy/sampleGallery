/**
 * @properties={typeid:35,uuid:"B6F7B9CF-4350-433D-9D14-BB0D1B1A1F26",variableType:-4}
 */
var log = scopes.svyLogManager.getLogger("servoy.bap.grid.utils");

/**
 * @properties={typeid:24,uuid:"022B055B-061C-4416-9F9B-F49AA72E4339"}
 */
function convertServoyTableForms(prefix) {

	var allForms = solutionModel.getForms();

	for (var i = 0; i < allForms.length; i++) {

		var jsForm = allForms[i];
		if (jsForm.view == JSForm.LOCKED_TABLE_VIEW) {
			convertServoyTableFormToAgGrid(jsForm.name, true, prefix)
		}
	}
}

/**
 * @param {String} formName
 * @param {Boolean} save
 * @param {String} prefix
 * @public
 * @properties={typeid:24,uuid:"97FDD003-B058-42A1-ACD8-626E15D0B03A"}
 */
function convertServoyTableFormToAgGrid(formName, save, prefix) {

	var jsForm = solutionModel.getForm(formName);

	var newFormName = formName;
	if (prefix) {
		newFormName = prefix + formName;
		var newForm = solutionModel.cloneForm(newFormName, jsForm);
		jsForm = newForm;
	}

	if (jsForm.view == JSForm.LOCKED_TABLE_VIEW) {

		var columns = [];

		// change the form to View
		jsForm.view = JSForm.LOCKED_RECORD_VIEW;

		var jsBody = jsForm.getBodyPart();

		// all labels and buttons
		var allLabels = jsForm.getLabels().concat(jsForm.getButtons());
		var jsLabel;
		var jsField;

		var onCellClickBody = "";

		/* add the column to the list */
		function addColumn(newCol, colJSField, colJSLabel) {
			var colName = colJSField.name;
			if (colName) {
				jsForm.removeComponent(colName);
			} else {
				colName = '_idx_' + columns.length;
				log.warn("No element name for column " + colName + " in form " + jsForm.name);
			}
			columns.push(newCol);
			elementsInColumns.push(colName);
			if (colJSLabel && colJSLabel.name) {
				jsForm.removeComponent(colJSLabel.name);
			}
		}

		/* Get an existing column */
		function getColumn(colJSField) {
			if (colJSField.name) {
				return columns[elementsInColumns.indexOf(colJSField.name)];
			} else {
				return null;
			}
		}

		/* Get an existin column */
		function getColumnByName(fieldName) {
			if (fieldName) {
				return columns[elementsInColumns.indexOf(fieldName)];
			} else {
				return null;
			}
		}

		/* Set the title for a column already parsed */
		function setColumnLabel(colJSLabel, colJSField) {
			// TODO set the label of the field
			var colLabelFor = getColumn(colJSField.name);
			if (colLabelFor) {
				colLabelFor.headerTitle = colJSLabel.text;
				colLabelFor.headerStyleClass = colJSLabel.styleClass
			}
		}

		var COMPONENT_TYPES = {
			LABEL: "label",
			FIELD: "field"
		}

		var elementsInColumns = [];

		/** add the component to the list of columns
		 * @param {JSField} colJSField
		 * @param {JSLabel} colJSLabel
		 * @param {String} type
		 *
		 * */
		function addComponent(colJSField, colJSLabel, type) {

			// if doesn't exist
			if (elementsInColumns.indexOf(colJSField.name) == -1) {
				/** @type {aggrid-groupingtable.column} */
				var newCol;
				if (type === COMPONENT_TYPES.LABEL) {
					newCol = convertLabelToAgGridColumn(colJSField, colJSLabel);
				} else {
					newCol = convertFieldToAgGridColumn(colJSField, colJSLabel);
				}

				if (colJSField.onAction) {
					var onActionBlock = "if (columnIndex == " + columns.length + ") { \n" + colJSField.onAction.getName() + "(event);\n }\n";
					onCellClickBody += onActionBlock;
				}

				addColumn(newCol, colJSField, colJSLabel);

			} else {
				// Skip it, already exists
				log.debug("Already processed; skip component " + colJSField.name)
			}

		}

		// iterate all labels and buttons
		for (var i = 0; i < allLabels.length; i++) {
			jsLabel = allLabels[i];

			if (jsLabel.labelFor && (jsForm.getComponent(jsLabel.labelFor) || getColumnByName(jsLabel.labelFor))) { // if is a label for some elements

				jsField = jsForm.getField(jsLabel.labelFor);
				if (jsField) { // label for a RuntimeField

					if (elementsInColumns.indexOf(jsField.name) == -1) {
						addComponent(jsField, JSColumn, COMPONENT_TYPES.FIELD);
					} else {
						// set the title for an existing field
						setColumnLabel(jsLabel, jsField)
					}

				} else { // does not have a field
					jsField = jsForm.getComponent(jsLabel.labelFor);
					if (jsField) { // label for Generic Component
						if (elementsInColumns.indexOf(jsField.name) == -1) {
							addComponent(jsField, jsLabel, COMPONENT_TYPES.LABEL);
						} else {
							// set the label for the existing field
							setColumnLabel(jsLabel, jsField)
						}
					} else { // check if the field was already processed, edit into into the column then
						var colField = getColumnByName(jsLabel.labelFor);
						if (colField) {
							colField.headerTitle = jsLabel.text;
							colField.headerStyleClass = jsLabel.styleClass;
						}
					}

				}
			} else { // is not a label for
				if (jsLabel.y >= jsBody.getPartYOffset()) { // is a label/button in the grid
					addComponent(jsLabel, null, COMPONENT_TYPES.LABEL)
				}
			}
		}

		// process all fields
		var allElements = jsForm.getFields();
		for (i = 0; i < allElements.length; i++) {
			jsField = allElements[i];

			// add the component
			if (jsField.y >= jsBody.getPartYOffset()) {
				addComponent(jsField, null, COMPONENT_TYPES.FIELD);
			}

		}

		// TODO check if a table component already exists
		// TODO check if the table extends another form having the table
		var agTable;
		if (jsForm.extendsForm) {
			/** @type {JSForm} */
			var baseForm = jsForm.extendsForm;
			if (baseForm.view == JSForm.LOCKED_TABLE_VIEW) {
				convertServoyTableFormToAgGrid(baseForm.name, save, prefix);
			}

			// get the table
			agTable = baseForm.getWebComponent("table");
			if (!agTable) {
				return false;
			}

			agTable.x = 0;
			agTable.y = jsBody.getPartYOffset();

			agTable.width = jsForm.width;
			agTable.height = jsBody.height;

		} else {
			agTable = jsForm.newWebComponent("table", "aggrid-groupingtable", 0, jsBody.getPartYOffset(), jsForm.width, jsBody.height);
			agTable.anchors = SM_ANCHOR.ALL;
		}

		agTable.setJSONProperty("columns", columns);

		var onCellClickScript = "function onCellClick(foundsetIndex, columnIndex, record, event) {" + onCellClickBody + "}"
		var onCellClickMethod = jsForm.newMethod(onCellClickScript);

		agTable.setHandler("onCellClick", onCellClickMethod);

		// TODO onHeaderClick

		// TODO onCellRightClick

		if (save) {
			servoyDeveloper.save(jsForm);
		}
		return true;
	} else {
		return false;
	}
}

/**
 * @param {JSField} jsField
 * @param {JSLabel} [jsHeader]
 * @protected
 * @return {aggrid-groupingtable.column}
 *
 * @properties={typeid:24,uuid:"30208429-AA8E-451A-8040-6259819291F8"}
 */
function convertFieldToAgGridColumn(jsField, jsHeader) {

	/** @type {aggrid-groupingtable.column} */
	var column = createAgGridColumn();

	column.dataprovider = jsField.dataProviderID;
	column.styleClass = jsField.styleClass;
	column.visible = jsField.visible;
	column.valuelist = jsField.valuelist;
	column.format = jsField.format;

	if (jsHeader) {
		column.headerTitle = jsHeader.text;
		column.headerStyleClass = jsHeader.styleClass;
	}

	// if the element is in the body

	switch (jsField.displayType) {
	case JSField.TEXT_FIELD:
	case JSField.TEXT_AREA:
		column.editType = "TEXTFIELD";
		break;

	case JSField.TYPE_AHEAD:
		column.editType = "TYPEAHEAD";

		break;
	case JSField.COMBOBOX:
		column.editType = "COMBOBOX";

		break;
	case JSField.CALENDAR:
		column.editType = "DATEPICKER";

		break;
	case JSField.IMAGE_MEDIA:
		break;
	case JSField.CHECKS:
	case JSField.RADIOS:
		// TODO to be implemented
		break;
	default:
		break;
	}

	return column
}

/**
 * @param {JSButton} jsField
 * @param {JSLabel} jsHeader
 * @protected
 *
 * @return {aggrid-groupingtable.column}
 *
 * @properties={typeid:24,uuid:"387407BC-A491-4B12-A9A9-BFB173E41841"}
 */
function convertLabelToAgGridColumn(jsField, jsHeader) {

	/** @type {aggrid-groupingtable.column} */
	var column = createAgGridColumn();

	if (jsHeader) {
		column.headerTitle = jsHeader.text;
		column.headerStyleClass = jsHeader.styleClass;
	}

	column.dataprovider = jsField.dataProviderID;
	column.styleClass = jsField.styleClass;
	column.visible = jsField.visible;
	column.format = jsField.format;

	return column;
}

/**
 * @private
 * @return {aggrid-groupingtable.column}
 *
 * @properties={typeid:24,uuid:"198C4557-E042-4FA7-839B-F15052C97999"}
 */
function createAgGridColumn() {
	var column = {
		rowGroupIndex: -1,
		enableRowGroup: true,
		enableSort: true,
		visible: true,
		edityType: 'NONE'
	}
	return column;
}
