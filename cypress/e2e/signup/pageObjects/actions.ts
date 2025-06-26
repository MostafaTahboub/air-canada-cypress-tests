import { validRegisterUser } from "../fixtures/data";

export class SingUpActions {

    static openSignUpPage() {
        cy.visit('https://www.aircanada.com/aeroplan/member/enrolment');
        cy.wait(2000);
    }

    static enterEmptyEmail() {
        cy.get('input[name="emailAddress"]').clear();
    }
    static enterValidPassword() {
        cy.clearAndType('input[name="password"]', validRegisterUser.password);
    }

    static enterShortPassword() {
        cy.clearAndType('input[name="password"]', validRegisterUser.shortPassword);
    }

    static fillAccountInfo(email: string, password: string) {
        cy.clearAndType('input[name="emailAddress"]', 'testuser@example.com');
        cy.clearAndType('input[name="password"]', 'StrongPassword123!');
    }

    static checkTheAcceptedCheckbox() {
        cy.get('#checkBox-input').check({ force: true });
    }

    static clickContinueButton() {
        cy.get('button').contains('Continue').click();
    }

    static fillValidPersonalInfo() {
        cy.get('input[name="firstName"]').type('John')
        cy.get('input[name="lastName"]').type('Doe')

        cy.get('mat-select[name="gender"]').click();
        cy.get('mat-option').contains('Male').click();

        cy.get('mat-select[name="language"]').click();
        cy.get('mat-option').contains('English').click();

        cy.get('mat-select[formcontrolname="d"]').click();
        cy.get('mat-option').contains('15').click();

        cy.get('mat-select[formcontrolname="m"]').click();
        cy.get('mat-option').contains('April').click();

        cy.get('mat-select[formcontrolname="y"]').click();
        cy.get('mat-option').contains('1990').click();

        cy.get('abcButtonElement23').click();
    }

    static fillsInValidContactInformation(country: string) {
        cy.get('input[formcontrolname="addressLine1"]').type(`${country}`, { delay: 100 });

        cy.get('.pac-item')
            .contains(`{country}`).eq(0)
            .click();

        cy.get('mat-select[formcontrolname="countryCode"]').click();
        cy.get('mat-option').contains(`${country}`).click();

        cy.get('input[formcontrolname="phoneNumber"]').type('0598701861');
    }

    static agreePrivacyPolicy() {
        cy.get('#privacyPolicycheckBox-input').check({ force: true });
    }

    static clickSubmitButton() {
        cy.get('button').contains('Create my account').click();
    }

}