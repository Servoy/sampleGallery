/**
 * @properties={typeid:24,uuid:"6E0BDD03-42A5-42F2-81B5-BA8C36CA2BD6"}
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
 * @properties={typeid:24,uuid:"BA0EA4A8-AAB5-4D73-80C3-FF3EB694F099"}
 */
function showOrder(event) {
	forms.navMain.navigate(forms.orders,[{dataProvider:'shipvia',operator:'=',value:shipvia}], orderid, true);
}
