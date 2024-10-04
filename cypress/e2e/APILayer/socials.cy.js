import { APILAYER_BASE_URL } from '../../resources/data';

describe('Test Cases social media icons', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.visit(APILAYER_BASE_URL);
    });

    it('1. Test to Accept Cookies if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to Check if twitter icon is there', () => {
        cy.scrollTo('bottom');
        cy.get('.list-inline > :nth-child(1) > .text-white').should('be.visible');
    });

    it('3. Test to Click on twitter icon', () => {
        cy.get('.list-inline > :nth-child(1) > .text-white').click();
        cy.url('eq', 'https://x.com/apilayer/');
    });

    it('4. Test to Check if facebook icon is there', () => {
        cy.navigateUrlwithCookies(APILAYER_BASE_URL);
        cy.scrollTo('bottom');
        cy.get('.list-inline > :nth-child(2) > .text-white').should('be.visible');
    });

    xit('5. Test to Click on  facebook icon', () => {
        cy.navigateUrlwithCookies(APILAYER_BASE_URL);
        cy.get('.list-inline > :nth-child(2) > .text-white').click();
        cy.url('eq', 'https://facebook.com/apilayer/');
    });

    it('6. Test to Check if Instagram icon is there', () => {
        cy.navigateUrlwithCookies(APILAYER_BASE_URL);
        cy.scrollTo('bottom');
        cy.get('.list-inline > :nth-child(3) > .text-white').should('be.visible');
    });

    it('7. Test to Click on  Instagram icon', () => {
        cy.get('.list-inline > :nth-child(3) > .text-white').click();
        cy.url('eq', 'https://instagram.com/apilayer/');
    });

    it('8. Test to Check if youtube icon is there', () => {
        cy.navigateUrlwithCookies(APILAYER_BASE_URL);
        cy.scrollTo('bottom');
        cy.get('.list-inline > :nth-child(4) > .text-white').should('be.visible');
    });

    it('9. Test to Click on  Youtube icon', () => {
        cy.get('.list-inline > :nth-child(4) > .text-white').click();
        cy.url('eq', 'https://youtube.com/apilayer/');
    });

    it('10. Test to Check if linkdin icon is there', () => {
        cy.navigateUrlwithCookies(APILAYER_BASE_URL);
        cy.scrollTo('bottom');
        cy.get('.list-inline > :nth-child(5) > .text-white').should('be.visible');
    });

    it('11. Test to Click on  linkdin icon', () => {
        cy.get('.list-inline > :nth-child(5) > .text-white').click();
        cy.url('eq', 'https://linkdin.com/apilayer/');
    });

    it('12. Test to Check if github icon is there', () => {
        cy.navigateUrlwithCookies(APILAYER_BASE_URL);
        cy.scrollTo('bottom');
        cy.get('.list-inline > :nth-child(6) > .text-white').should('be.visible');
    });

    it('13. Test to Click on  github icon', () => {
        cy.get('.list-inline > :nth-child(6) > .text-white').click();
        cy.url('eq', 'https://github.com/apilayer/');
    });
});