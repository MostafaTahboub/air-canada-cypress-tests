
export class LoginActions {

    static openLoginPage() {
        cy.visit('/');
        cy.contains('Sign in', { matchCase: false }).click({ force: true });
        cy.wait(1000);
    }

    static fillLoginFields(email: string, password: string) {
        cy.get('#gigya-loginID-36809123729262220')
            .type(email, { force:true });
        cy.get('#gigya-password-70610748058497410')
            .type(password, { force: true });
    }
    static clickLoginButton() {
        cy.intercept('POST', '/accounts.login').as('loginRequest');
        cy.get('input[type="submit"][value="Sign in"]').click();
    }
}