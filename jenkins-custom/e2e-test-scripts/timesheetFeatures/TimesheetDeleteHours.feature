Feature: Testing the Timesheet application - Editing a timesheet   
    Scenario Outline: Protractor and Cucumber Test

#login 
Given I go to http://tomcat.timesheet.servoy-cloud.eu/solutions/servoyTimesheets/index.html?f=loginPage
Then I expect the url to be http://tomcat.timesheet.servoy-cloud.eu/solutions/servoyTimesheets/index.html?f=loginPage
When bootstrap data-bootstrapcomponents-textbox component with name loginPage.username the text dlazarescu@servoy.com is inserted
When bootstrap data-bootstrapcomponents-textbox component with name loginPage.textbox_4 the text parola is inserted
When bootstrap data-bootstrapcomponents-button component with name loginPage.button_5 is clicked

When bootstrap data-bootstrapcomponents-select component with name timesheetsList.selectYear is clicked
When bootstrap data-bootstrapcomponents-select component with name timesheetsList.selectYear I want to select the row with 2016 as text

#find record and validate record count
When servoy data-servoyextra-table component with name timesheetsList.timesheetTable I want to select row number 1
When servoy data-servoyextra-table component I want to validate monday has 1 row
When servoy data-servoyextra-table component I want to delete row number 1 of monday

#confirm delete
Then default div dialog popup I want to click the button with OK as text

#validate rows after deletion
When servoy data-servoyextra-table component I want to validate tuesday has 0 rows

#toast validation
Then default toast component I want to validate that there is a success toast present
Then default toast component I want to validate that the text of the success toast equals The Time record was deleted succesfully.



@data_table_servoy
Examples:
| timesheetYear | timesheetRow  |
| 2013          | 1             |
# | 2014          | 3             |
# | 2015          | 5             |