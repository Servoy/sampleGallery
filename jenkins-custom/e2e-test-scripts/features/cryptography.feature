Feature: Testing the Servoy Sample Galery - Cryptography
    Scenario Outline: Protractor and Cucumber Test

Given I navigate to the test domain
When servoy sidenav component with name galleryMain.nav tab Working with Data is clicked
When servoy sidenav component with name galleryMain.nav tab Cryptography is clicked
When servoy combobox component with name exampleCrypto.algorithm is clicked
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