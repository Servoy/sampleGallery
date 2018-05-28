/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"6700C1E3-24BC-4EDD-9687-952BF5E3815E"}
 */
function onLoad(event) {
	initNav();
}

/**
 * @private 
 * @properties={typeid:24,uuid:"F6279E35-DCCF-4D2C-AECE-3CAB7CD8A74F"}
 */
function initNav(){
	
	
	/** @type {Array<servoyextra-sidenav.MenuItem>} */
	var items = [
		{
			id: 'home', 
			text:'Home', 
			iconStyleClass:'fa fa-home svy-sidenav-font-icon',
			data:{formName:'home'}
		},
		{
			id: 'dashboard', 
			text:'Complete Dashboard', 
			iconStyleClass:'fa fa-tachometer svy-sidenav-font-icon',
			data:{formName:'ordersDashboard'}
		},
		
		/*
		{
			id: 'dashboard-lazy', 
			text:'Lazy Dashboard', 
			iconStyleClass:'fa fa-tachometer svy-sidenav-font-icon',
			data:{formName:'ordersDashboardLazy'}
		},
		*/
		
		{
			id: 'dashboard-aggregated', 
			text:'Summarized Dashboard', 
			iconStyleClass:'fa fa-tachometer svy-sidenav-font-icon',
			data:{formName:'ordersDashboardAggregated'}
		},
		
		{divider:true, styleClass:'svy-sidenav-divider'},
		
		{
			id: 'customers', 
			text:'Customers', 
			iconStyleClass:'fa fa-users svy-sidenav-font-icon',
			data:{formName:'customers'}
		},
		{
			id: 'orders', 
			text:'Orders', 
			iconStyleClass:'fa fa-credit-card svy-sidenav-font-icon',
			data:{formName:'orders'}
		},
		{
			id: 'employees', 
			text:'Employees', 
			iconStyleClass:'fa fa-user svy-sidenav-font-icon',
			data:{formName:'employees'}
		},
		
		{divider:true, styleClass:'svy-sidenav-divider'},
		
		{
			id: 'products', 
			text:'Products', 
			iconStyleClass:'fa fa-shopping-bag svy-sidenav-font-icon',
			data:{formName:'products'}
		},
		{
			id: 'suppliers', 
			text:'Suppliers', 
			iconStyleClass:'fa fa-truck svy-sidenav-font-icon',
			data:{formName:'suppliers'}
		},
		{
			id: 'shippers', 
			text:'Shippers', 
			iconStyleClass:'fa fa-plane svy-sidenav-font-icon',
			data:{}
		}
//		,
//		{
//			id: 'addresses', 
//			text:'Addresses', 
//			iconStyleClass:'fa fa-address-card-o svy-sidenav-font-icon',
//			data:{formName:'agGridGroupingInfinite'}
//		}
	];
	
	elements.nav.setRootMenuItems(items);
	
	elements.nav.addMenuItem({divider:true, styleClass:'svy-sidenav-divider'});
	
	elements.nav.addMenuItem({
		id: 'settings', 
		text:'Settings', 
		iconStyleClass:'fa fa-gear  svy-sidenav-font-icon',
		data:{formName:'Settings'}
	});
	
	
	
	
	
	
	// Add filters for products
	var categories = application.getValueListItems('categories');
	for (var i = 1; i <= categories.getMaxRowIndex(); i++) {
		var categoryName = categories.getValue(i,1);
		var categoryID = categories.getValue(i,2);
		
		//	add menu item
		elements.nav.addMenuItem({
			id: 'category-'+categoryID,
			text:categoryName, 
			data:{
					formName:'products', 
					filters:[{dataProvider:'categoryid',operator:'=',value:categoryID}]
				}
		},'products');
	}
	
	// add suppliers individually
	var shippers = application.getValueListItems('shippers');
	for (var i = 1; i <= shippers.getMaxRowIndex(); i++) {
		var shipperName = shippers.getValue(i,1);
		var shipperID = shippers.getValue(i,2);
		
		//	add menu item
		elements.nav.addMenuItem({
			id: 'suppliers-'+shipperID,
			text:shipperName, 
			data:{formName:'shippers', pk:shipperID}
		},'shippers');
	}	
	
	navigate(forms.home,null,null,true);
}

/**
 *
 * @param {object} menuItemId
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"B983D111-0FEF-4589-8990-1BE5E08F35DF"}
 */
function onMenuItemSelected(menuItemId, event) {
	/** @type {{data:{formName:String,filters:Array<{dataProvider:String, operator:String, value:*}>,pk:Number}}} */
	var item = elements.nav.getMenuItem(menuItemId);
	if(item.data && item.data.formName){
		navigate(item.data.formName, item.data.filters, item.data.pk);
	}
	return true;
}

/**
 * @public 
 * @param {String|RuntimeForm} form
 * @param {Array<{dataProvider:String, operator:String, value:*}>} [filters]
 * @param {Number|String} [selectedPK]
 * @param {Boolean} [updateMenu] 
 * 
 * @properties={typeid:24,uuid:"9601B31B-F807-45DC-B152-ACC594F90EC0"}
 */
function navigate(form, filters, selectedPK, updateMenu){
	
	//	check form exists 
	if(form instanceof String){
		form = forms[form];
		if(!form){
			return;
		}
	}
	
	//	add tab
	//elements.tabs.removeAllTabs();
	//elements.tabs.addTab(form);
	elements.nav.containedForm = form;
	
	//	apply filters
	var filterName = 'filters'; 
	form.foundset.removeFoundSetFilterParam(filterName);
	if(filters){
		for(var i in filters){
			if(!form.foundset.addFoundSetFilterParam(filters[i].dataProvider,filters[i].operator,filters[i].value, filterName)){
				application.output('Failed to addd filter: ' + filters[i],LOGGINGLEVEL.WARNING);
			}
		}
		form.foundset.loadAllRecords();
	}
	
	//	apply selection
	if(selectedPK){
		form.foundset.selectRecord(selectedPK);
	}
	
	//	update menu
	if(updateMenu){
		var id = form.controller.getName().toLowerCase();
		elements.nav.setSelectedMenuItem(id, false);
	}
}
