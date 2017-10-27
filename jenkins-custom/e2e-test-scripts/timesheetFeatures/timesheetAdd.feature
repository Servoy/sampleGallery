Feature: Testing the Timesheet application - Adding a timesheet   
    Scenario Outline: Protractor and Cucumber Test

#login 
# Given I go to http://tomcat.timesheet.servoy-cloud.eu/servoyTimesheets/solutions/servoyTimesheets/index.html?f=loginPage
Given I go to http://tomcat.timesheet.servoy-cloud.eu/solutions/servoyTimesheets/index.html?f=loginPage
Then I expect the url to be http://tomcat.timesheet.servoy-cloud.eu/solutions/servoyTimesheets/index.html?f=loginPage
When bootstrap data-bootstrapcomponents-textbox component with name loginPage.username the text dlazarescu@servoy.com is inserted
When bootstrap data-bootstrapcomponents-textbox component with name loginPage.textbox_4 the text parola is inserted
When bootstrap data-bootstrapcomponents-button component with name loginPage.button_5 is clicked

#close community edition popup
Then I want to close the community edition popup

#select year
When bootstrap data-bootstrapcomponents-select component with name timesheetsList.selectYear is clicked
When bootstrap data-bootstrapcomponents-select component with name timesheetsList.selectYear I want to select the row with <timesheetYear> as text
# When bootstrap data-bootstrapcomponents-select component with name timesheetsList.selectYear I want to select row number 2

#validate rows in table
# When servoy data-servoyextra-table component with name timesheetsList.timesheetTable I want to validate there are 0 rows

#use sidenav component
# When servoy sidenav component with name timesheetsList.sidenav the menu is clicked
# When servoy sidenav component with name timesheetsList.sidenav tab Create Timesheet is clicked

#create timesheet
When bootstrap data-bootstrapcomponents-button component with name timesheetsList.buttonAddWorksheet is clicked
When bootstrap data-bootstrapcomponents-select component with name createTimesheet.selectYear is clicked
When bootstrap data-bootstrapcomponents-select component with name createTimesheet.selectYear I want to select the row with <timesheetYear> as text
# When bootstrap data-bootstrapcomponents-select component with name createTimesheet.selectYear I want to select row number 2

When bootstrap data-bootstrapcomponents-select component with name createTimesheet.selectWeek is clicked
When bootstrap data-bootstrapcomponents-select component with name createTimesheet.selectWeek I want to select row number 1

#add timesheet
When bootstrap data-bootstrapcomponents-button component with name createTimesheet.button is clicked

#validate creation
Then default toast component I want to validate that there is a success toast present
Then default toast component I want to validate that the text of the success toast equals The new Timesheet was created succesfully.

#add hours to timesheet
When bootstrap data-bootstrapcomponents-button component with name timesheetPage.buttonAddTime is clicked
When bootstrap data-bootstrapcomponents-select component with name timeRecordForm.selectWorkDay is clicked
When bootstrap data-bootstrapcomponents-select component with name timeRecordForm.selectWorkDay I want to select row number 1

#insert and validate typeahead #company
When servoy default typeahead component with name timeRecordForm.typeahead the text Logic Impresa di Gianluca Zanini is inserted
When servoy default typeahead component I want row 1 to equal Logic Impresa di Gianluca Zanini
When servoy default typeahead component I want to select row number 1

#insert and validate typeahead #budget
When servoy default typeahead component with name timeRecordForm.typeahead_1 the text OnSite Consulting Hours is inserted
When servoy default typeahead component I want row 1 to equal OnSite Consulting Hours
When servoy default typeahead component I want to select row number 1

#add hours
When bootstrap data-bootstrapcomponents-textbox component with name timeRecordForm.hoursTextbox the text 10 is inserted

#description
When bootstrap data-bootstrapcomponents-textarea component with name timeRecordForm.textarea_15 the text Amazing description is inserted

#validate and check/uncheck billing checkbox
When bootstrap data-bootstrapcomponents-checkbox component with name timeRecordForm.checkbox_11 I want it to be checked

#add time
When bootstrap data-bootstrapcomponents-button component with name timeRecordForm.button is clicked

#validate adding time
Then default toast component I want to validate that there is a success toast present
Then default toast component I want to validate that the text of the success toast equals The Time Record was created succesfully.

#submit and confirm timesheet 
When bootstrap data-bootstrapcomponents-button component with name timesheetPage.submitTimesheetButton is clicked
Then default div dialog popup I want to validate that the text Are you sure this Timesheet is complete? is present
Then default div dialog popup I want to click the button with OK as text

#return to main timesheet list and validate rows again
# When servoy data-servoyextra-table component with name timesheetsList.timesheetTable I want to validate there are 1 row

#logout
When servoy sidenav component with name timesheetsList.sidenav the menu is clicked
When servoy sidenav component with name timesheetsList.sidenav tab Logout is clicked

@data_table_servoy
Examples:
| timesheetYear | timesheetRow  |
| 2014          | 1             |
| 2015          | 1             |
| 2016          | 1             |
| 2014          | 1             |
| 2015          | 1             |
| 2016          | 1             |
