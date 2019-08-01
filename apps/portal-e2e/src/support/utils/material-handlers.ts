export const selectMaterialDropDown = (selector, selectOption) => {
  cy.get(selector).click().then(() => {
    cy.get(`.cdk-overlay-container .mat-select-panel .mat-option-text`).should('contain', selectOption);
    cy.get(`.cdk-overlay-container .mat-select-panel .mat-option-text:contains("${selectOption}")`)
      .first()
      .click()
      .then(() => {
      // After click, mat-select should contain the text of the selected option
      cy.get(selector).contains(selectOption);
    });
  });
}
