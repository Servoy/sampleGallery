/**
 * @properties={typeid:24,uuid:"6E6A916D-07BE-4584-B6C8-D8651BC8476B"}
 */
function allowFormIncludedInMenu() {
	return true;
}

/**
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"D919AF1F-8D0A-47CE-B7BB-6409F7C49508"}
 */
function getName() {
	return "Bootstrap 12Grid Containers";
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"5337FA05-4339-4B27-9E1E-5DDF45D2D4D7"}
*/
function getDescription() {
	return "Bootstrap 12Grid Containers Samples";
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"D71E59EF-1A20-40CB-B7EF-D50E1A35FCA6"}
*/
function getIconStyleClass() {
	return "fa fa-tablet"
}


/**
 * @protected 
 * 
 * @properties={typeid:24,uuid:"848B3240-0787-48BC-9807-38C89B52910A"}
 */
function getParent() {
	return forms.containerSamples;
}

/**
 * @protected 
 * 
 * @properties={typeid:24,uuid:"92161314-A8C7-42E9-B65A-55E9F26830D6"}
 */
function getSort() {
	return 5;
}


/**
*
* @return {String} Additioanl info (wiki markdown supported)
*
* @properties={typeid:24,uuid:"2DE43D88-F534-40AF-8415-B1749D75D4C6"}
*/
function getMoreInfo() {
	return plugins.http.getPageData('https://raw.githubusercontent.com/Servoy/12grid/master/README.md')
}

/**
*
* @return {String} Website URL
*
* @properties={typeid:24,uuid:"8CBD7DEE-8930-4C93-A9E2-ABAABF0E4AC2"}
*/
function getWebSiteURL() {
	return 'https://github.com/Servoy/12grid/wiki';
}
 