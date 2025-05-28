/// <reference types="cypress" />

import { InventoryPage } from "../../page objects/pages/InventoryPage";
import { CartPage } from "../../page objects/pages/CartPage";
import { CheckoutPage } from "../../page objects/pages/CheckoutPage";
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { CheckoutReviewPage } from "../../page objects/pages/CheckoutReviewPage";


//When('I enter username {string} and password {string}', (username:string, password:string) => {
 // cy.get('[data-test="username"]').type(username);
 // cy.get('[data-test="password"]').type(password);
//  cy.get('[data-test="login-button"]').click();
//});

// Then('I should be redirected to the products page', () => {
//   cy.url().should('include', '/inventory.html');
// });


When('I add the product {string} to the cart', (productName: string) => {
  InventoryPage.getInventoryPageActions().getAddToCartButtonByName(productName).click();
});

When('I click on the cart icon', () => {
  InventoryPage.getInventoryPageActions().getCartIcon().click();
});

Then('the cart should contain {string}', (productName: string) => {
  CartPage.getCartPageActions().getCartItems().should('contain.text', productName);
});

Then('the cart should not contain {string}', (productName: string) => {
  CartPage.getCartPageActions().getCartItems().should('not.exist');
});

When('I remove the product {string} from the cart', (productName: string) => {
  CartPage.getCartPageActions().getRemoveButtonByProductName(productName).click();
});

When('I click on the checkout button', () => {
  CartPage.getCartPageActions().getCheckoutButton().click();
});

Then('the checkout form should be displayed', () => {
  CheckoutPage.getCheckoutPageActions().getFirstNameField().should('be.visible');
});

When('I go to checkout', () => {
  InventoryPage.getInventoryPageActions().getCartIcon().click();
  CartPage.getCartPageActions().getCheckoutButton().click();
});

When(
  'I enter first name {string}, last name {string}, and postal code {string}',
  (firstName: string, lastName: string, postalCode: string) => {
    CheckoutPage.getCheckoutPageActions().getFirstNameField().type(firstName);
    CheckoutPage.getCheckoutPageActions().getLastNameField().type(lastName);
    CheckoutPage.getCheckoutPageActions().getPostalCodeField().type(postalCode);
  }
);

Then('I should be able to proceed to the next step', () => {
  CheckoutPage.getCheckoutPageActions().getContinueButton().click();
  cy.url().should('include', 'checkout-step-two.html');
});


Then('I should see the confirmation message', () => {
  CheckoutReviewPage.getCheckoutReviewPageActions().getThankYouMessage().should('contain.text', 'THANK YOU FOR YOUR ORDER');
});

When('I click the {string} button on the review page', (button: "cancel" | "finish") => {
  if (button === "cancel") {
    cy.get('.cart_cancel_link').click();
  } else if (button === "finish") {
    cy.get('.btn_action.cart_button').click();
  }
});

Then('I should be redirected back to the cart page', () => {
  cy.url().should('include', '/cart.html');
});

When('I click the continue button', () => {
  CheckoutPage.getCheckoutPageActions().getContinueButton().click();
});

When('I enter first name {string} and leave last name and postal code empty', (firstName: string) => {
  CheckoutPage.getCheckoutPageActions().getFirstNameField().type(firstName);
});

When('I enter first name {string} and last name {string} but leave postal code empty', (firstName: string, lastName: string) => {
  CheckoutPage.getCheckoutPageActions().getFirstNameField().type(firstName);
  CheckoutPage.getCheckoutPageActions().getLastNameField().type(lastName);
});

Then('I should see an error message {string}', (errorMessage: string) => {
  cy.get('[data-test="error"]').should('be.visible').and('contain.text', errorMessage);
});