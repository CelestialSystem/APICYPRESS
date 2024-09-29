describe('Zenscrape Home page', () => {
    before(() => {
        cy.navigateUrlwithCookies('https://zenscrape.com/');
    });

    it('1. Test to check for the "Web scraping without the hassle" text is present', () => {
        cy.get('.text-4xl').should('be.visible', 'contain.text', 'Web scraping without the hassle');
    });

    it('2. Test to check for the "Proxy rotation and headless browser" caption text is present', () => {
        cy.get('.small-para').should('be.visible', 'contain.text', 'Proxy rotation and headless browser');
    });

    it('3. Test to check the "Try Zenscrape API" button is present', () => {
        cy.get('.mr-auto > .mt-5 > .rounded-sm > .w-full').should('be.visible');
    });

    it('4. Test to check the text "Unleash the power of the headless" is present', () => {
        cy.get(':nth-child(1) > .mt-4 > .text-2xl > .block').should('be.visible', 'contain.text', 'Unleash the Power of Headless Browsing ')
    });

    it('5. Test to check the text "Seamless Navigation Past Captcha and DDoS Hurdles with Zenscrape" is present', () => {
        cy.get('.text-2xl > .block').should('be.visible', 'contain.text', 'Seamless Navigation Past Captcha and DDoS Hurdles with Zenscrape')
    });

    it('6. Test to check the text "Premium Proxies and Seamless IP Rotation for Uninterrupted Scraping" is present', () => {
        cy.get(':nth-child(1) > .mt-4 > .text-2xl > .block').should('be.visible', 'contain.text', 'Premium Proxies and Seamless IP Rotation for Uninterrupted Scraping')
    });

    it('7. Test to check the "Try Zenscrape API" clickng the button and it should redirect to the "Registration" page.', () => {
        cy.get('.mr-auto > .mt-5 > .rounded-sm > .w-full').click();
        cy.navigateUrlwithCookies('https://app.zenscrape.com/register?plan=free');
        cy.get('.float-left').should('be.visible');
        //Added the doc.readyState to load document properly.
        cy.document().should((doc) => {
            expect(doc.readyState).to.equal('complete');
        });
        cy.get('.m-4').should('be.visible', 'contian.text', 'All Subscription plan prices are excluding applicable VAT.');
        cy.navigateUrlwithCookies('https://zenscrape.com/');
    });

    it('8. Test to check the text "Start Web scraping for FREE" is present', () => {
        cy.get('.max-w-2xl > .text-3xl').should('be.visible', 'contain.text', 'Start Web scraping for FREE')
    });

    it('9. Test to check the text "GET 1,000 FREE CREDIT" button is present', () => {
        cy.get('.max-w-2xl > .mt-5 > .rounded-sm > .w-full').should('be.visible', 'contain.text', 'GET 1,000 FREE CREDIT')
    });

    it('10. Test to click on the "GET 1,000 FREE CREDIT" button and it should redirect to the "Regirstration" page.', () => {
        cy.get('.max-w-2xl > .mt-5 > .rounded-sm > .w-full').click();
        cy.get('.float-left').should('be.visible');
        cy.get('.m-4').should('be.visible', 'contian.text', 'All Subscription plan prices are excluding applicable VAT.');
        cy.navigateUrlwithCookies('https://zenscrape.com/');
    });

    it('11. Test to check the "Simple and Economical Pricing" section', () => {
        cy.get('.py-12').should('be.visible', 'contain.text', 'Simple and Economical Pricing')
    });

    it('12. Test to check text "Need More Credit?"', () => {
        cy.get('.w-full > :nth-child(1) > .text-2xl > .block').should('be.visible', 'contain.text', 'Need More Credit?');
    });

    it('13. Test to check "CONTACT US FOR A QUOTE" text is present', () => {
        cy.get('.shadow > .inline-flex').should('be.visible', 'contain.text', 'CONTACT US FOR A QUOTE');
    });

    it('14. Test to check "CONTACT US FOR A QUOTE" button and should redirect to "CONTACT US" page', () => {
        cy.get('.shadow > .inline-flex').click();
        cy.navigateUrlwithCookies('https://apilayer.com/support');
        cy.document().its('readyState').should('eq', 'complete');
        cy.get('h1').should('contains.text', 'Contact Sales & Customer Support');
        cy.navigateUrlwithCookies('https://zenscrape.com/');
    });

    it('15. Test to verify the "Web Scraping API Use Cases" section is present', () => {
        cy.get('.text-left > .mt-2').should('be.visible', 'contain.text', 'Web Scraping API Use Cases');
    });

    it('16. Test to verify the "Web crawling General Data Aggreagation" section is present', () => {
        cy.get(':nth-child(1) > ul > :nth-child(1) > .flex > .ml-3 > dl > .text-lg').should('be.visible', 'contain.text', 'Web crawling General Data Aggregation');
    });

    it('17. Test to verify the "Review scraping Customer Reviews" section is present', () => {
        cy.get(':nth-child(2) > ul > :nth-child(1) > .flex > .ml-3 > dl > .text-lg').should('be.visible', 'contain.text', 'Review scraping Customer Reviews');
    });

    it('18. Test to verify the "Price Data Scraping Ecommerce: Price & Product Information" section is is present', () => {
        cy.get(':nth-child(1) > ul > :nth-child(2) > .flex > .ml-3 > dl > .text-lg').should('be.visible', 'contain.text', 'Price Data Scraping Ecommerce: Price & Product Information');
    });

    it('19. Test to verify the "Hiring Data Scraping Job & Hiring Data" section is is present', () => {
        cy.get(':nth-child(2) > ul > :nth-child(2) > .flex > .ml-3 > dl > .text-lg').should('be.visible', 'contain.text', 'Hiring Data Scraping Job & Hiring Data');
    });

    it('20. Test to verify the "Marketing Data Scraping Sales Leads" section is is present', () => {
        cy.get(':nth-child(1) > ul > :nth-child(3) > .flex > .ml-3 > dl > .text-lg').should('be.visible', 'contain.text', 'Marketing Data Scraping Sales Leads');
    });

    it('21. Test to verify the "Real estate data scraping Real Estate Data" section is is present', () => {
        cy.get(':nth-child(2) > ul > :nth-child(3) > .flex > .ml-3 > dl > .text-lg').should('be.visible', 'contain.text', 'Real estate data scraping Real Estate Data');
    });

    it('21. Test to check "Frequently asked questions" section is present', () => {
        cy.get('#faqSection > .max-w-6xl > .text-3xl').should('be.visible', 'contain.text', 'Frequently asked questions');
    });
});

