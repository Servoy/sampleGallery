/**
 * @param event
 *
 * @properties={typeid:24,uuid:"54B64510-D42B-4D6B-865C-E1D46CF5E2A8"}
 */
function onLoad(event) {
	_super.onLoad(event);
	
	
	elements.sidenav_left_toggle_panel.menu = scopes.sidenav.generateMenu(null);
	elements.sidenav_right_toggle_panel.menu = scopes.sidenav.generateMenu(null);
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"E8262711-E262-4E1E-AB7A-CB11993F6DA8"}
 */
function onActionSwitchForm(event) {
	if (elements.sidenav_left.containedForm === "tab1") {
		elements.sidenav_left.containedForm = "tabBase"
	} else {
		elements.sidenav_left.containedForm = "tab1"
	}
}
