/**
 * @properties={typeid:24,uuid:"3E4D7F97-73E1-405F-96F0-B157F558FEF5"}
 * @override
 */
function onCellClick(foundsetIndex, columnIndex, record, event) {if (columnIndex == 0) { 
showProduct(event);
 }
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"2C86F271-2375-4BAF-8AE3-D4CA32D3CF4C"}
 */
function showProduct(event) {
	forms.navMain.navigate(forms.products,[{dataProvider:'supplierid',operator:'=',value:supplierid}],productid,true);
}
