import { REACHABILITY_API_BASE_URL, APILAYER_BASE_URL } from '../../resources/data';

describe('Reachability API Pricing page', () => {
    before(() => {
        cy.visit(REACHABILITY_API_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });

    it('2. Test to check & click for "Subscribe for Free" button', () => {
        cy.componentVisiblityCheck('#subscribeButton', "Subscribe for Free");
        cy.get('#subscribeButton').click({force:true});
        cy.get('#pricing').should('be.visible');
        cy.checkIfScrolledToEl('#pricing');
    });

    it('3. Test to check "Free Plan" features', () => {
        cy.freePlanCheck('3,000');
    });

    it('4. Test to check "Starter Plan" features', () => {
        cy.starterPlanCheck('3.99', '15,000');
    });
   
    it('5. Test to check "Pro Plan" features', () => {
        cy.proPlanCheck('7.99', '600,000');
    });
    
    it('6. Test to check "Custom Plan" features', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Custom Plan');
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > span','Volume');
        cy.componentVisiblityCheck('.media-body');
        cy.get('#pricing .card').contains('Contact Us').click({force:true});
        cy.url().should('eq', APILAYER_BASE_URL +  '/support');
        cy.go('back');
        cy.get('.media-body').contains(' Any requests volume you need ').should('be.visible');
    });
});
