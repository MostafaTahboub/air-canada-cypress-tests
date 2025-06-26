import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { validUser } from "../../../login/fixtures/data";
import { validRegisterUser } from "../../fixtures/data";
import { SingUpActions } from "../../pageObjects/actions";
import { SingUpAssertions } from "../../pageObjects/assertions";

// --- Shared ---
Given('the user is on the enrolment page', () => {
    SingUpActions.openSignUpPage();
});

When('the user clicks the "Continue" button', () => {
    cy.contains('button', 'Continue').click();
});

// --- Scenario: Successful Registration ---
When('the user fills in all required account information', () => {
    SingUpActions.fillAccountInfo(validRegisterUser.email, validRegisterUser.password);
});

When('the user checks the "Read and Accepted" checkbox', () => {
    SingUpActions.checkTheAcceptedCheckbox();
});

When('the user fills in valid personal information', () => {
    SingUpActions.fillValidPersonalInfo();
});

When('the user fills in valid contact information', () => {
    SingUpActions.fillsInValidContactInformation(validRegisterUser.country);
});

When('the user agrees to the privacy policy', () => {
    SingUpActions.agreePrivacyPolicy();
});

When('the user submits the registration form', () => {
    SingUpActions.clickSubmitButton();
});

Then('the user should see a confirmation message or their Aeroplan number', () => {
    SingUpAssertions.verifyRegistrationSuccessfully();
});

// --- Scenario: Empty Email Field ---
When('the user leaves the email field empty', () => {
    cy.get('input[name="emailAddress"]').clear();
});

When('the user enters a valid password', () => {
    cy.get('input[name="password"]').clear().type('ValidPassword123!');
});

Then('the user should see an error message indicating that the email is required', () => {
    SingUpAssertions.VerifyEmailErrorMessageAppears();
});

// --- Scenario: Password Too Short ---
When('the user enters a valid email', () => {
    cy.clearAndType('input[name="emailAddress"]', validUser.email);
});

When('the user enters a password shorter than the required length', () => {
    SingUpActions.enterShortPassword();
});

Then('the user should see an error message about the password length requirement', () => {
    SingUpAssertions.verifyAppearanceOfPasswordLengthErrorMessage();
});
