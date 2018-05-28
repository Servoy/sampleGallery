customProperties:"formComponent:false",
dataSource:"db:/example_data/orders",
encapsulation:60,
items:[
{
json:{
badgeText:"0",
imageStyleClass:"fa fa-chevron-down pull-right",
location:{
x:144,
y:59
},
onAction:"F4C9039E-871B-485A-99A0-903E8F31B58E",
size:{
height:45,
width:134
},
styleClass:"btn-default btn-filter",
text:"Employees"
},
location:"144,59",
name:"badgeEmployee",
size:"134,45",
typeName:"bootstrapextracomponents-badge",
typeid:47,
uuid:"2907C3C2-EC67-4535-8D10-2319A09C2D0C"
},
{
json:{
badgeText:"0",
imageStyleClass:"fa fa-chevron-down pull-right",
location:{
x:277,
y:59
},
onAction:"8D85A72F-7E00-4BFF-BB73-41DE5F52C8CC",
size:{
height:45,
width:134
},
styleClass:"btn-default btn-filter",
text:"Countries"
},
location:"277,59",
name:"badgeCountry",
size:"134,45",
typeName:"bootstrapextracomponents-badge",
typeid:47,
uuid:"52D8AE52-3384-4630-B0AD-1B93E699121A"
},
{
anchors:11,
displaysTags:true,
location:"10,10",
size:"620,30",
styleClass:"label_header_1",
text:"Complete Order's Dashboard",
typeid:7,
uuid:"8AF9ADD8-8D0F-4386-BB9D-5D346C1A1F21"
},
{
anchors:3,
json:{
anchors:3,
location:{
x:553,
y:71
},
onActionMethodID:"B17EC59A-7C29-467A-8429-B3648952F028",
size:{
height:24,
width:68
},
styleClass:"text-success",
text:"<i class=\"fa fa-download\"><\/i> Export"
},
location:"553,71",
name:"label_15",
size:"68,24",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"95A9F2F3-43AA-484B-8857-E02B66965F79"
},
{
anchors:9,
json:{
anchors:9,
imageStyleClass:"fa fa-refresh",
location:{
x:405,
y:59
},
onActionMethodID:"3E79341A-9103-43B3-8174-8A73102524BC",
size:{
height:45,
width:134
},
styleClass:"btn btn-success",
text:"Apply"
},
location:"405,59",
name:"button_13",
size:"134,45",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"9A1624D9-CAF1-4DD4-9C6C-3DA9E1139302"
},
{
json:{
badgeText:"0",
imageStyleClass:"fa fa-chevron-down pull-right",
location:{
x:11,
y:59
},
onAction:"89662193-8E05-497B-9085-37C8E32DCAD7",
size:{
height:45,
width:134
},
styleClass:"btn-default btn-filter",
text:"Customers"
},
location:"11,59",
name:"badgeCustomer",
size:"134,45",
typeName:"bootstrapextracomponents-badge",
typeid:47,
uuid:"AAFF3049-983C-465E-8C49-107288FA8305"
},
{
anchors:15,
json:{
anchors:15,
columns:[
{
enableRowGroup:false,
id:"link",
styleClass:"font-icon fa fa-external-link-square",
svyUUID:"11E4517C-7561-419D-8AA9-07BAF9DE8B4A",
width:50
},
{
enableFilter:true,
enableRowGroup:false,
headerTitle:"Order",
id:"orderid",
svyUUID:"8BF3F70E-39A3-40F5-9E48-4A1C889A39FC",
width:80
},
{
enableFilter:true,
enablePivot:true,
headerTitle:"Customer",
id:"companyNameCalc",
svyUUID:"883D8768-4DF5-4B58-9439-A778D9D8C38A"
},
{
enableFilter:true,
enablePivot:true,
headerTitle:"Employee",
id:"employeeNameCalc",
svyUUID:"320BD118-F2CE-4E6E-8AE1-F7F59C3021C8"
},
{
enableFilter:true,
enablePivot:true,
headerTitle:"Delivery City",
id:"shipcity",
svyUUID:"4337565A-0E65-4E5F-981D-83B5045FC718"
},
{
enableFilter:true,
enablePivot:true,
headerTitle:"Delivery Country",
id:"shipcountry",
svyUUID:"DC08D2C8-0BF7-4F1C-AAD1-1ADC46AA34B4"
},
{
enableFilter:true,
enablePivot:true,
format:"yyyy",
formatType:"DATETIME",
headerTitle:"Year",
id:"orderdate",
svyUUID:"617B3F44-AFB5-40F1-AC62-CFC93357D3C7",
width:80
},
{
enableFilter:true,
enablePivot:true,
format:"MMM",
formatType:"DATETIME",
headerTitle:"Month",
id:"orderdate",
svyUUID:"BB5C2FD3-C8D3-43A0-AB27-E8D00A280FE7",
width:80
},
{
enableFilter:true,
enablePivot:true,
format:"dd-MM-yyyy",
formatType:"DATETIME",
headerTitle:"Order date",
id:"orderdate",
svyUUID:"5C14CF46-16B2-4D43-BF04-0CC60D5939A1"
},
{
enableFilter:true,
enablePivot:true,
headerTitle:"Status",
id:"orderStatus",
styleClass:"label-tag",
svyUUID:"3CFCADD1-F6EF-4226-B4AE-EE262484412E",
width:120
},
{
aggFunc:"max",
enableRowGroup:false,
format:"\u20ac #,###.00",
formatType:"NUMBER",
headerTitle:"Max Subtotal",
id:"order_total",
svyUUID:"4DEA5B85-A32B-4A58-B301-E658D481302D",
visible:false
},
{
aggFunc:"sum",
enableFilter:true,
enableRowGroup:false,
format:"\u20ac #,###.00",
formatType:"NUMBER",
headerTitle:"Subtotal",
id:"order_total",
svyUUID:"4CEE182E-4ED4-4FAD-8832-E0CDD354FF91"
}
],
iconConfig:{
svyUUID:"E29C5DA7-50A0-493D-9544-4C9099B667E6"
},
location:{
x:10,
y:138
},
onCellClick:"BA2AA1A9-9A3C-4115-A725-D251D7119590",
onLazyLoadingGetRows:null,
rowHeight:55,
size:{
height:322,
width:620
},
styleClass:null
},
location:"10,138",
name:"table",
size:"620,322",
typeName:"aggrid-datasettable",
typeid:47,
uuid:"CB858CE5-4165-42FC-877C-2D6E48A2C4DE"
},
{
height:480,
partType:5,
typeid:19,
uuid:"EC9BE843-B02A-4108-A945-2FEDC87688BA"
}
],
name:"ordersDashboard",
navigatorID:"-1",
onLoadMethodID:"943B2565-1792-4A41-8405-F1B1650FDFFD",
onShowMethodID:"CFE8B603-5861-4D93-B428-D848F3108CAF",
showInMenu:true,
typeid:3,
uuid:"433A4141-42D8-4FCB-9494-37854EF7F461"