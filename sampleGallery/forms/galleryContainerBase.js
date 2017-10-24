/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"C55F5680-E1F4-45E7-867A-4DCAC78A2285"}
 */
function onShow(firstShow, event) { }

/**
 * @protected
 * @properties={typeid:24,uuid:"031C7FA6-B533-4D53-BC02-F8D200D76D30"}
 */
function showInfo() {

	var sample = getActiveSample();
	if (!sample) return;
	var info = sample.getMoreInfo();
	if (!info) return;
	forms.markdownContent.setContent(info);
}

/**
 * @protected
 * @properties={typeid:24,uuid:"A7A9F0F9-8E93-4F13-B457-E73031E6DEF8"}
 */
function showCode() {

	var sample = getActiveSample();
	if (!sample) return;
	var code = sample.getSampleCode();
	if (!code || !code.length) return;

	forms.codeContent.setCode(code);

}

/**
 *
 * @protected
 * @properties={typeid:24,uuid:"B99520AE-C336-4585-B14B-9D5B185085F3"}
 */
function showWebSite() {
	var sample = getActiveSample();
	if (!sample) return;
	var url = sample.getWebSiteURL()
	if (!url) return;

	application.showURL(url);
}

/**
 * @protected
 * @properties={typeid:24,uuid:"26C35725-E454-4BC2-8281-2AD233F7B9CB"}
 */
function download() {
	var sample = getActiveSample();
	if (!sample) return;
	var url = sample.getDownloadURL();
	if (!url) return;

	application.showURL(url);
}

/**
 * @public 
 * @properties={typeid:24,uuid:"A6A891AE-BA3B-46E9-8CB9-7BBBF9677449"}
 */
function maximizeContent() { }

/**
 * @public 
 * @properties={typeid:24,uuid:"21BE56AB-9AD6-452B-AB6B-1CFC061648B1"}
 */
function minimizeContent() { }

/**
 * @private
 * @return {RuntimeForm<AbstractMicroSample>}
 * @properties={typeid:24,uuid:"CE4B259E-C58B-472C-8528-6B2F98C21B73"}
 */
function getActiveSample() { }

/**
 * @public
 * @param {RuntimeForm<AbstractMicroSample>} form
 * @return {Boolean}
 * @properties={typeid:24,uuid:"939634E7-DE23-451A-82A5-8A8774F31EDD"}
 */
function showSample(form) {
	return true;
}
