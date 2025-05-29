/// <reference types="cypress" />
globalThis.global = globalThis;


import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { InventoryPage } from "../../page-objects/pages/InventoryPage";
import { LoginPage } from "../../page-objects/pages/LoginPage";
import { loginWithUserType, verifyLoginError } from "../../support/helpers/loginUtils";


Given('I open the login page', () => {
  cy.visit('/v1/index.html');
});

When("I log in with {string} user data", (userType: string) => {
  loginWithUserType(userType);
});

When('I click the login button', () => {
  LoginPage.getLoginPageActions().getLoginButton().click()
});

Then('I should be redirected to the products page', () => {
  InventoryPage.getInventoryPageActions().getInventoryPageHome()
})

Then('I should see the error message for {string}', (userType: string) => {
  verifyLoginError(userType);
});