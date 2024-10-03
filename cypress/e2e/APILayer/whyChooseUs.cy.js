describe('Test Cases for Why Choose us', () => {
    before(() => {
        cy.visit('https://apilayer.com/');
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2 . Test to click on "Why Choose Button" link', () => {
        cy.scrollTo('bottom');
        cy.get('.row > :nth-child(2) > .nav > :nth-child(3) > .nav-link').click();
        cy.location('pathname').should('eq', '/why-choose-apilayer');
    });

    it('3 . Test to check title should be "Why choose APILayer?" ', () => {
        cy.get('h1').should('contains.text', 'Why choose APILayer?')
    });

    it('4 . Test to check title should be "Why not take a look at our API catalog ?" ', () => {
        cy.get('h2').should('contains.text', 'Why not take a look at our API catalog ?')
    });

    it('5 . Test to check title should be "Curated" ', () => {
        cy.get(':nth-child(1) > .pr-lg-4 > .h2').should('contains.text', 'Curated')
    });

    it('6 . Test to check title should be "Start Free" ', () => {
        cy.get(':nth-child(2) > .pr-lg-4 > .h2').should('contains.text', 'Start Free')
    });

    it('7 . Test to check title should be "Strict Uptime" ', () => {
        cy.get(':nth-child(3) > .pr-lg-4 > .h2').should('contains.text', 'Strict Uptime')
    });

    it('8 . Test to click on "Why Choose Us" Button link from footer', () => {
        cy.get('.d-block > .btn').click();
        cy.location('pathname').should('eq', '/');
    });

})