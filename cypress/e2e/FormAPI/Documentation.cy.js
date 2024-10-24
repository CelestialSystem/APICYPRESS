import { FORM_API_BASE_URL, APILAYER_BASE_URL, DEVELOPMENT_QUICKSTART_GUID } from '../../resources/data';

describe('Form API Documentation page', () => {
    before(() => {
        cy.visit(FORM_API_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check "Documentation" tab visibility', () => {
        cy.intercept('GET', '/marketplace/form_api-api/tabs/api_docs').as('apiRequest');
        cy.componentVisiblityCheck('.d-md-flex > .d-none');
        cy.get('#documentation-tab').click();
        cy.wait('@apiRequest');
        cy.componentVisiblityCheck('#documentation');
    });

    it('3. Test to check "Form API Reference" title is present', () => {
        cy.checkTextVisibility('Form API Reference');
    });

    it('4. Test to check "Contents:" section is present', () => {
        cy.componentVisiblityCheck('.sticky-top > .text-muted', 'Contents:');
    });

    it('5. Test to click on "development quickstart guide" link', () => {
        cy.componentVisiblityCheck(`a[href="${DEVELOPMENT_QUICKSTART_GUID}"]`, 'development quickstart guide.');

        cy.intercept('GET', DEVELOPMENT_QUICKSTART_GUID).as('quickstartRequest');

        // Click the link and wait for the request
        cy.get(`a[href="${DEVELOPMENT_QUICKSTART_GUID}"]`).invoke('removeAttr', 'target').click();
        cy.wait('@quickstartRequest');

        cy.get('h1.h2') // Select the <h1> element with the class 'h2'
            .should('be.visible') // Assert that it is visible
            .and('contain.text', 'Getting Started'); // Assert that it contains the text "Getting Started"

        cy.navigateUrlwithCookies(FORM_API_BASE_URL);
        cy.contains('span', 'Documentation').should('be.visible').click();
    });

    it('7. Test to click on "Accounts Page" link', () => {
        // Click the "Accounts page" link, ensuring it opens in the same tab
        cy.contains('a', 'Accounts page').invoke('removeAttr', 'target').click();

        // Check if the "API Marketplace" header is visible
        cy.get('h1 a.text-dark')
            .should('be.visible')
            .and('contain.text', 'API Marketplace');

        // Navigate back to the main page with cookies preserved
        cy.navigateUrlwithCookies(FORM_API_BASE_URL);

        // Perform further actions on the main page
        cy.contains('span', 'Documentation').should('be.visible').click();
    });

    it('8. Test to click on "GET" and "POST" collapse button ', () => {
        cy.get('#endpointHeading1 > .mb-0 > .btn').click();
        cy.get('.card-btn-toggle-default')
            .should('be.visible')
            .and('contain.text', '+');

        cy.get('#endpointHeading2 > .mb-0 > .btn').click();
        cy.get('.card-btn-toggle-default')
            .should('be.visible')
            .and('contain.text', '+');
    });

    it('1. Test to click on "Authentication" hyperlink and check "Authentication" title is present', () => {
        cy.get('li > a').contains('Authentication').click();
        cy.get('[name="authentication"]').should('be.visible');
    });

    it('11. Test to click on "Endpoints" hyperlink and check "Endpoints" title is present', () => {
        cy.get('[name="rate-limits"]').should('be.visible');
        cy.get('li > a').contains('Error Codes').click();
    });

    it('12. Test to click on "Subscribe for Free" button', () => {
        // cy.get('#endpointHeading1 > .mb-0 > .btn').click();
        // cy.componentVisiblityCheck('#endpointCollapse1 > .card-body > #subscribeButton');
        // cy.get('#endpointCollapse1 > .card-body > #subscribeButton').click();
        // cy.get('.d-md-flex > .d-none').click();

        // Verify the GET /url heading is present and visible
        cy.get('#endpointHeading1 button')
            .find('i.fas.fa-angle-right')
            .should('be.visible');

        // Click the button to expand the endpoint details
        cy.get('#endpointHeading1 button').click();

        // Check if the endpoint description is correct
        cy.get('#endpointCollapse1 .card-body p')
            .contains('Deletes a form')
            .should('be.visible');

        // Verify the Parameters section
        cy.get('#endpointCollapse1 .card-body h6')
            .contains('Parameters')
            .should('be.visible');

        // Verify 'url' parameter section
        cy.get('#endpointCollapse1 .card-body p.mb-2')
            .first() // Get the first matching element
            .within(() => {
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
        cy.navigateUrlwithCookies(FORM_API_BASE_URL);
        cy.get('.d-md-flex > .d-none').click();
    });

    it('16. Test to click on "contact for support" link', () => {
        cy.get('a').contains('contact for support').click();
        cy.navigateUrlwithCookies(`${APILAYER_BASE_URL}/support`);
        cy.checkTextVisibility("Contact Sales & Customer Support")
        cy.navigateUrlwithCookies(FORM_API_BASE_URL);
        cy.get('.d-md-flex > .d-none').click();
    });
});