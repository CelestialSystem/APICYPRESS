import { NUMBERVERIFICATION_BASE_URL } from '../../resources/data';

describe('Number Verification Pricing page', () => {
    before(() => {
      cy.visit(NUMBERVERIFICATION_BASE_URL);
    });
  
    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });
  
    it('2. Test to check title "Number Verification API" is present', () => {
        cy.componentVisiblityCheck('.h2', 'Number Verification API');
    });

    it('3. Test to check "Free Plan" features', () => {
        cy.freePlanCheck('100');
    });

    it('4. Test to check "Starter Plan" features', () => {
        cy.starterPlanCheck('14.99', '5,000');
    });
   
    it('5. Test to check "Pro Plan" features', () => {
        cy.proPlanCheck('59.99', '50,000');
    });

    it('6. Test to check "Enterprise" plan is present', () => {
        cy.componentVisiblityCheck(':nth-child(4) > .card > .card-header > .h3', 'Enterprise Plan');
    });

    it('7. Test to check price of "Enterprise" plan is present', () => {
        cy.componentVisiblityCheck(':nth-child(4) > .card > .card-header > .mb-3 > .plan-price', '$129.99');
    });
  
    it('8. Test to check features of "Enterprise" plan is present', () => {
        cy.componentVisiblityCheck('#pricing > .row > :nth-child(4) > .card > .card-body > :nth-child(1) > .media-body',  ' 250,000\nRequests / Monthly ');
        cy.componentVisiblityCheck(':nth-child(4) > .card > .card-body > :nth-child(2) > .media-body', 'Standard Support');
    });

    it('9. Test to check "Custom" plan is present', () => {
        cy.componentVisiblityCheck(':nth-child(5) > .card > .card-header > .h3', 'Custom Plan');
    });

    it('10. Test to check price of "Custom" plan is present', () => {
        cy.componentVisiblityCheck(':nth-child(5) > .card > .card-header > .mb-3 > .font-size-4', 'Volume');
    });
  
    it('11. Test to check features of "Custom" plan is present', () => {
        cy.componentVisiblityCheck('#pricing > .row > :nth-child(5) > .card > .card-body > .media > .media-body',  'Any requests volume you need');
    });
  }); 