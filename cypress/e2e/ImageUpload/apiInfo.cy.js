import { IMAGE_UPLOAD_BASE_URL } from '../../resources/data';

describe('Image Upload API Info page', () => {
    before(() => {
        cy.visit(IMAGE_UPLOAD_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click on the "API info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
    });
    
    it('3. Test to check for the titles are present', () => {
        cy.checkTextVisibility('Automatic Image Optimization');
        cy.checkTextVisibility('Easy Integration with E-commerce Platforms');
        cy.checkTextVisibility('Powerful Editing Tools');
    });
});