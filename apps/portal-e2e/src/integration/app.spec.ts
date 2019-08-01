import { getGreeting } from '../support/app.po';

describe('portal', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to portal!');
  });
});
