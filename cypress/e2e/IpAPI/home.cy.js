describe('IpApi Home Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.navigateUrlwithCookies('https://ipapi.com');
    });

    it('1. Test to check "Pricing" hyperlink is present in navbar', () => {
        cy.componentVisiblityCheck('.header > .container > ul > :nth-child(1)', 'Pricing');
    });

    it('2. Test to check "Documentation" hyperlink is present in navbar', () => {
        cy.componentVisiblityCheck('.header > .container > ul > :nth-child(2)', 'Documentation');
    });

    it('3. Test to check "FAQ" hyperlink is present in navbar', () => {
        cy.componentVisiblityCheck('.header > .container > ul > :nth-child(3)', 'FAQ');
    });

    it('4. Test to check "Affiliates" hyperlink is present in navbar', () => {
        cy.componentVisiblityCheck('.header > .container > ul > :nth-child(4)', 'Affiliates');
    });

    it('5. Test to check "Blog" hyperlink is present in navbar', () => {
        cy.componentVisiblityCheck('.header > .container > ul > :nth-child(5)', 'Blog');
    });

    it('6. Test to check "Status" hyperlink is present in navbar', () => {
        cy.componentVisiblityCheck('.header > .container > ul > :nth-child(6)', 'Status');
    });

    it('7. Test to check "Log In" button is present"', () => {
        cy.get('.login > a').scrollIntoView();
        cy.componentVisiblityCheck('.login > a', 'Log In');
    });

    it('8. Test to check "Sign Up Free" Button is present"', () => {
        cy.componentVisiblityCheck('ul > .cta', 'Sign Up Free');
    });

    it('9. Test to check title is "Real-time Geolocation & Reverse IP Lookup REST API" is present', () => {
        cy.componentVisiblityCheck('.inline > h2', "Real-time Geolocation &\n                        Reverse IP Lookup REST API\n     ");
    });

    it('10. Test to check "GET FREE API KEY" button is present', () => {
        cy.componentVisiblityCheck('.inline > .cta', "Get Free API Key");
    });

    it('11. Test to click "GET FREE API KEY" button is present', () => {
        cy.get('.inline > .cta').click();
        cy.location('pathname').should('eq', '/signup/free');
        cy.go('back');
    });

    it('12. Test to check "API DOCUMENTATION" button is present', () => {
        cy.componentVisiblityCheck('.secondary', "API Documentation");
    });

    it('13. Test to click "GET FREE API KEY" button is present', () => {
        cy.get('.secondary').click();
        cy.location('pathname').should('eq', '/documentation');
        cy.go('back');
    });

    it('14. Test to check title "Your one-stop solution for IP address data" is present', () => {
        cy.get('.showoff > .container > h2').scrollIntoView();
        cy.componentVisiblityCheck('.showoff > .container > h2', "Your one-stop solution for IP address data");
    });

    it('15. Test to check title "Content Personalization"', () => {
        cy.get('[data-grid-menu="cp"]').scrollIntoView();
        cy.componentVisiblityCheck('[data-grid-menu="cp"]', "Content Personalization");
        cy.get('[data-grid-menu="cp"]').click();
        cy.get('.ny').should('be.visible')
    });

    it('16. Test to check Button "Language Redirection" is present', () => {
        cy.get('[data-grid-menu="lr"]').scrollIntoView();
        cy.componentVisiblityCheck('[data-grid-menu="lr"]', "Language Redirection");
        cy.get('[data-grid-menu="lr"]').click();
        cy.get('.es').should('be.visible')
    });

    it('17. Test to check Button "Currency Detection" is present', () => {
        cy.get('[data-grid-menu="cd"]').scrollIntoView();
        cy.componentVisiblityCheck('[data-grid-menu="cd"]', "Currency Detection");
        cy.get('[data-grid-menu="cd"]').click();
        cy.get('.jpy').should('be.visible')
    });

    it('18. Test to check Button " Time Zone Lookup" is present', () => {
        cy.get('[data-grid-menu="tz"]').scrollIntoView();
        cy.componentVisiblityCheck('[data-grid-menu="tz"]', "Time Zone Lookup");
        cy.get('[data-grid-menu="tz"]').click();
        cy.get('.aest').should('be.visible')
    });

    it('19. Test to check Button "Fraud Prevention" is present', () => {
        cy.get('[data-grid-menu="fp"]').scrollIntoView();
        cy.componentVisiblityCheck('[data-grid-menu="fp"]', "Fraud Prevention");
        cy.get('[data-grid-menu="fp"]').click();
        cy.get('.disallow').should('be.visible')
    });

    it('20. Test to check "Clients" container is present', () => {
        cy.get('.clients').scrollIntoView();
        cy.componentVisiblityCheck('.clients', 'Trusted by the smartest brands');
        cy.get('.clients').should('be.visible', 'contains.text', 'Trusted by the smartest brands');
    });

    it('21. Test to check "Features" container is present', () => {
        cy.get('.response_features > .container > h2').scrollIntoView();
        cy.componentVisiblityCheck('.response_features > .container > h2', 'Unleash the power of IP Intelligence');
    });
});