import { METATAGSAPI_BASE_URL } from '../../resources/data';

describe('Meta Tags API Documentation page', () => {
    before(() => {
      cy.visit(METATAGSAPI_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });   

    it('2. Test to check "Documentation" tab visibility', () => {
        cy.componentVisiblityCheck('.d-md-flex > .d-none');
    });

    it('3. Test to click "Documentation" tab', () => {
        cy.intercept('GET', '/marketplace/meta_tags-api/tabs/api_docs').as('apiRequest');
        cy.get('.d-md-flex > .d-none').click();
        cy.wait('@apiRequest');
    });

    it('4. Test to check "Contents:" span visibility and content', () => {
        cy.componentVisiblityCheck('span.text-muted.font-weight-bold', 'Contents:');
    });

    it('5. Test to check "Meta Tags API Reference" title is present', () => {
        cy.checkTextVisibility('Meta Tags API Reference');
    });

    it('6. Test to check "Just Getting Started?" title is present', () => {
        cy.checkTextVisibility('Just Getting Started?');
    });

    it('7. Test to check "development quickstart guide" link visibility and click behavior', () => {
        cy.componentVisiblityCheck('a[href="/docs/article/getting-started"]', 'development quickstart guide.');
        cy.intercept('GET', '/docs/article/getting-started').as('quickstartRequest');
        cy.get('a[href="/docs/article/getting-started"]').invoke('removeAttr', 'target').click();
        cy.wait('@quickstartRequest');
        cy.navigateUrlwithCookies(METATAGSAPI_BASE_URL);
        cy.contains('span', 'Documentation').should('be.visible').click();
    });

    it('8. Test to check "Authentication" link visibility and content', () => {
        cy.componentVisiblityCheck('a[href="#authentication"]', 'Authentication');
    });

    it('9. Test to click on "Authentication" hyperlink and check "Authentication" title is present', () => {
        cy.contains('a', 'Authentication').click();
        cy.componentVisiblityCheck('h1, h2, h3, h4', 'Authentication');
    });

    it('10. Test to click on "Accounts page" hyperlink and navigate back to main page', () => {
        cy.contains('a', 'Accounts page').invoke('removeAttr', 'target').click();
        cy.navigateUrlwithCookies(METATAGSAPI_BASE_URL);
        cy.contains('span', 'Documentation').should('be.visible').click();
    });

    it('11. Test to check and click on "Endpoints" hyperlink, then verify title is present', () => {
        cy.contains('a', 'Endpoints').should('be.visible').click();
        cy.componentVisiblityCheck('h1, h2, h3, h4', 'Endpoints');
    });

    it('12. Expands Endpoints on click', () => {
        cy.contains('a', 'Endpoints').should('be.visible').click();
        cy.componentVisiblityCheck('h1, h2, h3, h4', 'Endpoints');
    });

    it('13. Test to check "Subscribe for Free" button is present and  clicking the Subscribe for free button', () => {
        cy.get('#endpointCollapse1 > .card-body > #subscribeButton').click();
        cy.get('.d-md-flex > .d-none').click();
    });

    it('14. Test to check and click on "Rate Limiting" hyperlink, then verify title is present', () => {
        cy.contains('a', 'Rate Limiting').should('be.visible') .click();
        cy.componentVisiblityCheck('h1, h2, h3, h4', 'Rate Limiting'); 
    });

    it('15. Test to check the visibility of "Support unit" link, click on it, and navigate back to main page', () => {
        cy.componentVisiblityCheck('a', 'support unit');
        cy.contains('a', 'support unit').click();
        cy.navigateUrlwithCookies(METATAGSAPI_BASE_URL);
        cy.contains('span', 'Documentation').should('be.visible').click();
    });

    it('16. Test to check and click on "Error Codes" hyperlink, then verify title is present', () => {
        cy.contains('a', 'Error Codes').should('be.visible'); 
        cy.contains('a', 'Error Codes').click();
        cy.componentVisiblityCheck('h1, h2, h3, h4', 'Error Codes'); 
    });

    it('17. Test to check "Contact for support" link visibility and click', () => {
        cy.contains('a', 'contact for support').should('be.visible').click();
        cy.contains('span', 'Documentation').should('be.visible').click();
        cy.navigateUrlwithCookies(METATAGSAPI_BASE_URL);
    });

  });