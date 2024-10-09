import { BANK_DATA_BASE_URL } from '../../resources/data';

describe('Bank Data FAQ page', () => {
    before(() => {
        cy.visit(BANK_DATA_BASE_URL);
    });

    it('1. click on the "FAQ" menu item to navigate to that page', () => {
        cy.AcceptCookies();
        cy.get('.menu-item > a').contains('FAQ').click();
        cy.assertPathname('/faq/');
    });

    it('2. Test to check if the text "Frequently Asked Questions" is present', () => {
        cy.checkTextVisibility('Frequently Asked Questions');
    });
    
    it('3. Test to check if the text "General" is present', () => {
        cy.checkTextVisibility('General');
    });
   
    it('4. Test to check if the text "API Access & Features" is present', () => {
        cy.checkTextVisibility('API Access & Features');
    });
    
    it('5. Test to check if the text "Plans, Pricing & Payments" is present', () => {
        cy.checkTextVisibility('Plans, Pricing & Payments');
    });
    
    it('6. Test to click on the expand button for the questions.', () => {
        cy.get('.et_pb_toggle_title').click({ multiple: true });
    });
   
    it('7. Test to click on the close button for the questions.', () => {
        cy.get('.et_pb_toggle_title').click({ multiple: true });
    });

});