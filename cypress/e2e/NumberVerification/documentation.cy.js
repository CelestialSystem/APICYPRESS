describe('Number Verification Documentation Page', () => {
    before(() => {
      cy.visit('https://apilayer.com/marketplace/number_verification-api');
    });
  
    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });
  
    it('2. Test to check "Number Verification API" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'Number Verification API');
    });
  
    it('3. Test to click "Documentation" tab', () => {
        cy.intercept('GET', '/marketplace/number_verification-api/tabs/api_docs').as('apiRequest');
        cy.get('#documentation-tab').click();
        cy.wait('@apiRequest');
    });
  
    it('4. Test to check "Number Verification API Reference" title is present', () => {
        cy.checkTextVisibility('Number Verification API Reference');
    });
  
    it('5. Test to check "Contents:" is present', () => {
        cy.componentVisiblityCheck('.sticky-top > .text-muted', 'Contents:')
    });
  
    it('6. Test to check "Authentication" hyperlink is present', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(1) > a', 'Authentication');
    });
  
    it('7. Test to click on "Authentication", "Authentication" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(1) > a').click();
        cy.componentVisiblityCheck('.col-sm-12 > :nth-child(4)', 'Authentication');
    });
  
    it('8. Test to check "Endpoints" hyperlink is present', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(2) > a', 'Endpoints');
    });
  
    it('9. Test to click on "Endpoints", "Endpoints" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(2) > a').click();
        cy.componentVisiblityCheck(':nth-child(9) > a', 'Endpoints');
    });
  
    it('10. Test to check "Rate Limiting" hyperlink is visible', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(3) > a',  'Rate Limiting');
    });
  
    it('11. Test to click on "Rate Limiting" hyperlink is "Rate Limiting" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(3) > a').click();
        cy.componentVisiblityCheck(':nth-child(11) > a',  'Rate Limiting');
    });
  
    it('12. Test to check "Error Codes" hyperlink is visible', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(4) > a', 'Error Codes');
    });
  
    it('13. Test to click on "Error Codes", "Error Codes" title is visible', () => {
        cy.get('.sticky-top > ul > :nth-child(4) > a').click();
        cy.componentVisiblityCheck(':nth-child(19) > a', 'Error Codes');
    });
  }); 