describe('Zenscrape Home page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.navigateUrlwithCookies('https://zenscrape.com/');
    });

    it('1. Test to check for the "Web scraping without the hassle" text present', () => {
        cy.get('.text-4xl').should('be.visible', 'contain.text', 'Web scraping without the hassle');
    });

    it('2. Test to check for the proxy rotation and headless browser caption text present ', () => {
        cy.get('.small-para').should('be.visible', 'contain.text', 'Proxy rotation and headless browser');
    });

    it('3. Test to check the "Try Zenscrape API" button present', () => {
        cy.get('.mr-auto > .mt-5 > .rounded-sm > .w-full').should('be.visible');
    });

    it('4. Test to check the text "Unleash the power of the headless"', () => {
        cy.get(':nth-child(1) > .mt-4 > .text-2xl > .block').should('be.visible', 'contain.text', 'Unleash the Power of Headless Browsing ')
    });

    it('5. Test to check the text "Unleash the power of the headless"', () => {
        cy.get('.text-2xl > .block').should('be.visible', 'contain.text', 'Seamless Navigation Past Captcha and DDoS Hurdles with Zenscrape')
    });

    it('6. Test to check the text "Unleash the power of the headless"', () => {
        cy.get(':nth-child(1) > .mt-4 > .text-2xl > .block').should('be.visible', 'contain.text', 'Premium Proxies and Seamless IP Rotation for Uninterrupted Scraping')
    });

    it('7. Test to check the "Try Zenscrape API" clickng the button and it should redirect to the registration page.', () => {
        cy.get('.mr-auto > .mt-5 > .rounded-sm > .w-full').click();
        cy.navigateUrlwithCookies('https://app.zenscrape.com/register?plan=free');
        cy.get('.float-left').should('be.visible');
        cy.get('.m-4').should('be.visible', 'contian.text', 'All Subscription plan prices are excluding applicable VAT.');
        cy.navigateUrlwithCookies('https://zenscrape.com/');
    });

    it('8. Test to check the text "Start Web scraping for FREE" text present', () => {
        cy.get('.max-w-2xl > .text-3xl').should('be.visible', 'contain.text', 'Start Web scraping for FREE')
    });

    it('9. Test to check the text "GET 1000 Free credit" button present', () => {
        cy.get('.max-w-2xl > .mt-5 > .rounded-sm > .w-full').should('be.visible', 'contain.text', 'GET 1,000 FREE CREDIT')
    });

    it('10. Test to click on the "GET 1000 Free credit" button and it should re direct to the regirstration page.', () => {
        cy.get('.max-w-2xl > .mt-5 > .rounded-sm > .w-full').click();
        cy.get('.float-left').should('be.visible');
        cy.get('.m-4').should('be.visible', 'contian.text', 'All Subscription plan prices are excluding applicable VAT.');
        cy.navigateUrlwithCookies('https://zenscrape.com/');
    });

    it('11. Test to check the pricing section', () => {
        cy.get('.py-12').should('be.visible', 'contain.text', 'Simple and Economical Pricing')
    });

    it('12. Test to check text Need More Credit?', () => {
        cy.get('.w-full > :nth-child(1) > .text-2xl > .block').should('be.visible', 'contain.text', 'Need More Credit?');
    });

    it('13. Test to check CONTACT US for quote text present', () => {
        cy.get('.shadow > .inline-flex').should('be.visible', 'contain.text', 'CONTACT US FOR A QUOTE');
    });

    it('14. Test to check CONTACT US for quote button and should redirect to contact us page', () => {
        cy.get('.shadow > .inline-flex').click();
        cy.navigateUrlwithCookies('https://zenscrape.com/');
    });

    it('15. Test to verify the "Web Scraping API Use Cases" section present', () => {
        cy.get('.text-left > .mt-2').should('be.visible', 'contain.text', 'Web Scraping API Use Cases');
    });

    it('16. Test to verify the "Web crawling General Data Aggreagation" section present', () => {
        cy.get(':nth-child(1) > ul > :nth-child(1) > .flex > .ml-3 > dl > .text-lg').should('be.visible', 'contain.text', 'Web crawling General Data Aggregation');
    });

    it('17. Test to verify the "Review scraping Customer Reviews" section present', () => {
        cy.get(':nth-child(2) > ul > :nth-child(1) > .flex > .ml-3 > dl > .text-lg').should('be.visible', 'contain.text', 'Review scraping Customer Reviews');
    });

    it('18. Test to verify the "Price Data Scraping Ecommerce: Price & Product Information" section is present', () => {
        cy.get(':nth-child(1) > ul > :nth-child(2) > .flex > .ml-3 > dl > .text-lg').should('be.visible', 'contain.text', 'Price Data Scraping Ecommerce: Price & Product Information');
    });

    it('19. Test to verify the "Hiring Data Scraping Job & Hiring Data" section is present', () => {
        cy.get(':nth-child(2) > ul > :nth-child(2) > .flex > .ml-3 > dl > .text-lg').should('be.visible', 'contain.text', 'Hiring Data Scraping Job & Hiring Data');
    });

    it('20. Test to verify the "Marketing Data Scraping Sales Leads" section is present', () => {
        cy.get(':nth-child(1) > ul > :nth-child(3) > .flex > .ml-3 > dl > .text-lg').should('be.visible', 'contain.text', 'Marketing Data Scraping Sales Leads');
    });

    it('21. Test to verify the "Real estate data scraping Real Estate Data" section is present', () => {
        cy.get(':nth-child(2) > ul > :nth-child(3) > .flex > .ml-3 > dl > .text-lg').should('be.visible', 'contain.text', 'Real estate data scraping Real Estate Data');
    });

    it('21. Test to check "Frequently asked questions" section present', () => {
        cy.get('#faqSection > .max-w-6xl > .text-3xl').should('be.visible', 'contain.text', 'Frequently asked questions');
    });
});

