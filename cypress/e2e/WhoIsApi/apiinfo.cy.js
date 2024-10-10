import { WHOISAPI_URL } from '../../resources/data';

describe('Who Is API Info page', () => {
    before(() => {
      cy.visit(WHOISAPI_URL);
    });

    
    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });                   

    it('2. Test to check "Whois API" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'Whois API');
    });

    it('3. Test to click "Api Info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
        cy.componentVisiblityCheck('#details');
    });

    it('4. Test to check "What is Whois API?" subtitle is present', () => {
        cy.checkTextVisibility('What is Whois API?');
    });

    it('5. Test to check "How Whois API helps you?" subtitle is present', () => {
        cy.checkTextVisibility('How Whois API helps you?');
    });

    it('6. Test to check "See it in Action!" subtitle is present', () => {
        cy.checkTextVisibility('See it in Action!');
    });

    it('7. Test to check "search field" is present', () => {
        cy.componentVisiblityCheck('[itemtype="https://schema.org/FAQPage"] > .fluid')
    });

    it('8. Test to check "How to start" subtitle is present', () => {
        cy.checkTextVisibility('How to start');
    });

    it('9. Test to check "How it works" subtitle is present', () => {
        cy.checkTextVisibility('How it works');
    });

    it('10. Test to check "Related Products" subtitle is present', () => {
        cy.checkTextVisibility('Related Products');
    });
    
  }); 