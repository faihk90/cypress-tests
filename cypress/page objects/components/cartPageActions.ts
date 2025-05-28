
export class CartPageActions {
    getCartItems() {
      return cy.get('.cart_item');
    }
  
    getCheckoutButton() {
      return cy.get('[data-test="checkout"]');
    }
  
    getContinueShoppingButton() {
      return cy.get('[data-test="continue-shopping"]');
    }
  
    getRemoveButtonByProductName(productName: string) {
      return cy.contains('.cart_item', productName)
               .find('button')
               .contains('Remove');
    }
  }
  