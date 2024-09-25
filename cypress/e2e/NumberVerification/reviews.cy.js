describe('Number Verification Reviews Page', () => {
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
  
    it('1. Test to check title "Number Verification API" is present', () => {
        cy.componentVisiblityCheck('.h2', 'Number Verification API');
    });

    it('2. Test to click on "Reviews" tab, "Reviews" card should be present', () => {
        cy.get('#reviews-tab').click();
        cy.componentVisiblityCheck('.col-lg-4 > .card');
    });

    it('3. Test to check "Review count" is present', () => {
        cy.componentVisiblityCheck('.display-4');
    });
    
    it('4. Test to check "Star count" is present', () => {
        cy.componentVisiblityCheck('.card > .list-inline');
    });
    
    it('5. Test to check "Rating" container is present', () => {
        cy.componentVisiblityCheck('.mb-7 > .row > .col-lg-8');
    });
  }); 