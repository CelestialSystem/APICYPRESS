import { SCRAPER_BASE_URL } from '../../resources/data';


describe('Scrapper(Lite Edition) Pricing page', () => {
    before(() => {
      cy.visit(SCRAPER_BASE_URL);
    });
  
    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });
  
    it('2. Test to check "Scraper API (Lite Edition)" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'Scraper API (Lite Edition)');
    });

    it('3. Test to check "Free plan" is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Free Plan');
    });

    it('4. Test to check price of "Free plan" is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .plan-price', '$0.00');
    });
  
    it('5. Test to check features of "Free plan" is present', () => {
        cy.get('.card > .card-body').contains(' 1,500 Requests / Monthly').should('be.visible');   
        cy.get('.card > .card-body').contains(' Free for Lifetime ').should('be.visible');
        cy.get('.card > .card-body').contains(' No Credit Card Required ').should('be.visible');
    });

    it('6. Test to check "Starter plan" is present', () => {
        cy.componentVisiblityCheck('.h3', 'Starter Plan');
    });

    it('7. Test to check price of "Starter plan" is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .plan-price', '$8.99');
    });
  
    it('8. Test to check features of "Starter plan" is present', () => {
        cy.get('#pricing > .row').contains('150,000 Requests / Monthly').should('be.visible');
        cy.get('#pricing > .row').contains(' Standard Support ').should('be.visible');
    });
  
    it('9. Test to check "Pro plan" is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Pro Plan');
    });

    it('10. Test to check price of "Pro plan" is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .plan-price', '$39.99');
    });
  
    it('11. Test to check features of "Pro plan" is present', () => {
        cy.get('#pricing > .row').contains('1,500,000 Requests / Monthly').should('be.visible');
        cy.get('#pricing > .row').contains('Standard Support ').should('be.visible');
    });

    it('12. Test to check "Custom plan" is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Custom Plan');
    });

    it('13. Test to check price of "Custom plan" is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .font-size-4', 'Volume');
    });
  
    it('14. Test to check features of "Custom plan" is present', () => {
        cy.get('.media-body').contains(' Any requests volume you need ').should('be.visible');
    });

    it('15. Test to check visibility of "Subscribe" button in all plans', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .card > .card-header > .btn');
        cy.componentVisiblityCheck(':nth-child(2) > .card > .card-header > .btn');
        cy.componentVisiblityCheck(':nth-child(3) > .card > .card-header > .btn');
        cy.componentVisiblityCheck(':nth-child(4) > .card > .card-header > .btn');
    });

    it('16. Test to check "Contact Us" button text for Custom Plan  is present', () => {
        cy.get('#pricing .card').contains('Contact Us').click();
        cy.document().should((doc) => {
            expect(doc.readyState).to.equal('complete');
        });
        cy.componentVisiblityCheck('h1','Contact Sales & Customer Support')
        cy.navigateUrlwithCookies(SCRAPER_BASE_URL);
    });
});