describe('Currency Data Documentation Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
      cy.visit('https://apilayer.com/marketplace/currency_data-api');
      cy.wait(2000); // Wait for the page to load
    });
  
    it('1. Test to Accept Cookies if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });
  
    it('2. Test to check Documentation tab visibility', () => {
        cy.componentVisiblityCheck('.d-md-flex > .d-none');
        cy.wait(3000); //Added an 3-second wait to allow the documentation to load. A more reliable solution should be implemented to handle this wait.
    });
  
    it('3. Test to click "Documentation" tab', () => {
        cy.get('.d-md-flex > .d-none').click();
        cy.wait(5000); //Added an 5-second wait to allow the documentation to load. A more reliable solution should be implemented to handle this wait.
    });
  
    it('4. Test to check "Currency Data API Reference" title is present', () => {
        cy.wait(4000); //Added an 4-second wait to allow this tab to load. A more reliable solution should be implemented to handle this wait.
        cy.checkTextVisibility('Currency Data API Reference');
    });
  
    it('5. Test to check "Contents:" is present', () => {
        cy.componentVisiblityCheck('.sticky-top > .text-muted', 'Contents:');
    });
  
    it('6. Test to check "Authentication" hyperlink is present', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(1) > a', 'Authentication');
    });
  
    it('7. Test to click on Authentication, "Authentication" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(1) > a').click();
        cy.componentVisiblityCheck('.col-sm-12 > :nth-child(4)', 'Authentication');
    });
  
    it('8. Test to check "Endpoints" hyperlink is present', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(2) > a', 'Endpoints');
    });
  
    it('9. Test to click on Endpoints, "Endpoints" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(2) > a').click();
        cy.componentVisiblityCheck(':nth-child(9) > a', 'Endpoints');
    });
  
    it('10. Test to check "Rate Limiting" hyperlink is present', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(3) > a', 'Rate Limiting');
    });
  
    it('11. Test to click on Rate Limiting hyperlink, "Rate Limiting" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(3) > a').click();
        cy.componentVisiblityCheck(':nth-child(11) > a', 'Rate Limiting');
    });
  
    it('12. Test to check "Error Codes" hyperlink is present', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(4) > a', 'Error Codes');
    });
  
    it('13. Test to click on Error Codes, "Error Codes" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(4) > a').click();
        cy.componentVisiblityCheck(':nth-child(19) > a', 'Error Codes');
    });
});
