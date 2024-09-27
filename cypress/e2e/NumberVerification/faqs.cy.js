describe('Number Verification FAQ Page', () => {
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

    it('3. Test to on click of "FAQ" button', () => {
        cy.get('#faqs-tab').click();
        cy.componentVisiblityCheck('#heading-52 > .btn');
    });

    it('4. Test to on click on "Collapse" button', () => {
       cy.get('#heading-52 > .btn > .card-btn-toggle > .card-btn-toggle-default').click();
       cy.get('#collapse-52 > .card-body > div').should('not.be.visible');
    });
  }); 