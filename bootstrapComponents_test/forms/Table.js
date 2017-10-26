
/**
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"1621F60F-4389-4F18-9C25-C6C83A0C2555"}
 */
function onActionMethodID(event) {
	// TODO Auto-generated method stub
	elements.table_10.visible = false
	application.updateUI()
	elements.table_10.pageSize = elements.table_10.pageSize === 2 ? 0 : 2
	application.updateUI()
	elements.table_10.visible = true
}
