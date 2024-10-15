import { KEYWORD_EXTRACTION_BASE_URL } from '../../resources/data';

describe('Keyword Extraction API Info page', () => {
    before(() => {
        cy.visit(KEYWORD_EXTRACTION_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click on the "API info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
    });

    it('3. Test to check for the title "What is Keyword Extraction?"', () => {
        cy.checkTextVisibility('What is Keyword Extraction?');
    });

    it('4. Test to check for the title "Use cases for Keyword Extraction API"', () => {
        cy.checkTextVisibility('Use cases for Keyword Extraction API');
    });

    it('5. Test to check for the title "Language Support"', () => {
        cy.checkTextVisibility('Language Support');
    });

    it('6. Test to check for the title "Supported languages"', () => {
        cy.checkTextVisibility('Supported languages');
    });
});