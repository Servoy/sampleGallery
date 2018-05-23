/**
 * @type {Boolean}
 * @private
 * @properties={typeid:35,uuid:"44846D03-D28E-4C00-913D-564C7D0987F1",variableType:-4}
 */
var alwaysPersistColumnState = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4314A6D5-9378-4F95-87DA-3E7ABD30D322"}
 */
var activeView = "default";

/**
 * @properties={typeid:24,uuid:"ECCCD69D-76E5-469A-8683-4D2488B6BEAB"}
 */
function onCellClick(foundsetIndex, columnIndex, record, event) { }
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"B1939E63-4AAF-4106-B0F2-906358BBCB5C"}
 */
function showAll(event) {
	// TODO Auto-generated method stub
}

/**
 * Called when the columns state is changed.
 *
 * @param {string} columnState
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"E6EDF74F-87F5-496B-9853-2998149F1949"}
 */
function onColumnStateChanged(columnState) {
	application.output(columnState)
	if (alwaysPersistColumnState) {
		storeColumnState(columnState);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"5812859F-5925-4956-AF6D-0A42309C331B"}
 */
function onActionStoreColumnState(event) {
	var columnState = elements.table.getColumnState();
	storeColumnState(columnState);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"3B84BDF1-DE4D-4717-99D3-295321911E5A"}
 */
function onActionRestoreColumnState(event) {
	var state = getStoredColumnState();
	if (state) {
		elements.table.restoreColumnState(state);
	}
}

/**
 * @param {String} state
 * @protected
 * @deprecated
 *
 * @properties={typeid:24,uuid:"01BA08B4-7F59-4C66-B48A-43D4660C13A0"}
 */
function storeColumnState(state) {
	plugins.webstorageLocalstorage.setItem(getTableKey(), state);
}

/**
 * @return {String}
 * @protected
 * @deprecated
 *
 * @properties={typeid:24,uuid:"AB0CE87E-40B6-448E-8F26-F860652BB51E"}
 */
function getStoredColumnState() {
	return plugins.webstorageLocalstorage.getItem(getTableKey());
}

/**
 * @param name
 * @private
 *
 * @properties={typeid:24,uuid:"6FBCC36F-DA99-46B6-81E3-2E61B438E52C"}
 */
function addStoredView(name) {
	var views = getStoredViews();
	if (!views) views = [];
	if (views.indexOf(name) == -1 && name != "default") {
		views.push(name);
		plugins.webstorageLocalstorage.setItem(getTableKey() + "-views", JSON.stringify(views));
		return true;
	} else {
		return false;
	}
}

/**
 * @param name
 * @private
 *
 * @properties={typeid:24,uuid:"14D2A310-4341-43FD-8BBC-B492BC7E792C"}
 */
function getStoredView(name) {
	return plugins.webstorageLocalstorage.getItem(getTableKey() + "-view-" + name);
}

/**
 * @param name
 * @param state
 * @private
 *
 * @properties={typeid:24,uuid:"188C79AE-975F-4936-AB0B-1D845E4EBA0F"}
 */
function setStoredView(name, state) {
	plugins.webstorageLocalstorage.setItem(getTableKey() + "-view-" + name, state);
}

/**
 * @param name
 *
 * @properties={typeid:24,uuid:"3B9CCA26-4BF3-44DE-B6C3-DD55D69E70B8"}
 */
function removeStoredView(name) {
	plugins.webstorageLocalstorage.removeItem(getTableKey() + "-view-" + name);
}

/**
 * @private
 * @return {Array}
 * @properties={typeid:24,uuid:"9DD6F736-3397-4635-83C9-AB44E075E588"}
 */
function getStoredViews() {
	var result = ["default"]
	var views = plugins.webstorageLocalstorage.getItem(getTableKey() + "-views");
	if (views) {
		application.output(views)
		views = JSON.parse(views);
		result = views;
	}
	return result;
}

/**
 * @protected
 * @properties={typeid:24,uuid:"E27F154C-AEBA-46EB-A148-77E505BA146F"}
 */
function getTableKey() {
	return controller.getName() + '-' + elements.table.getName();
}

/**
 * @public
 * @properties={typeid:24,uuid:"67C6CF6A-0B7B-4911-B72F-D9337B0E5145"}
 */
function persistTableView() {
	setStoredView(activeView, elements.table.getColumnState());
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @public
 *
 * @properties={typeid:24,uuid:"85AA63DC-868C-4968-90A8-EDE474BBC94E"}
 */
function lookupTableView(event) {
	application.setValueListItems("views", getStoredViews());

	var lookup = scopes.svyLookup.createValuelistLookup("views");
	lookup.setLookupFormProvider(forms.svyLookupTableCreate);

	lookup.onAfterRecordCreate = onAfterRecordViewCreate;

	var element = event.getSource();
	var value = lookup.showPopUp(lookupViewCallback, element, 300, 400)
	application.output(value);
}

/**
 * @param record
 * @param text
 * @param lookupParams
 * @protected
 *
 * @properties={typeid:24,uuid:"8CE2F8F7-28B1-40CD-90BD-FABD90DB44E3"}
 */
function onAfterRecordViewCreate(record, text, lookupParams) {
	addStoredView(text);
}

/**
 * @protected
 * @param {Array} records
 * @param {Array} values
 * @param lookup
 *
 * @properties={typeid:24,uuid:"57C8C75E-192F-441A-9164-67F19FE9BF85"}
 */
function lookupViewCallback(records, values, lookup) {
	if (values && values.length) {
		activeView = values[0];
		var state = getStoredView(values[0]);
		if (state) {
			elements.table.restoreColumnState(state);
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"A845A52C-DD5D-41F6-AEB0-CF79A6357A4C"}
 */
function onActionSelectView(event) {
	lookupTableView(event);
	elements.btnView.text = activeView
}

/**
 * @protected
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"8985D3C9-333A-4B98-BF1B-9C3D66CBC7D3"}
 */
function onActionSaveView(event) {
	persistTableView();
}
