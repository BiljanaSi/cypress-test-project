import LoginPage from '../pages/LoginPage';

describe('Login Feature Tests using POM', () => {

    beforeEach(() => {
        // Call the visit method defined in LoginPage
        LoginPage.visit();
    });

    it('TC_POM_L01: Should successfully log in with standard user credentials', () => {
        // Call the login() method from the Page Object
        LoginPage.login('standard_user', 'secret_sauce');

        // Assertion - Check URL redirection
        cy.url().should('include', '/inventory.html');
        cy.get('.app_logo').should('be.visible');
    });

    it('TC_POM_L02: Should display an error for invalid credentials', () => {
        // Attempt login with wrong data
        LoginPage.login('wrong_user', 'wrong_password');

        // Assertion - Check the error message
        LoginPage.getErrorMessage()
            .should('be.visible')
            .and('contain.text', 'Username and password do not match');
    });

    it('TC_POM_L03: Should display a locked-out error for the locked user', () => {
        // Test the locked user scenario
        LoginPage.login('locked_out_user', 'secret_sauce');

        // Assertion - Check the specific lockout error message
        LoginPage.getErrorMessage()
            .should('be.visible')
            .and('contain.text', 'Sorry, this user has been locked out.');
    });
});