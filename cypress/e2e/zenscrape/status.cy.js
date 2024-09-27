describe('Zenscrape status page', () => {
    before(() => {
        cy.navigateUrlwithCookies('https://zenscrape.freshstatus.io/');
    });

    it('1. Test to check for the "All Services Operational" text present', () => {
        cy.componentVisiblityCheck('.statusbar-text', 'All Services Operational');
    });

    it('2. Test to check for "Zenscrape | Web Scraping API" title text present', () => {
        cy.componentVisiblityCheck('.page-description > p', 'Zenscrape | Web Scraping API');
    });

    it('3. Test to check the "Operational" option text present' , () => {
        cy.componentVisiblityCheck(':nth-child(5) > .ComponentStatusListContainer > .operational', 'Operational');
    });

    it('4. Test to check "Degraded Performance" option text present', () => {
        cy.componentVisiblityCheck(':nth-child(5) > .ComponentStatusListContainer > .degraded', 'Degraded Performance');
    });

    it('5. Test to check "Partial Outage" option text present', () => {
        cy.componentVisiblityCheck(':nth-child(5) > .ComponentStatusListContainer > .partial', 'Partial Outage');
    });

    it('6. Test to check the "Major Outage" option text present', () => {
        cy.componentVisiblityCheck(':nth-child(5) > .ComponentStatusListContainer > .major', 'Major Outage');
    });

    it('7. Test to check the "Maintaince" option text present', () => {
        cy.componentVisiblityCheck(':nth-child(5) > .ComponentStatusListContainer > .maintenance', ' Maintenance');
    });

    it('8. Test to check the "Subscribe" button present', () => {
        cy.componentVisiblityCheck('.subscribe');
    });

    it('9. Test to check by clicing the "Subscribe" button', () => {
        cy.get('.subscribe').click();
    });

    it('10. Test to check the "Email" text, "Get notified when zenscrape creates, updates or resolves an incident" caption, "Email" input field and the "Subscribe" button present', () => {
        //Added the doc.readyState to load document properly.
        cy.document().should((doc) => {
            expect(doc.readyState).to.equal('complete');
        });
        cy.get('.popover.open').should('have.css', 'opacity', '1'); 
        cy.componentVisiblityCheck('.tab > .label', 'Email');
        cy.componentVisiblityCheck('.styles__Message-sc-1ej8vf0-2', 'Get notified when zenscrape creates, updates or resolves an incident');
        cy.componentVisiblityCheck('.Input__StyledInput-sc-44hm6r-0');
        cy.componentVisiblityCheck('.Button__StyledButton-sc-69l6ml-0', 'Subscribe');
    });

    xit('11. Test to enter the "Email" field and click on the "Subscribe" button', () => {
        cy.get('.Input__StyledInput-sc-44hm6r-0').type('Test2@gmail.com');
        cy.get('.Button__StyledButton-sc-69l6ml-0').click();
    });

    xit('12. Test to check the text "One last step" and redirect to the "Status" page', () => {
        cy.componentVisiblityCheck('.title', 'One last step')
        cy.get('.Subscription__Redirection-sc-1lmxftv-4 > a').click();
    });

    it('13. Test to check the "Login" button present', () => {
        cy.componentVisiblityCheck('.btn-group > .Link--primary')
    });

    it('14. Test to check cliking on "Login" button to show up the drop down list ', () => {
        cy.get('.btn-group > .Link--primary').click();
        cy.componentVisiblityCheck('[href="https://zenscrape.freshstatus.io/admin"]');
        cy.componentVisiblityCheck('[href="/login"]');
    });

    it('15. Test to check the "100% last day" button is present and click on that link', () => {
        cy.componentVisiblityCheck('.history').click();
    });

    it('16. Test to check the "Uptime History" text present', () => {
        cy.componentVisiblityCheck('h2', 'Uptime History');
    });

    it('17. Test to check "Month" picker present', () => {
        cy.componentVisiblityCheck('.id__MonthPicker-sc-1fem2nn-2');
    });

    it('18. Test to check dropdown for "API Endpoints" is present', () => {
        cy.componentVisiblityCheck('.id__DropdownButton-sc-1fem2nn-7');
    });

    it('19. Test to click on the "Back to Status" button', () => {
        cy.componentVisiblityCheck('.id__Breadcrumps-sc-1fem2nn-0').click();
    });

    it('20. Test to check the "Incident History" tab button should be active', () => {
        cy.componentVisiblityCheck('.active', 'Incident History');
    });

    it('21. Test to check the "Upcoming Maintaince" tab button should present', () => {
        cy.componentVisiblityCheck('.tab', 'Upcoming Maintenance');
    });

    it('22. Test to check the dropdown for "Days" present', () => {
        cy.componentVisiblityCheck('.dropdown_selected');
    });

    it('23. Test to check the "See Incident History" button present', () => {
        cy.componentVisiblityCheck('.pages__HomepageContent-sc-1g5814v-0 > .Link--primary', 'See Incident History');
    });

    it('24. Test to check the "See Inicident History" button click', () => {
        cy.get('.pages__HomepageContent-sc-1g5814v-0 > .Link--primary').click();
    });

    it('25. Test to check "Incidents History" text is present', () => {
        cy.componentVisiblityCheck('.filter-panel > h2', 'Incidents History')
    });

    it('26. Test to check "Year" drop down is present', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .btn-group > .dropdown_selected')
    });

    it('27. Test to check "Sort" drop down is present', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .btn-group > .dropdown_selected')
    });

    it('28. Test to check "Filter" drop down is present', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .btn-group > .dropdown_selected')
    });

    it('29. Test to check click on the "Back to Status page"', () => {
        cy.get('.IncidentHistory__Breadcrumps-sc-1shesrj-0').click();
    });

    it('30. Test to check "Home" icon present in the footer', () => {
        cy.componentVisiblityCheck('.www');
    });

    it('31. Test to check "Timezone" dropdown present in the footer', () => {
        cy.componentVisiblityCheck('.tz__input-container');
    });
});
