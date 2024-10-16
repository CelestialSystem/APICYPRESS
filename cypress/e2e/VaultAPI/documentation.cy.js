import { VAULT_API_BASE_URL, DEVELOPMENT_QUICKSTART_GUID } from '../../resources/data';

describe('Vault API Documentation page', () => {
    before(() => {
        cy.visit(VAULT_API_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check "Documentation" tab visibility', () => {
        cy.componentVisiblityCheck('.d-md-flex > .d-none', 'Documentation');
    });

    it('3. Test to click "Documentation" tab', () => {
        cy.intercept('GET', '/marketplace/vault-api/tabs/api_docs').as('apiRequest');
        cy.get('#documentation-tab').click();
        cy.wait('@apiRequest');
    });

    it('4. Test to check "Contents:" span visibility and content', () => {
        cy.componentVisiblityCheck('span.text-muted.font-weight-bold', 'Contents:');
    });

    it('5. Test to check "Vault API Reference" title is present', () => {
        cy.checkTextVisibility('Vault API Reference');
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
        cy.navigateUrlwithCookies(VAULT_API_BASE_URL);
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
        cy.navigateUrlwithCookies(VAULT_API_BASE_URL);
        cy.get('#documentation-tab').click();
    });

    it('11. Test to check and click on "Endpoints" hyperlink, then verify title is present', () => {
        cy.contains('a', 'Endpoints').should('be.visible').click();
        cy.get('h4.mb-4.mt-4').should('be.visible').and('contain.text', 'Endpoints');
    });

    it('12. Test to check "Subscribe for Free" button is present and  clicking the Subscribe for free button', () => {
        cy.get('#endpointCollapse1 > .card-body > #subscribeButton').click();
        cy.get('#documentation-tab').click();
    });

    it('13. Test to check and click on "Rate Limiting" hyperlink, then verify title is present', () => {
        cy.contains('a', 'Rate Limiting').should('be.visible').click();
        cy.get('h4.mb-4.mt-4').should('be.visible').and('contain.text', 'Rate Limiting');
    });

    it('14. Test to check the visibility of "Support unit" link, click on it, and navigate back to main page', () => {
        cy.componentVisiblityCheck('a', 'support unit');
        cy.contains('a', 'support unit').click();
        cy.navigateUrlwithCookies(VAULT_API_BASE_URL);
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
        cy.navigateUrlwithCookies(VAULT_API_BASE_URL);
        cy.get('#documentation-tab').click();
    });

    it('17. Test "DELETE /content" button click to expand content and verify elements', () => {
        cy.get('#endpointHeading1 > .mb-0 > .btn').click();
        cy.get('#endpointCollapse1')
            .should('have.class', 'collapse')
            .within(() => {
                cy.contains('Deletes a content').should('exist');
                cy.contains('Parameters').should('exist');
                cy.contains('path (required)').should('exist');
                cy.contains('Unix like path structure for deletion').should('exist');
                cy.contains('Location: Query').should('exist');
                cy.contains('Data Type: string').should('exist');
                cy.contains('encryption_key (optional)').should('exist');
                cy.contains('If encryption key is not stored, it must be provided here').should('exist');
                cy.contains('Location: Header').should('exist');
                cy.contains('Data Type: string').should('exist');
                cy.get('iframe[src*="/marketplace/code/widget?api_id=78&method=delete&endpoint=/content"]')
                    .should('exist');
                cy.get('iframe[src*="/marketplace/code/response?service_name=vault&method=delete&endpoint=/content"]')
                    .should('exist');
                cy.get('#subscribeButton')
                    .should('exist')
                    .and('contain', 'Subscribe for Free')
                    .click({ force: true });
                cy.window().its('loadPricing').should('exist');
            });
    });

    it('18. Test "DELETE /key" button click to expand content and verify elements', () => {
        cy.get('#documentation-tab').click();
        cy.get('#endpointHeading2 > .mb-0 > .btn').click();
        cy.get('#endpointCollapse2')
            .should('have.class', 'collapse')
            .within(() => {
                cy.contains('Deletes the encryption key').should('exist');
                cy.contains('No parameters.').should('exist');
                cy.get('iframe[src*="/marketplace/code/widget?api_id=78&method=delete&endpoint=/key"]')
                    .should('exist');
                cy.get('iframe[src*="/marketplace/code/response?service_name=vault&method=delete&endpoint=/key"]')
                    .should('exist');
                cy.get('#subscribeButton')
                    .should('exist')
                    .and('contain', 'Subscribe for Free')
                    .click({ force: true });
                cy.window().its('loadPricing').should('exist');
            });
    });

    it('19. Test "GET /browse" button click to expand content and verify elements', () => {
        cy.get('#documentation-tab').click();
        cy.get('#endpointHeading3 > .mb-0 > .btn').click();
        cy.get('#endpointCollapse3')
            .should('have.class', 'collapse')
            .within(() => {
                cy.contains('Browses a vault with a Unix like file system structure').should('exist');
                cy.contains('path (required)').should('exist');
                cy.contains('Location:').should('exist');
                cy.contains('Query').should('exist');
                cy.contains('Data Type:').should('exist');
                cy.contains('string').should('exist');
                cy.get('iframe[src*="/marketplace/code/widget?api_id=78&method=get&endpoint=/browse"]')
                    .should('exist');
                cy.get('iframe[src*="/marketplace/code/response?service_name=vault&method=get&endpoint=/browse"]')
                    .should('exist');
                cy.get('#subscribeButton')
                    .should('exist')
                    .and('contain', 'Subscribe for Free')
                    .click({ force: true });
                cy.window().its('loadPricing').should('exist');
            });
    });

    it('20. Test "GET /content" button click to expand content and verify elements', () => {
        cy.get('#documentation-tab').click();
        cy.get('#endpointHeading4 > .mb-0 > .btn').click();

        cy.get('#endpointCollapse4')
            .should('have.class', 'collapse')
            .within(() => {
                cy.contains('Gets a content from a path').should('exist');
                cy.contains('path (required)').should('exist');
                cy.contains('Unix like path structure for content retrieval').should('exist');
                cy.contains('Location:').should('exist');
                cy.contains('Query').should('exist');
                cy.contains('string').should('exist');
                cy.contains('encryption_key (optional)').should('exist');
                cy.contains('If encryption key is not stored, it must be provided here').should('exist');
                cy.contains('Header').should('exist');
                cy.contains('string').should('exist');
                cy.get('iframe[src*="/marketplace/code/widget?api_id=78&method=get&endpoint=/content"]')
                    .should('exist');
                cy.get('iframe[src*="/marketplace/code/response?service_name=vault&method=get&endpoint=/content"]')
                    .should('exist');
                cy.get('#subscribeButton')
                    .should('exist')
                    .and('contain', 'Subscribe for Free')
                    .click({ force: true });

                cy.window().its('loadPricing').should('exist');
            });
    });

    it('21. Test "GET /key" button click to expand content and verify elements', () => {
        cy.get('#documentation-tab').click();
        cy.get('#endpointHeading5 > .mb-0 > .btn').click();

        cy.get('#endpointCollapse5')
            .should('have.class', 'collapse')
            .within(() => {
                cy.contains('Gets the encryption key').should('exist');
                cy.contains('No parameters.').should('exist');
                cy.get('iframe[src*="/marketplace/code/widget?api_id=78&method=get&endpoint=/key"]')
                    .should('exist');
                cy.get('iframe[src*="/marketplace/code/response?service_name=vault&method=get&endpoint=/key"]')
                    .should('exist');
                cy.get('#subscribeButton')
                    .should('exist')
                    .and('contain', 'Subscribe for Free')
                    .click({ force: true });
                cy.window().its('loadPricing').should('exist');
            });
    });


    it('22. Test "POST /content" button click to expand content and verify elements', () => {
        cy.get('#documentation-tab').click();
        cy.get('#endpointHeading6 > .mb-0 > .btn').click();
        cy.get('#endpointCollapse6')
            .should('have.class', 'collapse')
            .within(() => {
                cy.contains('Inserts or updates a content').should('exist');
                cy.get('iframe[src*="/marketplace/code/widget?api_id=78&method=post&endpoint=/content"]')
                    .should('exist');
                cy.get('iframe[src*="/marketplace/code/response?service_name=vault&method=post&endpoint=/content"]')
                    .should('exist');
                cy.get('#subscribeButton')
                    .should('exist')
                    .and('contain', 'Subscribe for Free')
                    .click({ force: true });
                cy.window().its('loadPricing').should('exist');
            });
    });

    it('23. Test "POST /key" button click to expand content and verify elements', () => {
        cy.get('#documentation-tab').click();
        cy.get('#endpointHeading7 > .mb-0 > .btn').click();
        cy.get('#endpointCollapse7')
            .should('have.class', 'collapse')
            .within(() => {
                cy.contains('Generates a new encryption key').should('exist');
                cy.get('iframe[src*="/marketplace/code/widget?api_id=78&method=post&endpoint=/key"]')
                    .should('exist');
                cy.get('iframe[src*="/marketplace/code/response?service_name=vault&method=post&endpoint=/key"]')
                    .should('exist');
                cy.get('#subscribeButton')
                    .should('exist')
                    .and('contain', 'Subscribe for Free')
                    .click({ force: true });
                cy.window().its('loadPricing').should('exist');
            });
    });

});