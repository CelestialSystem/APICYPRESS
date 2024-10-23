import { SCRAPER_BASE_URL, APILAYER_BASE_URL  } from '../../resources/data';
 
describe('Scrapper(Lite Edition) Documentation page', () => {
    before(() => {
        cy.visit(SCRAPER_BASE_URL);
    });
 
    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });
 
    it('2. Test to check "Documentation" tab visibility', () => {
        cy.moveToDoc('scraper-api');
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
 
    it('6. Test to check and click link "development quickstart guide."', () => {
        cy.developmentQuickstartGuide(SCRAPER_BASE_URL);
    });
 
    it('7. Test to navigate back to url and click on the "Documentation" tab', () => {
        cy.navigateUrlwithCookies(SCRAPER_BASE_URL);
        cy.get('.d-md-flex > .d-none').click();
    });
 
    it('8. Test to click on "Accounts Page" link', () => {
        cy.get('a').contains('Accounts page').click({ force: true });
     });
 
    it('9. Test to click on "GET" and "POST" collapse button ', () => {
       cy.get('#endpointHeading1 > .mb-0 > .btn').click();
       cy.get('#endpointHeading2 > .mb-0 > .btn').click();
    });

    it('10. Test to click on "Authentication" hyperlink and check "Authentication" title is present', () => {
        cy.get('li > a').contains('Authentication').click();
        cy.get('[name="authentication"]').should('be.visible');
    });
 
    it('11. Test to click on "Endpoints" hyperlink and check "Endpoints" title is present', () => {
        cy.get('[name="rate-limits"]').should('be.visible');
        cy.get('li > a').contains('Error Codes').click();
    });
 
    it('12. Test to click on "Subscribe for Free" button', () => {
        cy.get('#endpointHeading1 > .mb-0 > .btn').click();
        cy.componentVisiblityCheck('#endpointCollapse1 > .card-body > #subscribeButton');
        cy.get('#endpointCollapse1 > .card-body > #subscribeButton').click();
        cy.get('.d-md-flex > .d-none').click();
    });
 
    it('13. Test to click on "Rate Limiting" hyperlink and check "Rate Limiting" title is present', () => {
        cy.get('li > a').contains('Rate Limiting').click();
        cy.get('[name="rate-limits"]').should('be.visible');
    });
 
    it('14. Test to click on "Error Codes" hyperlink and check "Error Codes" title is present', () => {
        cy.get('li > a').contains('Error Codes').click();
        cy.get('[name="errors"]').should('be.visible');
    });
 
    it('15. Test to click on "support unit" link', () => {
        cy.get('a').contains('support unit').click();
        cy.navigateUrlwithCookies(`${APILAYER_BASE_URL}/support`);
        cy.checkTextVisibility("Contact Sales & Customer Support")
        cy.navigateUrlwithCookies(SCRAPER_BASE_URL);
        cy.get('.d-md-flex > .d-none').click();
    });
 
    it('16. Test to click on "contact for support" link', () => {
        cy.get('a').contains('contact for support').click();
        cy.navigateUrlwithCookies(`${APILAYER_BASE_URL}/support`);
        cy.checkTextVisibility("Contact Sales & Customer Support")
        cy.navigateUrlwithCookies(SCRAPER_BASE_URL);
        cy.get('.d-md-flex > .d-none').click();
    });
});