describe('IpApi Free Signup page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.visit('https://ipapi.com');
        cy.wait(2000); // Wait for the page
    });

    it('1. Test to click the free signup button', () => {
        cy.get(':nth-child(4) > :nth-child(4) > a').click();
    });

    it('2. Test to redirect to the signup page', () => {
        cy.assertPathname('/signup/free');
    });


    it('3. Test to display the signup page container', () => {
        cy.componentVisiblityCheck('.preapp > .container');
    });

    it('4. Test to display the signup page heading', () => {
        cy.componentVisiblityCheck('.plan_name_heading');
        cy.componentVisiblityCheck('strong', 'Sign Up: ');
    });

    it('5. Test to display the subscription options', () => {
        cy.componentVisiblityCheck('tbody > :nth-child(1) > :nth-child(1)', 'Free');
        cy.componentVisiblityCheck('tbody > :nth-child(2) > :nth-child(1)', 'Standard');
        cy.componentVisiblityCheck('tbody > :nth-child(3) > :nth-child(1)', '\n                                                \n                                                Business\n                                                ');
        cy.componentVisiblityCheck('tbody > :nth-child(4) > :nth-child(1)', '\n                                                \n                                                Business Pro\n                                                ');
    });

    it('6. Test to display the correct subscription details', () => {
        cy.componentVisiblityCheck('tbody > :nth-child(1) > :nth-child(3)', '$0 / Monthly');
        cy.componentVisiblityCheck('tbody > :nth-child(2) > :nth-child(3)', '$10 / Monthly');
        cy.componentVisiblityCheck('tbody > :nth-child(3) > :nth-child(3)', '$50 / Monthly');
        cy.componentVisiblityCheck('tbody > :nth-child(4) > :nth-child(3)', '$100 / Monthly');
    });

    it('7. Test to display all account detail fields', () => {
        cy.componentVisiblityCheck('.account > :nth-child(1)');
        cy.componentVisiblityCheck('.account > :nth-child(2)');
        cy.componentVisiblityCheck('.account > :nth-child(3)');
        cy.get('input[placeholder="Min 6 characters"]').should('be.visible').and('have.attr', 'type', 'password');
    });

    it('8. Test to display all billing detail fields', () => {
        cy.componentVisiblityCheck('#address');
        cy.componentVisiblityCheck('#post_code');
        cy.componentVisiblityCheck('#country_code');
        cy.componentVisiblityCheck('#state');
        cy.componentVisiblityCheck('#city');
    });

    it('9.Test to display all company detail fields', () => {
        cy.componentVisiblityCheck('#company_name');
        cy.componentVisiblityCheck('#website_url');
        cy.componentVisiblityCheck('#tax_id');
        cy.componentVisiblityCheck('#HowDidYouHear');
    });

    it('10.Test to display all company detail fields', () => {
        cy.componentVisiblityCheck('#company_name');
        cy.componentVisiblityCheck('#website_url');
        cy.componentVisiblityCheck('#tax_id');
        cy.componentVisiblityCheck('#HowDidYouHear');
    });

    it('11. Test to check First Name field is there and type on it', () => {
        cy.componentVisiblityCheck('#first_name');
        cy.get('#first_name').type('Test first name');
        cy.get('#first_name').should('have.value', 'Test first name')
    });

    it('12. Test to check Last Name field is there and type on it', () => {
        cy.componentVisiblityCheck('#last_name');
        cy.get('#last_name').type('Test last name');
        cy.get('#last_name').should('have.value', 'Test last name')
    });

    it('13. Test to check email field is there and type on it', () => {
        cy.componentVisiblityCheck('#email');
        cy.get('#email').type('test@gmail.com');
        cy.get('#email').should('have.value', 'test@gmail.com')
    });

    it('14. Test to check address field is there and type on it', () => {
        cy.componentVisiblityCheck('#address');
        cy.get('#address').type('test address');
        cy.get('#address').should('have.value', 'test address')
    });

    it('15. Test to check Postal Code field is there and type on it', () => {
        cy.componentVisiblityCheck('#post_code');
        cy.get('#post_code').type('1112232');
        cy.get('#post_code').should('have.value', '1112232')
    });

    it('16. Test to check Country field is there and type on it', () => {
        cy.componentVisiblityCheck('#country_code');
        cy.get('#country_code').select('India');
        cy.get('#country_code').should('have.value', 'IN')
    });

    it('17. Test to check State field is there and type on it', () => {
        cy.componentVisiblityCheck('#state-select');
        cy.get('#state-select').select('Karnataka');
        cy.get('#state-select').should('have.value', 'Karnataka')
    });

    it('18. Test to check City field is there and type on it', () => {
        cy.componentVisiblityCheck('#city');
        cy.get('#city').type('Banglore', { force: true });
        cy.get('#city').should('have.value', 'Banglore')
    });

    it('19. Test to check Company Name field is there and type on it', () => {
        cy.componentVisiblityCheck('#company_name');
        cy.get('#company_name').type('Test Company');
        cy.get('#company_name').should('have.value', 'Test Company')
    });

    it('20. Test to check Company url field is there and type on it', () => {
        cy.componentVisiblityCheck('#website_url');
        cy.get('#website_url').type('https//:test.url');
        cy.get('#website_url').should('have.value', 'https//:test.url')
    });

    it('21. Test to check Tax ID field is there and type on it', () => {
        cy.componentVisiblityCheck('#tax_id');
        cy.get('#tax_id').type('11112334545');
        cy.get('#tax_id').should('have.value', '11112334545')
    });

    it('22. Test to check Tax ID field is there and type on it', () => {
        cy.componentVisiblityCheck('#HowDidYouHear');
        cy.get('#HowDidYouHear').type('Blog', { force: true });
        cy.get('[data-value="Blog"]').click();
        cy.get('#HowDidYouHear').should('have.value', 'Blog')
    });
});