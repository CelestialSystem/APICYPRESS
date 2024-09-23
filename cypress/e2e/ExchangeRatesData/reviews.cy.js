describe('Reviews Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
      cy.visit('https://apilayer.com/marketplace/exchangerates_data-api');
      cy.wait(2000); // Wait for the page to load
    });
  
    it('0. Test to Accept Cookies if not already accepted', () => { 
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });
  
    it('1. Test to check title is visible', () => {
        cy.componentVisiblityCheck('.h2', 'Exchange Rates Data API');
    });

    it('2. Test to click on reviews tab, reviews card should be visible', () => {
        cy.get('#reviews-tab').click();
        cy.componentVisiblityCheck('.col-lg-4 > .card');
    });

    it('3. Test to check review count is visible', () => {
        cy.componentVisiblityCheck('.display-4');
    });
    
    it('4. Test to check star count is visible', () => {
        cy.componentVisiblityCheck('.card > .list-inline');
    });
    
    it('5. Test to check rating container is visible', () => {
        cy.componentVisiblityCheck('.mb-7 > .row > .col-lg-8');
    });
    
  }); 