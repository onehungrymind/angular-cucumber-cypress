import { parseDataTable } from '../utils/generic-data';
import { selectMaterialDropDown } from '../utils/material-handlers';

export const elements = {
  list: 'projects-list',
  form: 'project-details-form',
  title: 'project-details-title',
  notes: 'project-details-notes',
  customer: 'project-details-customer',
  completed: 'project-details-completed',
  approved: 'project-details-approved',
  submit: 'project-details-submit',
  cancel: 'project-details-cancel',
};

export const completeNewProjectForm = (dataTable, action) => {
  const mockProject = parseDataTable(dataTable);

  for (const [key, value] of Object['entries'](mockProject)) {
    cy.get(`[data-cy=${elements[key.toLowerCase()]}]`)[action](value as string, { delay: 100 });
  }
}

export const selectProjectClient = () => {
  selectMaterialDropDown(`[data-cy=${elements['customer']}]`, 'Lukas Ruebbelke')
};

export const saveProject = () => cy.get(`[data-cy=${elements['submit']}]`).click();

export const verifyNewProject = () => {
  cy.get(`[data-cy=projects-list] h3.mat-line`)
    .contains('E2E_');
};
