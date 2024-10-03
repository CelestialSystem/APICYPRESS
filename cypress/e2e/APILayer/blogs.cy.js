describe('Blogs', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.visit('https://apilayer.com/');
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Click on "Blog" button from footer', () => {
        cy.get(':nth-child(3) > .nav > :nth-child(2) > .nav-link').scrollIntoView({ behaviour: 'smooth' });
        cy.get(':nth-child(3) > .nav > :nth-child(2) > .nav-link').click();
        cy.visit('https://blog.apilayer.com/');
        cy.AcceptCookies();
    });

    xit('Test to check "Carousel" is present', () => {
        cy.get('.saxon-largepostsslider-block-wrapper > .container > .row').should('be.visible')
    });

    it('3.Test to Click on "Api" button on the blog route should change to "Api"', () => {
        cy.get('.col-md-8').scrollIntoView();
        cy.AcceptCookies();
        cy.get('#post-11156 > .saxon-grid-post > .saxon-post-image-wrapper > .post-categories > [href="https://blog.apilayer.com/category/api/"]').click({force: true});
        cy.location('pathname').should('eq', '/category/api/');
    });

    it('4.Test to Click on "Api" button on the blog api page should open', () => {
        cy.get('.page-title').should('contains.text', "API")
    });


    it('5.Test to Click on "Automation" button on the blog route should change to automation', () => {
        cy.visit('https://blog.apilayer.com/');
        cy.wait(3000);
        cy.get('#post-11156 > .saxon-grid-post > .saxon-post-image-wrapper > .post-categories > [href="https://blog.apilayer.com/category/automation/"]').click();
        // cy.get('.saxon-post-image-wrapper > .post-categories > [href="https://blog.apilayer.com/category/automation/"]').click();
        cy.location('pathname').should('eq', '/category/automation/');
    });

    it('6.Test to Click on "Automation" button on the blog automation page should open', () => {
        cy.get('.page-title').should('contains.text', "Automation")
    });

    it('7. Test to check "Blogs" view should have sidebar', () => {
        cy.visit('https://blog.apilayer.com/');
        cy.get('#main-sidebar').should('be.visible')
    });

    it('8. Test to check if "Search Bar" is there', () => {
        cy.get('#s_p').should('be.visible')
    });

    it('9. Test to check if search is done by given text', () => {
        const text = 'this is a random text to test this condition'
        cy.get('#s_p').type(`${text}{enter}`, { force: true });
        cy.get('.page-title').should('contains.text', text)
    });

    it('10. Test to check on click of "Read more" button blog, it should open the particular blog which we have clicked', () => {
        cy.visit('https://blog.apilayer.com/');
        cy.get('#post-11156 > .saxon-grid-post > .saxon-post-details > .post-title > a')
            .invoke('text')
            .then((text) => {
                cy.get('#post-11156 > .saxon-grid-post > .post-excerpt > .post-readmore > .more-link').click();
                cy.get('.saxon-post-single > .saxon-post-details > .post-title').should('contains.text', text)
            });
    });

    it('11. Test to check on click of "Pagination" it should redirect to next page', () => {
        cy.visit('https://blog.apilayer.com/');
        cy.get('.wp-pagenavi').scrollIntoView();
        cy.get('[title="Page 2"]').click();
        cy.location('pathname').should('eq', '/page/2/');
    });
});

