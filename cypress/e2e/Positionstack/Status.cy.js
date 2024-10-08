import { POSITIONSTACK_BASE_URL } from '../../resources/data';

describe('Positionstack Status page', () => {
    before(() => {
        cy.navigateUrlwithCookies(POSITIONSTACK_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.get('body').then((body) => {
            if (body.find('.lcc-modal--alert').is(':visible')) {
                cy.get('.lcc-modal__actions > .js-lcc-accept').click();
            }
        });
    });

    it('2. Test to click on "Status" hyperlink', () => {
        cy.get('.status > a').click();
        cy.visit('https://status.positionstack.com/');
        cy.document().should((doc) => {
            expect(doc.readyState).to.equal('complete');
        });
        cy.get('body').then((body) => {
            if (body.find('.lcc-modal--alert').is(':visible')) {
                cy.get('.lcc-modal__actions > .js-lcc-accept').click();
            }
        });
    });

    it('3. Test to check text "Service status"', () => {
        cy.componentVisiblityCheck('.uk-h4', 'Service status')
    });

    it('4. Test to check the title "All systems operational" is present', () => {
        cy.componentVisiblityCheck('.psp-main-status', 'All systems operational');
    });

    it('5. Test to check the text "Uptime Last 90 days" is present', () => {
        cy.componentVisiblityCheck('.uk-flex-between.uk-flex-middle > .uk-h3', 'Uptime\n                    Last 90 days\n                ');
    });

    it('6. Test to click on the "api.positionstack.com is operational" link', () => {
        cy.get('.psp-monitor-name').click();
        cy.componentVisiblityCheck('.psp-main-status', 'api.positionstack.com is operational');
    });

    it('7. Test to check the text "Response Time Last 90 days" is present', () => {
        cy.componentVisiblityCheck('.rt-section > .uk-h3', 'Response Time\n            Last\n                                    90\n                                days\n            \n        ');
    });

    it('8. Test to check the text "Recent events"', () => {
        cy.componentVisiblityCheck('#logs > .uk-h3', 'Recent events');
        cy.get('.logo-wrapper > .font-14').click();
    });

    it('9. Test to check the "Monitor row" is present', () => {
        cy.componentVisiblityCheck('.psp-monitor-row');
    });

    it('10. Test to check "Calendar view" button is present', () => {
        cy.componentVisiblityCheck('.psp-calendar-link', 'Calendar view')
    });

    it('11. Test to click on "Calendar view" button', () => {
        cy.get('.psp-calendar-link').click();
        cy.componentVisiblityCheck('.monitor-name', 'api.positionstack.com history logs');
        cy.go('back');
    });

    it('12. Test to check subtitle "Overall Uptime"', () => {
        cy.get('body > :nth-child(2) > :nth-child(3)').scrollIntoView();
        cy.componentVisiblityCheck('body > :nth-child(2) > :nth-child(3)', 'Overall Uptime');
    });

    it('13. Test to check subtitle "Last 24 hours"', () => {
        cy.componentVisiblityCheck('.uk-first-column > .uk-text-muted', 'Last 24 hours');
    });

    it('14. Test to check subtitle "Last 7 days"', () => {
        cy.componentVisiblityCheck('#overall-uptime > :nth-child(2) > .uk-text-muted', 'Last 7 days');
    });

    it('15. Test to check subtitle "Last 30 days"', () => {
        cy.componentVisiblityCheck(':nth-child(3) > .uk-text-muted', 'Last 30 days');
    });

    it('16. Test to check subtitle "Last 90 days"', () => {
        cy.componentVisiblityCheck(':nth-child(4) > .uk-text-muted', 'Last 90 days');
    });

    it('17. Test to check subtitle "Status updates Last 30 days"', () => {
        cy.componentVisiblityCheck('.anouncement-header > .uk-h3', 'Status updates Last 30 days');
    });

    it('18. Test to check "Status update history" button', () => {
        cy.componentVisiblityCheck('.announcement-empty > .psp-history-link', 'Status update history');
    });

    it('19. Test to click on  "Status update history" button', () => {
        cy.get('.announcement-empty > .psp-history-link').click();
        cy.assertPathname('/history');
    });

    it('20. Test to check text "Status update history"', () => {
        cy.componentVisiblityCheck('.uk-flex-between > .uk-margin-remove', 'Status update history');
        cy.go('back')
    });
});
