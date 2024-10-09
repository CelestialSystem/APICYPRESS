import { BANK_DATA_BASE_URL, APILAYER_BASE_URL } from '../../resources/data';

describe('Bank Data Pricing page', () => {
    before(() => {
        cy.visit(BANK_DATA_BASE_URL);
    });

    it('1. click on the "Pricing" menu item to scroll to that element', () => {
        cy.AcceptCookies();
        cy.get('.menu-item > a').contains('PRICING').click();
    });

    it('2. Test to click & check "SUBSCRIBE" button', () => {
        cy.get('#p1 > .small-box > .button-wrap > a').contains('SUBSCRIBE').click();
        cy.redirectToUrl(APILAYER_BASE_URL, '/marketplace/bank_data-api');
        cy.get('#p2 > .small-box > .button-wrap > a').contains('SUBSCRIBE').click();
        cy.redirectToUrl(APILAYER_BASE_URL, '/marketplace/bank_data-api');
        cy.get('#p3 > .small-box > .button-wrap > a').contains('SUBSCRIBE').click();
        cy.redirectToUrl(APILAYER_BASE_URL, '/marketplace/bank_data-api');
        cy.get('#p4 > .small-box > .button-wrap > a').contains('SUBSCRIBE').click();
        cy.redirectToUrl(APILAYER_BASE_URL, '/marketplace/bank_data-api');
    });

    it('3. Test to check if the text "FREE PLAN" is present', () => {
        cy.checkTextVisibility('FREE PLAN');
        cy.componentVisiblityCheck('#p1 > .small-box > .plan > .price', '0');
    });
    
    it('4. Test to check if the text "STARTER PLAN" is present', () => {
        cy.checkTextVisibility('STARTER PLAN');
        cy.componentVisiblityCheck('#p2 > .small-box > .plan > .price', '39');
    });
   
    it('5. Test to check if the text "PRO PLAN" is present', () => {
        cy.checkTextVisibility('PRO PLAN');
        cy.componentVisiblityCheck('#p3 > .small-box > .plan > .price', '139');
    });
   
    it('6. Test to check if the text "ENTERPRISE PLAN" is present', () => {
        cy.checkTextVisibility('ENTERPRISE PLAN');
        cy.componentVisiblityCheck('#p4 > .small-box > .plan > .price', '239');
    });
   
    it('6. Test to check if the text "CUSTOM PLAN" is present', () => {
        cy.checkTextVisibility('CUSTOM PLAN');
        cy.componentVisiblityCheck('#p5 > .small-box > .plan > .price', 'Volume');
    });
});