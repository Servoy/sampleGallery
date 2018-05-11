customProperties:"formComponent:false",
dataSource:"db:/example_data/suppliers",
encapsulation:60,
items:[
{
labelFor:"companyname",
location:"20,60",
name:"companyname_label",
size:"190,20",
text:"Company",
transparent:true,
typeid:7,
uuid:"01AF3387-AB19-4255-814D-DD5B2CCCD9B1"
},
{
dataProviderID:"postalcode",
location:"260,260",
name:"postalcode",
size:"190,30",
text:"Postal Code",
typeid:4,
uuid:"06B278B9-716A-4AE2-AD7F-69DB26669989"
},
{
anchors:11,
displaysTags:true,
location:"20,20",
size:"590,30",
styleClass:"label_header_2",
text:"Company Info",
typeid:7,
uuid:"18E2FFDF-227F-4476-AF04-D9077E34F283"
},
{
dataProviderID:"address",
location:"260,80",
name:"address",
size:"190,30",
text:"Address",
typeid:4,
uuid:"19FB0D72-186D-4E69-836C-7B21E864BDEB"
},
{
dataProviderID:"phone",
location:"20,260",
name:"phone",
size:"190,30",
text:"Phone",
typeid:4,
uuid:"21D6671D-4EC5-4D7A-8BD6-65877E95F235"
},
{
dataProviderID:"contacttitle",
location:"20,200",
name:"contacttitle",
size:"190,30",
text:"Title",
typeid:4,
uuid:"2BB68EAB-2D88-4273-8C64-33F08CB7D6FC"
},
{
anchors:11,
displaysTags:true,
location:"20,320",
size:"590,30",
styleClass:"label_header_2",
text:"Products (%%suppliers_to_products.maxRecordIndex%%)",
typeid:7,
uuid:"49CB2BDC-289C-48C1-BE62-E6B754AB5598"
},
{
labelFor:"city",
location:"260,120",
name:"city_label",
size:"190,20",
text:"City",
transparent:true,
typeid:7,
uuid:"53D06E57-FC53-403E-9B88-A033362C6A96"
},
{
dataProviderID:"contactname",
location:"20,140",
name:"contactname",
size:"190,30",
text:"Contact",
typeid:4,
uuid:"633A567D-C712-4B39-87B8-AC7CD0D8A5C1"
},
{
anchors:15,
items:[
{
containsFormID:"5035879C-EB27-49E8-8B1B-A73CC5A0FCCB",
location:"20,390",
relationName:"suppliers_to_products",
text:"supplierProductGrid",
typeid:15,
uuid:"75AEC096-A4A7-4793-B0C2-AE5B9909B658"
}
],
location:"20,360",
name:"tabs",
printable:false,
size:"590,110",
transparent:true,
typeid:16,
uuid:"642E9C04-06B8-4FD0-94DF-1F02497CFC47"
},
{
labelFor:"country",
location:"260,180",
name:"country_label",
size:"190,20",
text:"Country",
transparent:true,
typeid:7,
uuid:"65B5A643-4697-4328-960E-17158A73B291"
},
{
height:480,
partType:5,
typeid:19,
uuid:"6F79F19B-D728-4DA3-BA49-C7E1D8627E96"
},
{
dataProviderID:"companyname",
location:"20,80",
name:"companyname",
size:"190,30",
text:"Company",
typeid:4,
uuid:"82785216-3259-4B18-A47F-C28CB78AF5CE"
},
{
labelFor:"phone",
location:"20,240",
name:"phone_label",
size:"190,20",
text:"Phone",
transparent:true,
typeid:7,
uuid:"82B840AC-639D-4E4C-B9C3-5F23F028F380"
},
{
labelFor:"contactname",
location:"20,120",
name:"contactname_label",
size:"190,20",
text:"Contact",
transparent:true,
typeid:7,
uuid:"96267C7B-DC1A-4C8B-AABF-14CBAE4CCF91"
},
{
labelFor:"address",
location:"260,60",
name:"address_label",
size:"190,20",
text:"Address",
transparent:true,
typeid:7,
uuid:"B1AB13A4-EC07-4C69-8638-13BBAF01E88D"
},
{
dataProviderID:"city",
location:"260,140",
name:"city",
size:"190,30",
text:"City",
typeid:4,
uuid:"E6D6102A-8CEF-40C1-8F66-9A3700766347"
},
{
labelFor:"contacttitle",
location:"20,180",
name:"contacttitle_label",
size:"190,20",
text:"Title",
transparent:true,
typeid:7,
uuid:"EEFE0BF0-827D-4D60-8E5D-DAB475C23E91"
},
{
dataProviderID:"country",
location:"260,200",
name:"country",
size:"190,30",
text:"Country",
typeid:4,
uuid:"F24FE5DD-18F6-4B7D-B8DE-579CF4EF38CD"
},
{
labelFor:"postalcode",
location:"260,240",
name:"postalcode_label",
size:"190,20",
text:"Postal Code",
transparent:true,
typeid:7,
uuid:"FCA0893E-3D21-4194-BA82-D94D8C6D983E"
}
],
name:"supplierDetail",
showInMenu:true,
typeid:3,
uuid:"C017F1F0-96BC-464C-AC1F-92332A49D0F9"