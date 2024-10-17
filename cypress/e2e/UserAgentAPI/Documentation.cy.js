import { USER_AGENT_BASE_URL, DEVELOPMENT_QUICKSTART_GUID } from '../../resources/data';

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

    it('3. Test to check and click link "development quickstart guide."', () => {
        cy.componentVisiblityCheck(`a[href="${DEVELOPMENT_QUICKSTART_GUID}"]`, 'development quickstart guide.');

        cy.intercept('GET', DEVELOPMENT_QUICKSTART_GUID).as('quickstartRequest');

        // Click the link and wait for the request
        cy.get(`a[href="${DEVELOPMENT_QUICKSTART_GUID}"]`).invoke('removeAttr', 'target').click();
        cy.wait('@quickstartRequest');

        cy.get('h1.h2') // Select the <h1> element with the class 'h2'
            .should('be.visible') // Assert that it is visible
            .and('contain.text', 'Getting Started'); // Assert that it contains the text "Getting Started"

        cy.navigateUrlwithCookies(USER_AGENT_BASE_URL);
        cy.contains('span', 'Documentation').should('be.visible').click();
    });

    it('4. Test to check for the text "User Agent API Reference" & "Authentication"', () => {
        cy.checkTextVisibility('User Agent API Reference');
        cy.checkTextVisibility('Authentication');
    });

    it('5. Test to check if the text "Endpoints" is present', () => {
        cy.checkTextVisibility('Endpoints');
    });

    it('6. Test to check if the text "Rate Limiting" is present', () => {
        cy.checkTextVisibility('Rate Limiting');
    });

    it('7. Test to check if the text "Error Codes" is present', () => {
        cy.checkTextVisibility('Error Codes');
    });

    it('8. Test to expand all "Endpoints" documentation', () => {
        cy.get('.card-collapse > h5 > button').click({ multiple: true });
    });

    it('9. Test to close all "Endpoints" documentation', () => {
        cy.get('.card-collapse > h5 > button').click({ multiple: true });
    });

    it('10. Test to click the side bar items and check if it scroll to respective content', () => {
        cy.get('li > a').contains('Authentication').click();
        cy.get('[name="authentication"]').should('be.visible');
        cy.get('li > a').contains('Endpoints').click();
        cy.get('#endpointsAccordion').should('be.visible');
        cy.get('li > a').contains('Rate Limiting').click();
        cy.get('[name="rate-limits"]').should('be.visible');
        cy.get('li > a').contains('Error Codes').click();
        cy.get('[name="errors"]').should('be.visible');
    });

    it('11. Test to click the button " Subscribe for Free "', () => {
        cy.get('#subscribeButton').should('contain.text', 'Subscribe for Free').click();
        cy.get('#pricing').should('be.visible');
        cy.get('#documentation-tab').click();
    });

    it('12. Test to check and click the link "support unit" and "contact for support"', () => {
        cy.get('p > a').contains('support unit').should('have.attr', 'target', '_blank');
        cy.get('p > a').contains('support unit').should('have.attr', 'href', '/support');
        cy.get('p > a').contains('contact for support').should('have.attr', 'target', '_blank');
        cy.get('p > a').contains('contact for support').should('have.attr', 'href', '/support');
    });

});