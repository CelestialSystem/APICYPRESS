import { BANK_DATA_BASE_URL, APILAYER_BASE_URL } from '../../resources/data';

describe('Bank Data Pricing page', () => {
    before(() => {
        cy.visit(BANK_DATA_BASE_URL);
    });

    it('1. click on the "Pricing" menu item to scroll to that element', () => {
        cy.AcceptCookies();
        cy.get('.menu-item > a').contains('PRICING').click();
        cy.get('#pricing').should('be.visible');
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
        cy.componentVisiblityCheck('#p1 > .content > .listing > li', '100 requests/mo');
        cy.componentVisiblityCheck('#p1 > .content > .listing > li', 'Free for Lifetime');
        cy.componentVisiblityCheck('#p1 > .content > .listing > li', 'No Credit Card Required');
    });
    
    it('4. Test to check if the text "STARTER PLAN" is present', () => {
        cy.checkTextVisibility('STARTER PLAN');
        cy.componentVisiblityCheck('#p2 > .small-box > .plan > .price', '39');
        cy.componentVisiblityCheck('#p2 > .content > .listing > li', '2,500 Requests / Monthly');
        cy.componentVisiblityCheck('#p2 > .content > .listing > li', 'Standard Support');
        cy.componentVisiblityCheck('#p2 > .content > .listing > li', 'Check SWIFT Code');
        cy.componentVisiblityCheck('#p2 > .content > .listing > li', 'US Banks / Routing Number (by state)');
        cy.componentVisiblityCheck('#p2 > .content > .listing > li', 'Generate and validate IBAN number');
        cy.componentVisiblityCheck('#p2 > .content > .listing > li', 'Get all major banks SWIFT and IBAN codes');
    });

    it('5. Test to check if the text "PRO PLAN" is present', () => {
        cy.checkTextVisibility('PRO PLAN');
        cy.componentVisiblityCheck('#p3 > .small-box > .plan > .price', '139');
        cy.componentVisiblityCheck('#p3 > .content > .listing > li', '25,000 Requests / Monthly');
        cy.componentVisiblityCheck('#p3 > .content > .listing > li', 'Standard Support');
        cy.componentVisiblityCheck('#p3 > .content > .listing > li', 'Check SWIFT Code');
        cy.componentVisiblityCheck('#p3 > .content > .listing > li', 'US Banks / Routing Number (by state)');
        cy.componentVisiblityCheck('#p3 > .content > .listing > li', 'Generate and validate IBAN number');
        cy.componentVisiblityCheck('#p3 > .content > .listing > li', 'Get all major banks SWIFT and IBAN codes');
    });

    it('6. Test to check if the text "ENTERPRISE PLAN" is present', () => {
        cy.checkTextVisibility('ENTERPRISE PLAN');
        cy.componentVisiblityCheck('#p4 > .small-box > .plan > .price', '239');
        cy.componentVisiblityCheck('#p4 > .content > .listing > li', '60,000 Requests / Monthly');
        cy.componentVisiblityCheck('#p4 > .content > .listing > li', 'Standard Support');
        cy.componentVisiblityCheck('#p4 > .content > .listing > li', 'Check SWIFT Code');
        cy.componentVisiblityCheck('#p4 > .content > .listing > li', 'US Banks / Routing Number (by state)');
        cy.componentVisiblityCheck('#p4 > .content > .listing > li', 'Generate and validate IBAN number');
        cy.componentVisiblityCheck('#p4 > .content > .listing > li', 'Get all major banks SWIFT and IBAN codes');
    });
    
    it('6. Test to check if the text "CUSTOM PLAN" is present', () => {
        cy.checkTextVisibility('CUSTOM PLAN');
        cy.componentVisiblityCheck('#p5 > .small-box > .plan > .price', 'Volume');
        cy.componentVisiblityCheck('#p5 > .content > .listing > li', 'Any requests volume you need');
        cy.componentVisiblityCheck('#p5 > .content > .listing > li', 'Check SWIFT Code');
        cy.componentVisiblityCheck('#p5 > .content > .listing > li', 'US Banks / Routing Number (by state)');
        cy.componentVisiblityCheck('#p5 > .content > .listing > li', 'Generate and validate IBAN number');
        cy.componentVisiblityCheck('#p5 > .content > .listing > li', 'Get all major banks SWIFT and IBAN codes');
    });
});