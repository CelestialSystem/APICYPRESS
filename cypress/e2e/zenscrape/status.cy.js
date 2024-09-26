describe('Zenscrape status page', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.navigateUrlwithCookies('https://zenscrape.freshstatus.io/');
        cy.wait(2000);
    });

    it('1. Test to check for the all service operational text is there', () => {
        cy.componentVisiblityCheck('.statusbar-text', 'All Services Operational');
    });

    it('2. Test to check for zenscarpe webscrape title text present', () => {
        cy.componentVisiblityCheck('.page-description > p', 'Zenscrape | Web Scraping API');
    });

    it('3. Test to check the "Operational" option text' , () => {
        cy.componentVisiblityCheck(':nth-child(5) > .ComponentStatusListContainer > .operational', 'Operational');
    });

    it('4. Test to check "Degraded Performance" option text', () => {
        cy.componentVisiblityCheck(':nth-child(5) > .ComponentStatusListContainer > .degraded', 'Degraded Performance');
    });

    it('5. Test to check "Partial Outage" option text', () => {
        cy.componentVisiblityCheck(':nth-child(5) > .ComponentStatusListContainer > .partial', 'Partial Outage');
    });

    it('6. Test to check the "Major Outage" option text', () => {
        cy.componentVisiblityCheck(':nth-child(5) > .ComponentStatusListContainer > .major', 'Major Outage');
    });

    it('7. Test to check the "Maintaince" option text', () => {
        cy.componentVisiblityCheck(':nth-child(5) > .ComponentStatusListContainer > .maintenance', ' Maintenance');
    });

    it('8. Test to check the "Subscribe" button present', () => {
        cy.componentVisiblityCheck('.subscribe');
    });

    it('9. Test to check by clicing the "Subscribe" button', () => {
        cy.get('.subscribe').click();
    });

    it('10. Test to check the email text,caption, email input field, and the subscribe button present', () => {
        cy.wait(4000);
        cy.get('.popover.open').should('have.css', 'opacity', '1'); 
        cy.componentVisiblityCheck('.tab > .label');
        cy.componentVisiblityCheck('.styles__Message-sc-1ej8vf0-2');
        cy.componentVisiblityCheck('.Input__StyledInput-sc-44hm6r-0');
        cy.componentVisiblityCheck('.Button__StyledButton-sc-69l6ml-0')
    });

    xit('11. Test to enter the email field and click on the subscribe button', () => {
        cy.get('.Input__StyledInput-sc-44hm6r-0').type('Test2@gmail.com');
        cy.get('.Button__StyledButton-sc-69l6ml-0').click();
    });

    xit('12. Test to enter the email and click on the subscribe button', () => {
        cy.componentVisiblityCheck('.title', 'One last step')
        cy.get('.Subscription__Redirection-sc-1lmxftv-4 > a').click();
    });

    it('13. Test to check the login button present', () => {
        cy.componentVisiblityCheck('.btn-group > .Link--primary')
    });

    it('14. Test to check cliking on "Login" button to show up the drop down list ', () => {
        cy.get('.btn-group > .Link--primary').click();
        cy.componentVisiblityCheck('[href="https://zenscrape.freshstatus.io/admin"]');
        cy.componentVisiblityCheck('[href="/login"]');
    });

    it('14. Test to check the 100% last day button is present and click on that link', () => {
        cy.componentVisiblityCheck('.history').click();
    });

    it('15. Test to check the "Uptime History" text', () => {
        cy.componentVisiblityCheck('h2', 'Uptime History');
    });

    it('16. Test to check month picker present', () => {
        cy.componentVisiblityCheck('.id__MonthPicker-sc-1fem2nn-2');
    });

    it('17. Test to check month picker is present', () => {
        cy.componentVisiblityCheck('.id__DropdownButton-sc-1fem2nn-7');
    });

    it('18. Test to click on the back to status button', () => {
        cy.componentVisiblityCheck('.id__Breadcrumps-sc-1fem2nn-0').click();
    });

    it('19. Test to check the active tab button present', () => {
        cy.componentVisiblityCheck('.active', 'Incident History');
    });

    it('20. Test to check the Upcoming Maintaince tab button present', () => {
        cy.componentVisiblityCheck('.tab', 'Upcoming Maintenance');
    });

    it('21. Test to check the dropdown for days present', () => {
        cy.componentVisiblityCheck('.dropdown_selected');
    });

    it('22. Test to check the "See Incident History" button', () => {
        cy.componentVisiblityCheck('.pages__HomepageContent-sc-1g5814v-0 > .Link--primary', 'See Incident History');
    });

    it('23. Test to check the "See Inicident History" button click', () => {
        cy.get('.pages__HomepageContent-sc-1g5814v-0 > .Link--primary').click();
    });

    it('24. Test to check "Incidents History" text is present', () => {
        cy.componentVisiblityCheck('.filter-panel > h2', 'Incidents History')
    });

    it('25. Test to check year drop down is present', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .btn-group > .dropdown_selected')
    });

    it('26. Test to check sort drop down is present', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .btn-group > .dropdown_selected')
    });

    it('27. Test to check filter drop down is present', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .btn-group > .dropdown_selected')
    });

    it('28. Test to check click on the back to status page', () => {
        cy.get('.IncidentHistory__Breadcrumps-sc-1shesrj-0').click();
    });

    it('29. Test to check home icon present in the footer', () => {
        cy.componentVisiblityCheck('.www');
    });

    it('30. Test to check time zone present in the footer', () => {
        cy.componentVisiblityCheck('.tz__control')
    });
});
