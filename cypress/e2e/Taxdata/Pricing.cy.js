import { TAXDATA_BASE_URL } from '../../resources/data';

describe('Taxdata Pricing page', () => {
    before(() => {
        cy.visit(TAXDATA_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "Pricing" tab is present', () => {
        cy.componentVisiblityCheck('#pricing-tab > .d-md-flex > span');
    });

    it('3. Test to click on the "Pricing" tab', () => {
        cy.get('#pricing-tab > .d-md-flex > span').click();
    });

    it('3. Test to check "Free Plan" features', () => {
        cy.freePlanCheck('100');
    });

    it('7. Test to check "Starter Plan" is present', () => {
        cy.componentVisiblityCheck(':nth-child(2) > .card > .card-header > .h3','Starter Plan');
    });

    it('4. Test to check "Starter Plan" features', () => {
        cy.starterPlanCheck('19.99', '1,000');
    });

    it('5. Test to check "Pro Plan" features', () => {
        cy.proPlanCheck('49.99', '5,000');
    });

    it('14. Test to check "Enterprise Plan" is present', () => {
        cy.componentVisiblityCheck(':nth-child(4) > .card > .card-header > .h3', 'Enterprise Plan');
    });

    it('15. Test to check "Enterprise Plan" price is $99.99', () => {
       cy.componentVisiblityCheck(':nth-child(4) > .card > .card-header > .mb-3 > .plan-price', '$399.99');
    });

    it('16. Test to check "Enterprise Plan" features (500,000 requests, standard support)', () => {
        cy.checkTextVisibility('50,000 Requests / Monthly');
        cy.componentVisiblityCheck(':nth-child(4) > .card > .card-body > :nth-child(2) > .media-body', 'Standard Support');
    });

    it('17. Test to check "Custom Plan" is present', () => {
        cy.componentVisiblityCheck(':nth-child(5) > .card > .card-header > .h3', 'Custom Plan');
    });

    it('18. Test to check "Custom Plan" description for "Any requests volume you need"', () => {
        cy.componentVisiblityCheck('#pricing > .row > :nth-child(5) > .card > .card-body > .media > .media-body', 'Any requests volume you need');
    });

    it('19. Test to check "Subscribe" button is present in all plans', () => {
        cy.componentVisiblityCheck('.row > :nth-child(1) > .card > .card-header > .btn');
        cy.componentVisiblityCheck(':nth-child(2) > .card > .card-header > .btn');
        cy.componentVisiblityCheck(':nth-child(3) > .card > .card-header > .btn');
        cy.componentVisiblityCheck(':nth-child(4) > .card > .card-header > .btn');
    });

    it('20. Test to check button text for "Contact Us" and redirect to "Contact" page and check the text "Contact Sales & Customer Support"', () => {
        cy.get(':nth-child(5) > .card > .card-header > .btn').scrollIntoView();
        cy.componentVisiblityCheck(':nth-child(5) > .card > .card-header > .btn', 'Contact\nUs');
        cy.get(':nth-child(5) > .card > .card-header > .btn').click({force:true});
        cy.document().its('readyState').should('eq', 'complete');
        cy.checkTextVisibility('Contact Sales & Customer Support')
        cy.navigateUrlwithCookies(TAXDATA_BASE_URL);
    });
});