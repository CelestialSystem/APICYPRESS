import { ZENSCRAPE_BASE_URL } from '../../resources/data';

describe('Zenscrape Documentation page', () => {
    before(() => {
        cy.visit(ZENSCRAPE_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click on the "Documentation" hyperlink', () => {
        cy.get('.gap-8 > [href="//app.zenscrape.com/documentation"]').click();
    });

    it('3. Test to check the text "Documentation" title is present', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .col-md-12 > h4', 'Documentation');
    });

    it('4. Test to check the "Register Free API Key" button is present', () => {
        cy.componentVisiblityCheck('aside > .btn', 'Register Free Apikey');
    });

    it('5. Test to click the "Register Free API Key" button', () => {
        cy.get('aside > .btn').click();
        cy.navigateUrlwithCookies('https://app.zenscrape.com/documentation');
    });

    it('6. Test to check the "Pro Tip: Register your free apikey here and all code snippets below will contain your private apikey. If you have already registered, login before viewing the documentation." alert message is present', () => {
        cy.componentVisiblityCheck('.alert', 'Pro Tip: Register your free apikey here and all code snippets below will contain your private apikey. If you have already registered, login before viewing the documentation.');
    });

    it('7. Test to check the "Postman Collection" text and "Run in Postman" button are is present', () => {
        cy.componentVisiblityCheck('#postman', 'Postman Collection');
        cy.componentVisiblityCheck('.postman-run-button');
    });

    xit('8. Test to check the "Run in Postman" button functionality', () => {
        cy.get('.postman-run-button').click();
        cy.url().should('eq', 'https://app.getpostman.com/run-collection/85f8b936e3e1870c3fa9');
        cy.navigateUrlwithCookies('https://app.zenscrape.com/documentation');
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