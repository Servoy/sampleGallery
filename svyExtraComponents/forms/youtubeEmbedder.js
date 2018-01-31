/**
 * The url of the video to load
 * @private 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A53E4783-C9BF-479A-9099-4A9CFD7B7CF7"}
 */
var videoURL = 'https://www.youtube.com/embed/am_nDt5cKy0';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B5D13B06-4862-4E46-A448-F6A2534B51F9",variableType:4}
 */
var allowFullScreen = 1;

/**
 * @private 
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"85DFBF00-B9E3-4F21-A7B5-5AC85193B23D",variableType:4}
 */
var autoPlay = 1;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A18094C5-C4B8-4EBD-9C75-FE8BE668518D",variableType:4}
 */
var showControls = 1;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CF0F528A-CDC7-4BBE-B5B7-05E9D9A5720F",variableType:4}
 */
var showRelatedVideosAtEnd = 1;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DDEBE860-2151-4D11-BE75-4A24BA2237B8",variableType:4}
 */
var modestBranding = 1;

/**
 * @private 
 * @properties={typeid:24,uuid:"02800B30-FC69-4157-94BF-EA88FF68A86D"}
 */
function setURL(){
	elements.video.embeddedVideoURL = videoURL;
}

/**
 * @private 
 * @properties={typeid:24,uuid:"A93A8286-471F-4BBA-8C8B-522140BFB639"}
 */
function updateVideo(){
	elements.video.allowFullScreen = allowFullScreen == 1;
	elements.video.autoPlay = autoPlay == 1;
	elements.video.showControls = showControls == 1;
	elements.video.showRelatedVideosAtEnd = showRelatedVideosAtEnd == 1;
	elements.video.modestBranding = modestBranding == 1;
	elements.video.embeddedVideoURL = videoURL;
	
//	setURL();
}


/*
 * SAMPLE PROVIDER METHODS
 */

/**
 * @properties={typeid:24,uuid:"80FAEB5F-1FE8-499F-9FBE-347A8A21CBE4"}
 */
function getParent() {
	return forms.specializedSamples;
}

/**
 * @properties={typeid:24,uuid:"96070E64-6F50-4BA1-ACCA-3A91777E4734"}
 */
function getName() {
	return 'YouTube Embedder'
}

/**
 * @properties={typeid:24,uuid:"A260AC27-5A6E-4494-8D47-DE12D6DF3B0B"}
 */
function getDescription() {
	return 'Easily embed video content into your applications';
}

/**
 * @properties={typeid:24,uuid:"90961598-F488-4106-8540-512CB9218D13"}
 */
function getIconStyleClass() {
	return 'fa fa-youtube-square';
}

/**
 * @properties={typeid:24,uuid:"711FF0B1-066A-43D8-8DA3-791172382D7E"}
 */
function getMoreInfo() {
	var url = 'https://raw.githubusercontent.com/wiki/Servoy/svySearch/master/Embedded-YouTube.md';
	return plugins.http.getPageData(url);
}

/**
 * @properties={typeid:24,uuid:"83E0B06E-2A84-496A-B4F4-F2EB38C50B19"}
 */
function getWebSiteURL() {
	return 'https://github.com/Servoy/servoy-extra-components/tree/master/fontawesome';
}

/**
 * @properties={typeid:24,uuid:"B51FFCAC-3DA6-46F8-B215-6905E42A1792"}
 */
function getSampleCode() {
	return printMethodCode(forms.fontAwesome.onAction);
}
/**
 * @param {JSEvent} event
 *
 * @public
 *
 * @properties={typeid:24,uuid:"FBA0015E-865F-4518-9E36-3D599E11118C"}
 */
function onAction(event) {
	if (elements.text1.visible == true){
		elements.text1.visible = false;
	}
	else if (elements.text1.visible == false){
		elements.text1.visible = true;
	}

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"586FEC43-2286-41AD-ADB1-7725B8837EB7"}
 */
function onShow(firstShow, event) {
	setURL();
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"22E2BE17-7E60-43A7-B35B-7D327B8F7989"}
 */
function onDataChangeURL(oldValue, newValue, event) {
	setURL();
	return true
}
