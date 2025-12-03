# 🛒 Cypress QA Portfolio Project: Saucedemo

This project features comprehensive test automation for the Saucedemo web application (an e-commerce platform), implemented using the **Cypress** framework and the **Page Object Model (POM)** design pattern.

---

## ✨ Key Features

* **Page Object Model (POM):** Clean and maintainable code structure with separate Page classes for Login, Inventory, and Checkout.
* **Wide Test Coverage:** Includes functional, End-to-End (E2E), and Data Validation tests.
* **Negative Test Scenarios:** Verifies correct form validation on the Checkout process.

---

## 🚀 Setup and Running Tests

### 1. Installation

Clone the repository and navigate into the project directory:


git clone [YOUR_REPO_URL]
cd cypress-test-project

Install all necessary Node.js modules (including Cypress)

npm install


2. Execution Methods
You can run tests in headless mode (terminal) or via the interactive Test Runner.

A. Headless Execution (Recommended for CI/CD)
Runs all test specifications and outputs results to the console:

npx cypress run --browser chrome

B. Interactive Execution (UI)
Opens the Cypress Test Runner for easier development and debugging:


npx cypress open


## 🛠️ Technologies and Dependencies
| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Cypress** | `v13.x` | Primary Test Automation Framework. |
| **JavaScript/Node.js** | `v20+` / `v24+` | Implementation Language and Runtime Environment. |
| **Chrome Browser** | `v142` (Headless/Headed) | Browser used for test execution. |

---





## 🧪 Test Structure and Coverage

### Folder `cypress/e2e/` (Test Scenarios)

| Test File | Purpose | Coverage Type |
| :--- | :--- | :--- |
| **`e2e_checkout.cy.js`** | Full End-to-End Flow. | Login, adding products, filling out the form, completing the purchase, and verifying success message. |
| **`checkout_negative_scenarios.cy.js`** | Negative Form Testing. | Verifies error messages when required fields are missing (First Name, Last Name, Postal Code). |
| **`inventory_data_validation.cy.js`** | Data Validation and Sorting. | Checks the sorting functionality (e.g., by price **Low to High** and name **Z to A**) and verifies the correct items are displayed first. |