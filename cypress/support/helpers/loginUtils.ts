
import { LoginPage } from "../../page objects/pages/LoginPage";
import users from "../../fixtures/users.json";

export function loginWithUserType(userType: string) {
  const user = users[userType];

  if (user.username !== "") {
    LoginPage.getLoginPageActions().getLoginUsername().type(user.username);
  }

  if (user.password !== "") {
    LoginPage.getLoginPageActions().getLoginPassword().type(user.password);
  }
}

export function verifyLoginError(userType: string) {
  const expectedMessage = users[userType].message;

  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('have.text', expectedMessage);
}
