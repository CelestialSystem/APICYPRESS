import { EMAIL_VERIFICATION_BASE_URL, APILAYER_BASE_URL } from '../../resources/data';

describe('Email Verification Pricing page', () => {
    before(() => {
        cy.visit(EMAIL_VERIFICATION_BASE_URL);
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
        cy.freePlanCheck('100');
    });
    
    it('4. Test to check "Starter Plan" features', () => {
        cy.starterPlanCheck('14', '5,000');
    });
   
    it('5. Test to check "Pro Plan" features', () => {
        cy.proPlanCheck('74', '50,000');
    });
    
    it('6. Test to check "Enterprise Plan" features', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Enterprise Plan');
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .plan-price','$249');
        cy.componentVisiblityCheck('.media-body');
        cy.get('#pricing .plan').eq(3).within(() => {
            cy.get('a').contains('Subscribe').click();
        });
        // Adding wait due to the css animation of 300 ms
        cy.wait(500);
        cy.get('aside', { timeout: 7000 }).should('be.visible');
        cy.get('body').click();
        cy.get('.media-body').contains(' 50,000 Requests / Monthly ').should('be.visible');
        cy.get('.media-body').contains(' Standard Support ').should('be.visible');
    });
   
    it('7. Test to check "Custom Plan" features', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Custom Plan');
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > span','Volume');
        cy.componentVisiblityCheck('.media-body');
        cy.get('#pricing .card').contains('Contact Us').click();
        cy.url().should('eq', APILAYER_BASE_URL +  '/support');
        cy.go('back');
        cy.get('.media-body').contains(' Any requests volume you need ').should('be.visible');
    });

});