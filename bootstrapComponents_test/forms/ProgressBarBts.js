/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"9DBB0E16-6446-4513-A557-10E9BF87C49B"}
 */
function onLoad(event) {
	
	varNumber = 0;
	testElement = 'progressbar_test';
	
	return _super.onLoad(event)
}



/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"D7A170BF-5E19-44E8-BD26-0EFC6C67CF9F"}
 */
function onActionUpdateProgress(event) {
	elements.progressbar_test.value = 90;
}

/**
 * @properties={typeid:24,uuid:"6BD344E5-42B0-4BC5-A0CD-1EB271FA5683"}
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
 * @properties={typeid:24,uuid:"F23425CD-CD55-48A4-B161-57035A5DC121"}
 */
function onDataChangeNumber(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	elements.progressbar_test.value = newValue;
	return false;
}

/**
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"3428C018-BF12-4786-BB6C-D9DDB3859514"}
 */
function onActionUpdateProgressLazy(event) {
	for (var i = 0; i <= 100; i++) {
		elements.progressbar_lazy.value = i;
		application.updateUI();
		application.sleep(50);
	}
}
