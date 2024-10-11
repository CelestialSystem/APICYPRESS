import { IPTOLOCATIONAPI_BASE_URL } from '../../resources/data';

describe('IP To Location API Documentation page', () => {
    before(() => {
      cy.visit(IPTOLOCATIONAPI_BASE_URL); 
    });
    
    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });
  
    it('2. Test to check "Documentation" tab visibility', () => {
        cy.componentVisiblityCheck('.d-md-flex > .d-none');
    });
  
    it('3. Test to click "Documentation" tab', () => {
        cy.intercept('GET', '/marketplace/currency_data-api/tabs/api_docs').as('apiRequest');
        cy.get('.d-md-flex > .d-none').click();
    });

    it('4. Test to check "content" tab visibility', () => {
        cy.componentVisiblityCheck('.sticky-top > .text-muted', 'Contents');
    });

    it('5. Test to check "IP to Location API Reference" tab visibility', () => {
        cy.componentVisiblityCheck('h3.mb-4', 'IP to Location API Reference');
    });

    it('6. Test to check "Just Getting Started?" tab visibility', () => {
        cy.componentVisiblityCheck('.blockquote > .mb-2', 'Just Getting Started?');
    });

    it('7. Test to check "development quickstart guide" hyperlink click', () => {
        cy.get('.blockquote > p > a').click();
        cy.navigateUrlwithCookies(IPTOLOCATIONAPI_BASE_URL);
        cy.get('.d-md-flex > .d-none').click();
    });

    it('8. Test to check "Authentication" title is present', () => {
        cy.componentVisiblityCheck('.col-sm-12 > :nth-child(4) > a', 'Authentication');
    });

    it('9. Test to check "Endpoints" title is present', () => {
        cy.componentVisiblityCheck(':nth-child(9) > a', 'Endpoints');
    });

    it('10. Test to check "Get in endpoints" is Expands', () => {
        cy.get('.mb-0 > .btn').click();
    });

    it('11. Test to check "Rate Limiting" title is present', () => {
        cy.componentVisiblityCheck(':nth-child(11) > a', 'Rate Limiting');
    });
    
    it('12. Test to check "support unit" hyperlink click', () => {
        cy.get(':nth-child(18) > a').click();
        cy.navigateUrlwithCookies(IPTOLOCATIONAPI_BASE_URL);
        cy.get('.d-md-flex > .d-none').click();
    });

    it('13. Test to check "Error Codes" title is present', () => {
        cy.componentVisiblityCheck(':nth-child(19) > a', 'Error Codes');
    });
      
    it('14. Test to check "contact for support" hyperlink click', () => {
        cy.get(':nth-child(25) > a').click();
        cy.navigateUrlwithCookies(IPTOLOCATIONAPI_BASE_URL);
    });

});
