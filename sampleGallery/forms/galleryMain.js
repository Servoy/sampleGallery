/**
 * @private 
 * @type {String}
 * @properties={typeid:35,uuid:"4C94E620-F8D4-474F-83E3-59BC13F5DFB2"}
 */
var title = 'Welcome to MicroSamples';

/**
 * @private 
 * @properties={typeid:35,uuid:"1B44FA52-FF45-4089-9C89-5F79AB82312F",variableType:-4}
 */
var suppressMenuEvent = false;

/**
 * @private 
 * @properties={typeid:24,uuid:"2BB0DE65-2A70-47AD-AA3E-5730F6083A0D"}
 */
function buildMenu(){
	
	elements.nav.clearMenuItems();
	var parents = scopes.svyMicroSamples.getParentForms();
	for(var i in parents){
		createMenuItem(parents[i]);
	}	
}

/**
 * @private 
 * @param {RuntimeForm<AbstractMicroSample>} item
 *
 * @properties={typeid:24,uuid:"99B290AF-3597-4D1D-B812-D334CF1B964C"}
 */
function createMenuItem(item){
	
	// add item
	var parent = item.getParent();
	var parentName = !parent ? null : parent.controller.getName();
	elements.nav.addMenuItem({
		id: item.controller.getName(), 
		text:item.getName(), 
		iconStyleClass:'fa '+item.getIconStyleClass()+' svy-sidenav-font-icon'
	}, parentName);
	
	// recursively add children
	var children = scopes.svyMicroSamples.getChildren(item);
	for(var i in children){
		var child = children[i];
		createMenuItem(child);
	}
}

/**
 *
 * @param {String} menuItemId
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"26BAA020-52A7-46ED-B0CC-F0A1E8FE04E3"}
 */
function onMenuItemSelected(menuItemId, event) {
	suppressMenuEvent = true;
	var ret = showSample(menuItemId);
	suppressMenuEvent = false;
	return ret;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"696B263B-32A1-4978-A630-785906095510"}
 */
function onShow(firstShow, event) {
	if(firstShow){
		buildMenu();
	}
}

/**
 * @public 
 * @param {String} id
 * @return {Boolean}
 * @properties={typeid:24,uuid:"179AA8C9-DC13-473D-9B09-BCD08BA34BE3"}
 */
function showSample(id) {
	
	/** @type {RuntimeForm<AbstractMicroSample>} */
	var form = forms[id];
	if (!form) {
		application.output("Sample form with id `" + id + "` not found", LOGGINGLEVEL.ERROR);
		return false;
	} else {
		application.output("Sample form with id `" + id + "` selected", LOGGINGLEVEL.DEBUG);
	}

	if(!suppressMenuEvent) {
		if(scopes.svySystem.isNGClient()) {
			elements.nav.setSelectedMenuItem(id);
		}
	}
	
	/** @type {RuntimeForm<galleryContainerBase>} */
	var containerForm = getContainerForm();
	
	if(containerForm && containerForm.showSample(form)) {
		if (form.getName) {
			title = form.getName();
		}
		return true;
	} else {
		return false;
	}
	
}

/**
 * @public 
 * @properties={typeid:24,uuid:"FDED0A81-0988-438C-8E8D-CC375FCE803A"}
 */
function maximizeContent() {
	var containerForm = getContainerForm();
	containerForm.maximizeContent();
}

/**
 * @public 
 * @properties={typeid:24,uuid:"06325433-930B-4C7D-8CEA-326E260FF81B"}
 */
function minimizeContent() {
	var containerForm = getContainerForm();
	containerForm.minimizeContent();
}

/**
 * @protected 
 * @return {RuntimeForm<galleryContainerBase>}
 * @properties={typeid:24,uuid:"728DD0F1-B236-49B6-B9CB-0B5C4FC113CE"}
 */
function getContainerForm() {
	/** @type {RuntimeForm<galleryContainerBase>} */
	var containerForm = forms[elements.nav.containedForm];
	return containerForm;
}