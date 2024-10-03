describe('Test Cases for marketplace page', () => {
    before(() => {
        cy.visit('https://apilayer.com/');
    });

    it('1. Test to Accept Cookies if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click on "Marketplace" link', () => {
        cy.scrollTo('bottom');
        cy.location('pathname').should('eq', '/');
        cy.get('.row > :nth-child(2) > .nav > :nth-child(1) > .nav-link').click({force: true});
        cy.window().then((win) => {
            const initialScrollPosition = win.scrollY;
            cy.get('.col-lg-7 > .align-items-center > :nth-child(1) > .btn').click({force: true});
            cy.window().its('scrollY').should('be.greaterThan', initialScrollPosition);
        })
    });

    it('3. Test to container title should be "Featured APIs"', () => {
        cy.get(':nth-child(2) > .justify-content-left').should('contains.text', 'Featured APIs')
    });

    it('4. Test to container title should be "Bestseller APIs"', () => {
        cy.get('#bestSellers > .justify-content-left').should('contains.text', 'Bestseller APIs')
    });

    it('5. Test to Side Container should be there', () => {
        cy.get('.p-3').should('be.visible')
    });

    it('6. Test to Side Container should contains "Explore"', () => {
        cy.get('.p-3').should('contains.text', 'Explore')
    });

    it('7. Side Container should contains "Categories"', () => {
        cy.get('.p-3').should('contains.text', 'Categories')
    });

    it('8. Test to Side Container should contains "Filters"', () => {
        cy.get('.p-3').should('contains.text', 'Filters')
    });

    it('9. Test to On click of "See all" button of featured API', () => {
        cy.get(':nth-child(2) > .justify-content-left > .small').click({force: true});
        cy.location('pathname').should('eq', '/marketplace/explore/featured');
    });

    it('10. Test to check redirect to featured API page it should contain "Browse API Marketplace"', () => {
        cy.get('.col-lg-7 > .align-items-center > :nth-child(1) > .btn').should('contains.text', 'Browse API Marketplace')
    });

    it('11. Test to check redirect to featured API page should contain "Add your API to our MArketplace"', () => {
        cy.get('.p-0 > .btn').should('contains.text', 'Add your API to our Marketplace')
    });

    it('12. Test to Check if container has 6 apis', () => {
        cy.get('#apiList > .row')
            .children() // Get all the child elements
            .should('have.length', 6);
    });

    it('13. Test to On click of "See all" button of Bestseller APIs', () => {
        cy.scrollTo('bottom');
        cy.get('.row > :nth-child(2) > .nav > :nth-child(1) > .nav-link').click({force: true});
        cy.get('#bestSellers > .justify-content-left > .small').click({force: true});
        cy.location('pathname').should('eq', '/marketplace/explore/latest');
    });

    it('14. Test to On click of "See all" button , Browse API marketplace button should be there', () => {
        cy.get('[style="max-width:809px"] > .col-md-5 > .btn').should('contains.text', '\n\nBrowse API Marketplace\n')
    });

    it('15. Test to On click "Browse API marketplace" button route should change', () => {
        cy.get('[style="max-width:809px"] > .col-md-5 > .btn').click({force: true});
        cy.location('pathname').should('eq', '/marketplace/explore/latest');
    });
})
