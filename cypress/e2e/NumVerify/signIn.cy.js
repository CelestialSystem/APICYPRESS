import { NUMVERIFY_BASE_URL } from '../../resources/data';

describe('NumVerify Login page', () => {
    before(() => {
        cy.navigateUrlwithCookies(NUMVERIFY_BASE_URL);
    });

    it('1. Test to navigate to the "Login" page', () => {
        cy.get('.cursor_pointer').click({ force: true });
        cy.url().should('eq', 'https://numverify.com/login');
    });

    it('2. Test to check the "Log in to your account" text is present', () => {
        cy.componentVisiblityCheck('center.signup_heading > h1', 'Log in to your account');
    });

    it('3. Test to check the "Email" input field is present', () => {
        cy.componentVisiblityCheck('#email_address');
    });

    it('4. Test to check the "Password" input field is present', () => {
        cy.componentVisiblityCheck('#password');
    });

    it('5. Test to check the "Forgot Password" button is present', () => {
        cy.componentVisiblityCheck('.forgot');
    });

    it('6. Test to display the "Login" button', () => {
        cy.componentVisiblityCheck('.login_form_fieldset > .login_button');
    });

    it('7. Test to show an error for empty "Email" and "Password"', () => {
        cy.get('#email_address').clear();
        cy.get('#password').clear();
        cy.get('.login_form_fieldset > .login_button').click();
        cy.get('.error_box').should('have.text', 'Login failed. Please try again.');
    });

    it('8. Test to show an error for invalid "Email" and "Password"', () => {
        cy.get('#email_address').type('invalid@email');
        cy.get('#password').type('password123');
        cy.get('.login_form_fieldset > .login_button').click();
        cy.get('.error_box').should('have.text', 'Login failed. Please try again.');
    });

    it('9. Test to show an error for incorrect "Password"', () => {
        cy.get('#email_address').type('TestUserApiLayer@gmail.com');
        cy.get('#password').type('wrongpassword');
        cy.get('.login_form_fieldset > .login_button').click();
        cy.get('.error_box').should('have.text', 'Login failed. Please try again.');
    });

    it('10. Test to show an error for incorrect "Email"', () => {
        cy.get('#email_address').clear().type('testinvalid@gmail.com');
        cy.get('#password').clear().type('Test@123');
        cy.get('.login_form_fieldset > .login_button').click();
        cy.get('.error_box').should('have.text', 'Login failed. Please try again.');
    });

    it('11. Test to check password field is of type "Password"', () => {
        cy.get('#password').should('have.attr', 'type', 'password');
    });

    it('12. Test to click on "Forgot password" button', () => {
        cy.get('.forgot').click();
        cy.assertPathname('/forgot');
    });

    it('13. Test to load the "Forgot Password" page', () => {
        cy.componentVisiblityCheck('center.signup_heading > h1', "Forgot your password? Don't worry.");
    });

    it('14. Test to check the "Enter Account Email" title is present', () => {
        cy.componentVisiblityCheck(':nth-child(3) > :nth-child(1) > .signup_heading', 'Request password reset');
    });

    it('15. Test to check "Email" input field is present', () => {
        cy.componentVisiblityCheck('#email_address');
    });

    it('16. Test to check "Submit" input field is present', () => {
        cy.componentVisiblityCheck(':nth-child(2) > .login_button');
    });

    it('17. Test to type wrong "Email"', () => {
        cy.get('#email_address').type('123@jiio');
        cy.get(':nth-child(2) > .login_button').click();
        cy.get('.error_box').should('have.text', 'Update has failed with the following error: Invalid e-mail address.');
    });

    // it('18. Test to check for non-existing user', () => {
    //     cy.get('#email_address').type('Testme@gmail.com');
    //     cy.get(':nth-child(2) > .login_button').click();
    //     cy.get('.error_box').should('have.text', 'Login failed. Please try again.');
    // });
});
