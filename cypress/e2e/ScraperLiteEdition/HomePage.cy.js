import { SCRAPER_BASE_URL } from '../../resources/data';

describe('Scrapper(Lite Edition) Home page', () => {
    before(() => {
      cy.visit(SCRAPER_BASE_URL);
    });
  
    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });
  
    it('2. Test to check "header and Description" title is present', () => {
        cy.checkHeaderAndDescription('Scraper API (Lite Edition)', 'Scrape websites bypassing rate limitations. Ability to simulate originating IP from any country. Fast and simple.');
    });
  
    it('3. Test to check "Subscribe for free" button is present', () => {
        cy.checkSubscribeForFreeAndClick();
    });
  
    it('4. Test to check "Live Demo" button is present', () => {
        cy.liveDemo();
    });
  
    it('5. Test to check code example  is present', () => {
        cy.componentVisiblityCheck('.code-response');
    });
     
    it('6. Test to check if all tabs are present', () => {
        cy.verifyTabs();
    });

    it('7. Test to check if "Related Products and Footer" is present', () => {
        cy.checkRelatedProductAndFooter();
    });

    it('8. Test to click "check the documentation" hyperlink is working', () => {
        cy.checkTheDocumentation('Scraper API (Lite Edition) Reference');
    });

    it('9. Test to check the "visibility of the review rating section" present and clickable', () => {
        cy.checkReviewRating();
    });
  });