/**
 * @properties={typeid:24,uuid:"299AD729-A526-4A72-91BC-F5F7651C94FF"}
 * @override
 */
function onCellClick(foundsetIndex, columnIndex, record, event) {
	if (columnIndex == 0) {
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
 * @properties={typeid:24,uuid:"3C9E3D77-09C2-40EF-81CB-48DA6BA9224A"}
 */
function showOrder(event) {
	forms.navMain.navigate(forms.orders, [{ dataProvider: 'employeeid', operator: '=', value: employeeid }], orderid, true);
}
