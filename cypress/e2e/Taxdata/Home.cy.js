import { TAXDATA_BASE_URL } from '../../resources/data';

describe('Tax Data Home page', () => {
    before(() => {
        cy.visit(TAXDATA_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "Tax Data API" text is present', () => {
        cy.checkHeaderAndDescription('Tax Data API','Instant VAT number and tax validation across the globe.');
    });

    it('3. Test to check the code response window is present', () => {
        cy.componentVisiblityCheck('.col-9 > :nth-child(2)');
    });

    it('4. Test to check the "Subscribe for Free" button"', () => {
        cy.checkSubscribeForFreeAndClick();
    });

    it('5. Test to check the "Live demo" button', () => {
        cy.liveDemo();
    });

    it('6. Test to check the "pricing, api info, Documentation and FAQs" tab is present', () => {
        cy.verifyTabs();
        const extraTabs = [
            '#faqs-tab'
        ];
        cy.verifyTabs(extraTabs);
    });

    it('7. Test to check if "Related Products and Footer" is present', () => {
        cy.checkRelatedProductAndFooter();
    });

    it('8. Test to check the "visibility of the review rating section" present and clickable', () => {
        cy.checkReviewRating();
    });

});