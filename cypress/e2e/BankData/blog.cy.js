import { BANK_DATA_BASE_URL } from '../../resources/data';

describe('Bank Data Blog page', () => {
    before(() => {
        cy.visit(BANK_DATA_BASE_URL);
    });

    it('1. click on the "Blog" menu item to navigate to that page', () => {
        cy.AcceptCookies();
        cy.get('.menu-item > a').contains('BLOG').click();
        cy.assertPathname('/blog/');
    });
});