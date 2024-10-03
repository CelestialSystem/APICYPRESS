describe('Ipstack Status page.', () => {
    before(() => {
        cy.visit('https://status.ipstack.com/');
    });

    it('1.Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2.Test to check that the page title "Service status" is present', () => {
        cy.document().should((doc) => {
            expect(doc.readyState).to.equal('complete');
        });
        cy.checkTextVisibility('Service status');
    });

    it('3. Test to check that the status "All systems operational" is present', () => {
        cy.checkTextVisibility('All systems operational');
    });

    it('4. Test to check the "Uptime" graph text is present', () => {
        cy.componentVisiblityCheck('.uk-flex-between.uk-flex-middle > .uk-h3', 'Uptime');
    });

    it('5. Test to check the "Calender View" button', () => {
        cy.componentVisiblityCheck('.psp-calendar-link')
    });

    it('6. Test to check the "api.ipstack.com" text is present', () => {
        cy.componentVisiblityCheck('.psp-monitor-name','api.ipstack.com');
    });

    it('7. Test to check the overall uptime for the last 24 hours is 100.000%', () => {
        cy.componentVisiblityCheck('.uk-first-column > .uk-h4', '100.000%');
    });

    it('8. Test to check the overall uptime for the last 7 days is 100.000%', () => {
        cy.componentVisiblityCheck(':nth-child(2) > .uk-h4', '100.000%');
    });

    it('9. Test to check the overall uptime for the last 30 days is 100.000%', () => {
        cy.componentVisiblityCheck(':nth-child(3) > .uk-h4', '100.000%');
    });

    it('10. Test to check the overall uptime for the last 90 days is 99.995%', () => {
        cy.componentVisiblityCheck(':nth-child(4) > .uk-h4', '99.995%');
    });

    it('11. Test to check the "Status updates" section is present', () => {
        cy.componentVisiblityCheck('.anouncement-header > .uk-h3', 'Status updates');
    });

    it('12. Test to check the "Status update history" link is present and clickable', () => {
        cy.get('.announcement-empty > .psp-history-link').click({force: true});
        cy.document().should((doc) => {
            expect(doc.readyState).to.equal('complete');
        });
        cy.componentVisiblityCheck('.uk-flex-between > .uk-margin-remove', 'Status update history');
        cy.go('back');
    });

    it('13. Test to check the "Full screen mode" button is present', () => {
        cy.document().should((doc) => {
            expect(doc.readyState).to.equal('complete');
        });
        cy.get('.enter-fullscreen').scrollIntoView();
        cy.componentVisiblityCheck('.enter-fullscreen');
    });

    it('14. Test to check the "Alert Sound off" button is present', () => {
        cy.componentVisiblityCheck('.toggle-notif');
    });

    it('15. Test to check the "Terms of Service" link is present and clickable', () => {
        cy.componentVisiblityCheck('[href="https://uptimerobot.com/terms"]');
    });

    it('16. Test to check the "Calender View" button will open the calender ', () => {
        cy.get('.psp-calendar-link').click({force: true});
        cy.document().should((doc) => {
            expect(doc.readyState).to.equal('complete');
        });
        cy.visit('https://status.ipstack.com/780159446/calendar');
    });

    it('17. Test to check "api.ipstack.com history logs" text is present', () => {
        cy.document().should((doc) => {
            expect(doc.readyState).to.equal('complete');
        });
        cy.componentVisiblityCheck('.monitor-name', 'api.ipstack.com history logs');
    });

    it('18. Test to check the choose container is present', () => {
        cy.componentVisiblityCheck('#select2-calendar-monitor-chooser-container', 'api.ipstack.com');
    });

    it('19. Test to check for the selection dropdown clickable ', () => {
        cy.get('.select2-selection__arrow').click({force: true});
    });

    it('20.Test to check the navigation calender is present', () => {
        cy.componentVisiblityCheck('.psp-calendar-nav');
    });

    it('21. Test to check the previous calender arrow button should be clickable', () => {
        cy.componentVisiblityCheck('.calendar-prev > .icon').click({force: true});
    });

    it('22. Test to check the first date column is present ', () => {
        cy.componentVisiblityCheck('.uk-first-column > table');
    });

    it('23. Test to check the second date column is present ', () => {
        cy.componentVisiblityCheck(':nth-child(2) > table');
    });

    it('24. Test to check the third date column is present ', () => {
        cy.componentVisiblityCheck(':nth-child(1) > table');
        cy.go('back');
    });
});