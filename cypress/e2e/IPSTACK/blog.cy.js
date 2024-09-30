describe('Ipstack Blog Page', () => {
    before(() => {
        // Visit the contact form page before running any tests
        cy.visit('https://ipstack.com/');
    });

    it('1. Test naviagate to the "Blog" page', () => {
        cy.AcceptCookies();
        cy.get('.main-menu > :nth-child(4)').trigger('mouseover');
        cy.get(':nth-child(4) > .submenu > :nth-child(2) > a').click({force: true});
        cy.AcceptCookies();
    });

    it('2. Test to  show the text "Welcome to our IP Geolocation Blog!"', () => {
        cy.checkTextVisibility('Welcome to our IP Geolocation Blog!');
    });

    it('3. Test to check the "Search" bar is present', () => {
        cy.componentVisiblityCheck('#elementor-search-form-4d4442e')
    });

    it('4. Test to have the "Recent Posts" section is present', () => {
        cy.checkTextVisibility('Recent Posts');
    });

    it('5. Test to  have the "Top Post" section is present', () => {
        cy.checkTextVisibility('Top Post');
    });

    it('6. Test to have the show more button', () => {
        cy.contains('Show more').click();
    });

    it('7. Test to check for the blog "Geo Location API: The Best Way to Find Your Location"', () => {
        cy.checkTextVisibility('Geo Location API: The Best Way to Find Your Location');
    });

    it('8. Test to click on the footer link blog', () => {
        cy.get('.elementor-element-c2f551c > .elementor-widget-container > .elementor-icon-list-items > :nth-child(2) > a > .elementor-icon-list-text').click();
    });
});