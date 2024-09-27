describe('Number Verification Reviews Page', () => {
    before(() => {
      cy.visit('https://apilayer.com/marketplace/number_verification-api');
    });
  
    it('1. Test to "Accept Cookies" if not already accepted', () => { 
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });
  
    it('2. Test to check title "Number Verification API" is present', () => {
        cy.componentVisiblityCheck('.h2', 'Number Verification API');
    });

    it('3. Test to click on "Reviews" tab, "Reviews" card should be present', () => {
        cy.get('#reviews-tab').click();
        cy.componentVisiblityCheck('.col-lg-4 > .card');
    });

    it('4. Test to check review count is present', () => {
        cy.componentVisiblityCheck('.display-4');
    });
    
    it('5. Test to check star count is present', () => {
        cy.componentVisiblityCheck('.card > .list-inline');
    });
    
    it('6. Test to check rating container is present', () => {
        cy.componentVisiblityCheck('.mb-7 > .row > .col-lg-8');
    });
  }); 