describe('Api Info Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
      cy.visit('https://apilayer.com/marketplace/number_verification-api');
      cy.wait(2000); // Wait for the page to load
    });
  
    it('0. Test to Accept Cookies if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });
  
    it('1. Test to check title is visible', () => {
        cy.componentVisiblityCheck('.h2', 'Number Verification API');
    });
  
    it('2. Test to click Api Info', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
        cy.componentVisiblityCheck('#details');
    });
  
    it('3. Test to check features subtitle is visible', () => {
        cy.componentVisiblityCheck('article > :nth-child(4)', 'Features')
    });
  
    it('4. Test to check Example Request subtitle is visible', () => {
        cy.componentVisiblityCheck('article > :nth-child(10)', 'Example Request')
    });
  
    it('5. Test to check Example Response subtitle is visible', () => {
        cy.get('article > :nth-child(13)').scrollIntoView();
        cy.componentVisiblityCheck('article > :nth-child(13)', 'Example Response')
    });
  

  }); 