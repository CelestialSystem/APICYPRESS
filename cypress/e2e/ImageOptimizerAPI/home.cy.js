import { IMAGE_OPTIMIZER_API } from '../../resources/data';

describe('Image Optimizer API Home page', () => {
    before(() => {
        cy.visit(IMAGE_OPTIMIZER_API);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is present or exists
        cy.AcceptCookies();
    });

    it('2. Test to check "Image Optimizer API" title is present', () => {
        cy.checkTextVisibility('Image Optimizer API');
    });

    it('3. Test to check "Subscribe for free" button is present', () => {
        cy.componentVisiblityCheck('#subscribeButton', 'Subscribe for Free');
    });

    it('4. Test to check "Live Demo" button is present and clickable', () => {
        cy.liveDemo();
    });

    it('5. Test to check code example  is present', () => {
        cy.componentVisiblityCheck('.code-response');
    });

    it('6. Test to check the "pricing, api info and the documetation" Tabs is Present in the home page', () => {
        cy.verifyTabs();
    });

    it('7. Test to check "Related Products" container is present', () => {
        cy.checkTextVisibility('Related Products');
    });

    it('8. Test to check footer is present', () => {
        cy.componentVisiblityCheck('footer.bg-primary');
    });

    it('9. Test to check on the "Image Optimizer API" description is present', () => {
        // Check if the description is visible
        cy.componentVisiblityCheck('.col-9 > div.mb-5', 'Reduces and optimizes file size of given image file.');
    });

    it('10. Test to check the "check the documentation" link is present and clickable', () => {
        cy.checkTheDocumentation('Image Optimizer API Reference');
    });

    it('11. Test to check APILayer link, logo, and review stars', () => {
        cy.checkReviewRating();
    });
});
