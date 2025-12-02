/**
 * Page Object Model covering Cart, Checkout Step One, and Checkout Step Two.
 */
class CheckoutPage {

    /**
     * Gets a cart item based on its visible name. Used on the Cart page.
     * @param {string} productName - The full visible name of the product.
     */
    getCartItem(productName) {
        return cy.contains('.inventory_item_name', productName);
    }

    getCheckoutButton() {
        return cy.get('[data-test="checkout"]');
    }
    
    // Step One Fields
    getFirstNameField() {
        return cy.get('[data-test="firstName"]');
    }

    getLastNameField() {
        return cy.get('[data-test="lastName"]');
    }

    getPostalCodeField() {
        return cy.get('[data-test="postalCode"]');
    }

    getContinueButton() {
        return cy.get('[data-test="continue"]');
    }

    // Step Two Button & Confirmation
    getFinishButton() {
        return cy.get('[data-test="finish"]');
    }

    getCompleteHeader() {
        return cy.get('.complete-header');
    }

    // --- Actions ---
    
    /**
     * Fills in the customer information form on Checkout Step One.
     */
    fillCustomerInfo(firstName, lastName, zip) {
        this.getFirstNameField().type(firstName);
        this.getLastNameField().type(lastName);
        this.getPostalCodeField().type(zip);
    }
    
    /**
     * Clicks the 'Finish' button to complete the order.
     */
    finishOrder() {
        this.getFinishButton().click();
    }
}

export default new CheckoutPage();