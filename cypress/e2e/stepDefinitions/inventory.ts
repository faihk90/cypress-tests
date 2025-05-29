import { assertPricesSorted } from "../../support/helpers/priceUtils";
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { InventoryPage } from "../../page-objects/pages/InventoryPage";
import { assertNamesSorted } from "../../support/helpers/nameUtils";
const externalUrl = Cypress.env('externalUrl');

When('I click on the sort dropdown menu', () => {
  InventoryPage.getInventoryPageActions().getSortDropdown().click();
});

When('I select {string}', (option: string) => {
  InventoryPage.getInventoryPageActions().getSortDropdown().select(option);
});

Then('the products should be sorted by price in {string} order', (order: "asc" | "desc") => {
    InventoryPage.getInventoryPageActions().getProductPrices().then(($prices) => {
      assertPricesSorted($prices, order);
    });
  });
  
  Then('the products should be sorted by name in {string} order', (order: "asc" | "desc") => {
    InventoryPage.getInventoryPageActions().getProductNames().then(($names) => {
      assertNamesSorted($names, order);
    });
  });


  When('I click the burger menu button', () => {
    InventoryPage.getInventoryPageActions().getBurgerMenuButton().click();
  });
  
  Then('the sidebar should be visible', () => {
    InventoryPage.getInventoryPageActions().getSidebar().should('be.visible');
  });
  
  When('I click the close menu button', () => {
    InventoryPage.getInventoryPageActions().getCloseMenuButton().click();
  });
  
  Then('the sidebar should not be visible', () => {
    InventoryPage.getInventoryPageActions().getSidebar().should('not.be.visible');
  });
  
  When('I click {string} from the menu', (option: string) => {
    InventoryPage.getInventoryPageActions().getMenuOption(option).click();
  });
  
  Then('I should be redirected to the login page', () => {
    cy.url().should('include', '/index.html');
  });

  Then('I should stay on the inventory page', () => {
    cy.url().should('include', '/inventory.html');
  });
  
  Then('I should be redirected to the Sauce Labs site', () => {
    cy.origin('https://saucelabs.com', () => {
      cy.url().should('include', 'saucelabs.com');
    });
  });
  
  Then('the cart should be empty', () => {
    InventoryPage.getInventoryPageActions().getCartBadge().should('not.exist');
  });
  