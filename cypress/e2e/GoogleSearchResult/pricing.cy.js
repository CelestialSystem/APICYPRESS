import { GOOGLE_SEARCH_RESULT_BASE_URL, APILAYER_BASE_URL } from '../../resources/data';

describe('Google search result API Pricing page', () => {
    before(() => {
        cy.visit(GOOGLE_SEARCH_RESULT_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "Pricing" tab is present', () => {
        cy.componentVisiblityCheck('#pricing-tab');
    });

    it('3. Test to click on the "Pricing" tab', () => {
        cy.get('#pricing-tab').click();
    });

    it('4. Test to check for "Free Plan" is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Free Plan');
    });

    it('5. Test to check "Free Plan" price is $0.00', () => {
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .plan-price','$0');
    });

    it('6. Test to check "Subscribe" button click and "Free Plan" features (100 requests, free for lifetime, no credit card)', () => {
        cy.freePlanCheck('100');
    });

    it('7. Test to check "Starter Plan" is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3','Starter Plan');
    });

    it('8. Test to check "Starter Plan" price is $19.99', () => {
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .plan-price', '$19.99');
    });

    it('9. Test to check "Subscribe" button click and  "Starter Plan" features (6,000 requests, standard support)', () => {
        cy.starterPlanCheck('19', '6,000');
    });

    it('10. Test to check "MOST POPULAR" label on Starter Plan', () => {
        cy.checkTextVisibility('MOST POPULAR');
    });

    it('11. Test to check "Pro Plan" is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Pro Plan');
    });

    it('12. Test to check "Pro Plan" price is $149.99', () => {
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .plan-price', '$149.99');
        cy.componentVisiblityCheck('.media-body');
    });

    it('13. Test to check "Subscribe" button click and "Pro Plan" features (60,000 requests, standard support)', () => {
        cy.proPlanCheck('149', '60,000');
    });

    it('14. Test to check "Custom" Plan is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Custom Plan');
    });

    it('15. Test to check "Custom" plan ', () => {
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .font-size-4', 'Volume');
    });

    it('16. Test to check "Contact Us" button click and "Custom" Plan features "Any requests volume you need")', () => {
        cy.get('#pricing .card').contains('Contact Us').click();
        cy.url().should('eq', APILAYER_BASE_URL +  '/support');
        cy.go('back');
        cy.get('.media-body').contains(' Any requests volume you need ').should('be.visible');
    });
});