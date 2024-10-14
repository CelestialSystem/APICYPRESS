import { EMAIL_VERIFICATION_BASE_URL, APILAYER_BASE_URL } from '../../resources/data';

describe('Email Verification API Info page', () => {
    before(() => {
        cy.visit(EMAIL_VERIFICATION_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click on the "API info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
    });
    
    it('3. Test to check for the text "See it in Action!"', () => {
        cy.checkTextVisibility('See it in Action!');
    });
    
    it('4. Test to check for the code sample element', () => {
        cy.componentVisiblityCheck('.code-toolbar');
    });
    
    it('5. Test to check if the CURL command is present', () => {
        cy.componentVisiblityCheck('.language-shell');
    });
    
    it('6. Test to check for the texts in the "API Info" tab', () => {
        cy.checkTextVisibility('How it works');
        cy.checkTextVisibility('What information is provided with the API?');
    });
   
    it('7. Test to click link "subscribing to the service"', () => {
        cy.get('a').contains('subscribing to the service').click();
        cy.get('#pricing').should('be.visible');
        cy.get('#details-tab > .d-md-flex > span').click();
    });
    
    it('8. Test to click link "get your API key"', () => {
        cy.get('a').contains('get your API key').click();
        cy.url().should('eq', `${APILAYER_BASE_URL}/?signin`);
    });
   
});