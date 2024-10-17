import { USER_AGENT_BASE_URL } from '../../resources/data';

describe('User Agent home page', () => {
    before(() => {
        cy.visit(USER_AGENT_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "User Agent API" text is present', () => {
        cy.checkTextVisibility('User Agent API');
    });

    it('3. Test to check if text "Detect any browser, device & OS from user agent strings and generate new ones randomly." is present', () => {
        cy.checkTextVisibility('Detect any browser, device & OS from user agent strings and generate new ones randomly.');
    });

    it('4. Test to click and check for button "Subscribe for Free"', () => {
        cy.componentVisiblityCheck('#subscribeButton', "Subscribe for Free");
        cy.get('#subscribeButton').click();
        cy.get('#pricing').should('be.visible');
        cy.checkIfScrolledToEl('#pricing');
    });

    it('5. Test to check on the "Live Demo" button click', () => {
        cy.get('.show-code').click();
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
        cy.get('.nav-item > #reviews-tab').should('be.visible');
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