import { APILAYER_BASE_URL } from '../../resources/data';

describe('Login Page', () => {
    before(() => {
        cy.visit(APILAYER_BASE_URL);
    });

    it('1. Test to Accept Cookies if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to "Login"', () => {
        cy.get('#signInButton').click({ force: true });
        cy.get('.sidebar-content').should('be.visible');
    })

    it('3. Test to check for text "Sign in to APILayer"', () => {
        cy.get('.lead').should('contains.text', 'Sign in to APILayer');
    })

    it('4. Test to check for text "Start by choosing an account or email you use."', () => {
        cy.get('.mb-4 > small').should('contains.text', 'Start by choosing an account or email you use.');
    })

    it('5. Test to check for "Email" input field', () => {
        cy.get(':nth-child(4) > .input-label').should('contains.text', 'Email address');
    })

    it('6. Test to check for "Password" input field', () => {
        cy.get('.input-label > .d-flex').should('contains.text', 'Password');
    })

    it('7. Test to check if "Sign In" button is there', () => {
        cy.get('.align-items-center.mb-3 > .btn')
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal('Sign In');
            });
    });

    it('8. Test to check if "Sign Up" button is there', () => {
        cy.get('.text-center.mb-2 > .mb-3').should('be.visible');
        cy.get('.text-center.mb-2 > .mb-3').should('contains.text', 'Signup');
    })

    it('9. Test to check if "Privacy" button is there', () => {
        cy.get('.sidebar-footer > .nav > :nth-child(1) > .nav-link').should('be.visible');
        cy.get('.sidebar-footer > .nav > :nth-child(1) > .nav-link').should('contains.text', 'Privacy');
    })

    it('10. Test to check if "Terms" button is there', () => {
        cy.get('.sidebar-footer > .nav > :nth-child(2) > .nav-link').should('be.visible');
        cy.get('.sidebar-footer > .nav > :nth-child(2) > .nav-link').should('contains.text', 'Terms');
    })

    it('11. Test to Enter correct "Email" and wrong "Password"', () => {
        cy.get('#signinEmail').clear({ force: true }).type('TestUserApiLayer@gmail.com');
        cy.get('#signinPassword').clear({ force: true }).type('1234', { force: true });
        cy.get('.align-items-center.mb-3 > .btn').click({ force: true });
        cy.get('.js-validate > :nth-child(4) > .invalid-feedback').should('be.visible');
    })

    it('12. Test to Enter wrong "Email" and wrong "Password"', () => {
        cy.get('#signInButton').click({ force: true });
        cy.get('#signinEmail').clear({ force: true }).type('Test@1234');
        cy.get('#signinPassword').clear({ force: true }).type('1234');
        cy.get('.align-items-center.mb-3 > .btn').click();
        cy.get(':nth-child(3) > .invalid-feedback').should('contain.text', 'Invalid email address.');
    })

    it('13. Test to Enter wrong "Email" and correct "Password"', () => {
        cy.get('#signInButton').click({ force: true });
        cy.get('#signinEmail').clear({ force: true }).type('Test@1234');
        cy.get('#signinPassword').clear({ force: true }).type('test@123');
        cy.get('.align-items-center.mb-3 > .btn').click();
        cy.get(':nth-child(3) > .invalid-feedback').should('contain.text', 'Invalid email address.');
    })

    it('14. Test to Click on "Sign In" button without entering "Email" and "Password"', () => {
        cy.get('.js-hs-unfold-invoker').click({ multiple: true, force: true });
        cy.wait(1000);
        cy.get('#sidebarContent')
            .invoke('removeClass', 'hs-unfold-hidden')
            .should('be.visible');

        cy.get('.align-items-center.mb-3 > .btn').click({ force: true });
        cy.get('#signinEmail-error').should('be.visible').and('contain.text', 'Please enter a valid email address.');
        cy.get('#signinPassword-error').should('be.visible').and('contain.text', 'Your password is invalid. Please try again.');
    });

    it('15. Test to Enter "Email" and click "Sign In"', () => {
        cy.get('#signInButton').click({ force: true });
        cy.get('#sidebarContent').should('be.visible');
        cy.get('#signinEmail').type('Test@1234', { force: true });
        cy.get('.align-items-center.mb-3 > .btn').click({ force: true });
        cy.get('#signinPassword-error').should('be.visible');
    });

    it('16. Test to Enter "Password" and click "Sign In"', () => {
        cy.get('#signinEmail').clear({ force: true });
        cy.get('#signinPassword').type('test@123');
        cy.get('.align-items-center.mb-3 > .btn').click({ force: true });
        cy.get('#signinEmail-error').should('be.visible');
    })

    it('17. Test to Click on "Sign Up" button', () => {
        cy.get('.text-center.mb-2 > .mb-3 > .font-weight-bold').click({ force: true });
        cy.location('pathname').should('eq', '/signup');
        cy.get('.h2').should('contains.text', 'Welcome to APILayer');
    })

    it('18. Test to "Forgot Password" should be visible', () => {
        cy.get('#signInButton').click({ force: true });
        cy.get('.link-underline').should('be.visible');
    })

    it('19. Test to on click of "Forgot Password" it should redirect to "Forgot Password" page', () => {
        cy.get('.link-underline').click({ force: true });
        cy.location('pathname').should('eq', '/recover-password');
        cy.get('.h2').should('contains.text', 'Forgot your password?');
    })

    it('20. Test to on click of "Close Icon" login side bar should close', () => {
        cy.get('#signInButton').click({ force: true });
        cy.get('.hs-unfold > .js-hs-unfold-invoker').click({ force: true });
        cy.get('.sidebar-content').should('not.be.visible');
    })

    it('21. Test to on click outside, login sidebar should close', () => {
        cy.get('#signInButton').click({ force: true });
        cy.get('body').click(0, 0);
        cy.get('.sidebar-content').should('not.be.visible');
    })

    it('22. Test to on click of "Close Icon" login side bar should close', () => {
        cy.get('#signInButton').click({ force: true });
        cy.get('#sidebarContent', { timeout: 10000 })
            .invoke('removeClass', 'hs-unfold-hidden')
            .should('be.visible');
        cy.get('#signinEmail').type('TestUserApiLayer@gmail.com', { force: true });
        cy.get('#signinPassword').type('tester@123', { force: true });
        cy.get('.align-items-center.mb-3 > .btn').click({ force: true });

        cy.get('.close-icon-selector').click({ force: true });
        cy.get('#sidebarContent').should('not.be.visible');
    });
});