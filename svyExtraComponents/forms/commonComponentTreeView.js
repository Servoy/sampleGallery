/**
 * @properties={typeid:24,uuid:"1759022B-7090-40E4-A509-1EDDC81BA9EE"}
 */
function allowFormIncludedInMenu() {
	return true;
}

/**
* @protected 
* @return {RuntimeForm<AbstractMicroSample>}
* @override 
* @properties={typeid:24,uuid:"1A8F2681-04D1-4406-9F83-826394B8DAEF"}
*/
function getParent() {
	return forms.commonComponentSamples;
}

/**
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"7D12831E-99C4-4E8C-A3B5-FB57C2D352EB"}
 */
function getName() {
	return 'TreeView';
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"8F035173-E711-4BF6-87DC-2863C909DA14"}
*/
function getDescription() {
	return 'Tree View components'
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"CEAA8D7D-0C09-4C12-8F09-DDB180BF0666"}
*/
function getIconStyleClass() {
	return 'fa fa-tree';
}

/**
* @protected 
* @return {String} The sort order, i.e. 1, 1.1, 1.1.2
*
* @properties={typeid:24,uuid:"D95EB821-6840-4F58-A4AA-4FD92FFA8B4F"}
*/
function getSort() {
	return '4';
}
