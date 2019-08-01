import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import { gotoLoginScreen, loginAs } from '../../support/pages/login.po';

let accounts = null;

beforeEach(function() {
  cy.fixture('accounts')
    .then((json) => accounts = json);
});

Given('I am on the login page', () => {
  gotoLoginScreen();
});

Given(/^I am logged in as an? "(\w+)"$/, (role) => {
  const account = accounts[role];
  gotoLoginScreen();
  loginAs(account);
});

When(/^I login as an? "(\w+)"$/, (role) => {
  const account = accounts[role];
  loginAs(account);
});





