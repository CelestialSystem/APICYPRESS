describe('MarketStack Documentation Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.visit('https://marketStack.com/');
    });

    it('1. Test to naviagate to the "Documentation" page', () => {
        cy.AcceptCookies();
        cy.get('.header > .container > ul > :nth-child(2) > a').click();
        cy.assertPathname('/documentation');
    });

    it('2. Test to check "API Documentation" title in the present', () => {
        cy.AcceptCookies();
        cy.componentVisiblityCheck('h1', 'API Documentation');
    });

    it('3. Test to check the text "Getting Started" is present', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .doc_heading', 'Getting Started');
    });

    it('4. Test to navigate to "API Authentication" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(1) > :nth-child(2) > a', 'API Authentication');
        cy.get('.menu > :nth-child(1) > :nth-child(2) > a').click();
        cy.componentVisiblityCheck('#access_keys > h3', 'API Authentication');
    });

    it('5. Test to navigate to "HTTPS Encryption" section', () => {
        cy.componentVisiblityCheck(':nth-child(1) > :nth-child(3) > a', 'HTTPS Encryption');
        cy.get('.menu > :nth-child(1) > :nth-child(3) > a').click();
        cy.componentVisiblityCheck('h4', '256-bit HTTPS Encryption');
    });

    it('6. Test to navigate to "API Error Codes" section', () => {
        cy.componentVisiblityCheck(':nth-child(1) > :nth-child(4) > a', 'API Error Codes');
        cy.get(':nth-child(1) > :nth-child(4) > a').click();
        cy.componentVisiblityCheck('#api_errors > h3', 'API Errors');
    });
    
    it('7. Test to navigate to "End-of-day Data" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(2) > :nth-child(2) > a', 'End-of-day Data');
        cy.get('.menu > :nth-child(2) > :nth-child(2) > a').click();
        cy.componentVisiblityCheck('#eod_data > h3', 'End-of-Day Data Available on: All plans');
    });
    
    it('8. Test to navigate to "Intraday Data" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(2) > :nth-child(3) > a', 'Intraday Data');
        cy.get('.menu > :nth-child(2) > :nth-child(3) > a').click();
        cy.componentVisiblityCheck('#intraday_data > h3', 'Intraday Data');
    });
    
    it('9. Test to navigate to "Splits Data" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(2) > :nth-child(4) > a', 'Splits data');
        cy.get('.menu > :nth-child(2) > :nth-child(4) > a').click();
        cy.componentVisiblityCheck('#splits > h3', 'Splits Data Available on: All plans');
    });
    
    it('10.Test to navigate "Dividends data" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(2) > :nth-child(5) > a', 'Dividends data');
        cy.get('.menu > :nth-child(2) > :nth-child(5) > a').click();
        cy.componentVisiblityCheck('#dividends > h3', 'Dividends Data Available on: All plans');
    });
    
    it('11.Test to navigate to "Tickers" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(2) > :nth-child(6) > a', 'Tickers');
        cy.get('.menu > :nth-child(2) > :nth-child(6) > a').click();
        cy.componentVisiblityCheck('#tickers > h3', 'Tickers Available on: All plans');
    });
    
    it('12. Test to navigate to "Exchanges" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(2) > :nth-child(7) > a', 'Exchanges');
        cy.get('.menu > :nth-child(2) > :nth-child(7) > a').click();
        cy.componentVisiblityCheck('#exchanges > h3', 'Exchanges Available on: All plans');
    });
    
    it('13. Test to navigate to "Currencies" section', () => {
        cy.componentVisiblityCheck(':nth-child(2) > :nth-child(8) > a', 'Currencies');
        cy.get(':nth-child(2) > :nth-child(8) > a').click();
        cy.componentVisiblityCheck('#currencies > h3', 'Currencies Available on: All plans');
    });
    
    it('14. Test to navigate to "Timezones" section', () => {
        cy.componentVisiblityCheck(':nth-child(9) > a', 'Timezones');
        cy.get(':nth-child(9) > a').click();
        cy.componentVisiblityCheck('#timezones > h3', 'Timezones Available on: All plans');
    });
    
    it('15. Test to navigate to "Billing Overages" section', () => { 
        cy.componentVisiblityCheck('.menu > :nth-child(3) > :nth-child(2) > a', 'Billing Overages');
        cy.get('.menu > :nth-child(3) > :nth-child(2) > a').click();
        cy.componentVisiblityCheck('#billing-overages', 'FAQ');
    });

    it('16. Test to click on "Upgrade" button', () => { 
        cy.componentVisiblityCheck('.platinum-btn', 'Upgrade now');
        cy.get('.platinum-btn').click();
        cy.assertPathname('/product');
        cy.go('back');
    });

    it('16. Test to click on upgrade button', () => { 
        cy.componentVisiblityCheck('.container > p > a', 'Get Instant Access');
        cy.get('.container > p > a').click();
        cy.assertPathname('/signup/free');
    });
});