describe('Mediastack Home Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.navigateUrlwithCookies('https://mediastack.com/');
    });

    it('1. Accept Cookies if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check "Pricing" hyperlink is present in navbar', () => {
        cy.componentVisiblityCheck('.header > .container > ul > :nth-child(1)', 'Pricing');
    });

    it('3. Test to check "Documentation" hyperlink is present in navbar', () => {
        cy.componentVisiblityCheck('.header > .container > ul > :nth-child(2)', 'Documentation');
    });

    it('4. Test to check "FAQ" hyperlink is present in navbar', () => {
        cy.componentVisiblityCheck('.header > .container > ul > :nth-child(3)', 'News Sources');
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

    it('8. Test to check title is "Real-time Geolocation & Reverse IP Lookup REST API" is present', () => {
        cy.componentVisiblityCheck('h2',  'Free, Simple REST API for\n                        Live News & Blog Articles\n                     ');
    });

    it('9. Test to check "GET FREE API KEY" button is visible present', () => {
        cy.componentVisiblityCheck('div > .cta', "Get API Key");
    });

    it('10. Test to check "Global News" title is visible present', () => {
        cy.componentVisiblityCheck('.global_news > .heading', "Global News, Made Easy");
    });

    it('11. Test to Check "Sources and Country" title is visible present', () => {
        cy.componentVisiblityCheck('.sources_countries > .heading', "7,500+ Sources, 50 Countries");
    });

    it('12. Test to Check "Scalable JSON REST API" title present', () => {
        cy.componentVisiblityCheck('.scalable_api > .heading', "Scalable JSON REST API");
    });

    it('13. Test to Check "Free Plan Available" title is present', () => {
        cy.componentVisiblityCheck('.free_plan_available > .heading', "Free Plan Available");
    });

    it('14. Test to check title "Access 7,500 News Sources Worldwide" is visible is present', () => {
        cy.get('.left > h4').scrollIntoView();
        cy.componentVisiblityCheck('.left > h4', "Access 7,500 News Sources Worldwide");
    });

    it('15. Test to check title "A quick and cost-effective JSON API for your news data requirement" is present', () => {
        cy.get('.container > h4').scrollIntoView();
        cy.componentVisiblityCheck('.container > h4', "A quick and cost-effective JSON API for your news data requirements");
    });

    it('16. Test to check "API Documentation" button is present', () => {
        cy.get('.bottom_docs > p > a').scrollIntoView();
        cy.componentVisiblityCheck('.bottom_docs > p > a', "API Documentation");
    });

    it('17. Test to click "API Documentation" button page should redirect to documentation page', () => {
       cy.componentVisiblityCheck('.container > p > a', 'Get Free API Key')
    });

    it('18. Test to check footer is present', () => {
       cy.componentVisiblityCheck('footer');
    });
});