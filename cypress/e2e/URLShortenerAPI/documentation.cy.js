import { SHORTURLAPI_BASE_URL } from '../../resources/data';

describe('URL Shortener API Documentation page', () => {
    before(() => {
        cy.visit(SHORTURLAPI_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });

    it('2. Test to check "Documentation" tab visibility', () => {
        cy.componentVisiblityCheck('.d-md-flex > .d-none');
    });

    it('3. Test to click "Documentation" tab', () => {
        cy.get('.d-md-flex > .d-none').click();
    });

    it('4. Test to check "URL Shortener API Reference" title is present', () => {
        cy.checkTextVisibility('URL Shortener API Reference');
    });

    it('5. Test to check "Contents:" is present', () => {
        cy.componentVisiblityCheck('.sticky-top > .text-muted', 'Contents:');
    });

    it('6. Test to check "Authentication" hyperlink is present', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(1) > a', 'Authentication');
    });

    it('7. Test to click on "Authentication" hyperlink and check "Authentication" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(1) > a').click();
        cy.componentVisiblityCheck('.col-sm-12 > :nth-child(4)', 'Authentication');
    });

    it('8. Test to check "Endpoints" hyperlink is present', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(2) > a', 'Endpoints');
    });

    it('9. Test to click on "Endpoints" hyperlink and check "Endpoints" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(2) > a').click();
        cy.componentVisiblityCheck(':nth-child(9) > a', 'Endpoints');
    });

    it('10. Test to check "Rate Limiting" hyperlink is present', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(3) > a', 'Rate Limiting');
    });

    it('11. Test to click on "Rate Limiting" hyperlink and check "Rate Limiting" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(3) > a').click();
        cy.componentVisiblityCheck(':nth-child(11) > a', 'Rate Limiting');
    });

    it('12. Test to check "Error Codes" hyperlink is present', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(4) > a', 'Error Codes');
    });

    it('13. Test to click on "Error Codes" hyperlink and check "Error Codes" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(4) > a').click();
        cy.componentVisiblityCheck(':nth-child(19) > a', 'Error Codes');
    });
});
