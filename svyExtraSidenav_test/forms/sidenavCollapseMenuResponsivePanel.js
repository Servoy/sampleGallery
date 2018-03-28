/**
 * @protected 
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"8D8E1D92-9505-45C6-A57D-17304448976C"}
 */
function onActionSwitchForm(event) {
	if (elements.sidenav_left.containedForm === "tab1") {
		elements.sidenav_left.containedForm = "tabBase"
	} else {
		elements.sidenav_left.containedForm = "tab1"
	}
}