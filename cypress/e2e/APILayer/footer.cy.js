describe('Account Section', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.visit('https://apilayer.com/');
    });

    it('1. Test to Accept Cookies if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click on "Sign In"', () => {
        cy.scrollTo('bottom');
        cy.wait(2000);
        cy.get(':nth-child(4) > .nav > :nth-child(1) > .nav-link').click();
        cy.get('.sidebar-content').should('be.visible')
    })

    it('3. Test to on click outside, "Login Sidebar" should close', () => {
        cy.get('body').click(0, 0);
        cy.get('.sidebar-content').should('not.be.visible')
    })

    it('4. Test to click on "Sign In"', () => {
        cy.wait(1000);
        cy.scrollTo('bottom');
        cy.get(':nth-child(4) > .nav > :nth-child(2) > .nav-link').click();
        cy.location('pathname').should('eq', '/recover-password');
        cy.get('.h2').should('contains.text', 'Forgot your password?');
    })

    it('5. Test to on click outside, "Login Sidebar" should close', () => {
        cy.get('body').click(0, 0);
        cy.get('.sidebar-content').should('not.be.visible')
    })

    it('6. Test to click on "Sign In"', () => {
        cy.scrollTo('bottom');
        cy.wait(2000);
        cy.get(':nth-child(4) > .nav > :nth-child(3) > .nav-link').click();
    })

    it('7. Test to on click outside, "Login sidebar" should close', () => {
        cy.get('body').click(0, 0);
        cy.get('.sidebar-content').should('not.be.visible')
    })
});