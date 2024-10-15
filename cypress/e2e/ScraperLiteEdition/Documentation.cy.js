import { SCRAPER_BASE_URL, APILAYER_BASE_URL  } from '../../resources/data';
 
describe('Scrapper(Lite Edition) Documentation page', () => {
    before(() => {
        cy.visit(SCRAPER_BASE_URL);
    });
 
    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });
 
    it('2. Test to check "Documentation" tab visibility', () => {
        cy.componentVisiblityCheck('.d-md-flex > .d-none');
    });
 
    it('3. Test to click "Documentation" tab', () => {
        cy.get('.d-md-flex > .d-none').click();
    });
 
    it('4. Test to check "Scraper API (Lite Edition) Reference" title is present', () => {
        cy.checkTextVisibility('Scraper API (Lite Edition) Reference');
    });
 
    it('5. Test to check "Contents:" section is present', () => {
        cy.componentVisiblityCheck('.sticky-top > .text-muted', 'Contents:');
    });
 
    it('6. Test to click on "development quickstart guide" link', () => {
        cy.componentVisiblityCheck('.blockquote > p > a', 'development quickstart guide');
        cy.get('.blockquote > p > a').click();
    });
 
    it('7. Test to navigate back to url and click on the "Documentation" tab', () => {
        cy.navigateUrlwithCookies(SCRAPER_BASE_URL);
        cy.get('.d-md-flex > .d-none').click();
    });
 
    it('8. Test to click on "Accounts Pages" link', () => {
        cy.get('.col-sm-12 > :nth-child(5) > a').click();
     });
 
    it('9. Test to click on "GET" and "POST" collapse button ', () => {
       cy.get('#endpointHeading1 > .mb-0 > .btn').click();
       cy.get('#endpointHeading2 > .mb-0 > .btn').click();
    });
 
    it('10. Test to check "Authentication" hyperlink is present', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(1) > a', 'Authentication');
    });
 
    it('11. Test to click on "Authentication" hyperlink and check "Authentication" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(1) > a').click();
        cy.componentVisiblityCheck('.col-sm-12 > :nth-child(4)', 'Authentication');
    });
 
    it('12. Test to check "Endpoints" hyperlink is present', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(2) > a', 'Endpoints');
    });
 
    it('13. Test to click on "Endpoints" hyperlink and check "Endpoints" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(2) > a').click();
        cy.componentVisiblityCheck(':nth-child(9) > a', 'Endpoints');
    });
 
    it('14. Test to click on "Subscribe for Free" button', () => {
        cy.get('#endpointHeading1 > .mb-0 > .btn').click();
        cy.componentVisiblityCheck('#endpointCollapse1 > .card-body > #subscribeButton');
        cy.get('#endpointCollapse1 > .card-body > #subscribeButton').click();
        cy.get('.d-md-flex > .d-none').click();
    });
 
    it('15. Test to check "Rate Limiting" hyperlink is present', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(3) > a', 'Rate Limiting');
    });
 
    it('16. Test to click on "Rate Limiting" hyperlink and check "Rate Limiting" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(3) > a').click();
        cy.componentVisiblityCheck(':nth-child(11) > a', 'Rate Limiting');
    });
 
    it('17. Test to check "Error Codes" hyperlink is present', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(4) > a', 'Error Codes');
    });
 
    it('18. Test to click on "Error Codes" hyperlink and check "Error Codes" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(4) > a').click();
        cy.componentVisiblityCheck(':nth-child(19) > a', 'Error Codes');
    });
 
    it('19. Test to click on "support unit" link', () => {
        cy.get(':nth-child(18) > a').click();
        cy.navigateUrlwithCookies(`${APILAYER_BASE_URL}/support`);
        cy.checkTextVisibility("Contact Sales & Customer Support")
        cy.navigateUrlwithCookies(SCRAPER_BASE_URL);
        cy.get('.d-md-flex > .d-none').click();
    });
 
    it('20. Test to click on "contact for support" link', () => {
        cy.get('.col-sm-12 > :nth-child(25) > a').click();
        cy.navigateUrlwithCookies(`${APILAYER_BASE_URL}/support`);
        cy.checkTextVisibility("Contact Sales & Customer Support")
        cy.navigateUrlwithCookies(SCRAPER_BASE_URL);
        cy.get('.d-md-flex > .d-none').click();
    });
});