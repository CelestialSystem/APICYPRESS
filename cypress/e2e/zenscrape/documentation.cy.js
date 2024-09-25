describe('Zenscrape documentation page', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.visit('https://zenscrape.com/');
    });

    it('1. Test to accept cookies if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click the documentation hyperlink', () => {
        cy.get('.gap-8 > [href="//app.zenscrape.com/documentation"]').click();
    });

    it('3. Test to check the text in the documentation section', () => {
        cy.wait(8000);
        //Added an 8-second wait to allow the documentation to load. A more reliable solution should be implemented to handle this wait.
        cy.componentVisiblityCheck(':nth-child(1) > .col-md-12 > h4', 'Documentation');
    });

    it('4. Test to check if the "Register Free API Key" button is present', () => {
        cy.componentVisiblityCheck('aside > .btn', 'Register Free Apikey');
    });

    it('5. Test to click the "Register Free API Key" button', () => {
        cy.get('aside > .btn').click();
        cy.navigateUrlwithCookies('https://app.zenscrape.com/documentation');
    });

    it('6. Test to check if the pro tip alert message is present', () => {
        cy.componentVisiblityCheck('.alert', 'Pro Tip: Register your free apikey here and all code snippets below will contain your private apikey. If you have already registered, login before viewing the documentation.');
    });

    it('7. Test to check if the "Postman Collection" text and "Run in Postman" button are present', () => {
        cy.componentVisiblityCheck('#postman', 'Postman Collection');
        cy.componentVisiblityCheck('.postman-run-button');
    });

    xit('8. Test to check the "Run in Postman" button functionality', () => {
        cy.get('.postman-run-button').click();
        cy.wait(5000);
        //Added an 5-second wait to allow the postman web page to load. A more reliable solution should be implemented to handle this wait.
        cy.url().should('eq', 'https://app.getpostman.com/run-collection/85f8b936e3e1870c3fa9');
        cy.go('back');
    });

    it('9. Test to navigate to the "Credit Costs & Failed Requests" section', () => {
        cy.get('.mb-3 > :nth-child(1) > .nav-link').click();
        cy.componentVisiblityCheck('#failed', 'Credit Costs & Failed Requests');
    });

    it('10. Test to navigate to the "Basic Usage" section', () => {
        cy.get('.mb-3 > :nth-child(2) > .nav-link').click();
        cy.componentVisiblityCheck('#basicUsage > .mb-3 > .col-md-12 > h5', 'Basic Usage');
    });

    it('11. Test to navigate to the "Web Scraping API" section', () => {
        cy.get('.mb-3 > :nth-child(3) > .nav-link').click();
        cy.componentVisiblityCheck('#webScrapingApi > .mb-3 > .col-md-12 > h5', 'Web Scraping API');
    });

    it('12. Test to navigate to the "Proxy Mode" section', () => {
        cy.get('.mb-3 > :nth-child(4) > .nav-link').click();
    });

    it('13. Test to navigate to the "Premium Proxy Location List" section', () => {
        cy.get('.mb-3 > :nth-child(5) > .nav-link').click();
        cy.componentVisiblityCheck('#proxyLocationList > :nth-child(1) > .col-md-12 > h5', 'Premium Proxy Location List');
    });

    it('14. Test to navigate to the "Error Codes" section', () => {
        cy.get('.mb-3 > :nth-child(6) > .nav-link').click();
        cy.componentVisiblityCheck('#errorCodes > .mb-3 > .col-md-12 > h5', 'Error Codes');
    });

    it('15. Test to check the "Using Premium Proxies" section', () => {
        cy.get('aside > .mb-2 > :nth-child(1) > .nav-link');
        cy.componentVisiblityCheck('.mb-3 > .col-md-12 > #premiumProxies', 'Using Premium Proxies');
    });

    it('16. Test to navigate to the "Setting a Custom Header" section', () => {
        cy.get('aside > .mb-2 > :nth-child(2) > .nav-link').click();
        cy.componentVisiblityCheck('#keepCustomHeaders > .mb-3 > .col-md-12 > h5', 'Setting a Custom Header');
    });

    it('17. Test to navigate to the "Enable JS Rendering" section', () => {
        cy.get('aside > .mb-2 > :nth-child(3) > .nav-link');
        cy.componentVisiblityCheck('#enableJs > .mb-3 > .col-md-12 > h5', 'Enable JS Rendering');
    });

    it('18. Test to navigate to the "Getting around Cloudflare DDoS Protection" section', () => {
        cy.get('aside > .mb-2 > :nth-child(4) > .nav-link').scrollIntoView();
        cy.get('aside > .mb-2 > :nth-child(4) > .nav-link').click();
        cy.componentVisiblityCheck('#cloudFlare > .row > .col-md-12 > h5', 'Getting around Cloudflare DDoS Protection');
    });

    it('19. Test to navigate to the "Blocking Particular Resources" section', () => {
        cy.get('aside > .mb-2 > :nth-child(5) > .nav-link').scrollIntoView();
        cy.get('aside > .mb-2 > :nth-child(5) > .nav-link').click();
    });

    it('20. Test to navigate to the "Setting a Cookie" section', () => {
        cy.get('aside > .mb-2 > :nth-child(6) > .nav-link').scrollIntoView();
        cy.get('aside > .mb-2 > :nth-child(6) > .nav-link').click();
        cy.componentVisiblityCheck('#settingCookie > .mb-3 > .col-md-12 > h5', 'Setting a Cookie');
    });
});