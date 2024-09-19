describe('Status Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
      cy.visit('https://mediastack.com/');
      cy.wait(2000); // Wait for the page to load
    });
  
    it('0. Test to Accept Cookies if not already accepted', () => {
      // Check if the "Accept Cookies" button is visible or exists
      cy.AcceptCookies();
    });
  
    it('1. Test to check status hyperlink is there', () => {
        cy.get('.status > a').should('be.visible', 'contains.text', 'Status');
    });

    it('2. Test to click on status hyperlink', () => {
        cy.get('.status > a').click();
        cy.visit('https://status.mediastack.com/');
        cy.wait(2000);
        cy.get('body').then((body) => {
            if (body.find('.lcc-modal--alert').is(':visible')) {
                cy.get('.lcc-modal__actions > .js-lcc-accept').click();
              }
          });
    });

    it('3. Test to check the title', () => {
        cy.componentVisiblityCheck('.psp-status > .uk-flex-between', 'All systems operational');
    });

    it('4. Test to check the sub title', () => {
        cy.componentVisiblityCheck('.uk-flex-between.uk-flex-middle > .uk-h3', 'Uptime\n                    Last 90 days\n                ');
    });

    it('5. Test to check the monitor row', () => {
        cy.componentVisiblityCheck('.psp-monitor-row');
    });

    it('6. Test to check calender button is tere', () => {
        cy.componentVisiblityCheck('.psp-calendar-link', 'Calendar view')
    });

    it('7. Test to click on calender', () => {
        cy.get('.psp-calendar-link').click();
        cy.assertPathname('/785735369/calendar');
        cy.go('back')
    });

    it('8. Test to check subtitle "Overall Uptime"', () => {
        cy.get('body > :nth-child(2) > :nth-child(3)').scrollIntoView();
        cy.componentVisiblityCheck('body > :nth-child(2) > :nth-child(3)', 'Overall Uptime');
    });

    it('9. Test to check subtitle "Last 24 hours"', () => {
        // cy.get('body > :nth-child(2) > :nth-child(3)').scrollIntoView();
        cy.componentVisiblityCheck('.uk-first-column > .uk-text-muted', 'Last 24 hours');
    });

    it('10. Test to check subtitle "Last 7 days"', () => {
        cy.componentVisiblityCheck('#overall-uptime > :nth-child(2) > .uk-text-muted', 'Last 7 days');
    });

    it('11. Test to check subtitle "Last 30 days"', () => {
        cy.componentVisiblityCheck(':nth-child(3) > .uk-text-muted', 'Last 30 days');
    });

    it('12. Test to check subtitle "Last 90 days"', () => {
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
