
/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"CEA987A4-18F4-4BB8-84E9-A7CD3A64B425"}
 */
function onSolutionOpen(arg, queryParams) {
	scopes.svyThemeRoller.addLESSFileDependancy("themes/theme-servoy.less");
	scopes.svyThemeRoller.addLESSFileDependancy("theme-blue.less");

	scopes.svyThemeRoller.initLessJS();
}
