/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"97B6F2FB-1B23-4059-962F-F3A693822B57"}
 */
var searchText = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C924568D-DC42-4F0C-9C1C-A4ECA3182E0D"}
 */
var textcompanyName;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8BE6AFD0-5954-4D8A-9C9F-13151E1F1BE1"}
 */
var textContactName;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5B50A6F4-B2B9-4AD1-BFFD-E241857DE3AA"}
 */
var textCountry;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E43188D8-EFE7-40A4-B89F-2BA98659D7A0"}
 */
var textCity;

/**
 * @properties={typeid:24,uuid:"506DE4FA-945E-4AE3-984B-181D395F4BB3"}
 */
function applyFilters() { }

/**
 * @protected
 *
 * @properties={typeid:24,uuid:"947B7D0E-F676-4DBE-B0C4-23553B82C3D2"}
 */
function onSearch() {
	applyFilters();
}

/**
 * @param {JSEvent} event
 * @protected
 *
 * @properties={typeid:24,uuid:"72EA1DC7-92E2-4425-A717-77239A032D73"}
 */
function onGlobalSearch(event) {
	application.output(searchText)
	if (searchText) {
		var search = scopes.svySearch.createSimpleSearch(foundset.getDataSource());
		search.addSearchProvider('companyname');
		search.addSearchProvider('contactname');
		search.setSearchText(searchText);
		var query = search.getQuery();
		foundset.loadRecords(query);
	} else {
		foundset.loadAllRecords()
	}
}

/**
 * Called whenever a menu item is clicked or a submenu item is selected with the JSEvent and the menuItem object clicked on.
 *
 * @param {JSEvent} event
 * @param {bootstrapextracomponents-navbar.menuItem} menuItem
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"5E4B1F4F-1D68-455D-9D80-388B59849B5F"}
 */
function onMenuItemClicked(event, menuItem) {
	// TODO Aut

	
	var wc = form.getWebComponent('mycomponent');
	wc.setHandler('onActionMethodID', form.getMethod('onAction'));
	
	
	var form = solutionModel.newForm('newForm1', myDatasource, null, true, 800, 600);
	var method = form.newMethod('function aMethod(event){application.output("Hello world!");}');
	var button = myListViewForm.newButton('Show message!', 50, 50, 100, 30, method);
	forms['newForm1'].controller.show();
}

/**
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"1318251D-F761-4B6A-9B85-ABA84F566F34"}
 */
function onFilterSearch(event) {
	
	var query = datasources.db.example_data.customers.createSelect();
	query.result.addPk()
	if (textcompanyName) {
		query.where.add(query.columns.companyname.upper.like("%" + textcompanyName.toUpperCase() +"%"));
	}
	if (textContactName) {
		query.where.add(query.columns.contactname.upper.like("%" + textContactName.toUpperCase() +"%"));
	}
	if (textCity) {
		query.where.add(query.columns.city.upper.like("%" + textCity.toUpperCase() +"%"));
	}
	if (textCountry) {
		query.where.add(query.columns.country.upper.like("%" + textCountry.toUpperCase() +"%"));
	}
	foundset.loadRecords(query)

}
