import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I login to SauceDemo", () => {
  cy.visit('https://www.saucedemo.com');

  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
});

When("I scan the page for missing data-test", () => {
  cy.scanMissingDataTest();
});

Then("AI suggests a data-test name for the menu button", () => {
  cy.get("#react-burger-menu-btn").aiSuggestFor();
});