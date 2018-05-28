/**
 * @protected *
 * @properties={typeid:35,uuid:"9E5C1173-E251-4C68-B76F-540ABB9E1A5D",variableType:-4}
 */
var filters = new Object();

/**
 * @type {JSDataSet}
 * @protected
 *
 * @properties={typeid:35,uuid:"631EB007-F946-4B0B-9AB3-4B2E57E52FD2",variableType:-4}
 */
var dataset;

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"FFE852F1-0B1B-4BA3-8733-84B06600E482"}
 */
function onLoad(event) {
	var colStatus = elements.table.getColumn('orderStatus');
	if (colStatus) {
		colStatus.cellStyleClassFunc = "(" + scopes.svySystem.printMethodCode(getStatusColor).join("") + ")";
		colStatus.cellRendererFunc = "(" + scopes.svySystem.printMethodCode(cellRenderTag).join("") + ")";
	}

}

/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"FDEBF621-8AA8-4674-8FC5-D85E672CCC44"}
 */
function onShow(firstShow,event) {
	if (firstShow) {
		parseDataset();
	}
	elements.table.renderData(dataset);
}

/**
 * @private 
 * @properties={typeid:24,uuid:"D75F4495-62DE-43F7-B229-6B1760A21B62"}
 */
function parseDataset() {
	/** @type {QBSelect<db:/example_data/orders>} */
	var query = databaseManager.createSelect(foundset.getDataSource());
	
	var joinOrderDetails = query.joins.orders_to_order_details;
	var joinOrderEmployees = query.joins.orders_to_employees;

	query.result.add(query.columns.shipcountry);
	query.result.add(query.columns.shipcity);
	query.result.add(query.columns.shipname);
	query.result.add(query.columns.orderdate.year, 'year');
	query.result.add(query.columns.orderdate.month, 'month');
	query.result.add(joinOrderEmployees.columns.employeeid);
	query.result.add(joinOrderEmployees.columns.firstname.concat(' ').concat(joinOrderEmployees.columns.lastname), 'employee');
	query.result.add((joinOrderDetails.columns.unitprice.multiply(joinOrderDetails.columns.quantity)).sum, 'order_total');
	query.result.add((joinOrderDetails.columns.unitprice.multiply(joinOrderDetails.columns.quantity)).max, 'order_total_max');

	
	query.groupBy.add(query.columns.shipcountry);
	query.groupBy.add(query.columns.shipcity);
	query.groupBy.add(query.columns.shipname);
	query.groupBy.add(query.columns.orderdate.year);
	query.groupBy.add(query.columns.orderdate.month);
	query.groupBy.add(joinOrderEmployees.columns.employeeid);
	query.groupBy.add(joinOrderEmployees.columns.firstname);
	query.groupBy.add(joinOrderEmployees.columns.lastname);


	query.where.clear();

	var where = query.where;

	for (var param in filters) {
		if (filters[param].length) {
			var values = filters[param];
			if (values && values.length) {
				where.add(query.getColumn(param).isin(values));
			}
		}
	}
		


	dataset = databaseManager.getDataSetByQuery(query,-1);
}

/**
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"551BA8C5-1E19-471E-AF62-36A430F00207"}
 */
function onActionExport(event) {
	elements.table.exportData();
}

/**
 * @param rowIndex
 * @param rowData
 * @param field
 * @param columnData
 * @param event
 *
 * @properties={typeid:24,uuid:"F9E0B555-7A0E-4436-81D5-522DD27C8884"}
 */
function cellRenderTag(rowIndex, rowData, field, columnData, event) {
	return columnData ? '<span>' + columnData + '</span>' : ''
}

/**
 * @param rowIndex
 * @param rowData
 * @param field
 * @param columnData
 * @param event
 *
 * @properties={typeid:24,uuid:"21CCB065-87DE-4342-9430-61256630654F"}
 */
function getStatusColor(rowIndex, rowData, field, columnData, event) {
	if (rowData) {
		switch (rowData.orderStatus) {
		case "New Order":
			return "label-tag text-info";
			break;
		case "Completed":
			return "label-tag text-success";
			break;
		case "Planned":
			return "label-tag text-info";
			break;
		default:
			return "label-tag";
			break;
		}
	}
	return "";
}

/**
 * @param {JSEvent} event
 *
 * @protected
 *
 *
 * @properties={typeid:24,uuid:"C1508CC4-5ADF-4BED-89AD-F3AE2A3CFDE3"}
 */
function onFilterCompany(event) {
	
    // create lookup object
	var lookupObj = scopes.svyLookup.createLookup(datasources.db.example_data.customers.getDataSource());
	// add fields
	lookupObj.setLookupFormProvider(forms.svyLookupTableMulti);
	lookupObj.setLookupDataprovider('customerid');
	lookupObj.addParam(event.getElementName());

	// related data is supported
	lookupObj.addField('companyname').setTitleText('Customer');
	
	lookupObj.showPopUp(onSelectFilter,elements[event.getElementName()], 400, 50,null);
}

/**
 * @param event
 *
 *
 * @properties={typeid:24,uuid:"B2622E94-EF99-4FB7-9575-40DEA7BCB367"}
 */
function onFilterEmployee(event) {
	
    // create lookup object
	var lookupObj = scopes.svyLookup.createLookup(datasources.db.example_data.employees.getDataSource());
	// add fields
	lookupObj.setLookupFormProvider(forms.svyLookupTableMulti);
	lookupObj.setLookupDataprovider('employeeid');
	lookupObj.addParam(event.getElementName());
	
	// related data is supported
	lookupObj.addField('firstname').setTitleText('Name');
	lookupObj.addField('lastname').setTitleText('Lastname');
	
	lookupObj.showPopUp(onSelectFilter,elements[event.getElementName()], 400, 50,null);
}

/**
 * @param {JSEvent} event
 *
 * @protected
 *
 *
 * @properties={typeid:24,uuid:"6D6BC580-0A1D-4DF0-A09C-E4E0B1215E56"}
 */
function onFilterCountry(event) {
    // create lookup objecy
	var lookupObj = scopes.svyLookup.createValuelistLookup("ordersCountries");
	lookupObj.setLookupFormProvider(forms.svyLookupTableMulti);
	lookupObj.addParam(event.getElementName());
	lookupObj.addParam('shipcountry');

	lookupObj.showPopUp(onSelectFilter,elements[event.getElementName()], 400, 50,null);
}

/**
 * @param {Array<JSRecord>} records
 * @param {Array} values
 * @param {scopes.svyLookup.Lookup} lookup
 * @protected 
 *
 * @properties={typeid:24,uuid:"2987B8BD-F4BB-44A1-BBA1-DEFB43CC3FD1"}
 */
function onSelectFilter(records, values, lookup) {
	
	var params = lookup.getParams();
	var lookupProvider = params[1] ? params[1] : lookup.getLookupDataprovider();
	
	var length = values.length;
	if (length) { // filter on the returned values
		filters[lookupProvider] = values;	
	} else { // no value selected, remove filters
		delete filters[lookupProvider];
	}
	elements[params[0]].badgeText = "" + length;
}

/**
 * @protected 
 *
 * @properties={typeid:24,uuid:"FCF6097C-D7FD-4C27-A5C9-3A542C337667"}
 */
function applyFilters() {	
	// refresh table
	refreshTable();
}

/**
 *
 * @properties={typeid:24,uuid:"FF241CFB-BEF6-4046-AEF3-30A14D3FF6F8"}
 */
function refreshTable() {
	parseDataset();
	elements.table.renderData(dataset);
}

/**
 * Called when the mouse is clicked on a row/cell.
 *
 * @param {object} rowData
 * @param {string} [columnId]
 * @param {object} [cellData]
 * @param {JSEvent} [event]
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"B0E3E4CD-5389-4907-BF20-5BEB528E4722"}
 */
function onCellClick(rowData, columnId, cellData, event) {
	var state = JSON.parse(elements.table.getColumnState());
	application.output(state)
	application.output(rowData)
	
	
	if (columnId == 'link') {
		
		var filter =[];
		for (var i = 0; state.columnState && i < state.columnState.length; i++) {
			var groups = [];
			var col = state.columnState[i];
			if (col.rowGroupIndex != null && col.rowGroupIndex != -1) {
				groups[col.rowGroupIndex] = col.colId;
				// TODO support filter on year
				var colFilter;
				switch (col.colId) {
					case "employee":
						colFilter = "employeeid";
						break;
					default:
						colFilter = col.colId
				}
				
				filter.push({dataProvider: colFilter, operator : '=', value: rowData[colFilter]});
			}
		}
		application.output(filter)
		forms.navMain.navigate(forms.orders, filter, null, true);		
		showOrder(event);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"419F7A2B-C5E5-4B6E-9B2A-F8414D398C92"}
 */
function showOrder(event) {
}
