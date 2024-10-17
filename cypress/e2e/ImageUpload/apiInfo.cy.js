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
    
    it('3. Test to check for the  "description"', () => {
        cy.checkTextVisibility('Image Upload API is an image manipulation and optimization REST API. The API is capable of uploading images, direct upload or via URL, optimizing the image, resizing, cropping the image, and changing orientation.');
    });
});