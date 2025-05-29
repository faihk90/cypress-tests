export class CheckoutReviewPageActions {
    getFinishButton() {
      return cy.get('[data-test="finish"]');
    }
  
    getCancelButton() {
      return cy.get('[data-test="cancel"]');
    }
  
    getSummaryItems() {
      return cy.get('.cart_item');
    }
  
    getThankYouMessage() {
      return cy.get('.complete-header');
    }
  }
  