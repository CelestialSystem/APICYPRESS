describe('MediaStack Login Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.navigateUrlwithCookies('https://mediastack.com/');
    });

    it('1. Test to navigate to the login page', () => {
        cy.get('.login > a').click({ force: true });
        cy.assertPathname('/login');
    });

    it('2. Test to check the "Login" text', () => {
        cy.componentVisiblityCheck('strong', 'Log in');
    });

    it('3. Test to check the "Email" input field is present', () => {
        cy.componentVisiblityCheck('#email');
    });

    it('4. Test to check the "Password" input field is present', () => {
        cy.componentVisiblityCheck('#password');
    });

    it('5. Test to check the forgot password button is there or not', () => {
        cy.componentVisiblityCheck('.forgot');
    });

    it('6. Test to display the "Login" button', () => {
        cy.componentVisiblityCheck('.submit');
    });

    it('7. Test to show an error for empty email and password', () => {
        cy.get('#email').clear();
        cy.get('#password').clear();
        cy.get('.submit').click();
        cy.checkAlert('Please enter your account email and password.');
    });

    it('8. Test to show an error for invalid email and password', () => {
        cy.get('#email').type('invalid@email');
        cy.get('#password').type('password123');
        cy.get('.submit').click();
        cy.checkAlert('Please enter your account email and password.');
    });

    it('9. Test to show an error for incorrect password', () => {
        cy.get('#email').type('TestUserApiLayer@gmail.com');
        cy.get('#password').type('wrongpassword');
        cy.get('.submit').click();
        cy.checkAlert('Please enter your account email and password.');
    });

    it('10. Test to show an error for incorrect email', () => {
        cy.get('#email').clear().type('testinvalid@gmail.com');
        cy.get('#password').clear().type('Test@123');
        cy.get('.submit').click();
        cy.checkAlert('\n                    \n                                        Login failed. Please try again.\n                                        \n                                        \n                    ');
    });

    it('11. Test to check password field is of type password', () => {
        cy.get('#password').should('have.attr', 'type', 'password');
    });

    it('12. Test to click on Forgot password', () => {
        cy.get('.forgot').click();
        cy.assertPathname('/forgot');
    });

    it('13. Test to load the "Forgot Password" page', () => {
        cy.componentVisiblityCheck('strong', 'Forgot Password');
    });

    it('14. Test to check the "Enter Account Email" title is present', () => {
        cy.componentVisiblityCheck('p > span', 'Enter Account Email');
    });

    it('15. Test to check "Email" input field is present', () => {
        cy.componentVisiblityCheck('#email');
    });

    it('16. Test to check "Submit" input field is present', () => {
        cy.componentVisiblityCheck('.submit');
    });

    it('17. Test to type wrong email', () => {
        cy.get('#email').type('123@jiio');
        cy.get('.submit').click();
        cy.checkAlert('Update has failed with the following error: Invalid e-mail address.');
    });

    it('18. Test to check for non-existing user', () => {
        cy.get('#email').type('Testme@gmail.com');
        cy.get('.submit').click();
        cy.checkAlert('Update has failed with the following error: The submitted credentials are not connected to an existing user.');
    });

    it('19. Test to check the Log in instead button', () => {
        cy.get('.log_in_instead').click();
        cy.assertPathname('/login');
    });
});
