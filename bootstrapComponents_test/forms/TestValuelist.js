/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3945B7F1-DEC8-4AE1-B5F2-A4398B1ED0EE"}
 */
var textaread = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5E5C7245-E682-4303-8921-854605AFD4FF"}
 */
var test = "sample"
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"C601F2F0-E82E-461C-8D79-7385C6F6E6B3"}
 */
function showSelect(event) {
	elements.select_1.visible = !elements.select_1.visible;
	elements.select_1c.visible = !elements.select_1c.visible;

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"18B42C7E-25BF-470C-BCB1-1A259A4D5879"}
 */
function showCombo(event) {
	elements.combobox1.visible = !elements.combobox1.visible;
	elements.combobox2.visible = !elements.combobox2.visible;
}
