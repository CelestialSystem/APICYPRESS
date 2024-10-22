import { CURRENCY_BASE_URL, APILAYER_BASE_URL } from '../../resources/data';

describe('Currency Data Pricing page', () => {
    before(() => {
      cy.visit(CURRENCY_BASE_URL);
    });
  
    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });  
 
    it('2. Test to check "Currency Data API" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'Currency Data API');
    });
 
    it('3. Test to check "Free Plan" features', () => {
        cy.freePlanCheck('100');
    });
 
    it('4. Test to check "Starter Plan" features', () => {
        cy.starterPlanCheck('14.99', '10,000');
    });
   
    it('5. Test to check "Pro Plan" features', () => {
        cy.proPlanCheck('59.99', '100,000');
    });
 
    it('6. Test to check "Custom plan" is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Custom Plan');
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .font-size-4', 'Volume');
    });
 
    it('7. Test to check features of "Custom plan" is present', () => {
        cy.get('.media-body').contains(' Any requests volume you need ').should('be.visible');
    });
 
    it('8. Test to check "Custom Plan" features', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Custom Plan');
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > span','Volume');
        cy.componentVisiblityCheck('.media-body');
        cy.get('#pricing .card').contains('Contact Us').click({force:true});
        cy.url().should('eq', APILAYER_BASE_URL +  '/support');
        cy.go('back');
        cy.get('.media-body').contains(' Any requests volume you need ').should('be.visible');
    });
});
