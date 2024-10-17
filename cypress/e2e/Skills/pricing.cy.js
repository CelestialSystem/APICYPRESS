import { SKILLS_BASE_URL, APILAYER_BASE_URL } from '../../resources/data';

describe('Skills API Pricing page', () => {
    before(() => {
        cy.visit(SKILLS_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check "Free Plan" features', () => {
        cy.freePlanCheck('3,000');
    });

    it('3. Test to check "Starter Plan" features', () => {
        cy.starterPlanCheck('4', '150,000');
    });

    it('4. Test to check "Pro Plan" features', () => {
        cy.proPlanCheck('9', '600,000');
    });

    it('5. Test to check "Custom Plan" features', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Custom Plan');
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > span', 'Volume');
        cy.componentVisiblityCheck('.media-body');
        cy.get('#pricing .card').contains('Contact Us').click();
        cy.url().should('eq', APILAYER_BASE_URL + '/support');
        cy.go('back');
        cy.get('.media-body').contains(' Any requests volume you need ').should('be.visible');
    });
});