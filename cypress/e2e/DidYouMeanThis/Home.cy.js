import { DID_YOU_MEAN_THIS_BASE_URL } from '../../resources/data';

describe('"Did you Mean This?" API home page', () => {
    before(() => {
        cy.visit(DID_YOU_MEAN_THIS_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the ""Did you Mean This?" API" text is present', () => {
        cy.checkTextVisibility('"Did you Mean This?" API');
    });

    it('3. Test to check if text "Google\'s famed did you mean this feature is a powerful feature to guide your users for corrections easily. This API features a fast and convenient way to embed this feature into your application." is present', () => {
        cy.checkTextVisibility('Google\'s famed did you mean this feature is a powerful feature to guide your users for corrections easily. This API features a fast and convenient way to embed this feature into your application.');
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
    });
    
    it('7. Test to check if all tabs are present', () => {
        cy.get('.nav-item > #pricing-tab').should('be.visible');
        cy.get('.nav-item > #details-tab').should('be.visible');
        cy.get('.nav-item > #documentation-tab').should('be.visible');
    });
   
    it('8. Test to check if "Related Products" is present', () => {
        cy.componentVisiblityCheck('#related');
    });
    
    it('9. Test to check if footer is present', () => {
        cy.componentVisiblityCheck('footer');
    });
    
    it('10. Test to check if code block is present', () => {
        cy.componentVisiblityCheck('.language-javascript');
    });

});