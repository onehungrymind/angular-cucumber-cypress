import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import { completeNewProjectForm, saveProject, selectProjectClient, verifyNewProject } from '../../support/pages/projects.po';
import { setUp, cleanUp } from '../../support/utils/remote-data';

beforeEach(() => setUp());

afterEach(() => cleanUp());

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
