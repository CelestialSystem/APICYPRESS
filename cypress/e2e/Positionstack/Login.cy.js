describe('Postionstack Login page  ', () => {
    before(() => {
        cy.navigateUrlwithCookies('https://positionstack.com/');
    });

    it('1. Test to click on the "Login" button and  navigate to the "Login" page', () => {
        cy.get('.login > a').click({ force: true });
    });

    it('2. Test to check the text "Log in" is present', () => {
        cy.componentVisiblityCheck('strong', 'Log in');
    });

    it('3. Test to check the "Email" input field is present', () => {
        cy.componentVisiblityCheck('#email');
    });

    it('4. Test to check the "Password" input field is present', () => {
        cy.componentVisiblityCheck('#password');
    });

    it('5. Test to check the "Forgot Password" button is present', () => {
        cy.componentVisiblityCheck('.forgot');
    });

    it('6. Test to display the "Login" button', () => {
        cy.componentVisiblityCheck('.submit');
    });

    it('7. Test to show an error for empty "Email" and "Password"', () => {
        cy.get('#email').clear();
        cy.get('#password').clear();
        cy.get('.submit').click();
        cy.checkAlert('Please enter your account email and password.');
    });

    it('8. Test to show an error for invalid "Email" and "Passowrd"', () => {
        cy.get('#email').type('invalid@email');
        cy.get('#password').type('password123');
        cy.get('.submit').click();
        cy.checkAlert('Please enter your account email and password.');
    });

    it('9. Test to show an error for incorrect "Password"', () => {
        cy.get('#email').type('TestUserApiLayer@gmail.com');
        cy.get('#password').type('wrongpassword');
        cy.get('.submit').click();
        cy.checkAlert('Please enter your account email and password.');
    });

    it('10. Test to show an error for incorrect "Email"', () => {
        cy.get('#email').clear().type('testinvalid@gmail.com');
        cy.get('#password').clear().type('Test@123');
        cy.get('.submit').click();
        cy.checkAlert('\n                    \n                                        Login failed. Please try again.\n                                        \n                                        \n                    ');
    });

    it('11. Test to check "Password" field of type password', () => {
        cy.get('#password').should('have.attr', 'type', 'password');
    });

    it('12. Test to check for "Forgot Password" button and redirect to the "Fogot Password" page' , () => {
        cy.get('.forgot').click();
        cy.assertPathname('/forgot');
    })

    it('13. Test to check the text "Forgot Password" is present', () => {
        cy.componentVisiblityCheck('strong', 'Forgot Password');
    });

    it('14. Test to check the "Enter Account Email" text is present', () => {
        cy.componentVisiblityCheck('p > span', 'Enter Account Email');
    });

    it('15.Test to check the "Email" input field is present', () => {
        cy.componentVisiblityCheck('#email');
    });

    it('16.Test to check the "Submit" button is present', () => {
        cy.componentVisiblityCheck('.submit');
    });

    it('17.Test to check the "Email" input field with invalid "Email" and click on the "Submit" button', () => {
        cy.get('#email').type('123@jiio');
        cy.get('.submit').click();
        cy.checkAlert('Update has failed with the following error: Invalid e-mail address.');
    });

    it('18.Test to check for non existing user by adding the random valid "Email"', () => {
        cy.get('#email').type('Testme@gmail.com');
        cy.get('.submit').click();
        cy.checkAlert('Update has failed with the following error: The submitted credentials are not connected to an existing user.');
    });

    it('19.Test to check the "Log in instead" button and navigate back to "Login" page', () => {
        cy.get('.log_in_instead').click();
        cy.assertPathname('/login');
    });
});
