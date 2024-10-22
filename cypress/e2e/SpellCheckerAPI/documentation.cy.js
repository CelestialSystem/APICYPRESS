import { SPELL_CHECKER_BASE_URL, DEVELOPMENT_QUICKSTART_GUID } from '../../resources/data';

describe('Spell Checker API Documentation page', () => {
    before(() => {
      cy.visit(SPELL_CHECKER_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });   

    it('2. Test to check "Documentation" tab visibility', () => {
        cy.componentVisiblityCheck('.d-md-flex > .d-none', 'Documentation');
    });

    it('3. Test to click "Documentation" tab', () => {
        cy.moveToDoc('spell-api');
    });

    it('4. Test to check "Contents:" span visibility and content', () => {
        cy.componentVisiblityCheck('span.text-muted.font-weight-bold', 'Contents:');
    });

    it('5. Test to check "Spell Checker API Reference" title is present', () => {
        cy.checkTextVisibility('Spell Checker API Reference');
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
        cy.navigateUrlwithCookies(SPELL_CHECKER_BASE_URL);
        cy.contains('span', 'Documentation').should('be.visible').click();
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
        cy.navigateUrlwithCookies(SPELL_CHECKER_BASE_URL);
        cy.contains('span', 'Documentation').should('be.visible').click();
    });

    it('11. Test to check and click on "Endpoints" hyperlink, then verify title is present', () => {
        cy.contains('a', 'Endpoints').should('be.visible').click();
        cy.get('h4.mb-4.mt-4').should('be.visible').and('contain.text', 'Endpoints');
    });

    it('12. check Endpoints has the code blocks on expands', () => {
        cy.componentVisiblityCheck('.language-javascript');
    });

    it('13. Test to check "Subscribe for Free" button is present and  clicking the Subscribe for free button', () => {
        cy.get('#endpointCollapse1 > .card-body > #subscribeButton').click();
        cy.get('.d-md-flex > .d-none').click();
    });

    it('14. Test to check and click on "Rate Limiting" hyperlink, then verify title is present', () => {
        cy.contains('a', 'Rate Limiting').should('be.visible') .click();
        cy.get('h4.mb-4.mt-4').should('be.visible').and('contain.text', 'Rate Limiting');
    });

    it('15. Test to check the visibility of "Support unit" link, click on it, and navigate back to main page', () => {
        cy.componentVisiblityCheck('a', 'support unit');
        cy.contains('a', 'support unit').click();
        cy.navigateUrlwithCookies(SPELL_CHECKER_BASE_URL);
        cy.contains('span', 'Documentation').should('be.visible').click();
    });

    it('16. Test to check and click on "Error Codes" hyperlink, then verify title is present', () => {
        cy.contains('a', 'Error Codes').should('be.visible'); 
        cy.contains('a', 'Error Codes').click();
        cy.get('h4.mb-4.mt-4').should('be.visible').and('contain.text', 'Error Codes');
    });

    it('17. Test to check "Contact for support" link visibility and click', () => {
        cy.contains('a', 'contact for support').should('be.visible').click();
        cy.contains('span', 'Documentation').should('be.visible').click();
        cy.navigateUrlwithCookies(SPELL_CHECKER_BASE_URL);
        cy.contains('span', 'Documentation').should('be.visible').click();
    });
    it('18. Test to "GET /spellchecker" button click to expand content and verify elements', () => {
        cy.get('button[data-target="#endpointCollapse1"]').click();
        cy.get('#endpointCollapse1').should('have.class', 'collapse').within(() => {
        cy.contains('Check the text given and makes suggestions if possible').should('exist');
        cy.contains('Parameters').should('exist');
        cy.contains('q (required)').should('exist');
        cy.contains('Location: Query').should('exist');
        cy.contains('Data Type: string').should('exist');
        cy.get('iframe[src*="/marketplace/code/widget?api_id=82&method=get&endpoint=/spellchecker"]').should('exist');
        cy.get('iframe[src*="/marketplace/code/response?service_name=spell&method=get&endpoint=/spellchecker"]').should('exist');
        cy.get('#subscribeButton').should('exist').and('contain', 'Subscribe for Free').click({ force: true });
        cy.window().its('loadPricing').should('exist');
        });
    });

  });