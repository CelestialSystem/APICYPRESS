import { PARAPRASER_API, APILAYER_BASE_URL } from '../../resources/data';


describe('Paraphraser API Pricing page', () => {
    before(() => {
        cy.visit(PARAPRASER_API);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check "Paraphraser API" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'Paraphraser API');
    });

    it('3. Test to check "Free Plan" features', () => {
        cy.freePlanCheck('100');
    });

    it('4. Test to check "Starter Plan" features', () => {
        cy.starterPlanCheck('48.99', '3,000');
    });
   
    it('5. Test to check "Pro Plan" features', () => {
        cy.proPlanCheck('129.99', '9,000');
    });

    it('6. Test to check "Custom" Plan is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Custom Plan');
    });

    it('7. Test to check "Custom" plan ', () => {
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .font-size-4', 'Volume');
    });

    it('8. Test to check "Contact Us" button click and "Custom" Plan features "Any requests volume you need")', () => {
        cy.get('#pricing .card').contains('Contact Us').click({force:true});
        cy.url().should('eq', APILAYER_BASE_URL + '/support');
        cy.go('back');
        cy.get('.media-body').contains('Any requests volume you need ').should('be.visible');
    });
});