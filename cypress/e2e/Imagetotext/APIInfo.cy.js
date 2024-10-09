import { IMAGETOTEXT_BASE_URL } from '../../resources/data';

describe('Image to text API Info page', () => {
    before(() => {
      cy.visit(IMAGETOTEXT_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check "Image to Text API" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'Image to Text API');
    });

    it('3. Test to click "Api Info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
        cy.componentVisiblityCheck('#details');
    });

    it('4. Test to check "Examples" subtitle is present', () => {
        cy.checkTextVisibility('Examples');
    });

    it('5. Test to check "Looking at the following business card, it will extract the text information easily, even though the business card is positioned with angle." is present', () => {
        cy.checkTextVisibility('Looking at the following business card, it will extract the text information easily, even though the business card is positioned with angle.');
    });

    it('6. Test to check "The API will also work for handwritings. Even for non-English texts. Check the following example" text is present', () => {
        cy.checkTextVisibility('The API will also work for handwritings. Even for non-English texts. Check the following example');
    });
});
