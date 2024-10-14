import { BANK_DATA_BASE_URL, APILAYER_BASE_URL } from '../../resources/data';

describe('Bank Data Contact Us page', () => {
    before(() => {
        cy.visit(BANK_DATA_BASE_URL);
    });

    it('1. click on the "CONTACT US" menu item to navigate to that page', () => {
        cy.AcceptCookies();
        cy.get('.menu-item > a').contains('CONTACT US').click();
        cy.redirectToUrl(APILAYER_BASE_URL, '/support');
    });

});