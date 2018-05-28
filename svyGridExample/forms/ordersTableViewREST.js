/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"89E452B8-3D41-4A07-958D-DD9684568668"}
 */
var searchCustomers = '';

/**
 * @properties={typeid:24,uuid:"EF652619-F405-4F75-893E-A1EB3302032E"}
 */
function onLoad(event) {
	var columns = scopes.Orders.getTableColumns();
	elements.table.columns = columns;
	_super.onLoad(event)
}

/**
 * @properties={typeid:24,uuid:"64D9B1CC-65B1-41E3-819A-D5640292630F"}
 */
function onShow() {
	elements.table.renderData(dataset);
	updateUI();
}

/**
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"3FB5CFF2-1E82-4B68-AD69-404714AE420D"}
 */
function onFilterCompany(event) {

	// create lookup object
	var lookupObj = scopes.svyLookup.createLookup(datasources.db.example_data.customers.getDataSource());
	// add fields
	lookupObj.setLookupFormProvider(forms.svyLookupTableMulti);
	lookupObj.setLoookupDataprovider('customerid');
	lookupObj.addParam(event.getElementName());

	// related data is supported
	lookupObj.addField('companyname').setTitleText('Customer');

	lookupObj.showPopUp(onSelectFilter, elements[event.getElementName()], 400, 50, null);
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"779AC322-B111-46C3-A762-A646C9C2EBDF"}
 */
function onFilterEmployee(event) {

	// create lookup object
	var lookupObj = scopes.svyLookup.createLookup(datasources.db.example_data.employees.getDataSource());
	// add fields
	lookupObj.setLookupFormProvider(forms.svyLookupTableMulti);
	lookupObj.setLoookupDataprovider('employeeid');
	lookupObj.addParam(event.getElementName());

	// related data is supported
	lookupObj.addField('firstname').setTitleText('Name');
	lookupObj.addField('lastname').setTitleText('Lastname');

	lookupObj.showPopUp(onSelectFilter, elements[event.getElementName()], 400, 50, null);
}

/**
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"9EE0DE23-6095-41DD-B709-BDB1B58AC3AE"}
 */
function onFilterCountry(event) {
	//    // create lookup object
	//	var lookupObj = scopes.svyLookup.createLookup(datasources.db.example_data.orders.getDataSource());
	//	// add fields
	//	lookupObj.setLoookupDataprovider('shipcountry');

	var lookupObj = scopes.svyLookup.createValuelistLookup("customerCountries");
	lookupObj.setLookupFormProvider(forms.svyLookupTableMulti);
	lookupObj.addParam(event.getElementName());
	lookupObj.addParam('shipcountry');

	lookupObj.showPopUp(onSelectFilter, elements[event.getElementName()], 400, 50, null);
}

/**
 * @param {Array<JSRecord>} records
 * @param {Array} values
 * @param {scopes.svyLookup.Lookup} lookup
 *
 * @properties={typeid:24,uuid:"5C357E29-7977-4447-8C8A-D2F5AC639BC2"}
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
 * Called when lazy loading is used, and new rows are requested to display.
 *
 * @param {long} startRow
 * @param {long} endRow
 * @param {Array<aggrid-datasettable.columnVO>} rowGroupCols
 * @param {Array<aggrid-datasettable.columnVO>} valueCols
 * @param {Array<aggrid-datasettable.columnVO>} pivotCols
 * @param {boolean} pivotMode
 * @param {Array<string>} groupKeys
 * @param {object} filterModel
 * @param {object} sortModel
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"56046F12-73EB-46D6-897A-2CCD100C22D7"}
 */
function onLazyLoadingGetRows(startRow, endRow, rowGroupCols, valueCols, pivotCols, pivotMode, groupKeys, filterModel, sortModel) {
	// build dinamic query based on sort/filter/grouping
	var query = databaseManager.createSelect(foundset.getDataSource());

	application.output(filterModel)
	
	// add dataset columns
	var columns = databaseManager.getTable(foundset.getDataSource()).getColumnNames();
	for (var i = 0; i < columns.length; i++) {
		query.result.add(query.getColumn(columns[i]), columns[i].toLowerCase());
	}

	// TODO shall we allow to set default sortModel ?
	for (i = 0; i < sortModel.length; i++) {
		var sortModelItem = sortModel[i];
		var columnSort = query.getColumn(sortModelItem.colId);
		if (sortModelItem.sort == "desc") {
			query.sort.add(columnSort.desc);
		} else {
			query.sort.add(columnSort.asc);
		}
	}

	if (filterModel) {
		var filterCondition = query.and;
		for (var colName in filterModel) {

			var columnFilter = query.getColumn(colName);

			var filter = filterModel[colName];
			var filterValue = filter.filter;
			var filterType = filter.type;

			switch (filterType) {
			case "contains":

				filterValue = "%" + filterValue + "%";
				break;
			case "equals":
			default:
				break;
			}

			// go to lower case
			filterValue = filterValue.toLowerCase();
			filterCondition.add(columnFilter.lower.like(filterValue));
		}

		query.where.add(filterCondition);
	}

	if (rowGroupCols && rowGroupCols.length) {

		if (rowGroupCols.length > groupKeys.length) {
			query.result.clear();
			query.sort.clear();
		}

		for (i = 0; i < rowGroupCols.length; i++) {
			var rowGroup = rowGroupCols[i];
			var rowGroupKey = groupKeys[i];
			var columnGroup = query.getColumn(rowGroup.id);

			if (rowGroupKey) { // is a leaf
				// TODO handle column type (date)
				query.where.add(columnGroup.eq(rowGroupKey));
			} else { // is a group

				// FIXME should handle leaf
				query.result.add(columnGroup, rowGroup.id);

				query.groupBy.add(columnGroup);

				query.sort.add(columnGroup);
			}
		}
	}

	var size = endRow - startRow;

	// query with offset
	var sql = databaseManager.getSQL(query);
	var params = databaseManager.getSQLParameters(query) ? databaseManager.getSQLParameters(query) : [];
	sql += " offset ?";
	params.push(startRow);
	dataset = databaseManager.getDataSetByQuery("example_data", sql, params, size);
	var col = dataset.getColumnNames();
	for (i = 0; i < col.length; i++) {
		dataset.setColumnName(i + 1, col[i].toLowerCase());
	}
	// check if there is next row
	params[params.length - 1] = endRow + 1;
	var nextRow = databaseManager.getDataSetByQuery("example_data", sql, params, 1);
	var lastRowIndex = -1;
	if (nextRow.getMaxRowIndex() == 0) {
		lastRowIndex = startRow + dataset.getMaxRowIndex();
	}

	elements.table.appendLazyRequestData(dataset, lastRowIndex);

}
