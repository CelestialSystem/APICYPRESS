import { USER_AGENT_BASE_URL } from '../../resources/data';

describe('User Agent documentation page', () => {
    before(() => {
        cy.visit(USER_AGENT_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click on the "Documentation" tab', () => {
        cy.intercept('GET', '/marketplace/user_agent-api/tabs/api_docs').as('apiRequest');
        cy.get('#documentation-tab').click();
        cy.wait('@apiRequest');
        cy.componentVisiblityCheck('#documentation');
    });
    
    // cannot test the below URL as this opens new tab
    // it('3. Test to check and click link "development quickstart guide."', () => {
        // cy.get('a').contains('development quickstart guide.').click();
        // cy.location('pathname').should('eq', '/docs/article/getting-started');
    // });
    
    it('3. Test to check for the text "User Agent API Reference" & "Authentication"', () => {
        cy.checkTextVisibility('User Agent API Reference');
        cy.checkTextVisibility('Authentication');
    });

    it('4. Test to check if the text "Endpoints" is present', () => {
        cy.checkTextVisibility('Endpoints');
    });
   
    it('5. Test to check if the text "Rate Limiting" is present', () => {
        cy.checkTextVisibility('Rate Limiting');
    });
   
    it('6. Test to check if the text "Error Codes" is present', () => {
        cy.checkTextVisibility('Error Codes');
    });
   
    it('7. Test to expand all "Endpoints" documentation', () => {
        cy.get('.card-collapse > h5 > button').click({ multiple: true });
    });
    
    it('8. Test to close all "Endpoints" documentation', () => {
        cy.get('.card-collapse > h5 > button').click({ multiple: true });
    });

    it('9. Test to click the side bar items and check if it scroll to respective content', () => {
        cy.get('li > a').contains('Authentication').click();
        cy.get('[name="authentication"]').should('be.visible');
        cy.get('li > a').contains('Endpoints').click();
        cy.get('#endpointsAccordion').should('be.visible');
        cy.get('li > a').contains('Rate Limiting').click();
        cy.get('[name="rate-limits"]').should('be.visible');
        cy.get('li > a').contains('Error Codes').click();
        cy.get('[name="errors"]').should('be.visible');
    });
   
    it('10. Test to click the button " Subscribe for Free "', () => {
        cy.get('#subscribeButton').should('contain.text', 'Subscribe for Free').click();
        cy.get('#pricing').should('be.visible');
        cy.get('#documentation-tab').click();
    });
    
    it('11. Test to check and click the link "support unit" and "contact for support"', () => {
        cy.get('p > a').contains('support unit').should('have.attr', 'target', '_blank');
        cy.get('p > a').contains('support unit').should('have.attr', 'href', '/support');
        cy.get('p > a').contains('contact for support').should('have.attr', 'target', '_blank');
        cy.get('p > a').contains('contact for support').should('have.attr', 'href', '/support');
    });
    
});