customProperties:"formComponent:false",
dataSource:"db:/example_data/customers",
encapsulation:60,
items:[
{
labelFor:"address",
location:"260,60",
name:"address_label",
size:"190,20",
text:"Address",
transparent:true,
typeid:7,
uuid:"00F521D6-5FB3-4EB5-ACF6-4CA3EE291FFA"
},
{
dataProviderID:"companyname",
location:"20,80",
name:"companyname",
size:"190,30",
text:"Company",
typeid:4,
uuid:"0547A392-66DF-4117-8293-AE806073DCFA"
},
{
dataProviderID:"contactname",
location:"20,140",
name:"contactname",
size:"190,30",
text:"Contact",
typeid:4,
uuid:"14095393-4018-4A24-B44A-AF084FC7FE6E"
},
{
labelFor:"contactname",
location:"20,120",
name:"contactname_label",
size:"190,20",
text:"Contact",
transparent:true,
typeid:7,
uuid:"15D0B8BB-CA20-47E1-AA28-0CA69BF27BC0"
},
{
height:480,
partType:5,
typeid:19,
uuid:"2394D611-853D-439A-AD40-D7A67C4DA504"
},
{
labelFor:"contacttitle",
location:"20,180",
name:"contacttitle_label",
size:"190,20",
text:"Title",
transparent:true,
typeid:7,
uuid:"2AE7A94A-B7BC-4245-9D60-A138799A3D23"
},
{
anchors:11,
displaysTags:true,
location:"20,320",
size:"590,30",
styleClass:"label_header_2",
text:"Orders (%%customers_to_orders.maxRecordIndex%%)",
typeid:7,
uuid:"3145FB2B-96A1-4EBF-B47B-5F215EE36A3B"
},
{
dataProviderID:"phone",
location:"20,260",
name:"phone",
size:"190,30",
text:"Phone",
typeid:4,
uuid:"6A456957-98A7-4D94-A4CA-6122FF4035E8"
},
{
labelFor:"companyname",
location:"20,60",
name:"companyname_label",
size:"190,20",
text:"Company",
transparent:true,
typeid:7,
uuid:"A078D70C-4F74-41CE-9954-D4B459DC9285"
},
{
labelFor:"postalcode",
location:"260,240",
name:"postalcode_label",
size:"190,20",
text:"Postal Code",
transparent:true,
typeid:7,
uuid:"B9BF51FA-FF0E-49F2-801C-58F42B4562F3"
},
{
labelFor:"country",
location:"260,180",
name:"country_label",
size:"190,20",
text:"Country",
transparent:true,
typeid:7,
uuid:"BE9A7F4B-146D-4CEE-AFC2-ABDC1DA66209"
},
{
anchors:15,
items:[
{
containsFormID:"5668A035-393F-4A7A-84AC-EB4BAE54CE95",
location:"150,430",
relationName:"customers_to_orders",
text:"customerOrdersGrid",
typeid:15,
uuid:"5E9EB23D-8F46-4B78-AE9A-E5BFB31342EA"
}
],
location:"20,360",
name:"tabs",
printable:false,
size:"590,110",
transparent:true,
typeid:16,
uuid:"C0D1ED3D-7BCB-47AC-A02C-921CE52F601E"
},
{
dataProviderID:"postalcode",
location:"260,260",
name:"postalcode",
size:"190,30",
text:"Postal Code",
typeid:4,
uuid:"C5EABAFF-49C9-4AC2-A700-D0222420A013"
},
{
dataProviderID:"city",
location:"260,140",
name:"city",
size:"190,30",
text:"City",
typeid:4,
uuid:"E35C3B0C-71F4-45DA-9E69-D3D983084F2F"
},
{
labelFor:"phone",
location:"20,240",
name:"phone_label",
size:"190,20",
text:"Phone",
transparent:true,
typeid:7,
uuid:"E5447E2A-7D6E-48E9-BA47-76C87CD1CFCB"
},
{
labelFor:"city",
location:"260,120",
name:"city_label",
size:"190,20",
text:"City",
transparent:true,
typeid:7,
uuid:"E6306F27-DA6F-4203-8F6C-6D8B1D5417B2"
},
{
dataProviderID:"contacttitle",
location:"20,200",
name:"contacttitle",
size:"190,30",
text:"Title",
typeid:4,
uuid:"EA46C94C-DA8D-4722-B34A-9D1DF969DEF2"
},
{
anchors:11,
displaysTags:true,
location:"20,20",
size:"590,30",
styleClass:"label_header_2",
text:"Company Info",
typeid:7,
uuid:"EC7220DD-92FC-4AD2-AD66-F3C08F15BEAC"
},
{
dataProviderID:"address",
location:"260,80",
name:"address",
size:"190,30",
text:"Address",
typeid:4,
uuid:"F0FC9593-D730-4F20-9AE5-96FB180445A6"
},
{
dataProviderID:"country",
location:"260,200",
name:"country",
size:"190,30",
text:"Country",
typeid:4,
uuid:"FF6F7B1E-B1A7-42F8-B0B5-9C2479E99A95"
}
],
name:"customerDetail",
showInMenu:true,
typeid:3,
uuid:"467B84C1-C2CB-4AF0-9D94-8703BAFC171D"