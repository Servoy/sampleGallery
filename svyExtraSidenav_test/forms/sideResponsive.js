
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"79E408EA-8985-41F9-9CB7-D263B5C57D5E"}
 */
function onLoad(event) {
	elements.sidenav.menu = scopes.sidenav.generateMenu(null);
	elements.sidenav_right.menu = scopes.sidenav.generateMenu(null);
}

/**
 *
 * @param {servoyextra-sidenav.MenuItem} menuItem
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"532BA387-19AD-4205-B318-507EEA02BF7E"}
 */
function onMenuItemSelected(menuItem, event) {
	
	/** @type {servoyextra-sidenav.MenuItem} */
	var x;
	menuItem.text = "boh"
	// TODO Auto-generated method stub
	return false;
}

/**
* @param {servoyextra-sidenav.MenuItem} p
*
* @properties={typeid:24,uuid:"30B5F9E7-59E8-4515-B086-09294AC70D47"}
*/
function tst(p) {
    p.data;
}
