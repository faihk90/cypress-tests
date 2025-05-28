export class CheckoutPageActions {
    getFirstNameField() {
      return cy.get('[data-test="firstName"]');
    }
  
    getLastNameField() {
      return cy.get('[data-test="lastName"]');
    }
  
    getPostalCodeField() {
      return cy.get('[data-test="postalCode"]');
    }
  
    getContinueButton() {
      return  cy.get('input.btn_primary.cart_button');
    }
  
    getCancelButton() {
      return cy.get('[data-test="cancel"]');
    }
  }
  