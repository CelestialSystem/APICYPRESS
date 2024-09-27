describe('Fixers home page', () => {
    before(() => {
        cy.visit('https://apilayer.com/marketplace/fixer-api');
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "Fixer API" text is present', () => {
        cy.componentVisiblityCheck('.h2', 'Fixer API');
    });

    it('3. Test to check for the caption of the Fixer API', () => {
        cy.componentVisiblityCheck('.col-9 > :nth-child(2)', '');
    });

    it('4. Test to check the "Code Response" window is present', () => {
        cy.componentVisiblityCheck('.col-9 > :nth-child(2)');
    });

    it('5. Test to check the "Subscribe for free" button is present', () => {
        cy.componentVisiblityCheck('#subscribeButton')
    });

    it('6. Test to check the "Live Demo" button is present', () => {
        cy.componentVisiblityCheck('.show-code');
    });

    it('7. Test to check the text "Prcing" tab is present', () => {
        cy.componentVisiblityCheck('#pricing-tab > .d-md-flex > span');
    });

    it('8. Test to check the "API Info" tab is present', () => {
        cy.componentVisiblityCheck('#details-tab > .d-md-flex > span');
    });

    it('9. Test to check the "Documentation" tab is present', () => {
        cy.componentVisiblityCheck('.d-md-flex > .d-none');
    });

    it('10. Test to check the "Review" tab is present', () => {
        cy.componentVisiblityCheck('#reviews-tab > .d-md-flex > span');
    });

    it('11. Test to check the "FAQs" tab is present', () => {
        cy.componentVisiblityCheck('#faqs-tab > .d-md-flex > span');
    });

    it('12. Test to check on the "Live Demo" button click', () => {
        cy.get('.show-code').click();
        cy.get('.sidebar-content', { timeout: 7000 }).should('be.visible');
    });

    it('13. Test to check for text "Sign in to APILayer" is present', () => {
        cy.get('.lead').should('contains.text', 'Sign in to APILayer');
        cy.get('.hs-unfold > .js-hs-unfold-invoker').click();
    })
});