customProperties:"formComponent:false",
dataSource:"db:/example_data/order_details",
extendsID:"340D5D9F-5E6A-4E20-B3F6-E211FEB7D1A9",
items:[
{
customProperties:"methods:{\
onCellClick:{\
arguments:null,\
parameters:null\
}\
}",
extendsID:"295D3A28-57BC-4691-B864-3C93E5C4C461",
json:{
columns:[
{
dataprovider:"unitprice",
editType:"TEXTFIELD",
edityType:"NONE",
enableRowGroup:true,
enableSort:true,
format:null,
headerStyleClass:null,
headerTitle:"Price",
rowGroupIndex:-1,
styleClass:null,
svyUUID:"DE98C72F-D78F-4BC1-AF47-3EA79E2FE837",
visible:true
},
{
dataprovider:"discount",
editType:"TEXTFIELD",
edityType:"NONE",
enableRowGroup:true,
enableSort:true,
format:null,
headerStyleClass:null,
headerTitle:"Discount",
rowGroupIndex:-1,
styleClass:null,
svyUUID:"50F90C8F-5324-4B3A-817D-F4139869936B",
visible:true
},
{
dataprovider:"order_details_to_orders.orders_to_customers.companyname",
edityType:"NONE",
enableRowGroup:true,
enableSort:true,
format:null,
headerStyleClass:null,
headerTitle:"Company",
rowGroupIndex:-1,
styleClass:null,
svyUUID:"A6B07B19-9BAE-4A53-B656-305EB6011824",
visible:true
},
{
dataprovider:"quantity",
editType:"TEXTFIELD",
edityType:"NONE",
enableRowGroup:true,
enableSort:true,
format:null,
headerStyleClass:null,
headerTitle:"Quantity",
rowGroupIndex:-1,
styleClass:null,
svyUUID:"54B62508-21E2-4052-9242-D64C622011C0",
visible:true
},
{
dataprovider:"subtotal",
editType:"TEXTFIELD",
edityType:"NONE",
enableRowGroup:true,
enableSort:true,
format:"¤#.00",
headerStyleClass:null,
headerTitle:"Subtotal",
rowGroupIndex:-1,
styleClass:null,
svyUUID:"C674872D-D2BE-4EF2-9723-4491C028FAA5",
visible:true
},
{
dataprovider:null,
edityType:"NONE",
enableRowGroup:true,
enableSort:true,
format:null,
headerStyleClass:null,
headerTitle:null,
rowGroupIndex:-1,
styleClass:"font-icon",
svyUUID:"0296DF88-1DD4-4B68-9116-1744591B0BB6",
visible:true
}
],
location:{
x:0,
y:0
},
onCellClick:"6117B2EB-33BB-47AF-91DD-1E625844F6F3",
size:{
height:50,
width:570
}
},
location:"0,0",
size:"570,50",
typeid:47,
uuid:"50FBB914-AA72-4F34-8F8E-4F0D8F940AF7"
},
{
extendsID:"826068CF-EFB4-4C41-A1FC-66DFE286AA2C",
height:50,
typeid:19,
uuid:"ABE145A6-18CE-4CD3-9E9E-19BB344FAF4D"
}
],
name:"productOrdersGrid",
size:"570,50",
typeid:3,
uuid:"AEBEB8FB-19DC-455A-9BEA-B9679BFB37A8",
view:5