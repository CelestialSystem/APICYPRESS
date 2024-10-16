import { DISPOSABLE_EMAIL_API } from '../../resources/data';

describe('Disposable Email Detection API Info page', () => {
    before(() => {
        cy.visit(DISPOSABLE_EMAIL_API);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });

    it('2. Test to click "Api Info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
        cy.componentVisiblityCheck('#details');
    });

    it('3. should display the description', () => {
        cy.get('article p').first().should('contain.text', 'A disposable or a fake email looks like a real email address. Unfortunately, it is a throwaway address that is used once or twice and never again. So there will be no one reading all the marketing emails you send to that address.');
    });

    it('4. Test to verify API info tab content and its active status', () => {
        // Check if the 'Details' tab pane is active
        cy.get('.tab-pane.space-1.active#details')
            .should('exist')
            .and('have.attr', 'role', 'tabpanel')
            .and('have.attr', 'aria-labelledby', 'details-tab')
            .and('be.visible');

        // Verify the content within the article section
        cy.get('#details article').within(() => {
            // Check for specific paragraphs of text
            cy.contains('A disposable or a fake email looks like a real email address.')
                .should('exist')
                .and('be.visible');

            cy.contains('you need to make sure that none of your users have are using a disposable email address')
                .should('exist')
                .and('be.visible');

            cy.contains('It is updated on a daily basis')
                .should('exist')
                .and('be.visible');

            cy.contains('It is free to try,')
                .should('exist')
                .and('be.visible');
        });
    });

});
