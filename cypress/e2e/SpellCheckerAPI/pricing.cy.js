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

    it('3. Test to check "Free Plan" features', () => {
        cy.freePlanCheck('3,000');
    });

    it('4. Test to check "Starter Plan" features', () => {
        cy.starterPlanCheck('6.99', '90,000');
    });
   
    it('5. Test to check "Pro Plan" features', () => {
        cy.proPlanCheck('52.49', '1,000,000');
    });

    it('6. Test to check "Custom plan" is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Custom Plan');
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .font-size-4', 'Volume');
    });

    it('7. Test to check features of "Custom plan" is present', () => {
        cy.get('.media-body').contains(' Any requests volume you need ').should('be.visible');
    });

    it('8. Test to check "Contact Us" button text for Custom Plan is present', () => {
        cy.get('#pricing .card').contains('Contact Us').click({force:true});
        cy.document().should((doc) => {
            expect(doc.readyState).to.equal('complete');
        });
        cy.componentVisiblityCheck('h1', 'Contact Sales & Customer Support');
        cy.assertPathname('/support');
        cy.navigateUrlwithCookies(SPELL_CHECKER_BASE_URL);
    });

  });