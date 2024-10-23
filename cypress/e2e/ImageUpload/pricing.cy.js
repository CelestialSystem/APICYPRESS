import { IMAGE_UPLOAD_BASE_URL, APILAYER_BASE_URL } from '../../resources/data';

describe('Image Upload Pricing page', () => {
    before(() => {
        cy.visit(IMAGE_UPLOAD_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check "Free Plan" features', () => {
        cy.freePlanCheck('100');
    });

    it('3. Test to check "Starter Plan" features', () => {
        cy.starterPlanCheck('9.99', '2,000');
    });
   
    it('4. Test to check "Pro Plan" features', () => {
        cy.proPlanCheck('54.99', '20,000');
    });

    it('5. Test to check "Enterprise Plan" features', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Enterprise Plan');
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .plan-price','$119.99');
        cy.componentVisiblityCheck('.media-body');
        cy.wait(500);
        cy.get('#pricing .plan').eq(3).within(() => {
            cy.get('a').contains('Subscribe').click({force:true});
          });
        cy.get('aside', { timeout: 7000 }).should('be.visible');
        cy.get('body').click();
        cy.get('.media-body').contains(' 50,000 Requests / Monthly ').should('be.visible');
        cy.get('.media-body').contains(' Standard Support ').should('be.visible');
    });

    it('6. Test to check "Custom Plan" features', () => {
        cy.componentVisiblityCheck('.card > .card-header > .h3', 'Custom Plan');
        cy.componentVisiblityCheck('.card > .card-header > .mb-3 > span','Volume');
        cy.componentVisiblityCheck('.media-body');
        cy.get('#pricing .card').contains('Contact Us').click({force:true});
        cy.url().should('eq', APILAYER_BASE_URL +  '/support');
        cy.go('back');
        cy.get('.media-body').contains(' Any requests volume you need ').should('be.visible');
    });
});