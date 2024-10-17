import { IMAGE_UPLOAD_BASE_URL } from '../../resources/data';

describe('Image Upload FAQ page', () => {
    before(() => {
        cy.visit(IMAGE_UPLOAD_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click on the "FAQs info" tab', () => {
        cy.get('#faqs-tab > .d-md-flex > span').click();
    });
    
    it('3. Test to check for the text "This is a question"', () => {
        cy.checkTextVisibility('This is a question');
    });
    
    it('4. Test to check for the text "This is an answer"', () => {
        cy.checkTextVisibility('This is an answer');
    });
});