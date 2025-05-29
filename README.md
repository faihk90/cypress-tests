
# 🧪 Cypress Tests

This project contains automated end-to-end (E2E) tests written in [Cypress](https://www.cypress.io/) using the [Cucumber](https://cucumber.io/) syntax (Gherkin) and follows the Page Object Model design pattern.

## 🚀 Project Structure

```
cypress-tests/
├── cypress/
│   ├── e2e/
│   │   ├── features/           # .feature files with Gherkin syntax
│   │   └── stepDefinitions/    # Step definition files (.ts)
│   ├── pages/                  # Page Object files
│   ├── support/                # Custom commands and config
│   └── fixtures/               # Test data
├── allure-results/            # Allure results (after running tests)
├── allure-report/             # Allure HTML report
├── cypress.config.ts          # Cypress configuration file
├── package.json               # Project dependencies and scripts
└── README.md                  # You're reading this!
```

## ✅ Prerequisites

Before you run the tests, make sure you have the following installed:

- **Node.js** (v18+ recommended)
- **npm** or **yarn**
- **Git**
- **Cypress dependencies installed** (`npm install`)

## 📦 Install Project

```bash
git clone https://github.com/faihk90/cypress-tests.git
cd cypress-tests
npm install
```

## 🧪 Run Tests

### Run Cypress in interactive mode (GUI)

```bash
npx cypress open
```

Choose a browser and select your `.feature` files to run.

### Run Cypress in headless mode (CLI)

```bash
npm run test
```

This will run tests in headless Chrome and generate Allure results.

## 🧬 Allure Reporting

### Generate Allure Report

```bash
npm run allure:generate
```

### Open Allure Report

```bash
npm run allure:open
```

> Make sure tests are run first (`npm run test`) to generate raw results in `allure-results/`.

## 🧱 Cucumber Setup

- Feature files live under `cypress/e2e/features/`
- Step definitions are mapped in `cypress/e2e/stepDefinitions/`

Example `feature`:

```gherkin
Feature: Login

  Scenario: Successful login
    Given I open the login page
    When I enter username "standard_user" and password "secret_sauce"
    Then I should be redirected to the products page
```

## 🔧 Scripts

| Script             | Description                                  |
|--------------------|----------------------------------------------|
| `npm run test`     | Run Cypress tests in headless mode           |
| `npm run allure:generate` | Generate Allure report files        |
| `npm run allure:open`     | Open Allure HTML report              |

## 🧩 Troubleshooting

### Step definitions not found?

Ensure your `package.json` contains:

```json
"cypress-cucumber-preprocessor": {
  "step_definitions": "cypress/e2e/stepDefinitions"
}
```

