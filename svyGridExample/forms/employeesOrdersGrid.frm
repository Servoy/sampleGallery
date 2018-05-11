customProperties:"formComponent:false",
dataSource:"db:/example_data/orders",
extendsID:"340D5D9F-5E6A-4E20-B3F6-E211FEB7D1A9",
items:[
{
anchors:11,
labelFor:"orderdate",
location:"30,0",
name:"orderdate_label",
size:"150,20",
text:"Ordered",
transparent:true,
typeid:7,
uuid:"132A5B91-1FCE-42B6-B4F8-D1735A7BA46E"
},
{
anchors:11,
labelFor:"order_total",
location:"330,0",
name:"order_total_label",
size:"150,20",
text:"Order Total",
transparent:true,
typeid:7,
uuid:"13C572D4-7EC3-44CD-B5C1-5252A90C1976"
},
{
anchors:11,
dataProviderID:"orders_to_customers.companyname",
location:"180,20",
name:"companyname",
size:"150,30",
transparent:true,
typeid:7,
uuid:"29CF8A1A-3870-4582-9680-04B39435408C"
},
{
extendsID:"826068CF-EFB4-4C41-A1FC-66DFE286AA2C",
height:50,
typeid:19,
uuid:"2CA40C0F-0417-48AF-A604-19BF8262DE05"
},
{
anchors:11,
dataProviderID:"orderdate",
location:"20,20",
name:"orderdate",
size:"150,30",
typeid:7,
uuid:"68594503-EE74-4349-A43C-AF0E742AEA54"
},
{
anchors:11,
labelFor:"companyname",
location:"180,0",
name:"companyname_label",
size:"150,20",
text:"Company",
transparent:true,
typeid:7,
uuid:"93826CB4-FD76-43FC-B66D-B409F22760FD"
},
{
labelFor:"nav",
location:"0,0",
name:"nav_label",
size:"30,20",
transparent:true,
typeid:7,
uuid:"BAEB16AC-1983-40B3-9A0D-3850B1432771"
},
{
location:"0,20",
name:"nav",
onActionMethodID:"3C9E3D77-09C2-40EF-81CB-48DA6BA9224A",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"30,30",
styleClass:"font-icon",
text:"<span class=\"fa fa-external-link-square\"/>",
transparent:true,
typeid:7,
uuid:"C004E821-22E7-41F2-BA7B-0C811D354E18"
},
{
anchors:11,
dataProviderID:"order_total",
format:"¤#.00",
location:"330,20",
name:"order_total",
size:"150,30",
typeid:7,
uuid:"C7F57120-AE5B-4FFC-B054-6716DF8D6FE3"
}
],
name:"employeesOrdersGrid",
size:"480,50",
typeid:3,
uuid:"01ED0685-1472-4FFE-8DD8-C2F763B2A51E"