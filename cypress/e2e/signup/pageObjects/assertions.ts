export class SingUpAssertions {
    
    static VerifyEmailErrorMessageAppears() {
        cy.contains('Please enter your email address.').should('exist');
    }

    static verifyAppearanceOfPasswordLengthErrorMessage() {
        cy.contains('Please provide a password that meets the requirements.');
    }

    static verifyRegistrationSuccessfully() {
        cy.url().should('contain', 'aeroplan/member/enrolment/confirmation');
    }

}