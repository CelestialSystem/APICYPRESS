describe('Documentation Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
      cy.visit('https://apilayer.com/marketplace/exchangerates_data-api');
    });
  
    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });
  
    it('2. Test to check title "Exchange Rates Data API" is present', () => {
        cy.componentVisiblityCheck('.h2', 'Exchange Rates Data API');
    });
  
    it('3. Test to click "Documentation"', () => {
        cy.intercept('GET', '/marketplace/exchangerates_data-api/tabs/api_docs').as('apiRequest');
        cy.get('#documentation-tab').click();
        cy.wait('@apiRequest');
        cy.componentVisiblityCheck('#documentation');
    });
  
    it('4. Test to check "Exchange Rates Data API Reference" title is present', () => {
        cy.componentVisiblityCheck('h3.mb-4', 'Exchange Rates Data API Reference');
    });
  
    it('5. Test to check "Content" is present', () => {
        cy.componentVisiblityCheck('.sticky-top > .text-muted', 'Contents:')
    });
  
    it('6. Test to check "Authentication" hyperlink is present', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(1) > a', 'Authentication');
    });
  
    it('7. Test to click on "Authentication" and check "Authentication" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(1) > a').click();
        cy.componentVisiblityCheck('.col-sm-12 > :nth-child(4)', 'Authentication');
    });
  
    it('8. Test to check "Endpoints" hyperlink is present', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(2) > a', 'Endpoints');
    });
  
    it('9. Test to click on "Endpoints" and check "Endpoints" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(2) > a').click();
        cy.componentVisiblityCheck(':nth-child(9) > a', 'Endpoints');
    });
  
    it('10. Test to check "Rate Limiting" hyperlink is present', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(3) > a',  'Rate Limiting');
    });
  
    it('11. Test to click on "Rate Limiting" hyperlink and check "Rate Limiting" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(3) > a').click();
        cy.componentVisiblityCheck(':nth-child(11) > a',  'Rate Limiting');
    });
  
    it('12. Test to check "Error Codes" hyperlink is present', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(4) > a', 'Error Codes');
    });
  
    it('13. Test to click on "Error Codes" and check "Error Codes" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(4) > a').click();
        cy.componentVisiblityCheck(':nth-child(19) > a', 'Error Codes');
    });
  }); 