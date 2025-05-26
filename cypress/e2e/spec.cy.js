
describe('novibet task1',() => {
  beforeEach(() => {
    cy.visit('https://www.novibet.gr/en/live-betting'); 
  });

it.only('novibet task1' ,() => {
  cy.wait(10000)
  cy.get('[data-cy="closeBtn"]').click();
  cy.get('[data-cy="submitBtn"]').click();
  cy.get('.tutorial_button.cursor').click();
  cy.get('img[alt="SOCCER_MATCH"][style="width: 2.4rem; height: 2.4rem;"].svgImage.SOCCER_MATCH.medium').click();})})