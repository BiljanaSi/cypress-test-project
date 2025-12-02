import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';

/**
 * Test suite focused on validating data integrity and sorting functionality on the Inventory Page.
 */
describe('Inventory Data Validation Tests', () => {

    beforeEach(() => {
        // Set fixed viewport size
        cy.viewport(1366, 768); 
        
        // Login before each test
        LoginPage.visit();
        LoginPage.login('standard_user', 'secret_sauce');
        cy.url().should('include', '/inventory.html');
    });

    it('TC_VAL_01: Should sort items correctly by Price (low to high)', () => {
        const lowestPrice = '$7.99'; 
        
        // 1. Sort the items using the InventoryPage method
        // Using the visible text for readability
        InventoryPage.sortItems('Price (low to high)'); 

        // 2. Assertion: Check the price of the first item (should be the lowest)
        cy.get('.inventory_item_price')
          .first()
          .should('have.text', lowestPrice);

        // 3. Optional: Check the name of the cheapest product for confirmation
        cy.get('.inventory_item_name')
          .first()
          .should('have.text', 'Sauce Labs Bike Light');
    });

    it('TC_VAL_02: Should sort items correctly by Name (Z to A)', () => {
        const highestName = 'T-Shirt (Red)'; 
        
        // 1. Sort the items by Name (Z to A)
        InventoryPage.sortItems('Name (Z to A)'); 

        // 2. Assertion: Check the name of the first item (should be the highest alphabetically)
        cy.get('.inventory_item_name')
          .first()
          .should('have.text', highestName);
    });
});