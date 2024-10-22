import { CURRENCY_BASE_URL } from '../../resources/data';

describe('Currency Data Home page', () => {
    before(() => {
        cy.visit(CURRENCY_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "Currency Data API" & "Reliable Exchange Rates & Currency Conversion for your Business." text is present', () => {
        cy.checkHeaderAndDescription('Currency Data API', 'Reliable Exchange Rates & Currency Conversion for your Business.');
    });

    it('3. Test to click and check for button "Subscribe for Free" and click', () => {
        cy.checkSubscribeForFreeAndClick();
    });

    it('4. Test to check on the "Live Demo" button click', () => {
        cy.liveDemo();
    });

    it('5. Test to click link "check the documentation."', () => {
        cy.checkTheDocumentation('Currency Data API Reference');
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