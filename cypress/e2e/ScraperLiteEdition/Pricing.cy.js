import { SCRAPER_BASE_URL, APILAYER_BASE_URL } from '../../resources/data';


describe('Scrapper(Lite Edition) Pricing page', () => {
    before(() => {
      cy.visit(SCRAPER_BASE_URL);
    });
  
    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });
  
    it('2. Test to check "Scraper API (Lite Edition)" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'Scraper API (Lite Edition)');
    });

    it('3. Test to check for "Free Plan" is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Free Plan');
    });

    it('4. Test to check "Free Plan" price is $0.00', () => {
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .plan-price','$0');
    });

    it('5. Test to check "Subscribe" button click and "Free Plan" features (1,500 Requests, free for lifetime, no credit card)', () => {
        cy.freePlanCheck('1,500');
    });

    it('6. Test to check "Subscribe" button click and  "Starter Plan" features (150,000 Requestsrequests, standard support)', () => {
        cy.starterPlanCheck('8', '150,000');
    });

    it('7. Test to check "Subscribe" button click and "Pro Plan" features (1,500,000 requests, standard support)', () => {
        cy.proPlanCheck('39', '1,500,000');
    });

    it('8. Test to check "Custom" Plan is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Custom Plan');
    });

    it('9. Test to check "Custom" plan ', () => {
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .font-size-4', 'Volume');
    });

    it('10. Test to check "Contact Us" button click and "Custom" Plan features "Any requests volume you need")', () => {
        cy.get('#pricing .card').contains('Contact Us').click();
        cy.url().should('eq', APILAYER_BASE_URL +  '/support');
        cy.go('back');
        cy.get('.media-body').contains(' Any requests volume you need ').should('be.visible');
    });
});