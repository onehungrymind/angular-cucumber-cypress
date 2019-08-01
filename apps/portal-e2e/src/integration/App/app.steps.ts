import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import { getTitle } from '../../support/pages/app.po';

const url = 'http://localhost:4200';

Given(`I have opened the application`, () => {
  cy.visit(url);
});

Then(`I should see {string} in the title`, title => {
  getTitle().contains(title);
});
