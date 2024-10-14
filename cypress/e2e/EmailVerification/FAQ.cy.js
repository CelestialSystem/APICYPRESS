import { EMAIL_VERIFICATION_BASE_URL } from '../../resources/data';

describe('Email Verification FAQ page', () => {
    before(() => {
        cy.visit(EMAIL_VERIFICATION_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click on the "FAQs info" tab', () => {
        cy.get('#faqs-tab > .d-md-flex > span').click();
    });
    
    it('3. Test to check for the text "What is mailboxlayer?"', () => {
        cy.checkTextVisibility('What is mailboxlayer?');
    });
    
    it('4. Test to check for the text "Who runs the mailboxlayer API?"', () => {
        cy.checkTextVisibility('Who runs the mailboxlayer API?');
    });
    
    it('5. Test to check for the text "How accurate is the SMTP Check?"', () => {
        cy.checkTextVisibility('How accurate is the SMTP Check?');
    });
    
    it('6. Test to check for the text "Why wouldn\'t I send email to free email addresses like "Gmail"?"', () => {
        cy.checkTextVisibility('Why wouldn\'t I send email to free email addresses like "Gmail"?');
    });
   
    it('7. Test to check for the text "Is the mailboxlayer API service secure?"', () => {
        cy.checkTextVisibility('Is the mailboxlayer API service secure?');
    });
    
    it('8. Expands all FAQ questions', () => {
        cy.get('.card-collapse').click({ multiple: true, force: true });
    });
    
});