import { SHORTURLAPI_BASE_URL } from '../../resources/data';

describe('URL Shortener API Reviews page', () => {
    before(() => {
        cy.visit(SHORTURLAPI_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });

    it('2. Test to click on "Reviews" tab, "Reviews" card should be present', () => {
        cy.get('#reviews-tab').click();
        cy.componentVisiblityCheck('.col-lg-4 > .card');
    });

    it('3. Test to check rating container is present', () => {
        cy.componentVisiblityCheck('.mb-7 > .row > .col-lg-8');
    });

    it('4. Test to check "rating bars" conatiner is present', () => {
        cy.componentVisiblityCheck('.mb-7 > .row > .col-lg-8');
    });

    it('5. Test to check "API rating" title is present', () => {
        cy.componentVisiblityCheck('.card > span:last-child');
    });
});
