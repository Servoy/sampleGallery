/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"3A470C0C-358D-45D0-960B-E7F42DD167BF"}
 */
function onShow(firstShow, event) {
	varString = "One";
	varDate = new Date();
	return _super.onShow(firstShow, event)
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F16936A7-2100-4289-9CD1-66D34320781D"}
 */
function onActionBts(event) {
	// TODO Auto-generated method stub
	// elements.formcomponent_1.addStyleClass('invalid')
	elements.formcomponent_2.addStyleClass('invalid')
}
