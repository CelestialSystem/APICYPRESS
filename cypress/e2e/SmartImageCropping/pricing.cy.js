import { SMART_IMAGE_CROPPING_BASE_URL, APILAYER_BASE_URL } from '../../resources/data';

describe('Smart Image Cropping Pricing page', () => {
    before(() => {
        cy.visit(SMART_IMAGE_CROPPING_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check "Free Plan" features', () => {
        cy.freePlanCheck('100');
    });

    it('3. Test to check "Starter Plan" features', () => {
        cy.starterPlanCheck('19', '3,000');
    });
   
    it('4. Test to check "Pro Plan" features', () => {
        cy.proPlanCheck('49', '30,000');
    });
    
    it('5. Test to check "Custom Plan" features', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Custom Plan');
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > span','Volume');
        cy.componentVisiblityCheck('.media-body');
        cy.get('#pricing .card').contains('Contact Us').click({force: true});
        cy.url().should('eq', APILAYER_BASE_URL +  '/support');
        cy.go('back');
        cy.get('.media-body').contains(' Any requests volume you need ').should('be.visible');
    });
});