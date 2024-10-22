import { DISPOSABLE_EMAIL_API } from '../../resources/data';

describe('Disposable Email Detection API Home page', () => {
    before(() => {
        cy.visit(DISPOSABLE_EMAIL_API);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "Disposable Email Detection API" & "Detects disposable, fake and throwaway email addresses in lightning speed." text is present', () => {
        cy.checkHeaderAndDescription('Disposable Email Detection API', 'Detects disposable, fake and throwaway email addresses in lightning speed.');
    });

    it('3. Test to click and check for button "Subscribe for Free" and click', () => {
        cy.checkSubscribeForFreeAndClick();
    });

    it('4. Test to check on the "Live Demo" button click', () => {
        cy.liveDemo();
    });

    it('5. Test to click link "check the documentation."', () => {
        cy.checkTheDocumentation('Disposable Email Detection API Reference');
    });

    it('6. Test to check if all tabs are present', () => {
        cy.verifyTabs();
    });

    it('7. Test to check if "Related Products & footer" is present', () => {
        cy.checkRelatedProductAndFooter();
    });

    it('8. Test to check if code block is present', () => {
        cy.componentVisiblityCheck('.language-javascript');
    });
});
