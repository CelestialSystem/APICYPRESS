import { EMAIL_VERIFICATION_BASE_URL } from '../../resources/data';

describe('Email Verification Home page', () => {
    before(() => {
        cy.visit(EMAIL_VERIFICATION_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "Email Verification API" text is present', () => {
        cy.checkTextVisibility('Email Verification API');
    });

    it('3. Test to check if text "Validates and verifies an email address assessing deliverability and quality." is present', () => {
        cy.checkTextVisibility('Validates and verifies an email address assessing deliverability and quality.');
    });

    it('4. Test to click and check for button "Subscribe for Free"', () => {
        cy.componentVisiblityCheck('#subscribeButton', "Subscribe for Free");
        cy.get('#subscribeButton').click();
        cy.get('#pricing').should('be.visible');
        cy.checkIfScrolledToEl('#pricing');
    });

    it('5. Test to check on the "Live Demo" button click', () => {
        cy.get('.show-code').click();
        // Adding wait due to the css animation of 300 ms
        cy.wait(500);
        cy.get('.sidebar-content', { timeout: 7000 }).should('be.visible');
        cy.get('body').click();
    });
   
    it('6. Test to click link "check the documentation."', () => {
        cy.get('a').contains('check the documentation.').click();
        cy.checkTextVisibility('Email Verification API Reference');
    });
    
    it('7. Test to check if all tabs are present', () => {
        cy.get('.nav-item > #pricing-tab').should('be.visible');
        cy.get('.nav-item > #details-tab').should('be.visible');
        cy.get('.nav-item > #documentation-tab').should('be.visible');
        cy.get('.nav-item > #reviews-tab').should('be.visible');
        cy.get('.nav-item > #faqs-tab').should('be.visible');
    });
   
    it('8. Test to check if "Related Products" is present', () => {
        cy.componentVisiblityCheck('#related');
    });
    
    it('9. Test to check if footer is present', () => {
        cy.componentVisiblityCheck('footer');
    });

});