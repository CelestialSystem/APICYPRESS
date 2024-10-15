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

    it('5. Test to check text "How to use CSS Selectors?" is present', () => {
        cy.checkTextVisibility('How to use CSS Selectors?');
    });

    it('6. Test to check text "Image files scraping" is present', () => {
        cy.checkTextVisibility('Image files scraping');
    });

    it('7. Test to check text "Rotating IP addresses" is present', () => {
        cy.checkTextVisibility('Rotating IP addresses');
    });

    it('8. Test to check text "Setting Custom HTTP Headers" is present', () => {
        cy.checkTextVisibility('Setting Custom HTTP Headers');
    });

    it('9. Test to check text "Can I scrape Google Search Results with it?" is present', () => {
        cy.checkTextVisibility('Can I scrape Google Search Results with it?');
    });

    it('10. Test to check text "Privacy" is present', () => {
        cy.checkTextVisibility('Privacy');
    });

    it('11. Test to check text "Common areas web scraping used for:" is present', () => {
        cy.checkTextVisibility('Common areas web scraping used for:');
    });

    it('12. Test to check text "Is web scraping legal" is present', () => {
        cy.checkTextVisibility('Is web scraping legal');
    });

    it('13. Test to check text "What is web scraping?" is present', () => {
        cy.checkTextVisibility('What is web scraping?');
    });

    it('14. Test to check text "Related Articles" is present', () => {
        cy.checkTextVisibility('Related Articles');
    });

    it('15. Test to check "Mozilla site" link is present', () => {
        cy.componentVisiblityCheck(':nth-child(21) > a')
    });

    it('16. Test to click "Google Search Results API" link', () => {
        cy.get('[href="https://apilayer.com/marketplace/description/google_search-api"]').click();
        cy.assertPathname('/marketplace/google_search-api');
        cy.checkTextVisibility('Google Search Results API');
        cy.go('back');
        cy.get('#details-tab > .d-md-flex > span').click();
    });

    it('17. Test to click "Advanced Scraper API" link', () => {
        cy.get(':nth-child(25) > a').click();
        cy.assertPathname('/marketplace/adv_scraper-api');
        cy.checkTextVisibility('Advanced Scraper API');
        cy.go('back');
        cy.get('#details-tab > .d-md-flex > span').click();
    });

    it('18. Test to click "this blog post " link', () => {
        cy.get('[href="https://apilayer.com/blog/article/google-serp-101-a-complete-guide-to-google-search-result-scraping"]').click();
        cy.checkTextVisibility('A Complete Guide to Google Search Result Scraping');
        cy.go('back');
        cy.get('#details-tab > .d-md-flex > span').click();
    });
});