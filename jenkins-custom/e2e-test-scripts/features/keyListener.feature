Feature: Testing the Servoy Sample Galery - Keylistener component
    Scenario Outline: Protractor and Cucumber Test

Given I navigate to the test domain
When servoy sidenav component with name galleryMain.nav tab Browser Integrations is clicked
When servoy sidenav component with name galleryMain.nav tab Key Listener is clicked

When servoy default input component with name keyListenerExample.pw the text Around the Horn is inserted
Then servoy data-servoydefault-label component with name keyListenerExample.matchingCount I want to validate that the label equals the text Matching order records: 828

When servoy button component with name keyListenerExample.addListener is clicked
When servoy default input component with name keyListenerExample.pw the text Que Delícia is inserted
Then servoy data-servoydefault-label component with name keyListenerExample.matchingCount I want to validate that the label equals the text Matching order records: 9

@data_table_servoy
Examples:
| day     | month    | year |
# | 15      | December | 2015 |
| 30      | April | 2016 |
# | 15      | November | 2018 |