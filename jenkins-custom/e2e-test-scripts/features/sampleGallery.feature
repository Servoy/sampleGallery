Feature: Testing the Sample Gallery
Background: Set synchroinization to true
    Given I navigate to the test domain
    When I want to set the synchronization to true

Scenario Outline: Testing the Agenda Component

    When I want to set the synchronization to true
    When servoy sidenav component with name galleryMain.nav tab Specialized Components is clicked
    When servoy sidenav component with name galleryMain.nav tab Fullcalendar Component is clicked
    When servoy agenda component with name demoCalendar I want to see my appointments on <day> <month> <year>

    @data_table_servoy
    Examples:
    | day     | month    | year |
    | 30      | April    | 2016 |


Scenario Outline: Testing the Cryptography fields

    When servoy sidenav component with name galleryMain.nav tab Working with Data is clicked
    When servoy sidenav component with name galleryMain.nav tab Cryptography is clicked
    When servoy combobox component with name exampleCrypto.algorithm is clicked

    Then I want to sleep for 2 seconds
    When servoy combobox component I want to select the combobox item with the text <algorithm>
    When servoy button component with name exampleCrypto.generateKey is clicked
    When default textarea component with name exampleCrypto.plainText the text secret code is inserted
    When servoy button component with name exampleCrypto.svy_06BBB00A-478E-4BC4-9ECA-A4FE0FE72172 is clicked
    When I want to log the time it took to do the cryptography event

    @data_table_servoy
    Examples:
    | algorithm     |
    | DES           |
    | AES           |


Scenario Outline: Testing the foundset form

    When servoy sidenav component with name galleryMain.nav tab <tab> is clicked
    When servoy sidenav component with name galleryMain.nav tab Basic Filtering is clicked

    # When servoy calendar component with name filterOrdersList.startDate is clicked
    # When servoy calendar component I want to select <day> <startMonth> <startYear>

    # When servoy calendar component with name filterOrdersList.endDate is clicked
    # When servoy calendar component I want to select <day> <endMonth> <endYear>

    #add customers
    When servoy select2tokenizer component with name filterOrdersList.customerFilter is clicked
    When servoy select2tokenizer component with name filterOrdersList.customerFilter the text <customer> is inserted
    Then servoy select2tokenizer component record number 1 equals the text <customer>
    When servoy select2tokenizer component record number 1 is clicked

    When servoy select2tokenizer component with name filterOrdersList.customerFilter is clicked
    When servoy select2tokenizer component with name filterOrdersList.customerFilter the text Around the Horn is inserted
    Then servoy select2tokenizer component record number 1 equals the text Around the Horn
    When servoy select2tokenizer component record number 1 is clicked

    When servoy select2tokenizer component with name filterOrdersList.customerFilter is clicked
    When servoy select2tokenizer component with name filterOrdersList.customerFilter the text Berglunds snabbköp is inserted
    Then servoy select2tokenizer component record number 1 equals the text Berglunds snabbköp
    When servoy select2tokenizer component record number 1 is clicked

    When servoy select2tokenizer component with name filterOrdersList.customerFilter is clicked
    When servoy select2tokenizer component with name filterOrdersList.customerFilter the text Antonio Moreno Taquería is inserted
    Then servoy select2tokenizer component record number 1 equals the text Antonio Moreno Taquería
    When servoy select2tokenizer component record number 1 is clicked

    #Add employees
    When servoy select2tokenizer component with name filterOrdersList.employeeFilter is clicked
    When servoy select2tokenizer component with name filterOrdersList.employeeFilter the text <employee> is inserted
    Then servoy select2tokenizer component record number 1 equals the text <employee>
    When servoy select2tokenizer component record number 1 is clicked

    When servoy select2tokenizer component with name filterOrdersList.employeeFilter is clicked
    When servoy select2tokenizer component with name filterOrdersList.employeeFilter the text Robert King is inserted
    Then servoy select2tokenizer component record number 1 equals the text Robert King
    When servoy select2tokenizer component record number 1 is clicked

    When servoy select2tokenizer component with name filterOrdersList.employeeFilter is clicked
    When servoy select2tokenizer component with name filterOrdersList.employeeFilter the text Nancy Davolio is inserted
    Then servoy select2tokenizer component record number 1 equals the text Nancy Davolio
    When servoy select2tokenizer component record number 1 is clicked

    When servoy table component with name filterOrdersList.svy_lvp_filterOrdersList I scroll to the record with Berglunds snabbköp as text
    Then I want to sleep for 5 seconds

    @data_table_servoy
    Examples:
    |day |startMonth      | startYear   | endMonth   | endYear   | customer          | employee            | tab               | nav              |
    |19  |june            | 1991        | september  | 2017      | Romero y tomillo  | Margaret Peacock    | Working with Data |  galleryMain.nav | 



Scenario Outline: Testing the hashing fields

    When servoy sidenav component with name galleryMain.nav tab Working with Data is clicked
    When servoy sidenav component with name galleryMain.nav tab Secure Hashing is clicked
    When servoy combobox component with name exampleHash.algrothim is clicked
    When servoy combobox component I want to select the combobox item with the text <hash>
    When default textarea component with name exampleHash.plainText the text secret code is inserted
    When servoy button component with name exampleHash.hashValue is clicked
    When I want to log the time it took to do the hashing event

    @data_table_servoy
    Examples:
    |hash   |
    |MD5    |
    |SHA-1  |
    |SHA-256|

Scenario Outline: Testing the toast notications

    When servoy sidenav component with name galleryMain.nav tab Browser Integrations is clicked
    When servoy sidenav component with name galleryMain.nav tab ToastR Notifications is clicked

    When servoy button component with name toastrExample.toaster_info is clicked
    Then default toast component I want to validate that there is an info toast present
    Then default toast component I want to validate that the text of the info toast equals Hey, Servoy World is coming up in May!

    When servoy button component with name toastrExample.toaster_success is clicked
    Then default toast component I want to validate that there is an success toast present
    Then default toast component I want to validate that the text of the success toast equals You got tickets to Servoy World!

    When servoy button component with name toastrExample.toaster_warning is clicked
    Then default toast component I want to validate that there is an warning toast present
    Then default toast component I want to validate that the text of the warning toast equals You are about to do something you might regret.

    When servoy button component with name toastrExample.toaster_error is clicked
    Then default toast component I want to validate that there is an error toast present
    Then default toast component I want to validate that the text of the error toast equals Oh no. You messed up. It will be OK

    @data_table_servoy
    Examples:
    | day     | month    | year |
    | 30      | April    | 2016 |