import { DISPOSABLE_EMAIL_API, DEVELOPMENT_QUICKSTART_GUID } from '../../resources/data';

describe('Disposable Email Detection API Documentation page', () => {
    before(() => {
        cy.visit(DISPOSABLE_EMAIL_API);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });

    it('2. Test to check "Documentation" tab visibility and Test to click "Documentation" tab', () => {
        cy.componentVisiblityCheck('span', 'Documentation');
        cy.intercept('GET', '/marketplace/disposable_email-api/tabs/api_docs').as('apiRequest');
        cy.contains('span', 'Documentation').click();
        cy.wait('@apiRequest');
    });

    it('3. Test to check "Disposable Email Detection API Reference" title is present', () => {
        cy.checkTextVisibility('Disposable Email Detection API Reference');
    });

    it('4. Test to check "development quickstart guide" link visibility and click behavior', () => {
        cy.componentVisiblityCheck(`a[href="${DEVELOPMENT_QUICKSTART_GUID}"]`, 'development quickstart guide.');

        cy.intercept('GET', DEVELOPMENT_QUICKSTART_GUID).as('quickstartRequest');

        // Click the link and wait for the request
        cy.get(`a[href="${DEVELOPMENT_QUICKSTART_GUID}"]`).invoke('removeAttr', 'target').click();
        cy.wait('@quickstartRequest');

        cy.get('h1.h2') // Select the <h1> element with the class 'h2'
            .should('be.visible') // Assert that it is visible
            .and('contain.text', 'Getting Started'); // Assert that it contains the text "Getting Started"

        cy.navigateUrlwithCookies(DISPOSABLE_EMAIL_API);
        cy.contains('span', 'Documentation').should('be.visible').click();
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
        cy.get('h4.mb-4.mt-4')
            .should('be.visible')  // Ensure the element is visible
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
        cy.navigateUrlwithCookies(DISPOSABLE_EMAIL_API);

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
            .should('be.visible')  // Ensure the element is visible
            .and('contain.text', 'Endpoints'); // Verify the correct text is present
    });

    it('10. Test to check and click on "Rate Limiting" hyperlink, then verify title is present', () => {
        // Use a robust selector to find the "Rate Limiting" link
        cy.contains('a', 'Rate Limiting')
            .should('be.visible') // Check if the link is visible
            .click(); // Click the "Rate Limiting" link

        // Check for the title or expected content after clicking
        cy.get('h4.mb-4.mt-4')
            .should('be.visible')  // Ensure the element is visible
            .and('contain.text', 'Rate Limiting'); // Verify the correct text is present
    });

    it('11. Test to check the visibility of "Support unit" link, click on it, and navigate back to main page', () => {
        // Check if the "Support unit" link is visible
        cy.componentVisiblityCheck('a', 'support unit'); // Check visibility and text

        // Click the "Support unit" link
        cy.contains('a', 'support unit').click();

        // Navigate back to the main page
        cy.navigateUrlwithCookies(DISPOSABLE_EMAIL_API);

        cy.contains('span', 'Documentation').should('be.visible').click();
    });

    it('12. Test to check and click on "Error Codes" hyperlink, then verify title is present', () => {
        // Check if the "Error Codes" link is visible
        cy.contains('a', 'Error Codes').should('be.visible'); // Assert the link is visible

        // Click the "Error Codes" link
        cy.contains('a', 'Error Codes').click();

        // Check for the title or expected content after clicking
        cy.get('h4.mb-4.mt-4')
            .should('be.visible')  // Ensure the element is visible
            .and('contain.text', 'Error Codes'); // Verify the correct text is present

    });

    it('13. Test to check "Contact for support" link visibility and click', () => {
        // Check if the "Contact for support" link is visible
        cy.contains('a', 'contact for support').should('be.visible').click();

        // Navigate back to the main page
        cy.navigateUrlwithCookies(DISPOSABLE_EMAIL_API);

        cy.contains('span', 'Documentation').should('be.visible').click();
    });

    it('14. Test to "Get/{email}" button click to expand content and verify elements', () => {
        // Click the button to expand the section
        cy.get('button[data-target="#endpointCollapse1"]').click();

        // Verify the expanded section content
        cy.get('#endpointCollapse1')
            .should('have.class', 'collapse')
            .within(() => {
                // Verify text about the endpoint functionality
                cy.contains('Validates and verifies an email checking that if it is a disposable email address or not')
                    .should('exist');

                // Verify the 'Parameters' section content
                cy.contains('Parameters').should('exist');
                cy.contains('email (required)').should('exist');
                cy.contains('Location: Path').should('exist');
                cy.contains('Data Type: string').should('exist');

                // Verify if the iframes are rendered
                cy.get('iframe[src*="/marketplace/code/widget"]')
                    .should('exist');

                cy.get('iframe[src*="/marketplace/code/response"]')
                    .should('exist');

                // Check for 'Subscribe for Free' button and click it
                cy.get('#subscribeButton')
                    .should('exist')
                    .and('contain', 'Subscribe for Free')
                    .click({ force: true });

                //Verify if the `loadPricing` function triggers correctly
                cy.window().its('loadPricing').should('exist');
            });
    });
});
