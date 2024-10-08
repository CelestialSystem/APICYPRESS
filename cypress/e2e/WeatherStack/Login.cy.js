import { WEATHERSTACK_BASE_URL } from '../../resources/data';

describe('Weathertack Login page  ', () => {
    before(() => {
        cy.navigateUrlwithCookies(WEATHERSTACK_BASE_URL);
    });

    it('1. Test to click on "Log in" hyperlink', () => {
        cy.get('.login > a').click();
    });

    it('2. Test to check the text "Log in" is present', () => {
        cy.checkTextVisibility('Log in');
    });

    it('3. Test to check the "Email" input field', () => {
        cy.componentVisiblityCheck('#email');
    });

    it('4. Test to check the "Password" input field', () => {
        cy.componentVisiblityCheck('#password');
    });

    it('5. Test to check the "Forgot Password" button is present', () => {
        cy.componentVisiblityCheck('.forgot');
    });

    it('6. Test to check the "Login" button is present', () => {
        cy.componentVisiblityCheck('.submit');
    });

    it('7. Test to show an error validation "Please enter your account email and password" for empty email and password', () => {
        cy.get('#email').clear();
        cy.get('#password').clear();
        cy.get('.submit').click();
        cy.checkAlert('Please enter your account email and password.');
    });

    it('8. Test to show an error "Please enter your account email and password" for invalid email and passowrd', () => {
        cy.get('#email').type('invalid@email');
        cy.get('#password').type('password123');
        cy.get('.submit').click();
        cy.checkAlert('Please enter your account email and password.');
    });

    it('9. Test to show an error "Please enter your account email and password" for incorrect password', () => {
        cy.get('#email').type('TestUserApiLayer@gmail.com');
        cy.get('#password').type('wrongpassword');
        cy.get('.submit').click();
        cy.checkAlert('Please enter your account email and password.');
    });

    it('10. Test to show an error "Login failed. Please try again" for incorrect email', () => {
        cy.get('#email').clear().type('testinvalid@gmail.com');
        cy.get('#password').clear().type('Test@123');
        cy.get('.submit').click();
        cy.checkAlert('\n                    \n                                        Login failed. Please try again.\n                                        \n                                        \n                    ');
    });

    it('11. Test to check "Password" field of type password', () => {
        cy.get('#password').should('have.attr', 'type', 'password');
    });

    it('12. Test to click on the "Forgot Password" button', () => {
        cy.get('.forgot').click();
        cy.assertPathname('/forgot');
    });

    it('13. Test to check the text "Forgot Password" is present', () => {
        cy.componentVisiblityCheck('strong', 'Forgot Password');
    });

    it('14. Test to check  "Enter Account Email" page', () => {
        cy.componentVisiblityCheck('p > span', 'Enter Account Email');
    });

    it('15.Test to check the email input field is present', () => {
        cy.componentVisiblityCheck('#email');
    });

    it('16.Test to check the submit input field is present', () => {
        cy.componentVisiblityCheck('.submit');
    });

    it('17.Test to show an error "Update has failed with the following error: Invalid e-mail address." for invalid email', () => {
        cy.get('#email').type('123@jiio');
        cy.get('.submit').click();
        cy.checkAlert('Update has failed with the following error: Invalid e-mail address.');
    });

    it('18.Test to show an error "Update has failed with the following error: The submitted credentials are not connected to an existing user." for non existing user', () => {
        cy.get('#email').type('Testme@gmail.com');
        cy.get('.submit').click();
        cy.checkAlert('Update has failed with the following error: The submitted credentials are not connected to an existing user.');
    });

    it('19.Test to check the Log in instead button', () => {
        cy.get('.log_in_instead').click();
        cy.assertPathname('/login');
    });
});