/// <reference types="cypress" />
globalThis.global = globalThis;


import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { InventoryPage } from "../../page objects/pages/InventoryPage";
import { LoginPage } from "../../page objects/pages/LoginPage";

Given('I open the login page', () => {
  cy.visit('https://www.saucedemo.com/v1/index.html'); 
});

When('I enter username {string} and password {string}', function (username: string, password: string) {
    this.username = username;
    this.password = password;
  
    if (username !== "") {
      LoginPage.getLoginPageActions().getLoginUsername().type(username);
    }
  
    if (password !== "") {
      LoginPage.getLoginPageActions().getLoginPassword().type(password);
    }
  });

When('I click the login button', () => {
    LoginPage.getLoginPageActions().getLoginButton().click()
});

Then('I should be redirected to the products page', () => {
    InventoryPage.getInventoryPageActions().getInventoryPageHome()})


Then('I should see a login error {string} message', function (message: string) {
        if (!this.username) {
          cy.get('[data-test="error"]').should('contain.text', message);
        } else if (!this.password) {
          cy.get('[data-test="error"]').should('contain.text', message);
        } else if (this.username === 'locked_out_user') {
          cy.get('[data-test="error"]').should('contain.text', message);
        } 
})