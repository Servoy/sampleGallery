/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 * @override 
 *
 * @properties={typeid:24,uuid:"4A5F94BD-4812-4D7A-9CE4-5AC04DE3F68F"}
 */
function onShow(firstShow, event) {
	elements.tabs.dividerLocation = .99;
}

/**
 * @protected 
 * @properties={typeid:24,uuid:"07185FD0-CED4-4A4C-A2B2-48F098D65364"}
 */
function showInfo(){
	_super.showInfo();
	elements.tabs.setRightForm(forms.markdownContent);
	elements.tabs.dividerLocation = .5;
}

/**
 * @protected 
 * @properties={typeid:24,uuid:"A0692009-4FD2-4B9B-A4EA-50DE6565A619"}
 */
function showCode(){
	
	elements.tabs.dividerLocation = .99;
	
	_super.showCode();
	elements.tabs.setRightForm(forms.codeContent);
	elements.tabs.dividerLocation = .5;
}

/**
 * @protected 
 * @properties={typeid:24,uuid:"1B1EF4F4-24CE-42D1-A8E5-10DEF80E3740"}
 */
function maximizeContent(){
	var form = elements.tabs.getRightForm();
	elements.tabs.setRightForm(null);
	elements.tabs.dividerLocation = .99;

	var win = application.createWindow(application.getUUID().toString(),JSWindow.MODAL_DIALOG);
	win.resizable = true;
	var w = application.getScreenWidth() - 100;
	var h = application.getScreenHeight() - 100;
	win.setSize(w,h);
	win.undecorated = false;
	win.show(form);
}

/**
 * @protected 
 * @properties={typeid:24,uuid:"93F16CBF-746E-406D-9404-890D8A9C2D33"}
 */
function minimizeContent(){
	elements.tabs.setRightForm(null);
	elements.tabs.dividerLocation = .99;
	application.closeAllWindows();
}

/**
 * @private 
 * @return {RuntimeForm<AbstractMicroSample>}
 * @override 
 * @properties={typeid:24,uuid:"7156568F-27F5-42F0-B45A-AA93EBFD8B88"}
 */
function getActiveSample(){
	/** @type {RuntimeForm<AbstractMicroSample>} */
	var sample = elements.tabs.getLeftForm();
	return sample;
}

/**
 * @public 
 * @param {RuntimeForm<AbstractMicroSample>} form
 * @return {Boolean}
 * @properties={typeid:24,uuid:"05E1B844-5C4B-439F-8105-128722D2AA92"}
 */
function showSample(form) {
	
	// add tab
	elements.tabs.setLeftForm(form);
	elements.tabs.setRightForm(forms.content);
	elements.tabs.dividerLocation = .99;
	return true;
}
