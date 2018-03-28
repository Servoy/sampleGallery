/**
 * @properties={typeid:35,uuid:"C074E373-FC45-46CE-B1CD-CDCFE4EA2AC6",variableType:-4}
 */
var clusters1 = [{
		id: 111,
		text: 'Sub category 9',
		styleClass: "sn custom3",
		iconStyleClass: 'fa fa-shopping-basket',
		menuItems: [{
			id: 1111,
			text: "#Topic10#",
			styleClass: "sn custom4"
		}, {
			id: 1112,
			enabled: false,
			text: "#Topic11 very long very long text as trial#"
		}, 
		{
			isDivider: true
		},
		{
			id: 1113,
			text: "#Topic12 very long very long text as trial#"
		}]
	}, 
	{
		isDivider: true
	},
	{
		id: 112,
		enabled: false,
		iconStyleClass: 'fa fa-shopping-basket',
		text: "Sub category 13",
		menuItems: [{
			id: 1121,
			enabled: false,
			text: "#Topic14#"
		}, {
			id: 1122,
			text: "#Topic15#"
		}, {
			id: 1123,
			text: "#Topic16 very very very very long long#"
		}]
	}];

/**
 * @properties={typeid:35,uuid:"7E33E1E6-B75A-438F-A72A-FF6D29555FA1",variableType:-4}
 */
var clusters2 = [{
		id: 121,
		text: "Sub category 1",
		menuItems: [{
			id: 1211,
			text: "#Topic111#"
		}, {
			id: 1212,
			text: "#Topic112 very long very long text as trial#"
		}]
	}, {
		id: 122,
		text: "Sub category 2",
		menuItems: [{
			id: 1221,
			text: "#Topic114#"
		}, {
			id: 1222,
			text: "#Topic115#"
		}, {
			id: 1223,
			text: "#Topic116 very very long text very long#"
		}, {
			id: 1224,
			text: "#Topic117#"
		}, {
			id: 1225,
			text: "#Topic118#"
		}, {
			id: 1226,
			text: "#Topic119 very long#"
		}]
	}];


/**
 * @properties={typeid:35,uuid:"D998E2D6-4E72-4F6E-8264-E15A16308F5A",variableType:-4}
 */
var tree = [{
		id: 1,
		text: i18n.getI18NMessage('svy.extra.summary'),
		styleClass: "sn custom1",
		iconStyleClass: "fa fa-tripadvisor",
		data: { GroupTitle: "Summary1", GroupType: "level1" },
		menuItems: [{
			id: 11,
			text: "Category1",
			styleClass: "sn custom2",
			iconStyleClass: "fa fa-tags",
			menuItems : clusters1,
			data: { GroupTitle: "Category1", GroupType: "level2" }
		}, 
		{
			isDivider: true
		},
		{
			id: 12,
			text: "Category2 has a long text",
			iconStyleClass: "fa fa-tags",
			menuItems : clusters2,
			data: { GroupTitle: "Category2", GroupType: "level2" }
		}]
	}, 
	{
		isDivider: true
	},
	{
		id: 2,
		text: "Summary2",
		enabled: false,
		iconStyleClass: "fa fa-wordpress",
		data: { GroupTitle: "Summary2", GroupType: "level1" },
		menuItems: [{
			id: 21,
			text: "Category5",
			iconStyleClass: "fa fa-tags"
		}, {
			id: 22,
			text: "Category6",
			iconStyleClass: "fa fa-tags"
		}, {
			id: 23,
			text: "Category7",
			iconStyleClass: "fa fa-tags"
		}]
	}, {
		id: 3,
		text: "All",
		enabled: false,
		iconStyleClass: "fa fa-globe",
		data : {
			GroupTitle: "Summary3",
			GroupType: "level1"
		}
	}];

/**
 * @return {Array<servoyextra-sidenav.MenuItem>}
 * 
 * @properties={typeid:24,uuid:"8A964B30-0F80-4941-AE39-167818121F2C"}
 */
function generateMenu(parentid) {
	var prefix = "Menu Long Name"
	
	var menu = [];
	var m1 = 4;
	var m2 = 100;
	var m3 = 100;
	var m4 = 100;
	
	/** @type {servoyextra-sidenav.MenuItem} */
	var item;
	var id;
	for (var i = 1; i <= m1; i++) {
	 	id = parentid ? parentid + '-' + i : i + '';
		application.output(id);
		item = {
			id: id,
			text: prefix + id,
			iconStyleClass : 'fa fa-tags'
		}
		if (id && id.split('-').length < 4) {
			application.output(id)
			item.menuItems = generateMenu(id);
		}
		menu.push(item);
	}
	return menu;
}