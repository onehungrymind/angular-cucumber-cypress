import { getGreeting } from '../support/app.po';

describe('portal', () => {
  beforeEach(() => cy.visit('/'));

  it('should display application title', () => {
    getGreeting().contains('EnterPortal');
  });
});
