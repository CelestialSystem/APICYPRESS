import { SHORTURLAPI_BASE_URL } from '../../resources/data';

describe('URL Shortener API Documentation page', () => {
    before(() => {
        cy.visit(SHORTURLAPI_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });

    it('2. Test to check "Documentation" tab visibility and Test to click "Documentation" tab', () => {
        cy.moveToDoc('short_url-api');
    });

    it('3. Test to check "URL Shortener API Reference" title is present', () => {
        cy.checkTextVisibility('URL Shortener API Reference');
    });

    it('4. Test to check and click link "development quickstart guide."', () => {
        cy.developmentQuickstartGuide(SHORTURLAPI_BASE_URL);
    });

    it('5. Test to check "Contents:" span visibility and content', () => {
        cy.componentVisiblityCheck('span.text-muted.font-weight-bold', 'Contents:');
    });

    it('6. Test to check "Authentication" link visibility and content', () => {
        cy.componentVisiblityCheck('a[href="#authentication"]', 'Authentication');
    });

    it('7. Test to click on "Authentication" hyperlink and check "Authentication" title is present', () => {
        // Use a more resilient selector to find the "Authentication" link
        cy.contains('a', 'Authentication').click();

        // Check if the "Authentication" title is visible
        cy.componentVisiblityCheck('h1, h2, h3, h4', 'Authentication');
    });

    it('8. Test to click on "Accounts page" hyperlink and navigate back to main page', () => {
        // Click the "Accounts page" link, ensuring it opens in the same tab
        cy.contains('a', 'Accounts page').invoke('removeAttr', 'target').click();

        // Navigate back to the main page with cookies preserved
        cy.navigateUrlwithCookies(SHORTURLAPI_BASE_URL);

        // Perform further actions on the main page
        cy.contains('span', 'Documentation').should('be.visible').click();
    });

    it('9. Test to check and click on "Endpoints" hyperlink, then verify title is present', () => {
        // Check if the "Endpoints" link is visible and click it
        cy.contains('a', 'Endpoints')
            .should('be.visible') // Assert the link is visible
            .click(); // Click the link

        // Check for the title or expected content after clicking
        cy.componentVisiblityCheck('h1, h2, h3, h4', 'Endpoints');
    });

    it('10. Test to check and click on "Rate Limiting" hyperlink, then verify title is present', () => {
        // Use a robust selector to find the "Rate Limiting" link
        cy.contains('a', 'Rate Limiting')
            .should('be.visible') // Check if the link is visible
            .click(); // Click the "Rate Limiting" link

        // Check for the title or expected content after clicking
        cy.componentVisiblityCheck('h1, h2, h3, h4', 'Rate Limiting');
    });

    it('11. Test to check the visibility of "Support unit" link, click on it, and navigate back to main page', () => {
        // Check if the "Support unit" link is visible
        cy.componentVisiblityCheck('a', 'support unit'); // Check visibility and text

        // Click the "Support unit" link
        cy.contains('a', 'support unit').click();

        // Navigate back to the main page
        cy.navigateUrlwithCookies(SHORTURLAPI_BASE_URL);

        cy.contains('span', 'Documentation').should('be.visible').click();
    });

    it('12. Test to check and click on "Error Codes" hyperlink, then verify title is present', () => {
        // Check if the "Error Codes" link is visible
        cy.contains('a', 'Error Codes').should('be.visible'); // Assert the link is visible

        // Click the "Error Codes" link
        cy.contains('a', 'Error Codes').click();

        // Check for the title or expected content after clicking
        cy.componentVisiblityCheck('h1, h2, h3, h4', 'Error Codes');
    });

    it('13. Test to check on the "DELETE" expandable button click and verify description visibility', () => {
        // Check if the "DELETE" button is visible
        cy.get('button[data-target="#endpointCollapse1"]').should('be.visible').click();

        // Verify that the expected description text is visible after the button is clicked
        cy.checkTextVisibility('Deletes a short url');
    });

    it('14. Test to check on the "GET" expandable button click and verify description visibility', () => {
        // Check if the "GET" button is visible
        cy.get('button[data-target="#endpointCollapse2"]').should('be.visible').click();

        // Verify that the expected description text is visible after the button is clicked
        cy.checkTextVisibility('Gets a short url\'s details');
    });

    it('15. Test to check on the "GET/hashes" expandable button visibility and click', () => {
        // Check if the "GET/hashes" button is visible
        cy.get('.btn-link.btn-block.d-flex.justify-content-between.card-btn.p-3[data-target="#endpointCollapse3"]').should('be.visible').click();

        // Verify that the expected description text is visible after the button is clicked
        cy.checkTextVisibility('Gets all the short url\'s that is active');
    });

    it('16. Test to check on the "GET/stats/{hash}" expandable button visibility and click', () => {
        // Check if the "GET/stats/{hash}" button is visible
        cy.get('.btn-link.btn-block.d-flex.justify-content-between.card-btn.p-3[data-target="#endpointCollapse4"]').should('be.visible').click();

        // Verify that the expected description text is visible after the button is clicked
        cy.checkTextVisibility('Gets usage stats for url');
    });

    it('17. Test to check on the "POST/hash" expandable button visibility and click', () => {
        // Check if the "POST/hash" button is visible
        cy.get('.btn-link.btn-block.d-flex.justify-content-between.card-btn.p-3[data-target="#endpointCollapse5"]').should('be.visible').click();

        // Verify that the expected description text is visible after the button is clicked
        cy.checkTextVisibility('Generates a short url');
    });

    it('18. Test to check "Contact for support" link visibility and click', () => {
        // Check if the "Contact for support" link is visible
        cy.contains('a', 'contact for support').should('be.visible').click();

        // Navigate back to the main page
        cy.navigateUrlwithCookies(SHORTURLAPI_BASE_URL);

        cy.contains('span', 'Documentation').should('be.visible').click();
    });
});
