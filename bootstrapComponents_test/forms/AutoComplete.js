/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"14914084-2A64-4DF8-BDE2-D3A78ABC0473"}
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
 * @properties={typeid:24,uuid:"6B8A1F3D-77E7-4B7D-8311-6DA05CF2BCA2"}
 */
function onAction(event) {
	elements.combobox_1.enabled = false;
}
