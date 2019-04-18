/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"04FEEB0D-CA78-4F72-9CF1-F2E0B4F81259"}
 */
function onLoad(event) {
	
	varString = 'String Data';
	varNumber = 100;
	varBoolean = true;
	testElement = 'mdbutton_testElement';
	
	return _super.onLoad(event)
}
/**
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"FE6EB615-B43F-47EA-8982-325FA7923A70"}
 */
function onClick(event) {
	// TODO Auto-generated method stub
	plugins.dialogs.showInfoDialog("Hello","Clik")
}

/**

 * @protected
 *
 * @properties={typeid:24,uuid:"FF969F61-85C8-4670-8D88-1F0E790E42BF"}
 */
function onActionToggleIcon(event) {
	if (elements.button_icon.imageStyleClass == "fa fa-arrow-up") {
		elements.button_icon.imageStyleClass = "fa fa-arrow-down";
	} else {
		elements.button_icon.imageStyleClass = "fa fa-arrow-up";		
	}
}
