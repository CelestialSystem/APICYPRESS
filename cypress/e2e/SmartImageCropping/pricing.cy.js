import { SMART_IMAGE_CROPPING_BASE_URL, APILAYER_BASE_URL } from '../../resources/data';

describe('Smart Image Cropping Pricing page', () => {
    before(() => {
        cy.visit(SMART_IMAGE_CROPPING_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check "Free Plan" features', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Free Plan');
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .plan-price','$0');
        cy.componentVisiblityCheck('.media-body');
        cy.get('#pricing .plan').first().within(() => {
            cy.get('a').contains('Subscribe').click();
          });
        cy.get('.sidebar-content', { timeout: 7000 }).should('be.visible');
        cy.get('body').click();
        cy.get('.media-body').contains(' 100 Requests / Monthly ').should('be.visible');
        cy.get('.media-body').contains(' Free for Lifetime ').should('be.visible');
        cy.get('.media-body').contains(' No Credit Card Required ').should('be.visible');

    });

    it('3. Test to check "Starter Plan" features', () => {
        cy.checkTextVisibility('MOST POPULAR');
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Starter Plan');
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .plan-price','$19');
        cy.componentVisiblityCheck('.media-body');
        cy.get('#pricing .plan').eq(1).within(() => {
            cy.get('a').contains('Subscribe').click();
          });
        cy.get('.sidebar-content', { timeout: 7000 }).should('be.visible');
        cy.get('body').click();
        cy.get('.media-body').contains(' 3,000 Requests / Monthly ').should('be.visible');
        cy.get('.media-body').contains(' Standard Support ').should('be.visible');
    });
   
    it('4. Test to check "Pro Plan" features', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Pro Plan');
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .plan-price','$49');
        cy.componentVisiblityCheck('.media-body');
        cy.get('#pricing .plan').eq(2).within(() => {
            cy.get('a').contains('Subscribe').click();
          });
        cy.get('.sidebar-content', { timeout: 7000 }).should('be.visible');
        cy.get('body').click();
        cy.get('.media-body').contains(' 30,000 Requests / Monthly ').should('be.visible');
        cy.get('.media-body').contains(' Standard Support ').should('be.visible');
    });
    
    it('5. Test to check "Custom Plan" features', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Custom Plan');
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > span','Volume');
        cy.componentVisiblityCheck('.media-body');
        cy.get('#pricing .card').contains('Contact Us').click();
        cy.url().should('eq', APILAYER_BASE_URL +  '/support');
        cy.go('back');
        cy.get('.media-body').contains(' Any requests volume you need ').should('be.visible');
    });
});