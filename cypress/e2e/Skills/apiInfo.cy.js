import { SKILLS_BASE_URL } from '../../resources/data';

describe('Skills API Info page', () => {
    before(() => {
        cy.visit(SKILLS_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click on the "API info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
    });

    it('3. Test to check for the text "Searchable database of 70.000+ skills well-organized and categorized."', () => {
        cy.checkTextVisibility('Searchable database of 70.000+ skills well-organized and categorized.');
    });

    it('4. Test to check for the title "Related Articles"', () => {
        cy.checkTextVisibility('Related Articles');
    });

    it('5. Test to check for the title "Skills API Code Sample" window is present', () => {
        cy.get('img[alt="Skills API Code Sample"]').should('be.visible');
    });
});