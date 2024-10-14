import { BANK_DATA_BASE_URL, APILAYER_BASE_URL } from '../../resources/data';

describe('Bank Data Documentation page', () => {
    before(() => {
        cy.visit(BANK_DATA_BASE_URL);
    });

    it('1. click on the "DOCUMENTATION" menu item to navigate to that page', () => {
        cy.AcceptCookies();
        cy.get('.menu-item > a').contains('DOCUMENTATION').click();
        cy.assertPathname('/documentation/');
    });
    
    it('2. Test to check if the text "3-Step Quickstart Guide" is present and click on "GET FREE ACCESS"', () => {
        cy.checkTextVisibility('3-Step Quickstart Guide');
        cy.get('.et_pb_button_module_wrapper > a').contains('GET FREE ACCESS').click();
        cy.redirectToUrl(APILAYER_BASE_URL, '/marketplace/bank_data-api');
    });
    
    it('3. Test to check if the text "Code Examples" is present', () => {
        cy.checkTextVisibility('Code Examples');
    });
    
    it('4. Test to check if the text "Bank Data API Reference" is present', () => {
        cy.checkTextVisibility('Bank Data API Reference');
    });
    
    it('5. Test to check if the text "development quickstart guide." is present', () => {
        cy.checkTextVisibility('development quickstart guide.');
        cy.get('a').contains('development quickstart guide.');
    });
   
    it('6. Test to check if the text "Authentication" is present', () => {
        cy.checkTextVisibility('Authentication');
    });
  
    it('7. Test to check if the text "Endpoints" is present', () => {
        cy.checkTextVisibility('Endpoints');
    });
   
    it('8. Test to expand all "Endpoints" documentation', () => {
        cy.get('.et_pb_toggle_title').click({ multiple: true });
    });
    
    it('9. Test to close all "Endpoints" documentation', () => {
        cy.get('.et_pb_toggle_title').click({ multiple: true });
    });

    it('10. Test to check if the text "Rate Limiting" is present', () => {
        cy.checkTextVisibility('Rate Limiting');
    });
   
    it('11. Test to check if the text "Error Codes" is present', () => {
        cy.checkTextVisibility('Error Codes');
    });
    
    it('12. Test to click the side bar items and check if it scroll to respective content', () => {
        cy.get('.sidebarmenu > li > a').contains('Authentication').click();
        cy.get('#authentication').should('be.visible');
        cy.get('.sidebarmenu > li > a').contains('Endpoints').click();
        cy.get('#endpoints').should('be.visible');
        cy.get('.sidebarmenu > li > a').contains('Rate Limiting').click();
        cy.get('#rate-limits').should('be.visible');
        cy.get('.sidebarmenu > li > a').contains('Error Codes').click();
        cy.get('#errors').should('be.visible');
    });
});