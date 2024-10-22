import { FORM_API_BASE_URL, APILAYER_BASE_URL } from '../../resources/data';


describe('Form API Pricing page', () => {
    before(() => {
      cy.visit(FORM_API_BASE_URL);
    });
  
    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });  
 
    it('2. Test to check "Form API" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'Form API');
    });
 
    it('3. Test to check "Free Plan" features', () => {
        cy.freePlanCheck('100');
    });
 
    it('4. Test to check "Starter Plan" features', () => {
        cy.starterPlanCheck('4.99', '10,000');
    });

    it('9. Test to check "MOST POPULAR" label on Starter Plan', () => {
        cy.checkTextVisibility('MOST POPULAR');
    });

    it('10. Test to check "Pro Plan" is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Pro Plan');
    });

    it('11. Test to check "Pro Plan" price is $39.99', () => {
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .plan-price', '$19.99');
        cy.componentVisiblityCheck('.media-body');
    });

    it('12. Test to check "Subscribe" button click and "Pro Plan" features (50,000 requests, standard support)', () => {
        cy.wait(500);
        cy.get('#pricing .plan').eq(2).within(() => {
            cy.get('a').contains('Subscribe').click();
          });
        cy.get('.sidebar-content', { timeout: 7000 }).should('be.visible');
        cy.get('body').click();
        cy.get('.media-body').contains(' 50,000 Requests / Monthly ').should('be.visible');
        cy.get('.media-body').contains(' Standard Support ').should('be.visible');
    });

    it('13. Test to check "Custom" Plan is present', () => {
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