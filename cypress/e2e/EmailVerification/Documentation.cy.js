import { EMAIL_VERIFICATION_BASE_URL } from '../../resources/data';

describe('Email Verification documentation page', () => {
    before(() => {
        cy.visit(EMAIL_VERIFICATION_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click on the "Documentation" tab', () => {
        cy.get('#documentation-tab').click();
    });
    
    // cannot test the below URL as this open new tab
    // it('3. Test to check and click link "development quickstart guide."', () => {
        // cy.get('a').contains('development quickstart guide.').click();
        // cy.location('pathname').should('eq', '/docs/article/getting-started');
    // });
    
    it('3. Test to check for the text "Authentication"', () => {
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
    
});