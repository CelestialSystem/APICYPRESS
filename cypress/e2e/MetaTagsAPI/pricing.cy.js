import { METATAGSAPI_BASE_URL } from '../../resources/data';

describe('Meta Tags API Pricing page', () => {
    before(() => {
      cy.visit(METATAGSAPI_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });   

    it('2. Test to check "Meta Tags API" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'Meta Tags API');
    });

    it('3. Test to check "Free plan" is present', () => {
        cy.componentVisiblityCheck('.h3', 'Free Plan');
    });

    it('4. Test to check price of "Free plan" is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .plan-price', '$0.00');
    });

    it('5. Test to check features of "Free plan" is present', () => {
        cy.get('.media-body').contains(' 100 Requests / Monthly').should('be.visible');   
        cy.get('.media-body').contains(' Free for Lifetime ').should('be.visible');
        cy.get('.media-body').contains(' No Credit Card Required ').should('be.visible');
    });

    it('6. Test to check "Starter plan" and "MOST POPULAR" label is present', () => {
        cy.componentVisiblityCheck('.h3', 'Starter Plan');
        cy.checkTextVisibility('MOST POPULAR');
    });

    it('7. Test to check price of "Starter plan" is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .plan-price', '$9.99');
    });

    it('8. Test to check features of "Starter plan" is present', () => {
        cy.get('.media-body').contains(' 300,000 Requests / Monthly').should('be.visible');
        cy.get('.media-body').contains(' Standard Support ').should('be.visible');
    });

    it('9. Test to check "Pro plan" is present', () => {
        cy.componentVisiblityCheck('.h3', 'Pro Plan');
    });

    it('10. Test to check price of "Pro plan" is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .plan-price','$39.99');
    });

    it('11. Test to check features of "Pro plan" is present', () => {
        cy.get('.media-body').contains('1,500,000 Requests / Monthly').should('be.visible');
        cy.get('.media-body').contains(' Standard Support ').should('be.visible');
    });

    it('12. Test to check "Custom plan" is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Custom Plan');
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .font-size-4', 'Volume');
    });

    it('13. Test to check features of "Custom plan" is present', () => {
        cy.get('.media-body').contains(' Any requests volume you need ').should('be.visible');
    });

    it('14. Test to check "Contact Us" button text for Custom Plan is present', () => {
        cy.get('#pricing .card').contains('Contact Us').click();
        cy.document().should((doc) => {
            expect(doc.readyState).to.equal('complete');
        });
        cy.componentVisiblityCheck('h1', 'Contact Sales & Customer Support');
        cy.assertPathname('/support');
        cy.navigateUrlwithCookies(METATAGSAPI_BASE_URL);
    });

  });