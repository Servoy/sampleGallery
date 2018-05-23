/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"FEDA49F0-E427-43AA-BC78-877FB60A940A"}
 */
function showCustomer(event) {
	forms.navMain.navigate(forms.customers, null, customerid, true);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"6CDCF9A2-EF2C-4EBF-95C8-E83DEFC93637"}
 */
function showEmployee(event) {
	forms.navMain.navigate(forms.employees, null, employeeid, true);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"69BF3DEE-DED3-42CE-8AEA-9214E8CA0E21"}
 */
function showShipper(event) {
	forms.navMain.navigate(forms.shippers, null, shipvia, true);
}