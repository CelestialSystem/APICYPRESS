describe('MediaStack Login Page  ', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.navigateUrlwithCookies('https://mediastack.com/');
    });

    it('0. Test to navigate to the login page', () => {
        cy.get('.login > a').click({ force: true });
    });

    it('1. Test to check the login text', () => {
        cy.componentVisiblityCheck('strong', 'Log in');
    });

    it('2. Test to check the email input field', () => {
        cy.componentVisiblityCheck('#email');
    });

    it('3. Test to check the password input field', () => {
        cy.componentVisiblityCheck('#password');
    });

    it('4. Test to check the forgot password button is there or not', () => {
        cy.componentVisiblityCheck('.forgot');
    });

    it('5. Test to display the login button', () => {
        cy.componentVisiblityCheck('.submit');
    });

    it('6. Test to show an error for empty email and password', () => {
        cy.get('#email').clear();
        cy.get('#password').clear();
        cy.get('.submit').click();
        cy.checkAlert('Please enter your account email and password.');
    });

    it('7. Test to show an error for invalid email and passowrd', () => {
        cy.get('#email').type('invalid@email');
        cy.get('#password').type('password123');
        cy.get('.submit').click();
        cy.checkAlert('Please enter your account email and password.');
    });

    it('8. Test to show an error for incorrect password', () => {
        cy.get('#email').type('TestUserApiLayer@gmail.com');
        cy.get('#password').type('wrongpassword');
        cy.get('.submit').click();
        cy.checkAlert('Please enter your account email and password.');
    });

    it('9. Test to show an error for incorrect email', () => {
        cy.get('#email').clear().type('testinvalid@gmail.com');
        cy.get('#password').clear().type('Test@123');
        cy.get('.submit').click();
        cy.checkAlert('\n                    \n                                        Login failed. Please try again.\n                                        \n                                        \n                    ');
    });

    it('10. Test to check password field of type password', () => {
        cy.get('#password').should('have.attr', 'type', 'password');
    });

    it('11. Test to check for Forgot password', () => {
        cy.get('.forgot').click();
        cy.assertPathname('/forgot');
    })

    it('12. Test to load the Forgot Password page', () => {
        cy.componentVisiblityCheck('strong', 'Forgot Password');
    });

    it('13. Test to check the Enter Account Email page', () => {
        cy.componentVisiblityCheck('p > span', 'Enter Account Email');
    });

    it('14.Test to have the email input field', () => {
        cy.componentVisiblityCheck('#email');
    });

    it('15.Test to have the submit input field', () => {
        cy.componentVisiblityCheck('.submit');
    });

    it('16.Test to have the email input field', () => {
        cy.get('#email').type('123@jiio');
        cy.get('.submit').click();
        cy.checkAlert('Update has failed with the following error: Invalid e-mail address.');
    });

    it('17.Test to check the for non existing user', () => {
        cy.get('#email').type('Testme@gmail.com');
        cy.get('.submit').click();
        cy.checkAlert('Update has failed with the following error: The submitted credentials are not connected to an existing user.');
    });

    it('18.Test to check the Log in instead button', () => {
        cy.get('.log_in_instead').click();
        cy.assertPathname('/login');
    });
});