describe('MarketStack Home Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.navigateUrlwithCookies('https://marketstack.com/');
    });

    it('0. Accept Cookies if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('1. Test to check "Pricing" hyperlink is there in navbar', () => {
        cy.componentVisiblityCheck('.header > .container > ul > :nth-child(1)', 'Pricing');
    });

    it('2. Test to check "Documentation" hyperlink is there in navbar', () => {
        cy.componentVisiblityCheck('.header > .container > ul > :nth-child(2)', 'Documentation');
    });

    it('3. Test to check "FAQ" hyperlink is there in navbar', () => {
        cy.componentVisiblityCheck('.header > .container > ul > :nth-child(3)', 'Stock Search');
    });

    it('4. Test to check "Affiliates" hyperlink is there in navbar', () => {
        cy.componentVisiblityCheck('.header > .container > ul > :nth-child(4)', 'Affiliates');
    });

    it('5. Test to check "Blog" hyperlink is there in navbar', () => {
        cy.componentVisiblityCheck('.header > .container > ul > :nth-child(5)', 'Blog');
    });

    it('6. Test to check "Status" hyperlink is there in navbar', () => {
        cy.componentVisiblityCheck('.header > .container > ul > :nth-child(6)', 'Status');
    });

    it('7. Test to check title is "Real-Time, Intraday &Historical Market Data API"', () => {
        cy.componentVisiblityCheck('h1', 'Real-Time, Intraday &\n                        Historical Market Data API\n                     ');
    });

    it('8. Test to check "FREE API KEY" button is visible', () => {
        cy.componentVisiblityCheck('div > .cta', "Get API Key");
    });

    it('9. Test to check "Pricing" button is visible', () => {
        cy.componentVisiblityCheck(':nth-child(2) > .cta', "Pricing");
    });

    it('10. Test to check "Search Stock Tickers" button is visible', () => {
        cy.get('.button').scrollIntoView();
        cy.componentVisiblityCheck('.button', "Search Stock Tickers");
    });

    it('11. Test to check "Covering 70 Global Exchanges" title is visible', () => {
        cy.componentVisiblityCheck('.left > h4', "Covering 70 Global Exchanges");
    });

    it('12. Test to Check "A complete, easy-to-use JSON API for your market data needs" title is visible', () => {
        cy.componentVisiblityCheck('.insights > .container > h4', "A complete, easy-to-use JSON API for your market data needs");
    });

    it('13. Test to Check "30,000+ companies and 80+ universities cant be wrong"', () => {
        cy.componentVisiblityCheck('.clients_grid > .container > h4', "30,000+ companies and 80+ universities can't be wrong");
    });

    it('14. Test to click "Get Free API Key" button page should redirect to documentation page', () => {
       cy.componentVisiblityCheck('.container > p > a', 'Get Free API Key')
    });
    it('14. Test to click "Get Free API Key" button page should redirect to documentation page', () => {
        cy.get(':nth-child(1) > .cta')
       cy.componentVisiblityCheck(':nth-child(1) > .cta', 'Get API Key')
    });

    it('15. Test to check footer is visible', () => {
       cy.componentVisiblityCheck('footer');
    });

    it('15. Test to click on "GET API KEY" footer is visible', () => {
        cy.get(':nth-child(1) > .cta').click();
        cy.assertPathname('/signup');
        cy.go('back');
    });

    it('16. Test to click on "Pricing" footer is visible', () => {
        cy.get(':nth-child(2) > .cta').click();
        cy.assertPathname('/product');
    });
});