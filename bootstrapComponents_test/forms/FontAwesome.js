/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"9743A241-890F-432A-AEC8-0EB93AF0ADA1"}
 */
function onLoad(event) {
	
	varString = 'String Data';
	varNumber = 100;
	varBoolean = true;
	testElement = 'falabel_testElement';
	
	return _super.onLoad(event)
}

/**
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"57498412-3CB2-477C-9D67-CDF6BE4FCF78"}
 */
function onClick(event) {
	// TODO Auto-generated method stub
	plugins.dialogs.showInfoDialog("Hello","Clik")
}
