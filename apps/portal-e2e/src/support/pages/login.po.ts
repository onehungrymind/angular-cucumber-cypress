const LOGIN_URL = 'http://localhost:4200/login';

export const gotoLoginScreen = () => cy.visit(LOGIN_URL);

export const loginAs = (account) => {
  cy.get('[data-cy=login-email]').type(account.email, { delay: 100 });
  cy.get('[data-cy=login-password]').type(account.password, { delay: 100 });
  cy.get('[data-cy=login-submit]').click();
}

export const logout = () => cy.get('[data-cy=logout]').click();
