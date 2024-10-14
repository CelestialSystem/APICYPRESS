import { BINCHECKER_BASE_URL } from '../../resources/data';

describe('Bin checker APIs pricing page', ()=> {
    before(()=> {
        cy.visit(BINCHECKER_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check the text "Prcing" tab is present', () => {
        cy.componentVisiblityCheck('#pricing-tab > .d-md-flex > span');
    });

    it('3. Test to click on the "Pricing" tab', () => {
        cy.get('#pricing-tab > .d-md-flex > span').click();
    });

    it('4. Test to check the "Free plan" is present', () => {
        cy.componentVisiblityCheck('#pricing > .row > :nth-child(1)');
    });

    it('5. Test to check the "Starter plan" is present', () => {
        cy.componentVisiblityCheck('#pricing > .row > :nth-child(2)');
    });

    it('6. Test to check the "Pro plan" is present', () => {
        cy.componentVisiblityCheck('#pricing > .row > :nth-child(3)');
    });

    it('7. Test to check the "Custom plan" is present', () => {
        cy.componentVisiblityCheck('#pricing > .row > :nth-child(4)');
    });

    it('8. Test to check "Free" Plan price is $0.00', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .card > .card-header > .mb-3 > .plan-price','$0');
    });

    it('9. Test to check "Free" Plan features (100 requests, free for lifetime, no credit card)', () => {
        cy.componentVisiblityCheck('.media-body');
        cy.componentVisiblityCheck(':nth-child(1) > .card > .card-body > :nth-child(2) > .media-body', 'Free for Lifetime');
        cy.componentVisiblityCheck(':nth-child(3) > .media-body', 'No Credit Card Required');
    });

    
    it('10. Test to check "Starter" Plan price is $4.99', () => {
        cy.componentVisiblityCheck(':nth-child(2) > .card > .card-header > .mb-3 > .plan-price', '$4.99');
    });

    it('11. Test to check "Starter" Plan features (15,000 requests, standard support)', () => {
        cy.componentVisiblityCheck(':nth-child(2) > .card > .card-body > :nth-child(2) > .media-body', 'Standard Support');
    });

    it('12. Test to check "Pro" Plan price is $9.99', () => {
        cy.componentVisiblityCheck(':nth-child(3) > .card > .card-header > .mb-3 > .plan-price', '$9.99');
    });

    it('13. Test to check "Pro" Plan features (60,000 requests, standard support)', () => {
        cy.componentVisiblityCheck(':nth-child(3) > .card > .card-body > :nth-child(2) > .media-body', 'Standard Support');
    });

    it('14. Test to check "Custom" Plan has Volume', () => {
        cy.checkTextVisibility('Volume');
    });

    it('15. Test to check "Custom" Plan features (Any requests volume you need)', () => {
        cy.componentVisiblityCheck('#pricing > .row > :nth-child(4) > .card > .card-body > .media');
    });

});