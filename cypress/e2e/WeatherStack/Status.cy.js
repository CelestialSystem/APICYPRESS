describe('Status Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.navigateUrlwithCookies('https://status.weatherstack.com/');
        cy.wait(2000);
    });

    it('0. Test to Accept Cookies if not already accepted', () => {
        cy.get('body').then((body) => {
            if (body.find('.lcc-modal--alert').is(':visible')) {
                cy.get('.lcc-modal__actions > .js-lcc-accept').click();
            }
        });
    });

    it('1. Test to check status hyperlink is there', () => {
        cy.checkTextVisibility('Service status')
    });

    it('2. Test to check the title', () => {
        cy.checkTextVisibility('All systems operational');
    });

    it('3. Test to check the sub title', () => {
        cy.componentVisiblityCheck('.uk-flex-between.uk-flex-middle > .uk-h3', 'Uptime\n                    Last 90 days\n                ');
    });

    it('4. Test to click on the api stack.com link', () => {
        cy.get('.psp-monitor-name').click();
        cy.componentVisiblityCheck('.psp-main-status', 'api.weatherstack.com is operational');
    });

    it('5. Test to check the text Response Time Last 90 days', () => {
        cy.componentVisiblityCheck('.rt-section > .uk-h3', 'Response Time\n            Last\n                                    90\n                                days\n            \n        ');
    });

    it('6. Test to check the text Recent Event', () => {
        cy.checkTextVisibility('Recent events');
        cy.get('.logo-wrapper > .font-14').click();
    });

    it('7. Test to check the monitor row', () => {
        cy.componentVisiblityCheck('.psp-monitor-row');
    });

    it('8. Test to check calender button is there', () => {
        cy.componentVisiblityCheck('.psp-calendar-link', 'Calendar view')
    });

    it('9. Test to click on calender', () => {
        cy.get('.psp-calendar-link').click();
        cy.wait(2000);
        cy.componentVisiblityCheck('.monitor-name', 'api.weatherstack.com history logs');
        cy.go('back');
    });

    it('10. Test to check subtitle "Overall Uptime"', () => {
        cy.get('body > :nth-child(2) > :nth-child(3)').scrollIntoView();
        cy.componentVisiblityCheck('body > :nth-child(2) > :nth-child(3)', 'Overall Uptime');
    });

    it('11. Test to check subtitle "Last 24 hours"', () => {
        cy.componentVisiblityCheck('.uk-first-column > .uk-text-muted', 'Last 24 hours');
    });

    it('12. Test to check subtitle "Last 7 days"', () => {
        cy.componentVisiblityCheck('#overall-uptime > :nth-child(2) > .uk-text-muted', 'Last 7 days');
    });

    it('13. Test to check subtitle "Last 30 days"', () => {
        cy.componentVisiblityCheck(':nth-child(3) > .uk-text-muted', 'Last 30 days');
    });

    it('14. Test to check subtitle "Last 90 days"', () => {
        cy.componentVisiblityCheck(':nth-child(4) > .uk-text-muted', 'Last 90 days');
    });

    it('13. Test to check subtitle "Status updates Last 30 days"', () => {
        cy.componentVisiblityCheck('.anouncement-header > .uk-h3', 'Status updates Last 30 days');
    });

    it('14. Test to check "Status update history" button', () => {
        cy.componentVisiblityCheck('.announcement-empty > .psp-history-link', 'Status update history');
    });

    it('15. Test to click on  "Status update history" button', () => {
        cy.get('.announcement-empty > .psp-history-link').click();
        cy.assertPathname('/history');
    });

    it('16. Test to check title of history page', () => {
        cy.componentVisiblityCheck('.uk-flex-between > .uk-margin-remove', 'Status update history');
        cy.go('back')
    });
});
