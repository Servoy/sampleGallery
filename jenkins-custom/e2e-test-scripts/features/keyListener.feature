Feature: Testing the Servoy Sample Galery - Keylistener component
    Scenario Outline: Protractor and Cucumber Test

Given I go to http://tomcat.demo.servoy-cloud.eu/sampleGallery/solutions/sampleGallery/index.html?f=galleryMain
Then I want to refresh the page
When servoy sidenav component with name galleryMain.nav tab Browser Integrations is clicked
When servoy sidenav component with name galleryMain.nav tab Key Listener is clicked

When default textfield component with name keyListenerExample.pw I want to insert Around the Horn
Then default label component with name keyListenerExample.matchingCount I expect the text to equal Matching order records: 828

When servoy button component with name keyListenerExample.addListener is clicked
When default textfield component with name keyListenerExample.pw I want to insert Que Delícia
Then default label component with name keyListenerExample.matchingCount I expect the text to equal Matching order records: 9

@data_table_servoy
Examples:
| day     | month    | year |
# | 15      | December | 2015 |
| 30      | April | 2016 |
# | 15      | November | 2018 |