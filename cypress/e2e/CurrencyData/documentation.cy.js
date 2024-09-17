describe('Documentation Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
      cy.visit('https://apilayer.com/marketplace/currency_data-api');
      cy.wait(2000); // Wait for the page to load
    });
  
    it('0. Test to Accept Cookies if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });
  
    it('1. Test to check title is visible', () => {
        cy.componentVisiblityCheck('.h2', 'Currency Data API');
    });
  
    it('2. Test to click Documentation', () => {
        cy.get('#documentation-tab').click();
    });
  
    it('3. Test to check Number Verification API Reference title is visible', () => {
        cy.componentVisiblityCheck('h3.mb-4', 'Currency Data API Reference');
    });
  
    it('4. Test to check content is visible', () => {
        cy.componentVisiblityCheck('.sticky-top > .text-muted', 'Contents:')
    });
  
    it('5. Test to check Authentication hyperlink is visible', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(1) > a', 'Authentication');
    });
  
    it('6. Test to click on Authentication, Authentication title is visible', () => {
        cy.get('.sticky-top > ul > :nth-child(1) > a').click();
        cy.componentVisiblityCheck('.col-sm-12 > :nth-child(4)', 'Authentication');
    });
  
    it('7. Test to check Endpoints hyperlink is visible', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(2) > a', 'Endpoints');
    });
  
    it('8. Test to click on Endpoints, Endpoints title is visible', () => {
        cy.get('.sticky-top > ul > :nth-child(2) > a').click();
        cy.componentVisiblityCheck(':nth-child(9) > a', 'Endpoints');
    });
  
    it('9. Test to check Rate Limiting hyperlink is visible', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(3) > a',  'Rate Limiting');
    });
  
    it('10. Test to click on Rate Limiting hyperlink is Rate Limiting title is visible', () => {
        cy.get('.sticky-top > ul > :nth-child(3) > a').click();
        cy.componentVisiblityCheck(':nth-child(11) > a',  'Rate Limiting');
    });
  
    it('11. Test to check Error Codes hyperlink is visible', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(4) > a', 'Error Codes');
    });
  
    it('12. Test to click on Error Codes, Error Codes title is visible', () => {
        cy.get('.sticky-top > ul > :nth-child(4) > a').click();
        cy.componentVisiblityCheck(':nth-child(19) > a', 'Error Codes');
    });
  }); 