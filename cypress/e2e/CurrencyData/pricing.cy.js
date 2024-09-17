describe('Pricing Page', () => {
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

    it('2. Test to check free plan is visible', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .card > .card-header > .h3', 'Free Plan');
    });

    it('3. Test to check price of free plan is visible', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .card > .card-header > .mb-3 > .plan-price', '$0.00');
    });
  
    it('4. Test to check features of free plan is visible', () => {
        cy.componentVisiblityCheck('#pricing > .row > :nth-child(1) > .card > .card-body > :nth-child(1) > .media-body', ' 100\nRequests / Monthly ');
        cy.componentVisiblityCheck(':nth-child(1) > .card > .card-body > :nth-child(2) > .media-body', 'Free for Lifetime');
        cy.componentVisiblityCheck(':nth-child(3) > .media-body', 'No Credit Card Required');
    });

    it('5. Test to check Starter plan is visible', () => {
        cy.componentVisiblityCheck(':nth-child(2) > .card > .card-header > .h3', 'Starter Plan');
    });

    it('6. Test to check price of Starter plan is visible', () => {
        cy.componentVisiblityCheck(':nth-child(2) > .card > .card-header > .mb-3 > .plan-price', '$14.99');
    });
  
    it('7. Test to check features of Starter plan is visible', () => {
        cy.componentVisiblityCheck('#pricing > .row > :nth-child(2) > .card > .card-body > :nth-child(1) > .media-body',  ' 10,000\nRequests / Monthly ');
        cy.componentVisiblityCheck(':nth-child(2) > .card > .card-body > :nth-child(2) > .media-body', 'Standard Support');
    });
  
    it('8. Test to check Pro plan is visible', () => {
        cy.componentVisiblityCheck(':nth-child(3) > .card > .card-header > .h3', 'Pro Plan');
    });

    it('9. Test to check price of Pro plan is visible', () => {
        cy.componentVisiblityCheck(':nth-child(3) > .card > .card-header > .mb-3 > .plan-price', '$59.99');
    });
  
    it('10. Test to check features of Pro plan is visible', () => {
        cy.componentVisiblityCheck('#pricing > .row > :nth-child(3) > .card > .card-body > :nth-child(1) > .media-body',   ' 100,000\nRequests / Monthly ');
        cy.componentVisiblityCheck(':nth-child(3) > .card > .card-body > :nth-child(2) > .media-body', 'Standard Support');
    });

    it('11. Test to check Enterprise plan is visible', () => {
        cy.componentVisiblityCheck(':nth-child(4) > .card > .card-header > .h3', 'Enterprise Plan');
    });

    it('12. Test to check price of Enterprise plan is visible', () => {
        cy.componentVisiblityCheck(':nth-child(4) > .card > .card-header > .mb-3 > .plan-price', '\n$99.99 ');
    });
  
    it('13. Test to check features of Enterprise plan is visible', () => {
        cy.componentVisiblityCheck('#pricing > .row > :nth-child(4) > .card > .card-body > :nth-child(1) > .media-body',   ' 500,000\nRequests / Monthly ');
        cy.componentVisiblityCheck(':nth-child(4) > .card > .card-body > :nth-child(2) > .media-body', 'Standard Support');
    });

    it('14. Test to check Enterprise plan is visible', () => {
        cy.componentVisiblityCheck(':nth-child(5) > .card > .card-header > .h3', 'Custom Plan');
    });

    it('15. Test to check price of Enterprise plan is visible', () => {
        cy.componentVisiblityCheck(':nth-child(5) > .card > .card-header > .mb-3 > .font-size-4', 'Volume');
    });
  
    it('16. Test to check features of Enterprise plan is visible', () => {
        cy.componentVisiblityCheck('#pricing > .row > :nth-child(5) > .card > .card-body > .media > .media-body',  'Any requests volume you need');
    });
  
  }); 