/**
 * @properties={type:12,typeid:36,uuid:"281F45EF-3BF9-4DD6-A618-4BC0ADAE9837"}
 */
function companyNameCalc() {
	return orders_to_customers.companyname;
}


/**
 * @properties={typeid:36,uuid:"CF82637D-B762-4E07-B998-0932BD817B11"}
 */
function employeeNameCalc() {
	if (orders_to_employees) {
		return orders_to_employees.firstname + ' ' + orders_to_employees.lastname;
	}
}