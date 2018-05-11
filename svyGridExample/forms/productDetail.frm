customProperties:"formComponent:false",
dataSource:"db:/example_data/products",
encapsulation:60,
items:[
{
dataProviderID:"reorderlevel",
location:"210,150",
name:"reorderlevel",
size:"110,30",
text:"Reorder At",
typeid:4,
uuid:"247A4F95-7584-469B-AB62-EDDB4ECC9615"
},
{
labelFor:"unitsonorder",
location:"330,130",
name:"unitsonorder_label",
size:"110,20",
text:"On Order",
transparent:true,
typeid:7,
uuid:"27805810-A9EF-4765-AB53-02199D68534F"
},
{
labelFor:"productname",
location:"20,70",
name:"productname_label",
size:"170,20",
text:"Product Name",
transparent:true,
typeid:7,
uuid:"2E1359D1-C59A-41E0-821D-6C23322CF35B"
},
{
height:480,
partType:5,
typeid:19,
uuid:"54EB912C-6C5D-4CC5-ABCB-B81705BF0595"
},
{
anchors:11,
displaysTags:true,
location:"20,20",
size:"590,30",
styleClass:"label_header_2",
text:"Product Info",
typeid:7,
uuid:"5C6019E9-6E5B-4725-9299-4A07E744FB16"
},
{
labelFor:"reorderlevel",
location:"210,130",
name:"reorderlevel_label",
size:"110,20",
text:"Reorder At",
transparent:true,
typeid:7,
uuid:"5E151312-C42D-42A4-BBEF-03E59E95A928"
},
{
labelFor:"unitsinstock",
location:"330,70",
name:"unitsinstock_label",
size:"110,20",
text:"In Stock",
transparent:true,
typeid:7,
uuid:"600FEB8C-B4AB-46E4-BAE9-60B7A598173D"
},
{
dataProviderID:"discontinued",
displayType:4,
location:"210,210",
name:"discontinued",
size:"170,30",
text:"Discontinued",
transparent:true,
typeid:4,
uuid:"665FFC75-37B9-4B1A-A894-D8B463D25329"
},
{
anchors:11,
displaysTags:true,
location:"20,310",
size:"590,30",
styleClass:"label_header_2",
text:"Orders (%%products_to_order_details.maxRecordIndex%%)",
typeid:7,
uuid:"6F93FD1C-3233-4FEE-8069-1942835140D0"
},
{
dataProviderID:"categoryid",
location:"20,150",
name:"categoryid",
size:"170,30",
typeid:4,
uuid:"7C2139B4-74E1-4BC2-8FC9-F2585C9FDF7C",
valuelistID:"7DECD9D7-D260-4C14-863A-117C8A4DAD8A"
},
{
dataProviderID:"unitsonorder",
location:"330,150",
name:"unitsonorder",
size:"110,30",
text:"On Order",
typeid:4,
uuid:"7C4AD2EE-5EFC-4982-9CF4-BDFDB72D44AA"
},
{
dataProviderID:"unitsinstock",
location:"330,90",
name:"unitsinstock",
size:"110,30",
text:"In Stock",
typeid:4,
uuid:"92BE420F-801A-4C40-97F2-C8579D1B5B86"
},
{
anchors:15,
items:[
{
containsFormID:"AEBEB8FB-19DC-455A-9BEA-B9679BFB37A8",
location:"20,380",
relationName:"products_to_order_details",
text:"productOrdersGrid",
typeid:15,
uuid:"CEED9CF8-91AC-4F84-B673-68490FCD0AF8"
}
],
location:"20,350",
name:"tabs",
printable:false,
size:"590,120",
transparent:true,
typeid:16,
uuid:"94F9BAB9-924A-4228-8639-EE2463658578"
},
{
labelFor:"unitprice",
location:"210,70",
name:"unitprice_label",
size:"110,20",
text:"Unit Price",
transparent:true,
typeid:7,
uuid:"9F34F0AA-3679-4C70-A028-0A3FF4AEF6B3"
},
{
dataProviderID:"unitprice",
location:"210,90",
name:"unitprice",
size:"110,30",
text:"Unit Price",
typeid:4,
uuid:"A32DB1F2-F4E8-41C8-807F-6D2BE4D245B5"
},
{
labelFor:"supplierid",
location:"20,190",
name:"supplierid_label",
size:"170,20",
text:"Supplier",
transparent:true,
typeid:7,
uuid:"B17588B0-F6F7-4526-8672-5446531A1F12"
},
{
dataProviderID:"supplierid",
location:"20,210",
name:"supplierid",
size:"170,30",
typeid:4,
uuid:"B7436BAF-21D1-4CDE-961C-2C2EBCCD8401",
valuelistID:"73ED6631-E925-4C14-985B-6B97AB57A833"
},
{
location:"160,210",
name:"nav",
onActionMethodID:"9C247993-7AD2-4796-89BA-4479DE5208E9",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"30,30",
styleClass:"font-icon",
text:"<span class=\"fa fa-external-link-square\"/>",
transparent:true,
typeid:7,
uuid:"C60E33E6-7957-44F0-94A6-DDF605A8EA5F"
},
{
dataProviderID:"productname",
location:"20,90",
name:"productname",
size:"170,30",
typeid:4,
uuid:"C6B036A5-B397-4E2D-B58B-53127699A657"
},
{
labelFor:"categoryid",
location:"20,130",
name:"categoryid_label",
size:"170,20",
text:"Category",
transparent:true,
typeid:7,
uuid:"DA926A5F-6A44-4C77-97DA-A1E659599A97"
}
],
name:"productDetail",
showInMenu:true,
typeid:3,
uuid:"BEF3515F-8002-4611-A5C4-0FE947CC640F",
view:5