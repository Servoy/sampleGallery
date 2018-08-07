Feature: Testing the Servoy Sample Galery - Hashing   
    Scenario Outline: Protractor and Cucumber Test

Given I go to http://tomcat.demo.servoy-cloud.eu/sampleGallery/solutions/sampleGallery/index.html?f=galleryMain
When servoy sidenav component with name galleryMain.nav tab Working with Data is clicked
When servoy sidenav component with name galleryMain.nav tab Secure Hashing is clicked
When servoy combobox component with name exampleHash.algrothim is clicked
When servoy combobox component I want to select the combobox item with the text <hash>
When default textarea component with name exampleHash.plainText the text secret code is inserted
When servoy button component with name exampleHash.hashValue is clicked
When I want to log the time it toke to do the hashing event

@data_table_servoy
Examples:
|hash   |
|MD5    |
|SHA-1  |
|SHA-256|