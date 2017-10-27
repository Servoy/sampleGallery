/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"FA91E5D2-EC8E-417D-A306-0F72FB086BC7"}
 */
function onLoad(event) {
	
	varNumber = 0;
	testElement = 'progressbar_test';
	
	return _super.onLoad(event)
}



/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"079BCDC9-B47C-4665-B536-64B257FFD3E1"}
 */
function onActionUpdateProgress(event) {
	elements.progressbar_test.value = 90;
}

/**
 * @properties={typeid:24,uuid:"A6BBF309-A28D-4815-8B4A-3A23F9B3567B"}
 */
function updateProgressBar() {
	//var bar = elements[testElement]
	elements.progressbar_test.value = 90;
}

/**
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"A1CF3761-09C8-4988-8F25-1A2742FA30F2"}
 */
function onDataChangeNumber(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	elements.progressbar_test.value = newValue;
	return false;
}
