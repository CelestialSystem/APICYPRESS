import { GOOGLE_SEARCH_RESULT_BASE_URL, APILAYER_BASE_URL } from '../../resources/data';

describe('Google search result API Documentation page', () => {
    before(() => {
        cy.visit(GOOGLE_SEARCH_RESULT_BASE_URL);
    });
    
    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });
  
    it('2. Test to check "Documentation" tab visibility', () => {
        cy.componentVisiblityCheck('#documentation-tab');
    });
  
    it('3. Test to click "Documentation" tab', () => {
        cy.moveToDoc('google_search-api');
    });
  
    it('4. Test to check "Google Search Results API Reference" title is present', () => {
        cy.checkTextVisibility('Google Search Results API Reference');
    });
  
    it('5. Test to check "Contents:" section is present', () => {
        cy.checkTextVisibility('Contents:');
    });

    it('6. Test to click on "development quickstart guide" link', () => {
        cy.contains('a', 'development quickstart guide').should('be.visible');
        cy.contains('a', 'development quickstart guide').click();
    });

    it('7. Test to navigate back to url and click on the "Documentation" tab', () => {
        cy.navigateUrlwithCookies(GOOGLE_SEARCH_RESULT_BASE_URL);
        cy.get('#documentation-tab').click();
    });

    it('8. Test to click on "Accounts Pages" link', () => {
        cy.contains('a', 'Accounts page').should('be.visible');
        cy.contains('a', 'Accounts page').click();
        cy.navigateUrlwithCookies(GOOGLE_SEARCH_RESULT_BASE_URL);
        cy.get('#documentation-tab').click();
     });

    it('9. Test to click on "GET" collapse button ', () => {
       cy.get('.mb-0 > .btn').click();
    });

    it('10. Test to check "Authentication" hyperlink is present', () => {
        cy.contains('a', 'Authentication');
    });
  
    it('11. Test to click on "Authentication" hyperlink and check "Authentication" title is present', () => {
        cy.contains('a', 'Authentication').click();
        cy.checkTextVisibility('Authentication');
    });
  
    it('12. Test to check "Endpoints" hyperlink is present', () => {
        cy.contains('a', 'Endpoints');
    });
  
    it('13. Test to click on "Endpoints" hyperlink and check "Endpoints" title is present', () => {
        cy.contains('a', 'Endpoints').click();
        cy.checkTextVisibility('Endpoints');
    });

    it('14. Test to click on "Subscribe for Free" button', () => {
        cy.get('#subscribeButton').should('contain.text', 'Subscribe for Free').click();
        cy.get('#pricing').should('be.visible');
        cy.get('#documentation-tab').click();
    });

    it('15. Test to check "Rate Limiting" hyperlink is present', () => {
        cy.contains('a', 'Rate Limiting');
    });
  
    it('16. Test to click on "Rate Limiting" hyperlink and check "Rate Limiting" title is present', () => {
        cy.contains('a', 'Rate Limiting').click();
        cy.checkTextVisibility('Rate Limiting');
    });
  
    it('17. Test to check "Error Codes" hyperlink is present', () => {
        cy.contains('a', 'Error Codes');
    });
  
    it('18. Test to click on "Error Codes" hyperlink and check "Error Codes" title is present', () => {
        cy.contains('a', 'Error Codes').click();
        cy.checkTextVisibility('Error Codes');
    });

    it('19. Test to check and click the link "support unit" and "contact for support"', () => {
        cy.get('p > a').contains('support unit').should('have.attr', 'target', '_blank');
        cy.get('p > a').contains('support unit').should('have.attr', 'href', '/support');
        cy.get('p > a').contains('contact for support').should('have.attr', 'target', '_blank');
        cy.get('p > a').contains('contact for support').should('have.attr', 'href', '/support');
    });

}); 
