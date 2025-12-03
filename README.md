Cypress QA Portfolio Project: SaucedemoThis project features comprehensive test automation for the Saucedemo web application (an e-commerce platform), implemented using the Cypress framework and the Page Object Model (POM) design pattern.
✨ Key Features
Page Object Model (POM): Clean and maintainable code structure with separate Page classes for Login, Inventory, and Checkout.
Wide Test Coverage: Includes functional, End-to-End (E2E), and Data Validation tests.
Negative Test Scenarios: Verifies correct form validation on the Checkout process.
🛠️ Technologies and Dependencies
🚀 Setup and Running Tests
1. Cloning the RepositoryBash git clone [YOUR_REPO_URL]
cd cypress-test-project
2. Installing DependenciesInstall all necessary Node.js modules (including Cypress):Bashnpm install
3. Executing TestsYou can run tests in headless mode (terminal) or in interactive mode (UI).
A. Headless Execution (Recommended for CI/CD)
Run all test specifications in the Chrome browser:Bash npx cypress run --browser chrome
B. Interactive Execution (UI)Open the Cypress Test Runner for easier debugging:Bash npx cypress open
🧪 Test Structure and Coverage
The project uses the Page Object Model, with Page files defined in cypress/pages/ and test specs in cypress/e2e/.

## 🛠️ Technologies and Dependencies

| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Cypress** | `v13.x` | Primary Testing Framework. |
| **JavaScript/Node.js** | `v20+` / `v24+` | Implementation language and runtime environment. |
| **Chrome Browser** | `v142` (Headless) | Browser used for test execution. |


## 🧪 Test Structure and Coverage

### Folder `cypress/e2e/` (Test Scenarios)

| Test File | Purpose | Coverage Type |
| :--- | :--- | :--- |
| **`e2e_checkout.cy.js`** | Full End-to-End Flow. | Login, adding products, filling out the form, completing the purchase, and verifying success message. |
| **`checkout_negative_scenarios.cy.js`** | Negative Form Testing. | Verifies error messages when required fields are missing (First Name, Last Name, Postal Code). |
| **`inventory_data_validation.cy.js`** | Data Validation and Sorting. | Checks the sorting functionality (e.g., by price **Low to High** and name **Z to A**) and verifies the correct items are displayed first. |


## 🧪 Test Structure and Coverage

### Folder `cypress/e2e/` (Test Scenarios)

| Test File | Purpose | Coverage Type |
| :--- | :--- | :--- |
| **`e2e_checkout.cy.js`** | Full End-to-End Flow. | Login, adding products, filling out the form, completing the purchase, and verifying success message. |
| **`checkout_negative_scenarios.cy.js`** | Negative Form Testing. | Verifies error messages when required fields are missing (First Name, Last Name, Postal Code). |
| **`inventory_data_validation.cy.js`** | Data Validation and Sorting. | Checks the sorting functionality (e.g., by price **Low to High** and name **Z to A**) and verifies the correct items are displayed first. |