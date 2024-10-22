import { VAULT_API_BASE_URL } from '../../resources/data';

describe('Vault API Documentation page', () => {
    before(() => {
        cy.visit(VAULT_API_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click "Documentation" tab', () => {
        cy.moveToDoc('vault-api');
    });

    it('3. Test to click the side bar items and check if it scroll to respective content and the text is present', () => {
        cy.scrollToRespectiveContent();
     });

    it('4. Test to check "text" is present', () => {
        cy.checkTextVisibility('Vault API Reference');
        cy.checkTextVisibility('Just Getting Started?');
    });

    it('5. Test to check and click link "development quickstart guide."', () => {
        cy.developmentQuickstartGuide(VAULT_API_BASE_URL);
    });

    it('6. Test to click on "Accounts page" hyperlink and navigate back to main page', () => {
        cy.navigateToAccountsPage(VAULT_API_BASE_URL);
    });    

    it('7. Test to click the button "Subscribe for Free"', () => {
        cy.documentationSubscribeForFree('#subscribeButton', 'Subscribe for Free', '#pricing', '#documentation-tab');
    });

    it('8. Test to check and click the links "support unit" and "contact for support"', () => {
        cy.checkLink('support unit');
        cy.checkLink('contact for support');
    });

    it('9. Test to expand all "Endpoints" documentation', () => {
        cy.toggleEndpointsDocumentation('expand');
    });
    
    it('10. Test to close all "Endpoints" documentation', () => {
        cy.toggleEndpointsDocumentation('close');
    });
});