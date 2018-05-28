/**
 * @protected *
 * @properties={typeid:35,uuid:"5F967637-ED00-44D0-92F0-81FA8961A688",variableType:-4}
 */
var filters = new Object();

/**
 * @type {JSDataSet}
 * @protected
 *
 * @properties={typeid:35,uuid:"4706D2D4-BEFE-4E0A-B34C-DFFD9E36810C",variableType:-4}
 */
var dataset;

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"C84A7110-2621-4E79-87C9-9745293309BE"}
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
 * @properties={typeid:24,uuid:"8B136C99-A68E-47A2-98B0-B8D880345E85"}
 */
function onShow(firstShow,event) {
	if (firstShow) {
		parseDataset();
	}
	elements.table.renderData(dataset);
}

/**
 * @private 
 * @properties={typeid:24,uuid:"33CAAEB7-8611-4B64-9C8B-78528F011D97"}
 */
function parseDataset() {
	var columns = elements.table.getAllColumns();
	var columnNames = [];
	for (var i = 0; columns && i < columns.length; i++) {
		columnNames.push(columns[i].id)
	}
	dataset = databaseManager.convertToDataSet(foundset, columnNames);
}

/**
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"BB370613-4752-4FE1-8E82-19E99DDCB738"}
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
 * @properties={typeid:24,uuid:"D602F8A3-2379-49B9-AFE2-B64ECABFE964"}
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
 * @properties={typeid:24,uuid:"774CF77E-DBB3-47E0-9866-E53E3A066C33"}
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
 * @properties={typeid:24,uuid:"639C81C9-4242-4BF0-AD4C-F12DBBD60535"}
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
 * @properties={typeid:24,uuid:"62B5901A-EF3F-4395-B8BD-2B2C277AC98D"}
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
 * @properties={typeid:24,uuid:"9BE091D7-1AEC-4188-B58D-6ABB58F6CA70"}
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
 * @properties={typeid:24,uuid:"67ABE102-8427-4969-8C45-E04F6E1D06A7"}
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
 * @properties={typeid:24,uuid:"91ABF13D-A486-4FBF-84BC-E8AE739412D7"}
 */
function applyFilters() {
	var query = foundset.getQuery();
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
	
	foundset.loadRecords(query);
	
	// refresh table
	refreshTable();
}

/**
 *
 * @properties={typeid:24,uuid:"BFB7A1EA-DFC4-48AA-A9A3-38573AE5BD47"}
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
 * @properties={typeid:24,uuid:"386254F9-2A3B-48E9-8D62-6E3526448B7C"}
 */
function onCellClick(rowData, columnId, cellData, event) {
	if (columnId == 'link' && rowData && rowData.orderid) {
		scopes.svyDataUtils.selectRecordByPks(foundset, rowData.orderid);
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
 * @properties={typeid:24,uuid:"FC72CBC4-ED36-4894-A5AB-350A20F03B86"}
 */
function showOrder(event) {
	forms.navMain.navigate(forms.orders, [{ dataProvider: 'customerid', operator: '=', value: customerid }], orderid, true);
}

/**
 * Called when lazy loading is used, and new rows are requested to display.
 *
 * @param {Number} startRow
 * @param {Number} endRow
 * @param {Array<aggrid-datasettable.columnVO>} rowGroupCols
 * @param {Array<aggrid-datasettable.columnVO>} valueCols
 * @param {Array<aggrid-datasettable.columnVO>} pivotCols
 * @param {boolean} pivotMode
 * @param {Array<string>} groupKeys
 * @param {Array<aggrid-datasettable.filterModelVO>} filterModels
 * @param {Array<aggrid-datasettable.sortModelVO>} sortModels
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"1F53DA01-C4E2-41FC-903B-437FAD53CDF9"}
 */
function onLazyLoadingGetRows(startRow, endRow, rowGroupCols, valueCols, pivotCols, pivotMode, groupKeys, filterModels, sortModels) {
	// build dinamic query based on sort/filter/grouping
	var query = databaseManager.createSelect(foundset.getDataSource());

	application.output(filterModels)

	// add dataset columns
	var columns = databaseManager.getTable(foundset.getDataSource()).getColumnNames();
	for (var i = 0; i < columns.length; i++) {
		query.result.add(query.getColumn(columns[i]), columns[i].toLowerCase());
	}

	// TODO shall we allow to set default sortModel ?
	for (i = 0; i < sortModels.length; i++) {
		var sortModelItem = sortModels[i];
		var columnSort = query.getColumn(sortModelItem.colId);
		if (sortModelItem.sort == "desc") {
			query.sort.add(columnSort.desc);
		} else {
			query.sort.add(columnSort.asc);
		}
	}

	if (filterModels) {
		var filterCondition = query.and;
		for (var j = 0; j < filterModels.length; j++) {
			var filter = filterModels[j];
			var colName = filter.id;
			var filterValue = filter.value;
			var filterType = filter.operator;

			var columnFilter = query.getColumn(colName);

			//var filter = filterModels[colName];

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
