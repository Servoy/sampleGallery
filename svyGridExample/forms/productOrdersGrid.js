/**
 * @properties={typeid:24,uuid:"6117B2EB-33BB-47AF-91DD-1E625844F6F3"}
 * @override
 */
function onCellClick(foundsetIndex, columnIndex, record, event) {if (columnIndex == 5) { 
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
 * @properties={typeid:24,uuid:"C5363823-209B-451A-BB1D-9498CE0E5F42"}
 */
function showOrder(event) {
	forms.navMain.navigate(forms.orders,null,orderid,true);
}
