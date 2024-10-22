import { SPAM_CHECK_API_BASE_URL } from '../../resources/data';

describe('Spam Check API Documentation page', () => {
    before(() => {
      cy.visit(SPAM_CHECK_API_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });   

    it('2. Test to check "Documentation" tab visibility', () => {
        cy.componentVisiblityCheck('.d-md-flex > .d-none');
    });

    it('3. Test to click "Documentation" tab', () => {
        cy.moveToDoc('spamchecker-api');
    });

    it('4. Test to check "Contents:" span visibility and content', () => {
        cy.componentVisiblityCheck('span.text-muted.font-weight-bold', 'Contents:');
    });

    it('5. Test to check "Spam Check API Reference" title is present', () => {
        cy.checkTextVisibility('Spam Check API Reference');
    });

    it('6. Test to check "Just Getting Started?" title is present', () => {
        cy.checkTextVisibility('Just Getting Started?');
    });

    it('4. Test to check and click link "development quickstart guide."', () => {
        cy.developmentQuickstartGuide(SPAM_CHECK_API_BASE_URL);
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
        cy.navigateUrlwithCookies(SPAM_CHECK_API_BASE_URL);
        cy.contains('span', 'Documentation').should('be.visible').click();
    });

    it('11. Test to check and click on "Endpoints" hyperlink, then verify title is present', () => {
        cy.contains('a', 'Endpoints').should('be.visible').click();
        cy.componentVisiblityCheck('h1, h2, h3, h4', 'Endpoints');
    });

    it('12. Expands " question', () => {
        cy.contains('a', 'Endpoints').should('be.visible').click();
        cy.componentVisiblityCheck('h1, h2, h3, h4', 'Endpoints');
    });

    it('13. Test to check "Subscribe" button is present and  clicking the Subscribe  button', () => {
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
        cy.navigateUrlwithCookies(SPAM_CHECK_API_BASE_URL);
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
        cy.navigateUrlwithCookies(SPAM_CHECK_API_BASE_URL);
    });

  });