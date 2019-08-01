import { Given } from 'cypress-cucumber-preprocessor/steps';

const url = 'http://localhost:4200';

Given(`I have opened the application`, () => {
  cy.visit(url);
});
