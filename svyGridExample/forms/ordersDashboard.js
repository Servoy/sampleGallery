/**
 * @protected *
 * @properties={typeid:35,uuid:"068F4DA5-B1B5-4BA4-857B-F1E18784D3AE",variableType:-4}
 */
var filters = new Object();

/**
 * @type {JSDataSet}
 * @protected
 *
 * @properties={typeid:35,uuid:"47957CFA-F4B2-4654-A3A4-4871F1BD75CF",variableType:-4}
 */
var dataset;

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"943B2565-1792-4A41-8405-F1B1650FDFFD"}
 */
function onLoad(event) {
	var colStatus = elements.table.getColumn('orderStatus');
	if (colStatus) {
		colStatus.cellStyleClassFunc = "(" + scopes.svySystem.printMethodCode(getStatusColor).join("") + ")";
		colStatus.cellRendererFunc = "(" + scopes.svySystem.printMethodCode(cellRenderTag).join("") + ")";
	}

}

/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"CFE8B603-5861-4D93-B428-D848F3108CAF"}
 */
function onShow(firstShow,event) {
	if (firstShow) {
		parseDataset();
	}
	elements.table.renderData(dataset);
}

/**
 * @private 
 * @properties={typeid:24,uuid:"1087C4FB-4259-4430-BE54-031DC973703F"}
 */
function parseDataset() {
	var columns = elements.table.getAllColumns();
	var columnNames = [];
	for (var i = 0; columns && i < columns.length; i++) {
		columnNames.push(columns[i].id)
	}
	dataset = databaseManager.convertToDataSet(foundset, columnNames);
}



/**
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"B17EC59A-7C29-467A-8429-B3648952F028"}
 */
function onActionExport(event) {
	elements.table.exportData();
}

/**
 * @param rowIndex
 * @param rowData
 * @param field
 * @param columnData
 * @param event
 *
 * @properties={typeid:24,uuid:"D10E62DD-CBBB-4C48-A1BF-694AAC6FE4E1"}
 */
function cellRenderTag(rowIndex, rowData, field, columnData, event) {
	return columnData ? '<span>' + columnData + '</span>' : ''
}

/**
 * @param rowIndex
 * @param rowData
 * @param field
 * @param columnData
 * @param event
 *
 * @properties={typeid:24,uuid:"3DAA76C5-CFB7-4163-9FB2-10098706D34D"}
 */
function getStatusColor(rowIndex, rowData, field, columnData, event) {
	if (rowData) {
		switch (rowData.orderStatus) {
		case "New Order":
			return "label-tag text-info";
			break;
		case "Completed":
			return "label-tag text-success";
			break;
		case "Planned":
			return "label-tag text-info";
			break;
		default:
			return "label-tag";
			break;
		}
	}
	return "";
}


/**
 * @param {JSEvent} event
 *
 * @protected
 *
 *
 * @properties={typeid:24,uuid:"89662193-8E05-497B-9085-37C8E32DCAD7"}
 */
function onFilterCompany(event) {
	
    // create lookup object
	var lookupObj = scopes.svyLookup.createLookup(datasources.db.example_data.customers.getDataSource());
	// add fields
	lookupObj.setLookupFormProvider(forms.svyLookupTableMulti);
	lookupObj.setLookupDataprovider('customerid');
	lookupObj.addParam(event.getElementName());

	// related data is supported
	lookupObj.addField('companyname').setTitleText('Customer');
	
	lookupObj.showPopUp(onSelectFilter,elements[event.getElementName()], 400, 50,null);
}

/**
 * @param event
 *
 *
 * @properties={typeid:24,uuid:"F4C9039E-871B-485A-99A0-903E8F31B58E"}
 */
function onFilterEmployee(event) {
	
    // create lookup object
	var lookupObj = scopes.svyLookup.createLookup(datasources.db.example_data.employees.getDataSource());
	// add fields
	lookupObj.setLookupFormProvider(forms.svyLookupTableMulti);
	lookupObj.setLookupDataprovider('employeeid');
	lookupObj.addParam(event.getElementName());
	
	// related data is supported
	lookupObj.addField('firstname').setTitleText('Name');
	lookupObj.addField('lastname').setTitleText('Lastname');
	
	lookupObj.showPopUp(onSelectFilter,elements[event.getElementName()], 400, 50,null);
}


/**
 * @param {JSEvent} event
 *
 * @protected
 *
 *
 * @properties={typeid:24,uuid:"8D85A72F-7E00-4BFF-BB73-41DE5F52C8CC"}
 */
function onFilterCountry(event) {
    // create lookup objecy
	var lookupObj = scopes.svyLookup.createValuelistLookup("ordersCountries");
	lookupObj.setLookupFormProvider(forms.svyLookupTableMulti);
	lookupObj.addParam(event.getElementName());
	lookupObj.addParam('shipcountry');

	lookupObj.showPopUp(onSelectFilter,elements[event.getElementName()], 400, 50,null);
}

/**
 * @param {Array<JSRecord>} records
 * @param {Array} values
 * @param {scopes.svyLookup.Lookup} lookup
 * @protected 
 *
 * @properties={typeid:24,uuid:"4242A4A4-3929-4ED2-AD17-A022D2D0271A"}
 */
function onSelectFilter(records, values, lookup) {
	
	var params = lookup.getParams();
	var lookupProvider = params[1] ? params[1] : lookup.getLookupDataprovider();
	
	var length = values.length;
	if (length) { // filter on the returned values
		filters[lookupProvider] = values;	
	} else { // no value selected, remove filters
		delete filters[lookupProvider];
	}
	elements[params[0]].badgeText = "" + length;
}

/**
 * @protected 
 *
 * @properties={typeid:24,uuid:"3E79341A-9103-43B3-8174-8A73102524BC"}
 */
function applyFilters() {
	var query = foundset.getQuery();
	query.where.clear();
	
	var where = query.where;

	for (var param in filters) {
		if (filters[param].length) {
			var values = filters[param];
			if (values && values.length) {
				where.add(query.getColumn(param).isin(values));
			}
		}
	}
	
	foundset.loadRecords(query);
	
	// refresh table
	refreshTable();
}

/**
 *
 * @properties={typeid:24,uuid:"E5E33456-2AAD-466F-B02B-6798113DC6F3"}
 */
function refreshTable() {
	parseDataset();
	elements.table.renderData(dataset);
}
/**
 * Called when the mouse is clicked on a row/cell.
 *
 * @param {object} rowData
 * @param {string} [columnId]
 * @param {object} [cellData]
 * @param {JSEvent} [event]
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"BA2AA1A9-9A3C-4115-A725-D251D7119590"}
 */
function onCellClick(rowData, columnId, cellData, event) {
	if (columnId == 'link' && rowData && rowData.orderid) {
		scopes.svyDataUtils.selectRecordByPks(foundset, rowData.orderid);
		showOrder(event);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"6E982EF9-632A-4BD6-9C2C-C8CC01FDFF0C"}
 */
function showOrder(event) {
	forms.navMain.navigate(forms.orders, [{ dataProvider: 'customerid', operator: '=', value: customerid }], orderid, true);
}