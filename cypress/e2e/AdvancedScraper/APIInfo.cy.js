import { ADVANCED_SCRAPER_BASE_URL, APILAYER_BASE_URL } from '../../resources/data';

describe('Advanced Scraper API Info page', () => {
    before(() => {
        cy.visit(ADVANCED_SCRAPER_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click on the "API Info" tab', () => {
        cy.get('#details-tab').click();
    });

    it('3. Test to check and click link "previous Scraper API"', () => {
        cy.get('a').contains('previous Scraper API').click();
        cy.url().should('eq', APILAYER_BASE_URL +  '/marketplace/scraper-api');
        cy.go('back');
        cy.get('#details-tab').click();
    });

    it('4. Test to check if text "Advanced web scraper API with rotating IPs (from 170+ countries), browser rendering and JS execution capabilities." is present', () => {
        cy.checkTextVisibility('Advanced web scraper API with rotating IPs (from 170+ countries), browser rendering and JS execution capabilities.');
    });
   
    it('5. Test to check if title text\'s in the page', () => {
        cy.checkTextVisibility('Basic Usage');
        cy.checkTextVisibility('How to turn browser rendering on.');
        cy.checkTextVisibility('How to execute JS code on the remote site');
        cy.checkTextVisibility('How to use CSS Selectors?');
        cy.checkTextVisibility('Image files scraping');
        cy.checkTextVisibility('Rotating IP addresses');
        cy.checkTextVisibility('Setting Custom HTTP Headers');
    });
  
    it('6. Test to check if code blocks is present', () => {
        cy.componentVisiblityCheck('.language-shell');
        cy.componentVisiblityCheck('.language-javascript');
        cy.componentVisiblityCheck('img[alt="Scraping Image Files"]');
    });

});