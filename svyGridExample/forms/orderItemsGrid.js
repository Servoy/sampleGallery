/**
 * @properties={typeid:24,uuid:"ED5D6FA4-F7AC-4EFD-87F7-2406EFB47B00"}
 * @override
 */
function onCellClick(foundsetIndex, columnIndex, record, event) {if (columnIndex == 3) { 
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
 * @properties={typeid:24,uuid:"96265ADA-9182-4053-89C0-C9870D506E82"}
 */
function showProduct(event) {
	forms.navMain.navigate(forms.products,null,productid,true);
}
