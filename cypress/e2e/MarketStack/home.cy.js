describe('MarketStack Home page', () => {
    before(() => {
        cy.navigateUrlwithCookies('https://marketstack.com/');
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check "Pricing" hyperlink is present in navbar', () => {
        cy.componentVisiblityCheck('.header > .container > ul > :nth-child(1)', 'Pricing');
    });

    it('3. Test to check "Documentation" hyperlink is present in navbar', () => {
        cy.componentVisiblityCheck('.header > .container > ul > :nth-child(2)', 'Documentation');
    });

    it('4. Test to check "Stock Search" hyperlink is present in navbar', () => {
        cy.componentVisiblityCheck('.header > .container > ul > :nth-child(3)', 'Stock Search');
    });

    it('5. Test to check "Affiliates" hyperlink is present in navbar', () => {
        cy.componentVisiblityCheck('.header > .container > ul > :nth-child(4)', 'Affiliates');
    });

    it('6. Test to check "Blog" hyperlink is present in navbar', () => {
        cy.componentVisiblityCheck('.header > .container > ul > :nth-child(5)', 'Blog');
    });

    it('7. Test to check "Status" hyperlink is present in navbar', () => {
        cy.componentVisiblityCheck('.header > .container > ul > :nth-child(6)', 'Status');
    });

    it('8. Test to check title is "Historical Market Data API" is present', () => {
        cy.componentVisiblityCheck('h1', 'Real-Time, Intraday &\n                        Historical Market Data API\n                     ');
    });

    it('9. Test to check "Get API Key" button is present', () => {
        cy.componentVisiblityCheck('div > .cta', "Get API Key");
    });

    it('10. Test to check "Pricing" button is present', () => {
        cy.componentVisiblityCheck(':nth-child(2) > .cta', "Pricing");
    });

    it('11. Test to check "Search Stock Tickers" button is present', () => {
        cy.get('.button').scrollIntoView();
        cy.componentVisiblityCheck('.button', "Search Stock Tickers");
    });

    it('12. Test to check "Covering 70 Global Exchanges" title is present', () => {
        cy.componentVisiblityCheck('.left > h4', "Covering 70 Global Exchanges");
    });

    it('13. Test to Check "A complete, easy-to-use JSON API for your market data needs" title is present', () => {
        cy.componentVisiblityCheck('.insights > .container > h4', "A complete, easy-to-use JSON API for your market data needs");
    });

    it('14. Test to Check "30,000+ companies and 80+ universities cant be wrong" title is present', () => {
        cy.componentVisiblityCheck('.clients_grid > .container > h4', "30,000+ companies and 80+ universities can't be wrong");
    });

    it('15. Test to click "Get Free API Key" button page should redirect to documentation page', () => {
       cy.componentVisiblityCheck('.container > p > a', 'Get Free API Key')
    });
    it('16. Test to click "Get Free API Key" button page should redirect to documentation page', () => {
        cy.get(':nth-child(1) > .cta')
       cy.componentVisiblityCheck(':nth-child(1) > .cta', 'Get API Key')
    });

    it('17. Test to check footer is present', () => {
       cy.componentVisiblityCheck('footer');
    });

    it('18. Test to click on "GET API KEY" footer is present', () => {
        cy.get(':nth-child(1) > .cta').click();
        cy.assertPathname('/signup');
        cy.go('back');
    });

    it('19. Test to click on "Pricing" footer is present', () => {
        cy.get(':nth-child(2) > .cta').click();
        cy.assertPathname('/product');
    });
});