Feature: Testing the Servoy Sample Galery - Calendar component
    Scenario Outline: Protractor and Cucumber Test

Given I go to the test domain
When servoy sidenav component with name galleryMain.nav tab Specialized Components is clicked
When servoy sidenav component with name galleryMain.nav tab Fullcalendar Component is clicked
When servoy agenda component with name demoCalendar I want to see my appointments on <day> <month> <year>

@data_table_servoy
Examples:
| day     | month    | year |
# | 15      | December | 2015 |
| 30      | April | 2016 |
# | 15      | November | 2018 |