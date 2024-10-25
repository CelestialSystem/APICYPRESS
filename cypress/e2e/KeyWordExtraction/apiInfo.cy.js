import { KEYWORD_EXTRACTION_BASE_URL } from '../../resources/data';

describe('Keyword Extraction API Info page', () => {
    before(() => {
        cy.visit(KEYWORD_EXTRACTION_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click on the "API info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click({force:true});
    });

    it('3. Test to check for "all the text is visible" in the api info tab', () => {
        cy.checkTextVisibility('What is Keyword Extraction?');
        cy.checkTextVisibility('How it works');
        cy.checkTextVisibility('Use cases for Keyword Extraction API');
        cy.checkTextVisibility('Language Support');
        cy.checkTextVisibility('Supported languages');
    });
});