import { VAULT_API_BASE_URL } from '../../resources/data';

describe('Vault API Home page', () => {
    before(() => {
      cy.visit(VAULT_API_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });                   

    it('2. Test to check "Vault API and  paragraph" title is present', () => {
        cy.checkHeaderAndDescription('Vault API', 'Full featured encrypted data store and key management backend.');
    });

    it('3. Test to check "Subscribe for free" button is present', () => {
        cy.checkSubscribeForFreeAndClick();
    });

    it('4. Test to check code example  is present', () => {
        cy.componentVisiblityCheck('.code-response');
    });

    it('5. Test to check the "check the documentation" link is present and clickable', () => {
        cy.checkTheDocumentation('Vault API Reference');
    });

    it('6. Test to click on "Live demo" title is present and its functionality', () => {
        cy.liveDemo();
    });

    it('7. Test to check the "pricing, api info and the documetation" Tabs is Present in the home page', () => {
        cy.verifyTabs();
    });

    it('8. Verifying that the "related products and the footer" are present', () => {
        cy.checkRelatedProductAndFooter();
    });

    it('9. Test to check the "visibility of the review rating section" present and clickable', () => {
        cy.checkReviewRating();
    });

  }); 