/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9B3E4B70-8128-4572-AF3C-F8CB4FE65643"}
 */
var varString2 = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"C4BDE170-5FEA-4AE5-B459-8905EAA73DBD"}
 */
function onLoad(event) {
	testElement = 'mdautocomplete_test';
	_super.onLoad(event);
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"ED8CA582-D20D-4CAA-9EF1-07868202ECCE"}
 */
function onAction(event) {
	elements.combobox_1.enabled = false;
}
