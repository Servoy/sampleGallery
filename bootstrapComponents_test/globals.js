
/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"5DCC05EC-E2B6-41B9-AE9A-4844D9BB43D7"}
 */
function onSolutionOpen(arg, queryParams) {
//	val = "One|One
//Two|Two
//Three|Three"

	var display = ["Active", "Passive"]
	var real = [1, 0]
	
	scopes.svyWebComponentsModel.initLongValuelist();
	//application.setValueListItems("numbers",display,real)
	// TODO Auto-generated method stub
}
