import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CheckoutPage from '../pages/CheckoutPage';

/**
 * Test suite focused on validating error handling and form validation
 * during the checkout process (Step One).
 */
describe('Checkout Negative Scenarios', () => {

    // Helper function to handle repeated setup steps
    beforeEach(() => {
        // Set fixed viewport size for UI consistency
        cy.viewport(1366, 768); 
        
        // Quick login and add product to cart
        LoginPage.visit();
        LoginPage.login('standard_user', 'secret_sauce');
        InventoryPage.addItemToCart('sauce-labs-backpack');
        
        // Navigate to the checkout information form
        InventoryPage.goToCart();
        CheckoutPage.getCheckoutButton().click();
        cy.url().should('include', '/checkout-step-one.html');
    });

    it('TC_NEG_01: Should show error when First Name is missing', () => {
        // Fill all required fields EXCEPT First Name
        CheckoutPage.getLastNameField().type('Automation');
        CheckoutPage.getPostalCodeField().type('11000');
        
        // Attempt to proceed
        CheckoutPage.getContinueButton().click();

        // Assertion: Verify the required error message is displayed
        cy.get('[data-test="error"]')
          .should('be.visible')
          .and('contain.text', 'Error: First Name is required');
    });

    it('TC_NEG_02: Should show error when Last Name is missing', () => {
        // Fill all required fields EXCEPT Last Name
        CheckoutPage.getFirstNameField().type('Tester');
        CheckoutPage.getPostalCodeField().type('11000');
        
        // Attempt to proceed
        CheckoutPage.getContinueButton().click();

        // Assertion: Verify the required error message is displayed
        cy.get('[data-test="error"]')
          .should('be.visible')
          .and('contain.text', 'Error: Last Name is required');
    });

    it('TC_NEG_03: Should show error when Postal Code is missing', () => {
        // Fill all required fields EXCEPT Postal Code
        CheckoutPage.getFirstNameField().type('Tester');
        CheckoutPage.getLastNameField().type('Automation');
        
        // Attempt to proceed
        CheckoutPage.getContinueButton().click();

        // Assertion: Verify the required error message is displayed
        cy.get('[data-test="error"]')
          .should('be.visible')
          .and('contain.text', 'Error: Postal Code is required');
    });
});