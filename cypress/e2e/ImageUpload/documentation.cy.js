import { IMAGE_UPLOAD_BASE_URL } from '../../resources/data';

describe('Image Upload Documentation page', () => {
    before(() => {
        cy.visit(IMAGE_UPLOAD_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click on the "Documentation" tab', () => {
        cy.intercept('GET', '/marketplace/image_upload-api/tabs/api_docs').as('apiRequest');
        cy.get('#documentation-tab').click();
        cy.wait('@apiRequest');
        cy.componentVisiblityCheck('#documentation');
    });

    it('7. Test to check and click link "development quickstart guide."', () => {
        cy.developmentQuickstartGuide(IMAGE_UPLOAD_BASE_URL);
    });

    it('4. Test to click on "Accounts Pages" link', () => {
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
        cy.navigateUrlwithCookies(IMAGE_UPLOAD_BASE_URL);

        // Perform further actions on the main page
        cy.contains('span', 'Documentation').should('be.visible').click();
    });

    it('5. Test to check "Authentication" hyperlink is present', () => {
        cy.contains('a', 'Authentication');
    });

    it('6. Test to click on "Authentication" hyperlink and check "Authentication" title is present', () => {
        cy.contains('a', 'Authentication').click();
        cy.checkTextVisibility('Authentication');
    });

    it('7. Test to check "Endpoints" hyperlink is present', () => {
        cy.contains('a', 'Endpoints');
    });

    it('8. Test to click on "Endpoints" hyperlink and check "Endpoints" title is present', () => {
        cy.contains('a', 'Endpoints').click();
        cy.checkTextVisibility('Endpoints');
    });

    it('9. Test to click on "Subscribe for Free" button', () => {
        cy.get('#subscribeButton').should('contain.text', 'Subscribe for Free').click();
        cy.get('#pricing').should('be.visible');
        cy.get('#documentation-tab').click();
    });

    it('10. Test to check "Rate Limiting" hyperlink is present', () => {
        cy.contains('a', 'Rate Limiting');
    });

    it('11. Test to click on "Rate Limiting" hyperlink and check "Rate Limiting" title is present', () => {
        cy.contains('a', 'Rate Limiting').click();
        cy.checkTextVisibility('Rate Limiting');
    });

    it('12. Test to check "Error Codes" hyperlink is present', () => {
        cy.contains('a', 'Error Codes');
    });

    it('13. Test to click on "Error Codes" hyperlink and check "Error Codes" title is present', () => {
        cy.contains('a', 'Error Codes').click();
        cy.checkTextVisibility('Error Codes');
    });

    it('14. Test to check and click the link "support unit" and "contact for support"', () => {
        cy.get('p > a').contains('support unit').should('have.attr', 'target', '_blank');
        cy.get('p > a').contains('support unit').should('have.attr', 'href', '/support');
        cy.get('p > a').contains('contact for support').should('have.attr', 'target', '_blank');
        cy.get('p > a').contains('contact for support').should('have.attr', 'href', '/support');
    });

    it('15. Test to click on "POST/upload" collapse button ', () => {
        cy.get('#endpointHeading1 > .mb-0 > .btn').click();
        cy.get('.card-btn-toggle-default')
            .should('be.visible')
            .and('contain.text', '+');
    });

    it('16. Test to click on "POST/url" collapse button ', () => {
        cy.get('#endpointHeading2 > .mb-0 > .btn').click();
        cy.get('.card-btn-toggle-default')
            .should('be.visible')
            .and('contain.text', '+');
    });
});
