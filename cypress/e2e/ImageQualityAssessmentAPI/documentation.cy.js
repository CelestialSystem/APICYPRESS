import { IMAGE_QUALITY_ASSESSMENT_BASE_URL, DEVELOPMENT_QUICKSTART_GUID } from '../../resources/data';

describe('Image Quality Assessment API Documentation page', () => {
    before(() => {
        cy.visit(IMAGE_QUALITY_ASSESSMENT_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check "Documentation" tab visibility', () => {
        cy.componentVisiblityCheck('.d-md-flex > .d-none', 'Documentation');
    });

    it('3. Test to click "Documentation" tab', () => {
        cy.moveToDoc('image_quality-api');
    });

    it('4. Test to check "Contents:" span visibility and content', () => {
        cy.componentVisiblityCheck('span.text-muted.font-weight-bold', 'Contents:');
    });

    it('5. Test to check "Image Quality Assessment API Reference" title is present', () => {
        cy.checkTextVisibility('Image Quality Assessment API Reference');
    });

    it('6. Test to check "Just Getting Started?" title is present', () => {
        cy.checkTextVisibility('Just Getting Started?');
    });

    it('7. Test to check "development quickstart guide" link visibility and click behavior', () => {
        cy.componentVisiblityCheck(`a[href="${DEVELOPMENT_QUICKSTART_GUID}"]`, 'development quickstart guide.');
        cy.intercept('GET', DEVELOPMENT_QUICKSTART_GUID).as('quickstartRequest');
        cy.get(`a[href="${DEVELOPMENT_QUICKSTART_GUID}"]`).invoke('removeAttr', 'target').click();
        cy.wait('@quickstartRequest');
        cy.get('h1.h2').should('be.visible').and('contain.text', 'Getting Started');
        cy.navigateUrlwithCookies(IMAGE_QUALITY_ASSESSMENT_BASE_URL);
        cy.get('#documentation-tab').click();
    });

    it('8. Test to check "Authentication" link visibility and content', () => {
        cy.componentVisiblityCheck('a[href="#authentication"]', 'Authentication');
    });

    it('9. Test to click on "Authentication" hyperlink and check "Authentication" title is present', () => {
        cy.contains('a', 'Authentication').click();
        cy.get('h4.mb-4.mt-4').should('be.visible').and('contain.text', 'Authentication');
    });

    it('10. Test to click on "Accounts page" hyperlink and navigate back to main page', () => {
        cy.contains('a', 'Accounts page').invoke('removeAttr', 'target').click();
        cy.navigateUrlwithCookies(IMAGE_QUALITY_ASSESSMENT_BASE_URL);
        cy.get('#documentation-tab').click();
    });

    it('11. Test to check and click on "Endpoints" hyperlink, then verify title is present', () => {
        cy.contains('a', 'Endpoints').should('be.visible').click();
        cy.get('h4.mb-4.mt-4').should('be.visible').and('contain.text', 'Endpoints');
    });

    it('12. Test to check "Subscribe for Free" button is present and  clicking the Subscribe for free button and cheching tab got changed or not then returning back to doument page', () => {
        cy.get('#endpointCollapse1 > .card-body > #subscribeButton').click();
        cy.get('#pricing')
            .should('have.class', 'active')
            .and('be.visible');
        cy.get('#documentation-tab').click();
    });

    it('13. Test to check and click on "Rate Limiting" hyperlink, then verify title is present', () => {
        cy.contains('a', 'Rate Limiting').should('be.visible').click();
        cy.get('h4.mb-4.mt-4').should('be.visible').and('contain.text', 'Rate Limiting');
    });

    it('14. Test to check the visibility of "Support unit" link, click on it, and navigate back to main page', () => {
        cy.componentVisiblityCheck('a', 'support unit');
        cy.contains('a', 'support unit').click();
        cy.navigateUrlwithCookies(IMAGE_QUALITY_ASSESSMENT_BASE_URL);
        cy.get('#documentation-tab').click();
    });

    it('15. Test to check and click on "Error Codes" hyperlink, then verify title is present', () => {
        cy.contains('a', 'Error Codes').should('be.visible');
        cy.contains('a', 'Error Codes').click();
        cy.get('h4.mb-4.mt-4').should('be.visible').and('contain.text', 'Error Codes');
    });

    it('16. Test to check "Contact for support" link visibility and click', () => {
        cy.contains('a', 'contact for support').should('be.visible').click();
        cy.contains('span', 'Documentation').should('be.visible').click();
        cy.navigateUrlwithCookies(IMAGE_QUALITY_ASSESSMENT_BASE_URL);
        cy.get('#documentation-tab').click();
    });

    it('17. Test "GET /url" button click to expand content and verify elements', () => {
        cy.get('#documentation-tab').click();
        cy.get('#endpointHeading1 > .mb-0 > .btn').click();

        cy.get('#endpointCollapse1')
            .should('have.class', 'collapse show')
            .within(() => {
                cy.contains('Perform BRISQUE for the image file on URL').should('exist');
                cy.contains('Parameters').should('exist');
                cy.contains('url (required)').should('exist');
                cy.contains('URL Encoded URL of the image file.').should('exist');
                cy.contains('Location: Query').should('exist');
                cy.contains('Data Type: string').should('exist');
                cy.get('iframe[src*="/marketplace/code/widget?api_id=93&method=get&endpoint=/url"]')
                    .should('exist');
                cy.get('iframe[src*="/marketplace/code/response?service_name=image_quality&method=get&endpoint=/url"]')
                    .should('exist');
                cy.get('#subscribeButton')
                    .should('exist')
                    .and('contain', 'Subscribe for Free')
                    .click({ force: true });
                cy.window().its('loadPricing').should('exist');
            });
    });

    it('18. Test "POST /upload" button click to expand content and verify elements', () => {
        cy.get('#documentation-tab').click();
        cy.get('#endpointHeading2 > .mb-0 > .btn').click();
        cy.get('#endpointCollapse2')
            .should('have.class', 'collapse show')
            .within(() => {
                cy.contains('Perform BRISQUE on the uploaded image').should('exist');
                cy.contains('Parameters').should('exist');
                cy.contains('body (required)').should('exist');
                cy.contains('Image file data as binary in the HTTP body.').should('exist');
                cy.contains('Location: Body').should('exist');
                cy.contains('Data Type: file').should('exist');
                cy.get('iframe[src*="/marketplace/code/widget?api_id=93&method=post&endpoint=/upload"]')
                    .should('exist');
                cy.get('iframe[src*="/marketplace/code/response?service_name=image_quality&method=post&endpoint=/upload"]')
                    .should('exist');
                cy.get('#subscribeButton')
                    .should('exist')
                    .and('contain', 'Subscribe for Free')
                    .click({ force: true });
                cy.window().its('loadPricing').should('exist');
            });
    });

});