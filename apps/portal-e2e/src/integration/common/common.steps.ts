import { Then } from 'cypress-cucumber-preprocessor/steps';
import { setUp, cleanUp } from '../../support/utils/remote-data';

const BASE_URL = 'http://localhost:4200/';

before(() => {
  cleanUp();
});

after(() => {
  cleanUp();
});

Then(`I should be on the {string} page`, page => {
  cy.url().should('eq', `${BASE_URL}${page}`)
});
