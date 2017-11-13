/**
 * @properties={typeid:24,uuid:"99BDB620-7A04-48D1-995F-8763FB35D0B1"}
 */
function allowFormIncludedInMenu() {
	return true;
}

/**
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"F62E756F-AA99-409E-85EE-94E732548BD7"}
 */
function getName() {
	return "Smart layout";
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"A39BF615-E866-44DE-A57E-AB9206074937"}
*/
function getDescription() {
	return "Make best use of the available screen's space using the 12grid containers";
}


/**
 * @properties={typeid:24,uuid:"AEB4E0F8-4D0A-4D6D-9275-1F81CA48D249"}
 */
function getParent() {
	return forms.twelveGridLayoutParentProvider;
}

/**
 * @properties={typeid:24,uuid:"5FE26F7D-2210-4AEC-9067-22707C964E61"}
 */
function getIconStyleClass() {
	return "fa fa-lightbulb-o"
}

/**
 * @properties={typeid:24,uuid:"BB4D9FD3-C596-4D69-8A0D-879AD03282F2"}
 */
function getWebSiteURL() {
	return "https://github.com/Servoy/12grid/wiki"
}

/**
*
* @return {String} Additioanl info (wiki markdown supported)
*
* @properties={typeid:24,uuid:"6D2644DE-402C-45C1-AA5A-9DAF22B41213"}
*/
function getMoreInfo() {
	return plugins.http.getPageData('https://raw.githubusercontent.com/Servoy/12grid/master/README.md')
}

/**
 * @properties={typeid:24,uuid:"11996BF1-CB69-4CCE-86E1-169F4F5F124F"}
 */
function getSampleCode() {
	return ["/* No code is required ! */"]
}
