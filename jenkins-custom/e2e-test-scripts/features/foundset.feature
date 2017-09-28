Feature: Testing the Servoy Sample Galery - Foundset   
    Scenario Outline: Protractor and Cucumber Test


# Given I setup the environment
Given I go to http://demo.servoy.com/sampleGallery/solutions/sampleGallery/index.html?f=galleryMain
Then I want to refresh the page
When servoy sidenav component with name galleryMain.nav tab <tab> is clicked
When servoy sidenav component with name galleryMain.nav tab Basic Filtering is clicked

When servoy calendar component with name filterOrdersList.startDate is clicked
When servoy calendar component I want to select <day> <startMonth> <startYear>

When servoy calendar component with name filterOrdersList.endDate is clicked
When servoy calendar component I want to select <day> <endMonth> <endYear>

#add customers
When servoy select2tokenizer component with name filterOrdersList.customerFilter is clicked
When servoy select2tokenizer component with name filterOrdersList.customerFilter the text <customer> is inserted
Then servoy select2tokenizer component with class name select2-results__options record number 1 equals <customer>
When servoy select2tokenizer component with class name select2-results__options record number 1 is clicked

When servoy select2tokenizer component with name filterOrdersList.customerFilter is clicked
When servoy select2tokenizer component with name filterOrdersList.customerFilter the text Around the Horn is inserted
Then servoy select2tokenizer component with class name select2-results__options record number 1 equals Around the Horn
When servoy select2tokenizer component with class name select2-results__options record number 1 is clicked

When servoy select2tokenizer component with name filterOrdersList.customerFilter is clicked
When servoy select2tokenizer component with name filterOrdersList.customerFilter the text Berglunds snabbköp is inserted
Then servoy select2tokenizer component with class name select2-results__options record number 1 equals Berglunds snabbköp
When servoy select2tokenizer component with class name select2-results__options record number 1 is clicked

When servoy select2tokenizer component with name filterOrdersList.customerFilter is clicked
When servoy select2tokenizer component with name filterOrdersList.customerFilter the text Antonio Moreno Taquería is inserted
Then servoy select2tokenizer component with class name select2-results__options record number 1 equals Antonio Moreno Taquería
When servoy select2tokenizer component with class name select2-results__options record number 1 is clicked

#Add employees
When servoy select2tokenizer component with name filterOrdersList.employeeFilter is clicked
When servoy select2tokenizer component with name filterOrdersList.employeeFilter the text <employee> is inserted
Then servoy select2tokenizer component with class name select2-results__options record number 1 equals <employee>
When servoy select2tokenizer component with class name select2-results__options record number 1 is clicked

When servoy select2tokenizer component with name filterOrdersList.employeeFilter is clicked
When servoy select2tokenizer component with name filterOrdersList.employeeFilter the text Robert King is inserted
Then servoy select2tokenizer component with class name select2-results__options record number 1 equals Robert King
When servoy select2tokenizer component with class name select2-results__options record number 1 is clicked

When servoy select2tokenizer component with name filterOrdersList.employeeFilter is clicked
When servoy select2tokenizer component with name filterOrdersList.employeeFilter the text Nancy Davolio is inserted
Then servoy select2tokenizer component with class name select2-results__options record number 1 equals Nancy Davolio
When servoy select2tokenizer component with class name select2-results__options record number 1 is clicked

When servoy table component with name filterOrdersList.svy_lvp_filterOrdersList I scroll to the record with Berglunds snabbköp as text

@data_table_servoy
Examples:
|day |startMonth      | startYear   | endMonth   | endYear   | customer          | employee            | tab               | nav              |
|19  |june            | 1991        | september  | 2017      | Romero y tomillo  | Margaret Peacock    | Working with Data |  galleryMain.nav | 