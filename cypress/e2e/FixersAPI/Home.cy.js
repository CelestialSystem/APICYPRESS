import { FIXER_BASE_URL } from '../../resources/data';

describe('Fixers Home page', () => {
    before(() => {
        cy.visit(FIXER_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "Fixer API" & "Foreign exchange rates and currency conversion JSON API." text is present', () => {
        cy.checkHeaderAndDescription('Fixer API', 'Foreign exchange rates and currency conversion JSON API.');
    });

    it('3. Test to click and check for button "Subscribe for Free" and click', () => {
        cy.checkSubscribeForFreeAndClick();
    });

    it('4. Test to check on the "Live Demo" button click', () => {
        cy.liveDemo();
    });

    it('5. Test to click link "check the documentation."', () => {
        cy.checkTheDocumentation('Fixer API Reference');
    });

    it('6. Test to check if all tabs are present', () => {
        const extraTabs = [
            '#reviews-tab',
            '#faqs-tab'
        ];
        cy.verifyTabs(extraTabs);
    });

    it('7. Test to check if "Related Products & footer" is present', () => {
        cy.checkRelatedProductAndFooter();
    });

    it('8. Test to check if code block is present', () => {
        cy.componentVisiblityCheck('.language-javascript');
    });
});