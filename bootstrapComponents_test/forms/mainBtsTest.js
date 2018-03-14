
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"5C51A4FF-926A-40E1-A0C2-5C22D2374B5A"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	application.showForm('customers');
}


/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"8EF87107-D4D1-4AE8-9C60-90AFFE8310E0"}
*/
function getName() {
	return 'Bootstrap Components';
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"D7C0EFCE-6F43-42CC-9A5E-C000EF70F610"}
*/
function getDescription() {
	return 'Bootstrap Components'
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"8DE12263-CD8D-408E-A4CA-DD35BD79360A"}
*/
function getIconStyleClass() {
	return "fa fa-plus-square-o";
}

/**
 * @properties={typeid:24,uuid:"E795BDC7-30C6-4366-9C32-740BC7956D73"}
 */
function allowFormIncludedInMenu() {
	return true;
}