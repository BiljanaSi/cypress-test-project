class LoginPage {

    getUsernameField() {
        return cy.get('[data-test="username"]');
    }

    getPasswordField() {
        return cy.get('[data-test="password"]');
    }

    getLoginButton() {
        return cy.get('[data-test="login-button"]');
    }

    getErrorMessage() {
        return cy.get('[data-test="error"]');
    }

    visit() {
        cy.visit('/', { timeout: 10000 });
    }

    login(username, password) {
        this.getUsernameField().type(username);
        this.getPasswordField().type(password);
        this.getLoginButton().click();
    }
}

// Export the class instance for use in test files
export default new LoginPage();