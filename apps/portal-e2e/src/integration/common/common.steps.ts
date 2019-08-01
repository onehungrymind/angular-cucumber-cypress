import { Then } from 'cypress-cucumber-preprocessor/steps';

const BASE_URL = 'http://localhost:4200/';

Then(`I should be on the {string} page`, page => {
  cy.url().should('eq', `${BASE_URL}${page}`)
});
