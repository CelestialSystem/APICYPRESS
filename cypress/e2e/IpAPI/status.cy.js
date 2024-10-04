import { IPAPI_BASE_URL } from '../../resources/data';

describe('IpApi Status page', () => {
    before(() => {
        cy.visit(IPAPI_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check "Status" hyperlink is there', () => {
        cy.componentVisiblityCheck('.status > a', 'Status');
    });

    it('3. Test to click on "Status" hyperlink', () => {
        cy.get('.status > a').click();
        cy.visit('https://status.ipapi.com/');
        cy.document().should((doc) => {
            expect(doc.readyState).to.equal('complete');
        });
        cy.get('body').then((body) => {
            if (body.find('.lcc-modal--alert').is(':visible')) {
                cy.get('.lcc-modal__actions > .js-lcc-accept').click();
            }
        });
    });

    it('4. Test to check the title "All systems operational" is present', () => {
        cy.componentVisiblityCheck('.psp-main-status-wrap', 'All systems operational');
    });

    it('5. Test to check the "Uptime Last 90 days" is present', () => {
        cy.componentVisiblityCheck('.uk-flex-between.uk-flex-middle > .uk-h3', 'Uptime\n                    Last 90 days\n                ');
    });

    it('6. Test to check the "Monitor row" is present', () => {
        cy.componentVisiblityCheck('.psp-monitor-row');
    });

    it('7. Test to check "Calender View" button is present', () => {
        cy.componentVisiblityCheck('.psp-calendar-link', 'Calendar view')
    });

    it('8. Test to click on "Calender View" button', () => {
        cy.get('.psp-calendar-link').click();
        cy.assertPathname('/781010288/calendar');
        cy.go('back')
    });

    it('9. Test to check subtitle "Overall Uptime" is present', () => {
        cy.get('body > :nth-child(2) > :nth-child(3)').scrollIntoView();
        cy.componentVisiblityCheck('body > :nth-child(2) > :nth-child(3)', 'Overall Uptime');
    });

    it('10. Test to check subtitle "Last 24 hours" is present', () => {
        cy.componentVisiblityCheck('.uk-first-column > .uk-text-muted', 'Last 24 hours');
    });

    it('11. Test to check subtitle "Last 7 days" is present', () => {
        cy.componentVisiblityCheck('#overall-uptime > :nth-child(2) > .uk-text-muted', 'Last 7 days');
    });

    it('12. Test to check subtitle "Last 30 days" is present', () => {
        cy.componentVisiblityCheck(':nth-child(3) > .uk-text-muted', 'Last 30 days');
    });

    it('13. Test to check subtitle "Last 90 days" is present', () => {
        cy.componentVisiblityCheck(':nth-child(4) > .uk-text-muted', 'Last 90 days');
    });

    it('14. Test to check subtitle "Status updates Last 30 days" is present', () => {
        cy.componentVisiblityCheck('.anouncement-header > .uk-h3', 'Status updates Last 30 days');
    });

    it('15. Test to check "Status update history" button is present', () => {
        cy.componentVisiblityCheck('.announcement-empty > .psp-history-link', 'Status update history');
    });

    it('16. Test to click on  "Status update history" button', () => {
        cy.get('.announcement-empty > .psp-history-link').click();
        cy.assertPathname('/history');
    });

    it('17. Test to check title "Status update history" is present', () => {
        cy.componentVisiblityCheck('.uk-flex-between > .uk-margin-remove', 'Status update history');
        cy.go('back')
    });
});
