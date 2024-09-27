describe('Pricing Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
      cy.visit('https://apilayer.com/marketplace/exchangerates_data-api');
    });
  
    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });
  
    it('2. Test to check title "Exchange Rates Data API" is present', () => {
        cy.componentVisiblityCheck('.h2', 'Exchange Rates Data API');
    });

    it('3. Test to check "Free Plan" is present', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .card > .card-header > .h3', 'Free Plan');
    });

    it('4. Test to check price of "Free Plan" is present', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .card > .card-header > .mb-3 > .plan-price', '$0.00');
    });
  
    it('5. Test to check features of "Free Plan" is present', () => {
        cy.componentVisiblityCheck('#pricing > .row > :nth-child(1) > .card > .card-body > :nth-child(1) > .media-body', ' 100\nRequests / Monthly ');
        cy.componentVisiblityCheck(':nth-child(1) > .card > .card-body > :nth-child(2) > .media-body', 'Free for Lifetime');
        cy.componentVisiblityCheck(':nth-child(3) > .media-body', 'No Credit Card Required');
    });

    it('6. Test to check "Starter Plan" is present', () => {
        cy.componentVisiblityCheck(':nth-child(2) > .card > .card-header > .h3', 'Starter Plan');
    });

    it('7. Test to check price of "Starter Plan" is present', () => {
        cy.componentVisiblityCheck(':nth-child(2) > .card > .card-header > .mb-3 > .plan-price',  '\n$9.99 ');
    });
  
    it('8. Test to check features of "Starter Plan" is present', () => {
        cy.componentVisiblityCheck('#pricing > .row > :nth-child(2) > .card > .card-body > :nth-child(1) > .media-body',  ' 10,000\nRequests / Monthly ');
        cy.componentVisiblityCheck(':nth-child(2) > .card > .card-body > :nth-child(2) > .media-body', 'Standard Support');
    });
  
    it('9. Test to check "Pro Plan" is present', () => {
        cy.componentVisiblityCheck(':nth-child(3) > .card > .card-header > .h3', 'Pro Plan');
    });

    it('10. Test to check price of "Pro Plan" is present', () => {
        cy.componentVisiblityCheck(':nth-child(3) > .card > .card-header > .mb-3 > .plan-price', '\n$39.99 ');
    });
  
    it('11. Test to check features of "Pro Plan" is present', () => {
        cy.componentVisiblityCheck('#pricing > .row > :nth-child(3) > .card > .card-body > :nth-child(1) > .media-body',   ' 100,000\nRequests / Monthly ');
        cy.componentVisiblityCheck(':nth-child(3) > .card > .card-body > :nth-child(2) > .media-body', 'Standard Support');
    });

    it('12. Test to check "Enterprise Plan" is present', () => {
        cy.componentVisiblityCheck(':nth-child(4) > .card > .card-header > .h3', 'Enterprise Plan');
    });

    it('13. Test to check price of "Enterprise Plan" is present', () => {
        cy.componentVisiblityCheck(':nth-child(4) > .card > .card-header > .mb-3 > .plan-price', '\n$79.99 ');
    });
  
    it('14. Test to check features of "Enterprise Plan" is present', () => {
        cy.componentVisiblityCheck('#pricing > .row > :nth-child(4) > .card > .card-body > :nth-child(1) > .media-body',   ' 500,000\nRequests / Monthly ');
        cy.componentVisiblityCheck(':nth-child(4) > .card > .card-body > :nth-child(2) > .media-body', 'Standard Support');
    });

    it('15. Test to check "Custom Plan" is present', () => {
        cy.componentVisiblityCheck(':nth-child(5) > .card > .card-header > .h3', 'Custom Plan');
    });

    it('16. Test to check price of "Custom Plan" is present', () => {
        cy.componentVisiblityCheck(':nth-child(5) > .card > .card-header > .mb-3 > .font-size-4', 'Volume');
    });
  
    it('17. Test to check features of "Custom Plan" is present', () => {
        cy.componentVisiblityCheck('#pricing > .row > :nth-child(5) > .card > .card-body > .media > .media-body',  'Any requests volume you need');
    });
  }); 