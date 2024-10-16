import { SCRAPER_BASE_URL } from '../../resources/data';

describe('Scraper(Lite Edition) APIs Info page', () => {
    before(() => {
        cy.visit(SCRAPER_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "API Info" tab is present', () => {
        cy.componentVisiblityCheck('#details-tab > .d-md-flex > span');
    });

    it('3. Test to click on the "API Info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
    });

    it('4. Test to click "Adanced Scraper API" link', () => {
        cy.get('article > :nth-child(4) > a').click();
        cy.document().should((doc) => {
            expect(doc.readyState).to.equal('complete');
        });
        cy.assertPathname('/marketplace/adv_scraper-api');
        cy.checkTextVisibility('Advanced Scraper API');
        cy.go('back');
        cy.get('#details-tab > .d-md-flex > span').click();
    });

    it('5. Test to check the "Scraper API" Features', () => {
        const information = [
            "Setting the referrer and user-agent",
            "Selecting the originating country where we fire the HTTP request",
            "Adding cookies to the request header",
            "Setting any HTTP header (even the non-standard ones)",
            "Setting HTTP Auth username and password.",
            "APILayer's Scraper API is one of the versatile and affordable ways to collect any data from the web."
           ]
        information.forEach((Cases) => {
          cy.get('ul').should('contain.text', Cases);
        });
    });

    it('6. Test to check text "How to use CSS Selectors?" is present', () => {
        cy.checkTextVisibility('How to use CSS Selectors?');
    });

    it('7. Test to check text "Image files scraping" is present', () => {
        cy.checkTextVisibility('Image files scraping');
    });

    it('8. Test to check text "Rotating IP addresses" is present', () => {
        cy.checkTextVisibility('Rotating IP addresses');
    });

    it('9. Test to check the "Scraper API" Features', () => {
        const information = [
            "It helps you to overcome IP fingerprinting and rate-limiting problems",
            "It saves you from getting your original IP banned due to high volume of requests",
            "Ability of setting originating country allows you to see geography specific content"
        ];
        information.forEach((Cases) => {
          cy.get('ul').should('contain.text', Cases);
        });
    });

    it('10. Test to check text "Setting Custom HTTP Headers" is present', () => {
        cy.checkTextVisibility('Setting Custom HTTP Headers');
    });

    it('11. Test to check text "Can I scrape Google Search Results with it?" is present', () => {
        cy.checkTextVisibility('Can I scrape Google Search Results with it?');
    });

    it('12. Test to check text "Privacy" is present', () => {
        cy.checkTextVisibility('Privacy');
    });

    it('13. Test to check text "Common areas web scraping used for:" is present', () => {
        cy.checkTextVisibility('Common areas web scraping used for:');
    });

    it('14. Test to check the "Scraper API" Features', () => {
        const information = [
            "Price monitoring website for comparison",
            "E-commerce: Competitor monitoring, Market analysis",
            "Collecting stock market data",
            "Real Estate Listing",
            "Machine Learning : to supply a wide variety of data to train and test your model.",
            "Brand protection",
            "Market research",
            "Lead generation",
        ];
        information.forEach((Cases) => {
          cy.get('ul').should('contain.text', Cases);
        });
    });

    it('15. Test to check text "Is web scraping legal" is present', () => {
        cy.checkTextVisibility('Is web scraping legal');
    });

    it('16. Test to check text "What is web scraping?" is present', () => {
        cy.checkTextVisibility('What is web scraping?');
    });

    it('17. Test to check text "Related Articles" is present', () => {
        cy.checkTextVisibility('Related Articles');
    });

    it('18. Test to check "Mozilla site" link is present', () => {
        cy.get('a').contains('Mozilla site').should('be.visible');
    });

    it('19. Test to click "Google Search Results API" link', () => {
        cy.get('[href="https://apilayer.com/marketplace/description/google_search-api"]').click();
        cy.assertPathname('/marketplace/google_search-api');
        cy.checkTextVisibility('Google Search Results API');
        cy.go('back');
        cy.get('#details-tab > .d-md-flex > span').click();
    });

    it('20. Test to click "Advanced Scraper API" link', () => {
        cy.get(':nth-child(25) > a').click();
        cy.assertPathname('/marketplace/adv_scraper-api');
        cy.checkTextVisibility('Advanced Scraper API');
        cy.go('back');
        cy.get('#details-tab > .d-md-flex > span').click();
    });

    it('21. Test to click "this blog post " link', () => {
        cy.get('[href="https://apilayer.com/blog/article/google-serp-101-a-complete-guide-to-google-search-result-scraping"]').click();
        cy.checkTextVisibility('A Complete Guide to Google Search Result Scraping');
        cy.go('back');
        cy.get('#details-tab > .d-md-flex > span').click();
    });
});