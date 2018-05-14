/**
 * @properties={typeid:24,uuid:"774A7D16-AB11-47D4-94E6-5ED04A8C54E7"}
 * @override
 */
function onCellClick(foundsetIndex, columnIndex, record, event) {if (columnIndex == 1) { 
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
 * @properties={typeid:24,uuid:"A383F657-3112-404B-A77B-7FC02265E3CA"}
 */
function showOrder(event) {
	forms.navMain.navigate(forms.orders,[{dataProvider:'customerid',operator:'=',value:customerid}], orderid, true);
}
