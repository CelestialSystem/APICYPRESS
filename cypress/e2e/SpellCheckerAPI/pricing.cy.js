import { SPELL_CHECKER_BASE_URL } from '../../resources/data';

describe('Spell Checker API Pricing page', () => {
    before(() => {
      cy.visit(SPELL_CHECKER_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });   

    it('2. Test to check "Spell Checker API" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'Spell Checker API');
    });

    it('3. Test to check "Free plan" is present', () => {
        cy.componentVisiblityCheck('.h3', 'Free Plan');
    });

    it('4. Test to check price of "Free plan" is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .plan-price', '$0.00');
    });

    it('5. Test to check features of "Free plan" is present', () => {
        cy.get('.media-body').contains(' 3,000 Requests / Monthly').should('be.visible');   
        cy.get('.media-body').contains(' Free for Lifetime ').should('be.visible');
        cy.get('.media-body').contains(' No Credit Card Required ').should('be.visible');
    });

    it('6. Test to check "Starter plan" is present', () => {
        cy.componentVisiblityCheck('.h3', 'Starter Plan');
    });

    it('7. Test to check price of "Starter plan" is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .plan-price', '$6.99');
    });

    it('8. Test to check features of "Starter plan" is present', () => {
        cy.get('.media-body').contains(' 90,000 Requests / Monthly').should('be.visible');
        cy.get('.media-body').contains(' Standard Support ').should('be.visible');
    });

    it('9. Test to check "Pro plan" is present', () => {
        cy.componentVisiblityCheck('.h3', 'Pro Plan');
    });

    it('10. Test to check price of "Pro plan" is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .plan-price','$52.49');
    });

    it('11. Test to check features of "Pro plan" is present', () => {
        cy.get('.media-body').contains('1,000,000 Requests / Monthly').should('be.visible');
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
        cy.navigateUrlwithCookies(SPELL_CHECKER_BASE_URL);
    });

  });