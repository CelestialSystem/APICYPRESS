import { SPELL_CHECKER_BASE_URL } from '../../resources/data';

describe('Spell Checker API Home page', () => {
    before(() => {
      cy.visit(SPELL_CHECKER_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });                   

    it('2. Test to check "header and Description" title is present', () => {
        cy.checkHeaderAndDescription('Spell Checker API','A quick and fast implementation of a spell checker for English language.');
    });

    it('3. Test to check "Subscribe for free" button is present', () => {
        cy.checkSubscribeForFreeAndClick();
    });

    it('4. Test to check "Live Demo" button is present', () => {
        cy.liveDemo();
    });

    it('5. Test to check code example  is present', () => {
        cy.componentVisiblityCheck('.code-response');
    });
    
    it('6. Test to check the "check the documentation" link is present and clickable', () => {
        cy.checkTheDocumentation('Spell Checker API Reference');
    });

    it('7. Test to check "pricing, api info and the documetation"  is present', () => {
        cy.verifyTabs();
    });

    it('8. Test to check "Related Products and Footer" container is present', () => {
        cy.checkRelatedProductAndFooter();
    });

    it('9. Test to check the "visibility of the review rating section" present and clickable', () => {
        cy.checkReviewRating();
    });

  }); 