describe('FAQ Page', () => {
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

    it('2. Test to on click of FAQ button', () => {
        cy.get('#faqs-tab').click();
        cy.componentVisiblityCheck('#heading-56 > .btn');
    });

    it('3. Test to on click on collapse button', () => {
       cy.get('#heading-56 > .btn > .card-btn-toggle > .card-btn-toggle-default').click();
       cy.get('#collapse-56 > .card-body > div').should('not.be.visible');
    });
  }); 