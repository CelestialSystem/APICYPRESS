import { FORM_API_BASE_URL, APILAYER_BASE_URL } from '../../resources/data';


describe('Form API Pricing page', () => {
    before(() => {
      cy.visit(FORM_API_BASE_URL);
    });
  
    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });
  
    it('2. Test to check "Form API" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'Form API');
    });

    it('3. Test to check for "Free Plan" is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Free Plan');
    });

    it('4. Test to check "Free Plan" price is $0.00', () => {
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .plan-price','$0');
    });

    it('5. Test to check "Subscribe" button click and "Free Plan" features (100 Requests, free for lifetime, no credit card)', () => {
        cy.get('#pricing .plan').first().within(() => {
            cy.get('a').contains('Subscribe').click();
          });
        cy.get('.sidebar-content', { timeout: 7000 }).should('be.visible');
        cy.get('body').click();
        cy.get('.media-body').contains(' 100 Requests / Monthly').should('be.visible');
        cy.get('.media-body').contains(' Free for Lifetime ').should('be.visible');
        cy.get('.media-body').contains(' No Credit Card Required ').should('be.visible');
    });

    it('6. Test to check "Starter Plan" is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3','Starter Plan');
    });

    it('7. Test to check "Starter Plan" price is $4.99', () => {
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .plan-price', '$4.99');
    });

    it('8. Test to check "Subscribe" button click and  "Starter Plan" features (10,000 Requestsrequests, standard support)', () => {
        cy.document().should((doc) => {
            expect(doc.readyState).to.equal('complete');
        });    
        cy.get('#pricing .plan').eq(1).within(() => {
            cy.get('a.btn-success').contains('Subscribe').click({force: true});
          });
        cy.get('.sidebar-content', { timeout: 10000 }).should('be.visible');
        cy.get('body').click();
        cy.get('.media-body').contains(' 10,000 Requests / Monthly').should('be.visible');
        cy.get('.media-body').contains(' Standard Support ').should('be.visible');
    });

    it('9. Test to check "MOST POPULAR" label on Starter Plan', () => {
        cy.checkTextVisibility('MOST POPULAR');
    });

    it('10. Test to check "Pro Plan" is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Pro Plan');
    });

    it('11. Test to check "Pro Plan" price is $39.99', () => {
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .plan-price', '$19.99');
        cy.componentVisiblityCheck('.media-body');
    });

    it('12. Test to check "Subscribe" button click and "Pro Plan" features (50,000 requests, standard support)', () => {
        cy.get('#pricing .plan').eq(2).within(() => {
            cy.get('a').contains('Subscribe').click();
          });
        cy.get('.sidebar-content', { timeout: 7000 }).should('be.visible');
        cy.get('body').click();
        cy.get('.media-body').contains(' 50,000 Requests / Monthly ').should('be.visible');
        cy.get('.media-body').contains(' Standard Support ').should('be.visible');
    });

    it('13. Test to check "Custom" Plan is present', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Custom Plan');
    });

    it('14. Test to check "Custom" plan ', () => {
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .font-size-4', 'Volume');
    });

    it('15. Test to check "Contact Us" button click and "Custom" Plan features "Any requests volume you need")', () => {
        cy.get('#pricing .card').contains('Contact Us').click();
        cy.url().should('eq', APILAYER_BASE_URL +  '/support');
        cy.go('back');
        cy.get('.media-body').contains(' Any requests volume you need ').should('be.visible');
    });
});