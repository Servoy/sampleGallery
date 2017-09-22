Feature: Testing the aagrid component
    Scenario Outline: Protractor and Cucumber Test

Given I go to http://localhost:8080/solutions/sampleGallery/index.html?f=galleryMain
When servoy sidenav component with name galleryMain.nav tab Browser Integrations is clicked
When servoy sidenav component with name galleryMain.nav tab Web Notifications is clicked

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
# | 15      | December | 2015 |
| 30      | April | 2016 |
# | 15      | November | 2018 |