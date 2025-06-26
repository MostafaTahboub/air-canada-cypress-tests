import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginActions } from "../../pageObjects/actions";
import { LoginAssertions } from "../../pageObjects/assertions";
import { invalidUser, validUser } from "../../fixtures/data";

Given('user open the Air Canada login page', () => {
    LoginActions.openLoginPage();
})

When('user enters a valid registered username and password', () => {
    LoginActions.fillLoginFields(validUser.email, validUser.password);
});

When('click the login button', () => {
    LoginActions.clickLoginButton();
});

Then('user should be redirected to my account dashboard', () => {
    LoginAssertions.verifyUserLoginSuccessfully();
});

When('user leaves email empty and enter password', () => {
    LoginActions.fillLoginFields(' ', validUser.password);
});

Then('user should see an error message indicating an empty email', () => {
    LoginAssertions.VerifyErrorMessageAppearsOnFailLogin();
});