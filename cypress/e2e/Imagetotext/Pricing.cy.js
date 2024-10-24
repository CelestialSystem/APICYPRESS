import { IMAGETOTEXT_BASE_URL } from '../../resources/data';

describe('Image to text Pricing page', () => {
    before(() => {
        cy.visit(IMAGETOTEXT_BASE_URL);
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

    it('4. Test to check for "Free Plan" is present', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .card > .card-header > .h3', 'Free Plan');
    });

    it('5. Test to check "Free Plan" price is $0', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .card > .card-header > .mb-3 > .plan-price','$0');
    });

    it('6. Test to check "Free Plan" features (100 requests, free for lifetime, no credit card)', () => {
        cy.componentVisiblityCheck('#pricing > .row > :nth-child(1) > .card > .card-body > :nth-child(1) > .media-body', '100\nRequests / Monthly');
        cy.componentVisiblityCheck(':nth-child(1) > .card > .card-body > :nth-child(2) > .media-body', 'Free for Lifetime');
        cy.componentVisiblityCheck(':nth-child(3) > .media-body', 'No Credit Card Required');
    });

    it('7. Test to check "Starter Plan" is present', () => {
        cy.componentVisiblityCheck(':nth-child(2) > .card > .card-header > .h3','Starter Plan');
    });

    it('8. Test to check "Starter Plan" price is $17.99', () => {
        cy.componentVisiblityCheck(':nth-child(2) > .card > .card-header > .mb-3 > .plan-price', '$17.99');
    });

    it('9. Test to check "Starter Plan" features (10,000 requests, standard support)', () => {
        cy.componentVisiblityCheck('#pricing > .row > :nth-child(2) > .card > .card-body > :nth-child(1) > .media-body', '10,000\nRequests / Monthly')
        cy.componentVisiblityCheck(':nth-child(2) > .card > .card-body > :nth-child(2) > .media-body', 'Standard Support');
    });

    it('10. Test to check "MOST POPULAR" label on Starter Plan', () => {
        cy.componentVisiblityCheck('.card > .badge','MOST POPULAR');
    });

    it('11. Test to check "Pro Plan" is present', () => {
        cy.componentVisiblityCheck(':nth-child(3) > .card > .card-header > .h3', 'Pro Plan');
    });

    it('12. Test to check "Pro Plan" price is $34.99', () => {
        cy.componentVisiblityCheck(':nth-child(3) > .card > .card-header > .mb-3 > .plan-price', '$34.99');
        cy.componentVisiblityCheck('#pricing > .row > :nth-child(3) > .card > .card-body > :nth-child(1) > .media-body');
    });

    it('13. Test to check "Pro Plan" features (30,000 requests, standard support)', () => {
        cy.componentVisiblityCheck('#pricing > .row > :nth-child(3) > .card > .card-body > :nth-child(1) > .media-body', '30,000\nRequests / Monthly');
        cy.componentVisiblityCheck(':nth-child(3) > .card > .card-body > :nth-child(2) > .media-body', 'Standard Support');
    });

    it('14. Test to check "Custom" Plan is present', () => {
        cy.componentVisiblityCheck(':nth-child(4) > .card > .card-header > .h3', 'Custom Plan');
    });

    it('15. Test to check "Custom" plan ', () => {
        cy.componentVisiblityCheck(':nth-child(4) > .card > .card-header > .mb-3 > .font-size-4', 'Volume');
    });

    it('16. Test to check "Custom" Plan features "Any requests volume you need")', () => {
        cy.componentVisiblityCheck('#pricing > .row > :nth-child(4) > .card > .card-body > .media > .media-body', 'Any requests volume you need');
    });

    it('17. Test to check visibility of "Subscribe" button in all plans', () => {
        cy.componentVisiblityCheck('.row > :nth-child(1) > .card > .card-header > .btn');
        cy.componentVisiblityCheck(':nth-child(2) > .card > .card-header > .btn');
        cy.componentVisiblityCheck(':nth-child(3) > .card > .card-header > .btn');
        cy.componentVisiblityCheck(':nth-child(4) > .card > .card-header > .btn');
    });

    it('18. Test to check "Contact Us" button text for Custom Plan  is present', () => {
        cy.componentVisiblityCheck(':nth-child(4) > .card > .card-header > .btn', 'Contact\nUs');
        cy.get(':nth-child(4) > .card > .card-header > .btn').click();
        cy.document().should((doc) => {
            expect(doc.readyState).to.equal('complete');
        });
        cy.componentVisiblityCheck('h1','Contact Sales & Customer Support')
        cy.navigateUrlwithCookies(IMAGETOTEXT_BASE_URL);
    });
});