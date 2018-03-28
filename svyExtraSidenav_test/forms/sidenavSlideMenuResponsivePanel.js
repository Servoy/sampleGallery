/**
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"73B379C8-7AE8-4E3A-9565-173E9F141A7C"}
 */
function onActionSwitchForm(event) {
	if (elements.sidenav_left.containedForm === "tab1") {
		elements.sidenav_left.containedForm = "tabBase"
	} else {
		elements.sidenav_left.containedForm = "tab1"
	}
}
