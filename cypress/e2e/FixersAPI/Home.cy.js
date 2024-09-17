describe('Fixers API Home Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.visit('https://apilayer.com/marketplace/fixer-api');
    });

    it('1. Test to Accept Cookies if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('1. Test to check for the Fixer API text is there or not', () => {
        cy.componentVisiblityCheck('.h2', 'Fixer API');
    });

    it('2. Test to check for the caption of the Fixer API', () => {
        cy.componentVisiblityCheck('.col-9 > :nth-child(2)', '');
    });

    it('3. Test to check the code response window is there or not', () => {
        cy.componentVisiblityCheck('.col-9 > :nth-child(2)');
    });

    it('4. Test to check the Subscribe for free button"', () => {
        cy.componentVisiblityCheck('#subscribeButton')
    });

    it('5. Test to check the Live demo button', () => {
        cy.componentVisiblityCheck('.show-code');
    });

    it('6. Test to check the text Prcing tab is there or not', () => {
        cy.componentVisiblityCheck('#pricing-tab > .d-md-flex > span');
    });

    it('7. Test to check the API Info tab', () => {
        cy.componentVisiblityCheck('#details-tab > .d-md-flex > span');
    });

    it('8. Test to check the Documentation tab', () => {
        cy.componentVisiblityCheck('.d-md-flex > .d-none');
    });

    it('9. Test to check the Review tab', () => {
        cy.componentVisiblityCheck('#reviews-tab > .d-md-flex > span');
    });

    it('10. Test to check the FAQs tab', () => {
        cy.componentVisiblityCheck('#faqs-tab > .d-md-flex > span');
    });

    it('11. Test to login', () => {
        cy.get('.show-code').click();
        cy.componentVisiblityCheck('.sidebar-content');
    });

    it('12. Test to check for text "Sign in to APILayer"', () => {
        cy.get('.lead').should('contains.text', 'Sign in to APILayer');
        cy.get('.hs-unfold > .js-hs-unfold-invoker').click();
    })
});
