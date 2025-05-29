export class InventoryPageActions {


  public getInventoryPageHome() {
    return cy.location('pathname', { timeout: 10000 }).should('include', '/v1/inventory.html');

  }

  public getSortDropdown() {
    return cy.get('.product_sort_container')
  }

  public getProductPrices() {
    return cy.get('.inventory_item_price');
  }

  public getProductNames() {
    return cy.get('.inventory_item_name');
  }

  public getCartIcon() {
    return cy.get('.shopping_cart_link');
  }
  public getAddToCartButtonByName(productName: string) {
    return cy.contains('.inventory_item', productName)
      .find('button')
      .contains('ADD TO CART');
  }
  public getBurgerMenuButton() {
    return cy.get('.bm-burger-button > button')}

  public getMenuOption(optionText: string) {
    return cy.get('.bm-item-list').contains(optionText);
  }

  public getSidebar() {
    return cy.get('.bm-menu');
  }

  public getCloseMenuButton() {
    return cy.get('.bm-cross-button > button')
  }
  public getCartBadge() {
    return cy.get('.shopping_cart_badge');
  }

}