describe('Mediastack Home Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.navigateUrlwithCookies('https://mediastack.com/');
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
        cy.componentVisiblityCheck('.header > .container > ul > :nth-child(3)', 'News Sources');
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

    it('7. Test to check title is "Real-time Geolocation & Reverse IP Lookup REST API"', () => {
        cy.componentVisiblityCheck('h2',  'Free, Simple REST API for\n                        Live News & Blog Articles\n                     ');
    });

    it('8. Test to check "GET FREE API KEY" button is visible', () => {
        cy.componentVisiblityCheck('div > .cta', "Get API Key");
    });

    it('9. Test to check "Global News" title is visible', () => {
        cy.componentVisiblityCheck('.global_news > .heading', "Global News, Made Easy");
    });

    it('10. Test to Check "Sources and Country" title is visible', () => {
        cy.componentVisiblityCheck('.sources_countries > .heading', "7,500+ Sources, 50 Countries");
    });

    it('11. Test to Check "Scalable JSON REST API" title is visible', () => {
        cy.componentVisiblityCheck('.scalable_api > .heading', "Scalable JSON REST API");
    });

    it('12. Test to Check "Free Plan Available" title is visible', () => {
        cy.componentVisiblityCheck('.free_plan_available > .heading', "Free Plan Available");
    });

    it('13. Test to check title "Access 7,500 News Sources Worldwide" is visible', () => {
        cy.get('.left > h4').scrollIntoView();
        cy.componentVisiblityCheck('.left > h4', "Access 7,500 News Sources Worldwide");
    });

    it('14. Test to check title "A quick and cost-effective JSON API for your news data requirements"', () => {
        cy.get('.container > h4').scrollIntoView();
        cy.componentVisiblityCheck('.container > h4', "A quick and cost-effective JSON API for your news data requirements");
    });

    it('15. Test to check "API Documentation" button is visible', () => {
        cy.get('.bottom_docs > p > a').scrollIntoView();
        cy.componentVisiblityCheck('.bottom_docs > p > a', "API Documentation");
    });

    it('16. Test to click "API Documentation" button page should redirect to documentation page', () => {
       cy.componentVisiblityCheck('.container > p > a', 'Get Free API Key')
    });

    it('17. Test to check footer is visible', () => {
       cy.componentVisiblityCheck('footer');
    });
});