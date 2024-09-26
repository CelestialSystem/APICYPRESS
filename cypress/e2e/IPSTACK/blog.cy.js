describe('Blog Page', () => {
    before(() => {
        // Visit the contact form page before running any tests
        cy.visit('https://ipstack.com/');
    });

    it('1. Test naviagate to the Blog page', () => {
        cy.AcceptCookies();
        cy.get('.main-menu > :nth-child(4)').trigger('mouseover');
        cy.get(':nth-child(4) > .submenu > :nth-child(2) > a').click({force: true});
        cy.AcceptCookies();
    });

    it('2. Test to  show the Blog page', () => {
        cy.get('.article-heading').should('contain.text', 'Welcome to our IP Geolocation Blog!');
    });

    it('3. Test to check the text available or not', () => {
        cy.get('[style="text-align: center; font-size: 20px; margin-bottom: 0px; color: black;"]')
    });

    it('4. Test to have the recent post', () => {
        cy.get(':nth-child(1) > .blog-listing > li > .blog-sidebar-content-post').should('contain.text', 'Recent Post');
    });

    it('5. Test to  have the recent post', () => {
        cy.get(':nth-child(2) > .blog-listing > li > .blog-sidebar-content-post').should('contain.text', 'Top Post');
    });

    it('6. Test to have the show more button', () => {
        cy.get('#show_more').click();
    });

    it('7. Test to check for the blog by its title', () => {
        cy.contains('.post_title', 'Exploring the Differences Between IP Geolocation and GPS-Based Location Services').should('be.visible');
    });

    it('8. Test to click on the footer link blog', () => {
        cy.get('.custom-container > :nth-child(3) > :nth-child(3) > a').click();
    });
});