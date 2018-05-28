/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D65834F5-3315-432B-A2CD-42641F46AEF0"}
 */
var searchText;

/**
 * @AllowToRunInFind
 * 
 *
 * @properties={typeid:24,uuid:"1FE5523D-D58D-4523-B262-74528E5BCBB3"}
 */
function search() {
	var fs = foundset.duplicateFoundSet();
	if (fs.find()) {
		fs.customerid = searchText;
		fs.search()
		foundset.loadRecords(fs);
	}
}
