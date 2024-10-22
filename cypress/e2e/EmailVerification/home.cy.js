import { EMAIL_VERIFICATION_BASE_URL } from '../../resources/data';

describe('Email Verification Home page', () => {
    before(() => {
        cy.visit(EMAIL_VERIFICATION_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "Email Verification API" & "Validates and verifies an email address assessing deliverability and quality." text is present', () => {
        cy.checkHeaderAndDescription('Email Verification API', 'Validates and verifies an email address assessing deliverability and quality.');
    });

    it('3. Test to click and check for button "Subscribe for Free" and click', () => {
        cy.checkSubscribeForFreeAndClick();
    });

    it('4. Test to check on the "Live Demo" button click', () => {
        cy.liveDemo();
    });

    it('5. Test to click link "check the documentation."', () => {
        cy.checkTheDocumentation('Email Verification API Reference');
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
