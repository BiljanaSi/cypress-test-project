import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('E2E Checkout Flow Test using POM', () => {

    it('TC_POM_E2E_01: Should complete a successful purchase (Login -> Add Items -> Checkout -> Finish)', () => {
        
        // STEP 1: LOGIN
        LoginPage.visit();
        LoginPage.login('standard_user', 'secret_sauce');
        cy.url().should('include', '/inventory.html');

        // STEP 2: ADD ITEMS TO CART (using InventoryPage)
        
        // Define product keys for flexibility
        const item1Key = 'sauce-labs-backpack';
        const item2Key = 'sauce-labs-bike-light';
        
        InventoryPage.addItemToCart(item1Key);
        InventoryPage.addItemToCart(item2Key);
        
        // Verify cart badge count
        InventoryPage.cartBadge().should('contain.text', '2');

        // STEP 3: GO TO CART
        InventoryPage.goToCart();
        cy.url().should('include', '/cart.html');
        
        // Verify products exist in the cart by their display name
        CheckoutPage.getCartItem('Sauce Labs Backpack').should('exist');
        CheckoutPage.getCartItem('Sauce Labs Bike Light').should('exist');

        // STEP 4: START CHECKOUT (STEP 1)
        CheckoutPage.getCheckoutButton().click();
        cy.url().should('include', '/checkout-step-one.html');

        // STEP 5: FILL CUSTOMER INFO
        CheckoutPage.fillCustomerInfo('QA', 'Automation', '11000');
        CheckoutPage.getContinueButton().click();
        cy.url().should('include', '/checkout-step-two.html');

        // STEP 6: FINISH ORDER
        CheckoutPage.finishOrder();
        cy.url().should('include', '/checkout-complete.html');

        // STEP 7: VERIFY ORDER SUCCESS
        CheckoutPage.getCompleteHeader().should('contain.text', 'Thank you for your order!');
    });
});