describe('API Glosssary Form Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        // Visit the contact form page before running any tests
        cy.visit('https://apilayer.com/');
    });

    it('1. Accept Cookies if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to naviagate to the Api Glossary page', () => {
        cy.get(':nth-child(5) > .nav-link').click();
    });

    it('3. Test to  show the API Glossary page', () => {
        cy.visit('https://blog.apilayer.com/api-glossary/');
    });
   
    it('4. Test to check the Glossary text available or not', () => {
        cy.get('.amp-post-title').should('contains.text', 'APILayer API Glossary');
        cy.get('.amp-post-title').click();
    });

    it('5. Test to check what is API Glossary text', () => {
        cy.get('h2.cntn-wrp').should('contain.text', 'What is the API Glossary?');
    });

    it('6. Test to check the sub-heading of the glossary ', () => {
        cy.get('p.cntn-wrp').should('contain.text', 'APILayer’s API glossary contains an alphabetical list');
    });

    it('7. Test to check the orderwise alphabetical grossary sections.', () => {
        cy.get('article > :nth-child(4)').should('be.visible', 'contains.text', 'A');
        cy.get('article > :nth-child(6)').should('be.visible', 'contains.text', 'B');
        cy.get('article > :nth-child(46)').should('be.visible', 'contains.text', 'X');
        cy.get('article > :nth-child(48)').should('be.visible', 'contains.text', 'Y');
    });

    it('8. Test to check if search bar is there', () => {
        cy.get('#s_p').should('be.visible');
    });

    it('9. test to check if we can type in search bar', () => {
        cy.get('#s_p').type('filter', { force: true });
        cy.get('#s_p').should('have.value', 'filter');
        cy.wait(3000);
        cy.AcceptCookies();
    });

    it('10. test to check scroll to top button is there', () => {
        cy.get('.scroll-to-top').scrollIntoView();
        cy.get('.scroll-to-top').should('be.visible');
    });

    it('11. test to check on click of scroll to top button it should scroll to top', () => {
        cy.get('.scroll-to-top').click();
        cy.window().its('scrollY').should('equal', 0);
    });
});
