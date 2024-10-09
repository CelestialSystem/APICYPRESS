import { BANK_DATA_BASE_URL } from '../../resources/data';

describe('Bank Data Blog page', () => {
    before(() => {
        cy.visit(BANK_DATA_BASE_URL);
    });

    it('1. click on the "Blog" menu item to navigate to that page', () => {
        cy.AcceptCookies();
        cy.get('.menu-item > a').contains('BLOG').click();
        cy.url().should('eq', BANK_DATA_BASE_URL + 'blog/');
    });

    it('2. Test to check if the text "What Is An IBAN, And Why Do You Need One For Your Bank Account?" is present', () => {
        cy.checkTextVisibility('What Is An IBAN, And Why Do You Need One For Your Bank Account?');
    });
  
    it('3. Test to check if the text "Use An IBAN Checker To Validate Your International Bank Account Numbers" is present', () => {
        cy.checkTextVisibility('Use An IBAN Checker To Validate Your International Bank Account Numbers');
    });
   
    it('4. Test to check if the text "Unlocking the Potential of Banks API for Financial Innovation" is present', () => {
        cy.checkTextVisibility('Unlocking the Potential of Banks API for Financial Innovation');
    });
   
    it('5. Test to check if the text "How IBAN Checkers are Revolutionizing Cross-Border Payments" is present', () => {
        cy.checkTextVisibility('How IBAN Checkers are Revolutionizing Cross-Border Payments');
    });

});