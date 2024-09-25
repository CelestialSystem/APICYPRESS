describe('Fixers API Home Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.visit('https://apilayer.com/marketplace/tax_data-api');
    });

    it('1. Test to accept cookies if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('1. Test to check for the "Tax Data API" text present or not', () => {
        cy.checkTextVisibility('Tax Data API');
    });

    it('2. Test to check for the caption of the taxdata api', () => {
        cy.checkTextVisibility('Instant VAT number and tax validation across the globe');
    });

    it('3. Test to check the code response window present or not', () => {
        cy.componentVisiblityCheck('.col-9 > :nth-child(2)');
    });

    it('4. Test to check the "Subscribe for Free" button"', () => {
        cy.componentVisiblityCheck('#subscribeButton')
    });

    it('5. Test to check the "Live demo" button', () => {
        cy.componentVisiblityCheck('.show-code');
    });

    it('6. Test to check the "Prcing" tab present or not', () => {
        cy.componentVisiblityCheck('#pricing-tab > .d-md-flex > span');
    });

    it('7. Test to check the "API info" tab present or not', () => {
        cy.componentVisiblityCheck('#details-tab > .d-md-flex > span');
    });

    it('8. Test to check the "Documentation" tab present or not', () => {
        cy.componentVisiblityCheck('.d-md-flex > .d-none');
    });

    it('9. Test to check the "FAQs" tab present or not', () => {
        cy.componentVisiblityCheck('#faqs-tab > .d-md-flex > span');
    });

    it('10. Test to check on the "Live Demo" button click', () => {
        cy.get('.show-code').click();
        cy.get('.sidebar-content', { timeout: 7000 }).should('be.visible');
    });

    it('11. Test to check for text "Sign in to APILayer"', () => {
        cy.checkTextVisibility('Sign in to APILayer');
        cy.get('.hs-unfold > .js-hs-unfold-invoker').click();
    })
});