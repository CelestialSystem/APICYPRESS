import { REACHABILITY_API_BASE_URL, DEVELOPMENT_QUICKSTART_GUID } from '../../resources/data';

describe('Reachability API Documentation page', () => {
    before(() => {
        cy.visit(REACHABILITY_API_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });

    it('2. Test to check "Documentation" tab visibility and Test to click "Documentation" tab', () => {
        cy.componentVisiblityCheck('span', 'Documentation');
        cy.intercept('GET', '/marketplace/reachability-api/tabs/api_docs').as('apiRequest');
        cy.contains('span', 'Documentation').click();
        cy.wait('@apiRequest');
    });

    it('3. Test to check "Reachability API Reference" title is present', () => {
        cy.checkTextVisibility('Reachability API Reference');
    });

    it('4. Test to check and click link "development quickstart guide."', () => {
        cy.developmentQuickstartGuide(REACHABILITY_API_BASE_URL);
    });

    it('5. Test to check "Contents:" span visibility and content', () => {
        cy.checkTextVisibility('Contents:');
    });

    it('6. Test to check "Authentication" link visibility and content', () => {
        cy.componentVisiblityCheck('a[href="#authentication"]', 'Authentication');
    });

    it('7. Test to click on "Authentication" hyperlink and check "Authentication" title is present', () => {
        // Use a more resilient selector to find the "Authentication" link
        cy.contains('a', 'Authentication').click();

        // Check if the "Authentication" title is visible
        cy.get('h4.mb-4.mt-4')
            .should('be.visible') // Ensure the element is visible
            .and('contain.text', 'Authentication'); // Verify the correct text is present
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
        cy.navigateUrlwithCookies(REACHABILITY_API_BASE_URL);

        // Perform further actions on the main page
        cy.contains('span', 'Documentation').should('be.visible').click();
    });

    it('9. Test to check and click on "Endpoints" hyperlink, then verify title is present', () => {
        // Check if the "Endpoints" link is visible and click it
        cy.contains('a', 'Endpoints')
            .should('be.visible') // Assert the link is visible
            .click(); // Click the link

        // Check for the title or expected content after clicking
        cy.get('h4.mb-4.mt-4')
            .should('be.visible') // Ensure the element is visible
            .and('contain.text', 'Endpoints'); // Verify the correct text is present
    });

    it('10. Test to check and click on "Rate Limiting" hyperlink, then verify title is present', () => {
        // Use a robust selector to find the "Rate Limiting" link
        cy.contains('a', 'Rate Limiting')
            .should('be.visible') // Check if the link is visible
            .click(); // Click the "Rate Limiting" link

        // Check for the title or expected content after clicking
        cy.get('h4.mb-4.mt-4')
            .should('be.visible') // Ensure the element is visible
            .and('contain.text', 'Rate Limiting'); // Verify the correct text is present
    });

    it('11. Test to check the visibility of "Support unit" link, click on it, and navigate back to main page', () => {
        // Check if the "Support unit" link is visible
        cy.componentVisiblityCheck('a', 'support unit'); // Check visibility and text

        // Click the "Support unit" link
        cy.contains('a', 'support unit').click();

        // Navigate back to the main page
        cy.navigateUrlwithCookies(REACHABILITY_API_BASE_URL);

        cy.contains('span', 'Documentation').should('be.visible').click();
    });

    it('12. Test to check and click on "Error Codes" hyperlink, then verify title is present', () => {
        // Check if the "Error Codes" link is visible
        cy.contains('a', 'Error Codes').should('be.visible'); // Assert the link is visible

        // Click the "Error Codes" link
        cy.contains('a', 'Error Codes').click();

        // Check for the title or expected content after clicking
        cy.get('h4.mb-4.mt-4')
            .should('be.visible') // Ensure the element is visible
            .and('contain.text', 'Error Codes'); // Verify the correct text is present
    });

    it('13. Test to check "Contact for support" link visibility and click', () => {
        // Check if the "Contact for support" link is visible
        cy.contains('a', 'contact for support').should('be.visible').click();

        // Navigate back to the main page
        cy.navigateUrlwithCookies(REACHABILITY_API_BASE_URL);

        cy.contains('span', 'Documentation').should('be.visible').click();
    });

    it('14. Verify the "GET/" endpoint content and click "Subscribe for Free"', () => {
        // Verify the GET /url heading is present and visible
        cy.get('#endpointHeading1 button')
            .find('i.fas.fa-angle-right')
            .should('be.visible');

        // Click the button to expand the endpoint details
        cy.get('#endpointHeading1 button').click();

        // Check if the endpoint description is correct
        cy.get('#endpointCollapse1 .card-body p')
            .contains('Checks reachability of a URL')
            .should('be.visible');

        // Verify the Parameters section
        cy.get('#endpointCollapse1 .card-body h6')
            .contains('Parameters')
            .should('be.visible');

        // Verify 'url' parameter section
        cy.get('#endpointCollapse1 .card-body p.mb-2')
            .first() // Get the first matching element
            .within(() => {
                cy.get('strong.text-dark')
                    .should('contain.text', 'url')
                    .and('be.visible');

                cy.get('span.font-weight-bold')
                    .should('contain.text', '(required)')
                    .and('be.visible');
            });

        // Check if the 'code-snippet' exists
        cy.get('#endpointCollapse1 > .card-body > .fluid.mt-3')
            .should('exist') // Verify it's present in the DOM
            .and('be.visible'); // Verify it's visible on the page

        // Check if the response code box exists
        cy.get('#endpointCollapse1 > .card-body > .code-response')
            .should('exist') // Verify it's present
            .and('be.visible'); // Verify it's visible

        // Verify the Subscribe button is visible
        cy.get('#subscribeButton')
            .should('be.visible')
            .and('contain.text', 'Subscribe for Free')
            .click();

        // Check if the pricing tab is active after clicking the button
        cy.get('a#pricing-tab')
            .should('have.class', 'active')
            .and('be.visible');

        // Click the Documentation link
        cy.get('.d-md-flex > .d-none').contains('Documentation').click();
    });
});
