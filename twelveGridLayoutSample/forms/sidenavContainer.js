/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"289BE98D-1250-46EC-87F5-664D61A43094"}
 */
function onShow(firstShow, event) {
	var menu = [
		{ id: 1, text: "Sample Item #1", styleClass: "sn-large", iconStyleClass: "glyphicon glyphicon-search", data: { description: "This is sample information that can be added to a menuItem" }, 
		menuItems: [{ id: 11, text: "Sub Item #1" }, { id: 12, text: "Sub Item #2" }] }, 
		{ id: 2, text: "Sample Item #2" }, 
		{ isDivider: true }, 
		{ id: 3, text: "Sample Item #3", enabled: false },
		{ id: 4, text: "Sample Item #4" }, 
		{ id: 5, text: "Sample Item #5" }, 
		{ id: 6, text: "Sample Item #6" }, 
		{ id: 7, text: "Sample Item #7" }
		];
	elements.sidenav_1.setRootMenuItems(menu);
	elements.sidenav_2.setRootMenuItems(menu);
}
