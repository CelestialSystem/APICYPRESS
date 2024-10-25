import { EMAIL_VERIFICATION_BASE_URL } from '../../resources/data';

describe('Email Verification FAQ page', () => {
    before(() => {
        cy.visit(EMAIL_VERIFICATION_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click on the "FAQs info" tab', () => {
        cy.get('#faqs-tab > .d-md-flex > span').click({force:true});
    });
    
    it('3. Test to check for the "text in FAQ"', () => {
        cy.checkTextVisibility('What is mailboxlayer?');
        cy.checkTextVisibility('Who runs the mailboxlayer API?');
        cy.checkTextVisibility('How accurate is the SMTP Check?');
        cy.checkTextVisibility('Why wouldn\'t I send email to free email addresses like "Gmail"?');
        cy.checkTextVisibility('Is the mailboxlayer API service secure?');
    });
    
    it('4. Expands all FAQ questions', () => {
        cy.get('.card-collapse a').click({ multiple: true, force: true });
    });
    
});