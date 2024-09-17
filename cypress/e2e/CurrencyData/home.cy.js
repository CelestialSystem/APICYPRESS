describe('Home Page', () => {
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
  
    it('2. Test to check "subscribe for free" button is visible', () => {
        cy.componentVisiblityCheck('#subscribeButton', 'Subscribe for Free');
    });
  
    it('3. Test to check "Live Demo" button is visible', () => {
        cy.componentVisiblityCheck('.show-code', 'Live Demo');
    });
  
    it('4. Test to check code example  is visible', () => {
        cy.componentVisiblityCheck('.code-response');
    });
    
    it('5. Test to click on live demo button', () => {
        cy.get('.show-code').click();
        cy.componentVisiblityCheck('.sidebar-content');
        cy.get('body').click(0, 0);
    });
    
    it('6. Test to check pricing tab  is visible', () => {
        cy.componentVisiblityCheck('#pricing-tab', 'Pricing');
    });

    it('7. Test to check API info tab  is visible', () => {
        cy.componentVisiblityCheck('#details-tab', 'API info');
    });

    it('8. Test to check Documentation tab  is visible', () => {
        cy.componentVisiblityCheck('#documentation-tab', 'Documentation');
    });

    it('9. Test to check Reviews tab  is visible', () => {
        cy.componentVisiblityCheck('#reviews-tab', 'Reviews');
    });

    it('10. Test to check FAQS tab  is visible', () => {
        cy.componentVisiblityCheck('#faqs-tab', 'FAQs');
    });

    it('11. Test to check Related Products container is visible', () => {
        cy.componentVisiblityCheck('.h1', 'Related Products');
    });

    it('12. Test to check footer is visible', () => {
        cy.componentVisiblityCheck('footer.bg-primary');
    });

  }); 