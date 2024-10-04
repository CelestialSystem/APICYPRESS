import { FIXER_BASE_URL } from '../../resources/data';

describe('Fixer Reviews Page', () => {
    before(() => {
        cy.visit(FIXER_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => { 
        cy.AcceptCookies();
    });

    it('2. Test to check the "Reviews" tab', () => {
        cy.componentVisiblityCheck('#reviews-tab > .d-md-flex > span');
    });

    it('3. Test to click on "Reviews" tab, "Reviews" card should be is present', () => {
        cy.get('#reviews-tab > .d-md-flex > span').click();
    });

    it('4. Test to check "Review" count section is present', () => {
        cy.componentVisiblityCheck('.display-4');
    });

    it('5. Test to check "Star" count is present', () => {
        cy.componentVisiblityCheck('.card > .list-inline');
    });

    it('6. Test to check rating container is present', () => {
        cy.componentVisiblityCheck('.mb-7 > .row > .col-lg-8');
    });
  });