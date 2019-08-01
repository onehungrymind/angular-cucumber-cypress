import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import { completeNewProjectForm, selectProjectClient, saveProject, verifyNewProject } from '../../support/pages/projects.po';

When('I type new project details', (datatable) => {
  completeNewProjectForm(datatable, 'type');
});

When('I check new project details', (datatable) => {
  completeNewProjectForm(datatable, 'click');
});

When('I select a new project client', () => {
  selectProjectClient();
});

When('I save the new project', () => {
  saveProject();
})

Then('I should see the new project in the projects list', () => {
  verifyNewProject();
});
