Feature: Testing the aagrid component
    Scenario Outline: Protractor and Cucumber Test

Given I go to http://tomcat.demo.servoy-cloud.eu/sampleGallery/solutions/sampleGallery/index.html?f=galleryMain
When servoy sidenav component with name galleryMain.nav tab Fullcalendar Component is clicked
When servoy calendar component with name demoCalendar I want to see my appointments on <day> <month> <year>
Then I want to sleep

@data_table_servoy
Examples:
| day     | month    | year |
# | 15      | December | 2015 |
| 30      | April | 2016 |
# | 15      | November | 2018 |