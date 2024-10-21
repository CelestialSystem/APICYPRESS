import { VAULT_API_BASE_URL } from '../../resources/data';

describe('Vault API Home page', () => {
    before(() => {
      cy.visit(VAULT_API_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });                   

    it('2. Test to check "Vault API" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'Vault API');
    });

    it('3. Test to check "Subscribe for free" button is present', () => {
        cy.componentVisiblityCheck('#subscribeButton', 'Subscribe for Free');
    });

    it('4. Test to check code example  is present', () => {
        cy.componentVisiblityCheck('.code-response');
    });

    it('5. Test to check the "check the documentation" link is present and clickable', () => {
        cy.componentVisiblityCheck('p > a', 'check the documentation');
        cy.get('a[href="javascript:;"]').contains('check the documentation.').click();
        cy.checkTextVisibility('Vault API Reference');
    });

    it('6. Test to click on "Live demo" title is present and its functionality', () => {
        cy.Livedemo();
    });

    it('7. Test to check the "pricing, api info and the documetation" Tabs is Present in the home page', () => {
        cy.VerifyTabs();
    });

    it('8. Test to check "Related Products" container is present', () => {
        cy.componentVisiblityCheck('.h1', 'Related Products');
    });

    it('9. Test to check footer is present', () => {
        cy.componentVisiblityCheck('footer.bg-primary');
    });

  }); 