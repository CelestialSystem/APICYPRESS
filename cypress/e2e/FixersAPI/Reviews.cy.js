describe('Fixer Reviews Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.visit('https://apilayer.com/marketplace/fixer-api');
    });

    it('0. Test to Accept Cookies if not already accepted', () => { 
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });
  
    it('1. Test to check the Reviews tab', () => {
        cy.componentVisiblityCheck('#reviews-tab > .d-md-flex > span');
    });

    it('2. Test to click on reviews tab, reviews card should be visible', () => {
        cy.get('#reviews-tab > .d-md-flex > span').click();
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