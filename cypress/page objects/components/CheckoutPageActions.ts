export class CheckoutPageActions {
    getFirstName() {
      return cy.get('[data-test="firstName"]');
    }
  
    getLastName() {
      return cy.get('[data-test="lastName"]');
    }
  
    getPostalCode() {
      return cy.get('[data-test="postalCode"]');
    }
  
    getContinueButton() {
      return  cy.get('input.btn_primary.cart_button');
    }
  
    getCancelButton() {
      return cy.get('[data-test="cancel"]');
    }
  }
  