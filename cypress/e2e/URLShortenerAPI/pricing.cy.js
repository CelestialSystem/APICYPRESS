import { SHORTURLAPI_BASE_URL } from '../../resources/data';

describe('URL Shortener API Pricing page', () => {
    before(() => {
        cy.visit(SHORTURLAPI_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });

    it('2. Test to check "URL Shortener API" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'URL Shortener API');
    });

    it('3. Test to check "Starter Plan" is present', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .card > .card-header > .h3', 'Starter Plan');
    });

    it('4. Test to check price of "Starter Plan" is present', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .card > .card-header > .mb-3 > .plan-price', '$1.99');
    });

    it('5. Test to click on "Subscribe" button', () => {
        cy.get(':nth-child(1) > .card > .card-header > .btn').click();
        cy.componentVisiblityCheck('.sidebar-content');
        cy.get('.lead').should('contains.text', 'Sign in to APILayer');
        cy.get('body').click(0, 0);
    });

    it('6. Test to check "Pro plan" is present', () => {
        cy.componentVisiblityCheck(':nth-child(2) > .card > .card-header > .h3', 'Pro Plan');
    });

    it('7. Test to check price of "Pro plan" is present', () => {
        cy.componentVisiblityCheck(':nth-child(2) > .card > .card-header > .mb-3 > .plan-price', '$9.99');
    });

    it('8. Test to check features of "Pro plan" is present', () => {
        cy.componentVisiblityCheck('#pricing > .row > :nth-child(2) > .card > .card-body > :nth-child(1) > .media-body', '600,000\nRequests / Monthly');
        cy.componentVisiblityCheck(':nth-child(2) > .card > .card-body > :nth-child(2) > .media-body', 'Standard Support');
    });

    it('9. Test to check  "Custom Plan" is present', () => {
        cy.componentVisiblityCheck(':nth-child(3) > .card > .card-header > .h3', 'Custom Plan');
    });

    it('10. Test to check  "Volume" is present', () => {
        cy.componentVisiblityCheck(':nth-child(3) > .card > .card-header > .mb-3 > .font-size-4', 'Volume');
    });

    it('11. Test to check features of "Custom plan" is present', () => {
        cy.componentVisiblityCheck('#pricing > .row > :nth-child(3) > .card > .card-body', 'Any requests volume you need');
    });

    it('12. Test to check "Contact Us" button text for Custom Plan  is present', () => {
        cy.componentVisiblityCheck(':nth-child(3) > .card > .card-header > .btn', 'Contact\nUs');
        cy.get(':nth-child(3) > .card > .card-header > .btn').click();
        cy.document().should((doc) => {
            expect(doc.readyState).to.equal('complete');
        });
        cy.componentVisiblityCheck('h1', 'Contact Sales & Customer Support')
        cy.navigateUrlwithCookies(SHORTURLAPI_BASE_URL);
    });
});
