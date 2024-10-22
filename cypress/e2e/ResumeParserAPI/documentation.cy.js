import { RESUME_PARSER_API } from '../../resources/data';

describe('Resume Parser API Documentation page', () => {
    before(() => {
        cy.visit(RESUME_PARSER_API);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });

    it('2. Test to check "Documentation" tab visibility and Test to click "Documentation" tab', () => {
        cy.moveToDoc('resume_parser-api');
    });

    it('3. Test to check "Resume Parser API Reference" title is present', () => {
        cy.checkTextVisibility('Resume Parser API Reference');
    });

    it('4. Test to check and click link "development quickstart guide."', () => {
        cy.developmentQuickstartGuide(RESUME_PARSER_API);
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

         // Check if the "API Marketplace" header is visible
        cy.get('h1 a.text-dark')
         .should('be.visible')
         .and('contain.text', 'API Marketplace');

       // Check if the introductory paragraph is present
        cy.get('p').should('be.visible')
          .and('contain.text', 'Discover, integrate, and empower your applications with our API marketplace.');

        // Navigate back to the main page with cookies preserved
        cy.navigateUrlwithCookies(RESUME_PARSER_API);

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
        cy.navigateUrlwithCookies(RESUME_PARSER_API);

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

    it('13. Test to check "Contact for support" link visibility and click', () => {
        // Check if the "Contact for support" link is visible
        cy.contains('a', 'contact for support').should('be.visible').click();

        // Navigate back to the main page
        cy.navigateUrlwithCookies(RESUME_PARSER_API);

        cy.contains('span', 'Documentation').should('be.visible').click();
    });
});
