
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"A4FDEFCF-CCEC-42D3-8777-BF70954B70A6"}
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
 * @properties={typeid:24,uuid:"5CD06B98-FFCD-48A6-941E-6F2F15AAE3E9"}
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
 * @properties={typeid:24,uuid:"AA70E7CB-BB13-4D63-8CB2-771AC3A08FC9"}
 */
function onOpenToggle(event) {
	elements.sidenav_left.open = !elements.sidenav_left.open;
	elements.sidenav_right.open = !elements.sidenav_right.open;
	
	elements.sidenav_left_toggle.open = !elements.sidenav_left_toggle.open;
	elements.sidenav_right_toggle.open = !elements.sidenav_right_toggle.open;
}

