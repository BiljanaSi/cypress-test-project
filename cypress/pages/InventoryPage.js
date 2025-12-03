/**
 * Page Object Model for the Inventory (Products) Page.
 */
class InventoryPage {
    

    // Selector for the Add to Cart button, using the dynamic item key
    addToCartButton(itemName) {
        return cy.get(`[data-test="add-to-cart-${itemName}"]`);
    }

    // Selector for the shopping cart link/icon
    shoppingCartLink() {
        return cy.get('.shopping_cart_link');
    }

    // Selector for the shopping cart badge (item count)
    cartBadge() {
        return cy.get('.shopping_cart_badge');
    }

    // --- Actions ---

    /**
     * Clicks the 'Add to Cart' button for a specific product.
     * @param {string} itemName - The key identifier for the product (e.g., 'sauce-labs-backpack').
     */
    addItemToCart(itemName) {
        this.addToCartButton(itemName).click();
    }

    /**
     * Navigates to the shopping cart page.
     */
    goToCart() {
        this.shoppingCartLink().click();
    }

    getSortDropdown() {
        return cy.get('.product_sort_container').should('be.visible');
    }

    // Action to select a sorting option
    /**
     * Selects an option from the product sorting dropdown.
     * @param {string} sortOption - The visible text or value of the option (e.g., 'Price (low to high)' or 'lohi').
     */
    sortItems(sortOption) {
        this.getSortDropdown().select(sortOption);
    }
}

export default new InventoryPage();