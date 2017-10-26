/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CBCE1A28-24BC-4541-8FEA-7B8C6A4DDA0E"}
 */
function onLoad(event) {	
	testElement = 'mdinput_test';
	_super.onLoad(event);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"0FFFC59C-297D-42AF-AE47-6E46C70488BD"}
 */
function onChangeType(event) {
	// TODO Auto-generated method stub
	elements.textbox_text.setInputType('date');
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"061D0080-C800-47FC-A310-86BF67BADD41"}
 */
function onAddClass(event) {
	elements.textbox_text.addStyleClass('visible');
}


/**
 * @param event
 *
 * @properties={typeid:24,uuid:"D2C01731-ACEB-4200-83AF-378B72C781AE"}
 */
function onRemoveClass(event) {
	elements.textbox_text.removeStyleClass('visible');
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F430A4F7-E119-4CB8-8FC8-DCA8A699CD25"}
 */
function changeTypeTel(event) {
	elements.textbox_text.setInputType('tel');
}
