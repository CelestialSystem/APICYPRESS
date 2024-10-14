import { TAXDATA_BASE_URL } from '../../resources/data';

describe('Fixers Home page', () => {
    before(() => {
        cy.visit(TAXDATA_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "Tax Data API" text is present', () => {
        cy.checkTextVisibility('Tax Data API');
    });

    it('3. Test to check for the caption "Instant VAT number and tax validation across the globe" is present', () => {
        cy.checkTextVisibility('Instant VAT number and tax validation across the globe');
    });

    it('4. Test to check the code response window is present', () => {
        cy.componentVisiblityCheck('.col-9 > :nth-child(2)');
    });

    it('5. Test to check the "Subscribe for Free" button"', () => {
        cy.componentVisiblityCheck('#subscribeButton')
    });

    it('6. Test to check the "Live demo" button', () => {
        cy.componentVisiblityCheck('.show-code');
    });

    it('7. Test to check the "Pricing" tab is present', () => {
        cy.componentVisiblityCheck('#pricing-tab > .d-md-flex > span');
    });

    it('8. Test to check the "API info" tab is present', () => {
        cy.componentVisiblityCheck('#details-tab > .d-md-flex > span');
    });

    it('9. Test to check the "Documentation" tab is present', () => {
        cy.componentVisiblityCheck('.d-md-flex > .d-none');
    });

    it('10. Test to check the "FAQs" tab is present', () => {
        cy.componentVisiblityCheck('#faqs-tab > .d-md-flex > span');
    });

    it('11. Test to check on the "Live Demo" button click', () => {
        cy.get('.show-code').click();
        cy.get('.sidebar-content', { timeout: 7000 }).should('be.visible');
    });

    it('12. Test to check for text "Sign in to APILayer"', () => {
        cy.checkTextVisibility('Sign in to APILayer');
        cy.get('.hs-unfold > .js-hs-unfold-invoker').click();
    });
});