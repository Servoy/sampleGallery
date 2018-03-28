
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"5279EE71-6DE8-4145-ABBC-B308FED16135"}
 */
function onBtnTest(event) {
	plugins.webnotificationsToastr.success("Test Clicked");
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"67AE64EF-7C01-4E15-9DA0-B281F05839D1"}
 */
function onLoad(event) {		
	elements.sidenav_left.menu = scopes.sidenav.generateMenu(null);
	elements.sidenav_right.menu = scopes.sidenav.generateMenu(null);
	
	elements.sidenav_left_toggle.menu = scopes.sidenav.generateMenu(null);
	elements.sidenav_right_toggle.menu = scopes.sidenav.generateMenu(null);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"2546B268-3E32-4F6B-B5B1-5663CBCD2CEC"}
 */
function onOpenToggle(event) {
	elements.sidenav_left.open = !elements.sidenav_left.open;
	elements.sidenav_right.open = !elements.sidenav_right.open;
	
	elements.sidenav_left_toggle.open = !elements.sidenav_left_toggle.open;
	elements.sidenav_right_toggle.open = !elements.sidenav_right_toggle.open;
}

