/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4D5390AB-CF98-44CC-927A-35FCBE086063",variableType:8}
 */
var actionIndex = null;

/**
 * @type {Array<servoyextra-sidenav.MenuItem>}
 * @properties={typeid:35,uuid:"89C8EFF3-A416-4640-8AF2-038DC89A327A",variableType:-4}
 */
var tree = scopes.sidenav.tree;

/**
 * @properties={typeid:35,uuid:"F809E65F-58E2-44C9-B251-189401612592",variableType:-4}
 */
var nav;


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CEA8BD73-4EB1-4ECE-BA46-2E6DE1753EDF",variableType:4}
 */
var indexLevel = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"79FE90D8-1347-4394-84A4-20C2DD590AA6",variableType:8}
 */
var level = null;

/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"ADAD77CF-7608-43A9-ABB3-191982DD755F",variableType:-4}
 */
var mustExecuteOnSelect = null;

/**
 * @type {Boolean}
 * 
 * @properties={typeid:35,uuid:"1FD4092D-4EB3-40D7-8F56-3178CBAF8CB1",variableType:-4}
 */
var dynamicMenu = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2B14DA53-D327-4CFD-BF28-21A94F948586",variableType:8}
 */
var selectedId = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5DE4E64D-505C-4EC8-A36B-6A18E0B9A50D"}
 */
var selectedTopicTitle = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B2F80C29-949F-4FAC-995F-B4F007EC2D7D",variableType:4}
 */
var showDialog;

/**
 * @properties={typeid:35,uuid:"03D8052A-4F16-4991-9963-91288F346987",variableType:-4}
 */
var toggle = true;

/**
 * @type {Object}
 *
 * @properties={typeid:35,uuid:"771EB63B-9E71-48F9-BED8-D7F8F805D60E",variableType:-4}
 */
var nodeMapping;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1C018374-8F04-4F87-A89B-0A1B4B707D10"}
 */
var selectedIndex = '0';

/**
 * store errors
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"46710ACF-42E8-4DCB-911C-4BD1A1A827BF",variableType:-4}
 */
var errors = [];

/**
 * use counter to add new topics
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"17F09A9E-A4D7-4DC0-9F6F-4A7D93750F86",variableType:4}
 */
var idCounter = 2000;


/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"B37A3BD2-5F51-4092-BFBF-6E97D3311D89"}
 */
function onLoad(event) {	
	
	nav = elements.side_Navigation_2;
	nodeMapping = {
		Category1: scopes.sidenav.clusters1,
		Category2: scopes.sidenav.clusters2,
		Category3: scopes.sidenav.clusters2,
		Category4: scopes.sidenav.clusters1,
		Category5: scopes.sidenav.clusters2

	}

	// TODO Auto-generated method stub
	//elements.side_Navigation_2.menu = tree;

	nav.setRootMenuItems(tree);
	tree = nav.menu;
		
	elements.sidenav_stress.menu = scopes.sidenav.generateMenu(null);
	elements.formcomponent_1.containedForm.sidenav.menu = scopes.sidenav.generateMenu(null);
	elements.formcomponent_1.containedForm.sidenav_right.menu = scopes.sidenav.generateMenu(null);
	
	/** @type {servoyextra-sidenav.MenuItem}  */
	var item = {
		id: "1",
		text: "text"
	}
	
	nav.addMenuItem(item);
	
	
}

/**
 *
 * @param {servoyextra-sidenav.MenuItem} selectedNodeId
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"3D18E81B-EAD1-4C49-BBC9-903B91194C15"}
 */
function onSelectedNode(selectedNodeId, event) {
	
	//selectedNode.text = "nothing happens here"
	//selectedNode.styleClass = "red-item"
	
	var element = elements[event.getElementName()]
	var selectedNode = element.getMenuItem(selectedNodeId);
	
	
	// selectedNode.text = "text is updated now"
	// selectedNode.styleClass = "red-item"
		
		
//	var menu = elements.side_Navigation_2.getMenuItem(1);
//	var m = elements.side_Navigation_2.getMenuItem('1')
//	var m = elements.side_Navigation_2.menu[0];
//
//	application.output(selectedNode);
//	application.output(event);
	plugins.webnotificationsToastr.info("SELECT " + selectedNode.text, event.getElementName());


	if (showDialog) {
		var q = plugins.dialogs.showQuestionDialog('Change menu', 'Do you want to change menu', 'yes', 'no');
		toggle = q == 'yes';
	}

	// Questions: delete the previous Tree structure ?

//	if (dynamicMenu && selectedNode.data && selectedNode.data.GroupType === 'Category') {
//		if (nodeMapping[selectedNode.data.GroupTitle]) {
//			elements.side_Navigation_2.removeAllMenuItemsAtDepth(2); // clear all other nodes;
//			elements.side_Navigation_2.setSubMenuItems(selectedNode.id, nodeMapping[selectedNode.data.GroupTitle]) // add the new node;
//		}
//	}
	return toggle;
}

/**
*
* @param {svyextasidenav.menuItem} menuItem
* @param {JSEvent} event
*
* @protected
*
* @properties={typeid:24,uuid:"98910F39-FFDA-4DA1-BB91-F4F6C751087C"}
*/
function onMenuItemExpanded(menuItemId, event) {
	// TODO Auto-generated method stub
	var menuItem = nav.getMenuItem(menuItemId);
//	menuItem.text = menuItem.text + "-expanded";
	plugins.webnotificationsToastr.info("EXPAND " + menuItem.text, event.getElementName());
}

/**
*
* @param {menuItem} menuItemId
* @param {JSEvent} event
*
* @protected
*
* @properties={typeid:24,uuid:"38D88694-FC15-4695-97D4-91EBD704CFA4"}
*/
function onMenuItemCollapsed(menuItemId, event) {
	var menuItem = nav.getMenuItem(menuItemId);
	menuItem.text = menuItem.text.replace("-expanded" , "");
	plugins.webnotificationsToastr.info("COLLAPSE " + menuItem.text, event.getElementName());
}

/**
 * @protected 
 * @properties={typeid:24,uuid:"72D55DCA-E1FF-4134-AAEF-0808969B402E"}
 */
function getIndexPath() {
	if (selectedIndex) {
		return selectedIndex.split(',');
	} else {
		return null;
	}
}

/**
 * @properties={typeid:24,uuid:"20F76900-759F-4DA0-B146-6D224BFF87D4"}
 */
function getNodeByPath() {
	// TODO implement
}

/**
 * @return {servoyextra-sidenav.MenuItem}
 * @properties={typeid:24,uuid:"190473E6-A27B-48AB-8B48-2825220F9B8F"}
 */
function getNewNode() {
	 var item = {
		id: idCounter,
		text: "Item" + idCounter
	}
	idCounter++;
	return item;
}

/**
 *
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"7FF7FD2E-7603-402F-8E1F-B9669DEACD33"}
 */
function setIndex(event) {
	if (selectedIndex) {
		var indexes = selectedIndex.split(',');
		if (dynamicMenu && indexes.length == 2) {
			elements.side_Navigation_2.removeAllMenuItemsAtDepth(2); // clear all other nodes;
			elements.side_Navigation_2.setSubMenuItemsByIndexPath(indexes, scopes.sidenav.clusters1); // add the new node;
		}
		var success = elements.side_Navigation_2.setSelectedByIndexPath(indexes, mustExecuteOnSelect)
		application.output(success)
		if (success) {
			plugins.webnotificationsToastr.success("Selection changed");
		} else {
			plugins.webnotificationsToastr.warning("Could not change selection");
		}
	}
}

///**
// * @properties={typeid:24,uuid:"9AD09B56-018A-4065-9609-A53A20A20693"}
// */
//function updateErrors() {
//	errors = [];
//	var error1 = {
//		clusterName: "ClusterMaternalWellBeing",
//		message: "##BloodPressure.Diastolic# should be a numeric value#"
//	}
//
//	errors.push(error1);
//
//	var error2 = {
//		clusterName: "Topic10",
//		message: "##BloodPressure.Diastolic# should be a numeric value#"
//	}
//
//	errors.push(error2);
//
//	var error3 = {
//		clusterName: "Topic12",
//		message: "##BloodPressure.Diastolic# should be a numeric value#"
//	}
//
//	errors.push(error3);
//
//	elements.side_Navigation_2.updateErrorFeedback(errors);
//
//}
//
///**
// * @properties={typeid:24,uuid:"9A9E25E5-5ADA-4BB6-BC63-ECDD5D76706C"}
// */
//function updateErrors2() {
//	errors = [];
//	var error1 = {
//		clusterName: "ClusterMaternalWellBeing",
//		message: "##BloodPressure.Diastolic# should be a numeric value#"
//	}
//
//	errors.push(error1);
//
//	var error2 = {
//		clusterName: "Topic11",
//		message: "##BloodPressure.Diastolic# should be a numeric value#"
//	}
//
//	errors.push(error2);
//
//	elements.side_Navigation_2.updateErrorFeedback(errors);
//}
//
///**
// * @properties={typeid:24,uuid:"A561C744-9013-4682-BDED-A617EFDD9F71"}
// */
//function clearErrors() {
//	errors = [];
//
//	elements.side_Navigation_2.updateErrorFeedback(errors);
//}

/**
 *
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 * @deprecated 
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"75DAD836-5046-4511-9219-419CF910ED8D"}
 */
function onDataChangeTopicTitle(oldValue, newValue, event) {
	if (newValue) {
		var success = elements.side_Navigation_2.setSelectedByTitle(selectedTopicTitle, 4);
		application.output(success)
		if (success) {
			plugins.webnotificationsToastr.success("Selection changed");
		} else {
			plugins.webnotificationsToastr.warning("Could not change selection");
		}
	}
	return false;
}

/**
 *
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"561885CE-E517-4411-9927-8BC1BCB17900"}
 */
function onDataChangeSelectedId(oldValue, newValue, event) {
	if (selectedId || selectedId == 0) {
		var success = nav.setSelectedMenuItem(selectedId, mustExecuteOnSelect, mustExecuteOnSelect, indexLevel);
	}
	application.output(success)
	if (success) {
		plugins.webnotificationsToastr.success("Selection changed");
	} else {
		plugins.webnotificationsToastr.warning("Could not change selection");
	}
	return false;
}

/**
 * @param idType
 * 
 * @return {Object}
 *
 * @properties={typeid:24,uuid:"FCBE7E3B-DD56-460F-A9DD-35C667D086B0"}
 */
function getIdVar(idType) {
	if (idType == 'string') {
		return selectedIndex;
	} else {
		return selectedId;
	}
}

/**
 *
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"CFC1A395-84A2-41C2-A869-5AECC95B9D1D"}
 */
function onGetSelectedNode(event) {
	// TODO Auto-generated method stub

	// var node = elements.side_Navigation_2.getSelectedNode(4);
	var node = nav.getSelectedMenuItem(indexLevel);
	if (node) {
		plugins.webnotificationsToastr.info(node.id + ' - ' + node.text);
	}
}

/**
 *
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"5D201AC7-3813-4B64-B616-D2200596B180"}
 */
function onClearLevel(event) {
	if (level || level == 0) {
		nav.removeAllMenuItemsAtDepth(level)
	}
}

/**
 *
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"394C9E0F-43B7-484D-AA00-4D1BD3EE425A"}
 */
function toggleEnabled(event) {
	nav.enabled = !nav.enabled;
	//elements.side_Navigation_2.menu.push(item)
}


/**
 * @param event
 * @param idType
 *
 * @properties={typeid:24,uuid:"5DE3E683-1347-43C8-A6A3-868F94797AFC"}
 */
function onAddNodeById(event, idType) {
	var item = getNewNode();
	var id = getIdVar(idType);
	nav.addMenuItem(item, id, actionIndex);
}

/**
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"9A684063-7A20-43D8-B6CD-7C3FD2AD126A"}
 */
function onAddNodeByPath(event) {
	var path = getIndexPath();
	if (path) {
		var node = tree;
		var item = getNewNode();
		for (var i = 0; i < path.length-1; i++) {
			node = node[path[i]];
		}
		node.menuItems ? node.menuItems.push(item) : node.menuItems = [item];
	}
}


/**
 * @param event
 * @param idType
 *
 * @properties={typeid:24,uuid:"D05E6888-7D75-49AD-80E3-C1188C2D9AAC"}
 */
function onRemoveNodeById(event, idType) {
	var id = getIdVar(idType);
	nav.removeMenuItem(id);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"5C46E8C3-D055-4045-A5B1-9953323C44F3"}
 */
function onRemoveNodeByPath(event) {
	// TODO to be implemented
}

/**
 *
 * @param {JSEvent} event
 * @param idType
 *
 * @properties={typeid:24,uuid:"AB25EB6F-B976-4DEE-84E2-8866BE8BDDA3"}
 */
function onToggleEnabledById(event, idType) {
	var id = getIdVar(idType);
	var node = nav.getMenuItem(id)
	nav.setMenuItemEnabled(selectedId, !node.enabled);
}

/**
 *
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"995678A5-19B5-42D6-9BE9-47B46A48BA2A"}
 */
function onToggleEnabledByPath(event) {
	// TODO Auto-generated method stub

}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"C97BF569-9627-46F4-AC5D-CE38C1FD9175"}
 */
function todo(event) {
	
}

/**
 *
 * @param {JSEvent} event
 * @param idType
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"3099ADDE-4BD8-4729-B8A2-EC3E67C7DA6E"}
 */
function onRemoveSubNodesById(event, idType) {
	var id = getIdVar(idType);
	nav.removeSubMenuItems(id)
}

/**
 *
 * @param {JSEvent} event
 * @param idType
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"6206CAC4-B846-4C96-8999-8982539F89F1"}
 */
function onExpandNodeById(event, idType) {
	var id = getIdVar(idType);
	nav.setMenuItemExpanded(id, true, mustExecuteOnSelect);
}

/**
 * @param event
 * @param idType
 *
 * @properties={typeid:24,uuid:"FA62AB31-2CB2-4554-9155-B054D3A7203C"}
 */
function onCollapseNodeById(event, idType) {
	var id = getIdVar(idType);
	nav.setMenuItemExpanded(id, false, mustExecuteOnSelect);
}


/**
 *
 * @param {JSEvent} event
 * @private 
 *
 * @properties={typeid:24,uuid:"4D6BE6E5-7489-4DD4-A4AB-FDE14E4B71FB"}
 */
function btnInitBigTree(event) {
	elements.sidenav_stress.setRootMenuItems(scopes.sidenav.generateMenu(null));
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"B1344916-7181-4798-A2C3-B7B9FF0765CF"}
 */
function btnSmallTree(event) {
	nav = elements.side_Navigation_2;
	elements.btnSmallTree.addStyleClass("btn-primary");
	elements.btnBigTree.removeStyleClass("btn-primary");
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"B11F8F96-EF8B-454D-8E48-845707835B11"}
 */
function btnBigTree(event) {
	nav = elements.sidenav_stress;
	elements.btnBigTree.addStyleClass("btn-primary");
	elements.btnSmallTree.removeStyleClass("btn-primary");
}

/**
 *
 * @param {JSEvent} event
 * @param {String} idType
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"649EF1DF-5963-4C6C-B56F-74AD2A5DF246"}
 */
function onIsNodeEnabled(event, idType) {
	var id = getIdVar(idType);
	plugins.webnotificationsToastr.info("Is Enabled", nav.isMenuItemEnabled(id));
}


/**
 *
 * @param {JSEvent} event
 * @param {String} idType
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"B6ADF0E4-5438-49C8-A3D7-0D7D0EE590F2"}
 */
function onIsNodeExpanded(event, idType) {
	var id = getIdVar(idType);
	plugins.webnotificationsToastr.info("Is Enabled", nav.isMenuItemExpanded(id));
}

/**
 *
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"BF8B7BAE-80DE-4B5D-A716-BAD77B4200DF"}
 */
function onSlideIn(event) {
	plugins.webnotificationsToastr.info("Slide menu was open", nav.open);
	nav.open = true;
}


/**
 * @param event
 *
 * @properties={typeid:24,uuid:"9AEDEE79-19BB-4BFA-864C-1656D5C74176"}
 */
function onSlideOut(event) {
	plugins.webnotificationsToastr.info("Slide menu was open", nav.open);
	nav.open = false;
}

/**
 *
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"92C024C4-B157-4881-BCEC-2652994482CC"}
 */
function onOpenToggled(event) {
	plugins.webnotificationsToastr.info("Slide menu is now " + event.getElementName() + ' ' + elements.side_Navigation_2.open);
}
