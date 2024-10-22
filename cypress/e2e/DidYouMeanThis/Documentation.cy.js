import { DID_YOU_MEAN_THIS_BASE_URL } from '../../resources/data';

describe('"Did you Mean This?" documentation page', () => {
    before(() => {
        cy.visit(DID_YOU_MEAN_THIS_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click on the "Documentation" tab', () => {
        cy.moveToDoc('dymt-api');
    });

    it('3. Test to check and click link "development quickstart guide."', () => {
        cy.developmentQuickstartGuide(DID_YOU_MEAN_THIS_BASE_URL);
    });

    it('4. Test to check for the text "Did you Mean This? API Reference" & "Authentication"', () => {
        cy.checkTextVisibility('"Did you Mean This?" API Reference');
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