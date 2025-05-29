
export class LoginPageActions {
    
  
  public getLoginUsername() {
      return cy.get('[data-test="username"]')
    }

    public getLoginPassword() {
      return cy.get('[data-test="password"]')
    }

    public getLoginButton() {
      return cy.get('#login-button')
    }

    public getLoginError() {
      return cy.get('.login-box [data-test="error"]');
    }
  }
  