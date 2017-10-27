Feature: Testing the Timesheet application - Editing a timesheet   
    Scenario Outline: Protractor and Cucumber Test

#login 
Given I go to http://tomcat.timesheet.servoy-cloud.eu/solutions/servoyTimesheets/index.html?f=loginPage
Then I expect the url to be http://tomcat.timesheet.servoy-cloud.eu/solutions/servoyTimesheets/index.html?f=loginPage
When bootstrap data-bootstrapcomponents-textbox component with name loginPage.username the text dlazarescu@servoy.com is inserted
When bootstrap data-bootstrapcomponents-textbox component with name loginPage.textbox_4 the text parola is inserted
When bootstrap data-bootstrapcomponents-button component with name loginPage.button_5 is clicked

#find record
When servoy data-servoyextra-table component with name timesheetsList.timesheetTable I want to select row number 2
When servoy data-servoyextra-table component I want to edit row number 1 of tuesday

#edit record
When bootstrap data-bootstrapcomponents-textbox component with name timeRecordForm.hoursTextbox the text 10 is inserted
When bootstrap data-bootstrapcomponents-textarea component with name timeRecordForm.textarea_15 the text Amazing description is inserted
When bootstrap data-bootstrapcomponents-checkbox component with name timeRecordForm.checkbox_11 I want it to be unchecked

#save record
When bootstrap data-bootstrapcomponents-button component with name timeRecordForm.button is clicked

#toast validation
Then default toast component I want to validate that there is a success toast present
Then default toast component I want to validate that the text of the success toast equals The Time Record was updated succesfully.



@data_table_servoy
Examples:
| timesheetYear | timesheetRow  |
| 2013          | 1             |
# | 2014          | 3             |
# | 2015          | 5             |