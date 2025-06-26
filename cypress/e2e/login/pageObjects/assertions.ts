export class LoginAssertions {

    static verifyUserLoginSuccessfully() {
        cy.getCookie('_abck').should('exist');
    }

    static VerifyErrorMessageAppearsOnFailLogin() {
        cy.contains("Please enter your Aeroplan Number or Email").should('be.visible');
    }
}