/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"AC04F083-DEA5-43C9-8F1A-B645374130C6"}
 */
function onAction_btnShowLightBox(event) {
	elements.lightboxgallery.showLightbox();
}

/**
 * @param {JSEvent} event
 * @param {bootstrapextracomponents-carousel.slide} slide
 *
 * @private
 *
 * @properties={typeid:24,uuid:"25F3CFDF-0648-46BE-80F7-FCBFDA6716F5"}
 */
function onSlideClicked(event, slide) {
	application.output('Click on slide ' + slide.imageUrl);
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"4284855A-B9BE-49B8-B035-DA9BACA197B9"}
*/
function getName() {
	return 'Lightbox Gallery'
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"8E9D47EE-098A-4B70-A7B0-EF0FFE9C1ABD"}
*/
function getDescription() {
	return "Lightbox shows a gallery of images and allows to overlay images on top of the current page."
}

/**
*
* @return {RuntimeForm<AbstractMicroSample>}
*
* @properties={typeid:24,uuid:"BCADFFB2-59F5-4CF0-95B5-0565A9AF05CD"}
*/
function getParent() {
	return forms.commonComponentSamples;
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"AC4801CB-AA7F-436A-8C36-9367E9E1328D"}
*/
function getIconStyleClass() {
	return 'fa fa-image';
}

/**
*
* @return {String} Additioanl info (wiki markdown supported)
*
* @properties={typeid:24,uuid:"268617D1-3B55-4E8F-BB1B-49CD2E09DC27"}
*/
function getMoreInfo() {
	return plugins.http.getPageData('https://raw.githubusercontent.com/Servoy/servoy-extra-components/master/README.md')
}

/**
*
* @return {Array<String>} code lines
*
* @properties={typeid:24,uuid:"88A359B1-02FC-4E53-9904-8369D7A918EE"}
*/
function getSampleCode() {
	return printMethodCode(onAction_btnShowLightBox);
}

/**
*
* @return {String} Website URL
*
* @properties={typeid:24,uuid:"0E1A79AA-27B8-4642-A014-F94CF721FD34"}
*/
function getWebSiteURL() {
	return 'https://github.com/Servoy/servoy-extra-components/wiki';
}