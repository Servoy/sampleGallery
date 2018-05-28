/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CF1B7656-B8E4-47D2-9525-217B132B18E1"}
 */
var searchText = '';

/**
 * @AllowToRunInFind
 * 
 *
 * @properties={typeid:24,uuid:"C88ED36E-8667-49DC-AA80-0C48CA16ACF8"}
 */
function search() {
	var fs = foundset.duplicateFoundSet();
	if (fs.find()) {
		fs.city = '#%' + searchText +'%';
		fs.newRecord()
		fs.address = '#%' + searchText +'%';
		fs.search();
		foundset.loadRecords(fs);
	}
}
