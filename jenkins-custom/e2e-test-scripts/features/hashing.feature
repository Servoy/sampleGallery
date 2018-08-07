Feature: Testing the Servoy Sample Galery - Hashing   
    Scenario Outline: Protractor and Cucumber Test

Given I navigate to the test domain
When servoy sidenav component with name galleryMain.nav tab Working with Data is clicked
When servoy sidenav component with name galleryMain.nav tab Secure Hashing is clicked
When servoy combobox component with name exampleHash.algrothim is clicked
When servoy combobox component the text <hash> is inserted
Then servoy combobox component I want to select number 1 in the combobox
When default textarea component with name exampleHash.plainText the text secret code is inserted
When servoy button component with name exampleHash.hashValue is clicked
When I want to log the time it toke to do the hashing event

@data_table_servoy
Examples:
|hash   |
|MD5    |
|SHA-1  |
|SHA-256|