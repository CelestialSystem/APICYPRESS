import { DID_YOU_MEAN_THIS_BASE_URL, APILAYER_BASE_URL } from '../../resources/data';

describe('"Did you Mean This?" API Pricing page', () => {
    before(() => {
        cy.visit(DID_YOU_MEAN_THIS_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check & click for "Subscribe for Free" button', () => {
        cy.componentVisiblityCheck('#subscribeButton', "Subscribe for Free");
        cy.get('#subscribeButton').click();
        cy.get('#pricing').should('be.visible');
        cy.checkIfScrolledToEl('#pricing');
    });

    it('3. Test to check "Free Plan" features', () => {
        cy.freePlanCheck('3,000');
    });

    it('4. Test to check "Starter Plan" features', () => {
        cy.starterPlanCheck('6', '90,000');
    });
   
    it('5. Test to check "Pro Plan" features', () => {
        cy.proPlanCheck('52', '1,000,000');
    });
    
    it('6. Test to check "Custom Plan" features', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Custom Plan');
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > span','Volume');
        cy.componentVisiblityCheck('.media-body');
        cy.get('#pricing .card').contains('Contact Us').click();
        cy.url().should('eq', APILAYER_BASE_URL +  '/support');
        cy.go('back');
        cy.get('.media-body').contains(' Any requests volume you need ').should('be.visible');
    });

});