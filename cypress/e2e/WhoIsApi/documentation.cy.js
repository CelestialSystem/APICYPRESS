import { WHOISAPI_BASE_URL, APILAYER_BASE_URL} from '../../resources/data'

describe('Who Is API Documentation page', () => {
    before(() => {
      cy.visit(WHOISAPI_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });                   

    it('2.Test to click "Documentation" tab', () => {
        cy.moveToDoc('whois-api');
    });

    it('3. Test to click the side bar items and check if it scroll to respective content and the text is present', () => {
        cy.scrollToRespectiveContent();
     });

    it('4. Test to check "Whois API Reference" title is present', () => {
        cy.checkTextVisibility('Whois API Reference');
    });

    it('5. Test to expand all "Endpoints" documentation', () => {
        cy.toggleEndpointsDocumentation('expand');
    });
    
    it('6. Test to close all "Endpoints" documentation', () => {
        cy.toggleEndpointsDocumentation('close');
    });

    it('7. Test to check and click link "development quickstart guide."', () => {
        cy.developmentQuickstartGuide(WHOISAPI_BASE_URL);
    });

    it('8. Test to click the button "Subscribe for Free"', () => {
        cy.documentationSubscribeForFree('#subscribeButton', 'Subscribe for Free', '#pricing', '#documentation-tab');
    });
    it('9. Test to check and click the links "support unit" and "contact for support"', () => {
        cy.checkLink('support unit');
        cy.checkLink('contact for support');
    });
  }); 

 