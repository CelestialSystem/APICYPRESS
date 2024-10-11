import { BADWORDS_BASE_URL } from '../../resources/data';

describe('Bad words api review page', () => {
    before(() => {
        cy.visit(BADWORDS_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check on the "Reviews" tab is present', () => {
        cy.componentVisiblityCheck('#reviews-tab > .d-md-flex > span');
    });

    it('3. Test to click on the "Reviews" tab', () => {
        cy.get('#reviews-tab > .d-md-flex > span').click();
    });

    it('4. Test to check on the "rating" container is present', () => {
        cy.componentVisiblityCheck('.col-lg-4 > .card');
    });

    it('5. Test to check on the "API rating" text is present', () => {
        cy.checkTextVisibility('API rating');
    });

    it('6. Test to check on the "API rating bars" conatiner present', () => {
        cy.componentVisiblityCheck('.mb-7 > .row > .col-lg-8');
    });
});