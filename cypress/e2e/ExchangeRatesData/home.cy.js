describe('Home Page', () => {
    before(() => {
      cy.visit('https://apilayer.com/marketplace/exchangerates_data-api');
      cy.wait(2000); // Wait for the page to load
    });
  
    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });
  
    it('2. Test to check title "Exchange Rates Data API" is present', () => {
        cy.componentVisiblityCheck('.h2', 'Exchange Rates Data API');
    });
  
    it('3. Test to check "Subscribe for Free" button is present', () => {
        cy.componentVisiblityCheck('#subscribeButton', 'Subscribe for Free');
    });
  
    it('4. Test to check "Live Demo" button is present', () => {
        cy.componentVisiblityCheck('.show-code', 'Live Demo');
    });
  
    it('5. Test to check "Code Example"  is present', () => {
        cy.componentVisiblityCheck('.code-response');
    });
    
    it('6. Test to click on "Live Demo" button', () => {
        cy.get('.show-code').click();
        cy.componentVisiblityCheck('.sidebar-content');
        cy.get('body').click(0, 0);
    });
    
    it('7. Test to check "Pricing" tab  is present', () => {
        cy.componentVisiblityCheck('#pricing-tab', 'Pricing');
    });

    it('8. Test to check "API info" tab  is present', () => {
        cy.componentVisiblityCheck('#details-tab', 'API info');
    });

    it('9. Test to check "Documentation" tab  is present', () => {
        cy.componentVisiblityCheck('#documentation-tab', 'Documentation');
    });

    it('10. Test to check "Reviews" tab  is present', () => {
        cy.componentVisiblityCheck('#reviews-tab', 'Reviews');
    });

    it('11. Test to check "FAQS" tab  is present', () => {
        cy.componentVisiblityCheck('#faqs-tab', 'FAQs');
    });

    it('12. Test to check "Related Products" container is present', () => {
        cy.componentVisiblityCheck('.h1', 'Related Products');
    });

    it('13. Test to check footer is present', () => {
        cy.componentVisiblityCheck('footer.bg-primary');
    });
  }); 