# Air Canada UI Automation – Cypress

This project contains automated UI tests for the [Air Canada](https://www.aircanada.com/) website using Cypress and Cucumber.

## 🧪 Features

- Sign Up tests (positive & negative)
- Login tests (positive & negative)
- Page Object Model structure
- Cucumber BDD syntax (`.feature` files)

## 📦 Project Structure
```
cypress/
├── e2e/
│ ├── features/
│ ├── step_definitions/
│ └── pageObjects/
│ ├── actions.js
│ └── assertions.js
├── fixtures/
└── support/

```
## 🚀 How to Run

1. Install dependencies:
```
npx ci 
```
2. Run tests in interactive mode:
```
npx cypres open 
```

 ## ✅ Requirements

- Node.js
- Cypress
- Cucumber Preprocessor
- cypress.env.json file that contains secret credentials

## 👤 Author

Mostafa Tahboub
