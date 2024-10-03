import { IPSTACK_BASE_URL } from '../../resources/data';

describe('Ipstack Forgot Password page', () => {
    before(() => {
        // Visit the login page before running any tests
        cy.visit('https://ipstack.com/forgot');
    });

    it('1. Test to click the "Forgot Password" button and navigate to the "Forgot Password" page', () => {
        cy.AcceptCookies();
        cy.get('.login > a').click();
        cy.get('.forgot').click();
        cy.AcceptCookies();
    });

    it('2. Test to check the text "Forgot Password"', () => {
        cy.checkTextVisibility('Forgot Password');
    });

    it('3. Test to have the "Email" input field', () => {
        cy.componentVisiblityCheck('#email');
    });

    it('4. Test to check if "Email" field is empty and click on the "Submit" button and it should show the validation error message "Please enter your account e-mail address."', () => {
        cy.get('#email').clear();
        cy.get('.submit').click();
        cy.checkAlert('Please enter your account e-mail address.');
    });

    it('5. Test to display an validation error "Update has failed with the following error: The submitted credentials are not connected to an existing user." for non-registered "Email"', () => {
        cy.get('#email').clear().type('yjk@gmail.com');
        cy.get('.submit').click();
        cy.checkAlert('Update has failed with the following error: The submitted credentials are not connected to an existing user.');
    });

    it('6. Test to display success "An email containing password reset instructions has been sent to your email address." message when a valid "Email" is submitted', () => {
        cy.get('#email').clear().type('TestUserApiLayer@gmail.com');
        cy.get('.submit').click();
        cy.get('.success').should('contain.text', 'An email containing password reset instructions has been sent to your email address.');
    });

    it('7. Test to allow navigating back to "Login" page by clicking "Log in instead" button', () => {
        cy.get('.log_in_instead').click();
        cy.url().should('include', '/login');
    });

    it('8. Test to redirect to the "Forgot Password" page when clicking the footer link', () => {
        cy.get(':nth-child(4) > :nth-child(5) > a').click();
        cy.assertPathname('/forgot');
        cy.checkTextVisibility('Forgot Password');
        cy.componentVisiblityCheck('#email');
    });

});
