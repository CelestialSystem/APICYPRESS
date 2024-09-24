describe('Signup page', () => {

    before(() => {
        // Visit the main page before running any tests
        cy.navigateUrlwithCookies('https://weatherstack.com/');
    });

    it('1. Test to click the free signup button', () => {
        cy.get('.cta > a').click({ force: true });
        cy.AcceptCookies();
    });

    it('2. Test to redirect to the signup page', () => {
        cy.assertPathname('/signup/free');
    });

    it('3. Test to display the signup page container', () => {
        cy.get('.preapp > .container').should('be.visible');
    });

    it('4. Test to display the signup page heading', () => {
        cy.checkTextVisibility('Sign Up: Free Plan');
    });

    it('5. Test to check the subscription text', () => {
        cy.componentVisiblityCheck('.bar_bg', 'Subscription');
    });

    it('6. Test to check montlhy and yearly toggle button is there or not', () => {
        cy.componentVisiblityCheck('.cycle');
    });

    it('7. Test to display the subscription options', () => {
        cy.componentVisiblityCheck(':nth-child(1) > :nth-child(1) > .d-flex', 'Free');
        cy.componentVisiblityCheck(':nth-child(2) > :nth-child(1) > .d-flex', 'Standard');
        cy.componentVisiblityCheck(':nth-child(3) > :nth-child(1) > .d-flex', 'Professional');
        cy.componentVisiblityCheck(':nth-child(4) > :nth-child(1) > .d-flex', 'Business');
    });

    it('8. Test check the free radio button should be checked by default', () => {
        cy.get(':nth-child(1) > :nth-child(1) > .d-flex > .radio-btn').should('be.checked');
    })

    it('9. Test to display the correct subscription details for monthly period', () => {
        cy.componentVisiblityCheck(':nth-child(1) > :nth-child(3) > .table-plan-text > .monthly_data', '$0.00 / Monthly');
        cy.componentVisiblityCheck(':nth-child(2) > :nth-child(3) > .table-plan-text > .monthly_data', '$9.99 / Monthly');
        cy.componentVisiblityCheck(':nth-child(3) > :nth-child(3) > .table-plan-text > .monthly_data', '$49.99 / Monthly');
        cy.componentVisiblityCheck(':nth-child(4) > :nth-child(3) > .table-plan-text > .monthly_data', '$99.99 / Monthly');
    });

    it('10. Test to click on the yearly billing toggle button', () => {
        cy.get('.yearly').click();
    });

    it('11. Test to display the correct subscription details for yearly period', () => {
        cy.componentVisiblityCheck(':nth-child(1) > :nth-child(3) > .table-plan-text > .yearly_data', '\n                                                    $0.00 / Yearly\n                                                    ');
        cy.componentVisiblityCheck(':nth-child(2) > :nth-child(3) > .table-plan-text > :nth-child(2)', '$107.99 / Yearly');
        cy.componentVisiblityCheck(':nth-child(3) > :nth-child(3) > .table-plan-text > :nth-child(2)', '$524.99 / Yearly');
        cy.componentVisiblityCheck(':nth-child(4) > :nth-child(3) > .table-plan-text > :nth-child(2)', '$1019.99 / Yearly');
    });

    it('12. Test to display all account detail fields', () => {
        cy.componentVisiblityCheck('#first_name');
        cy.componentVisiblityCheck('#last_name');
        cy.componentVisiblityCheck('#email');
        cy.componentVisiblityCheck('#password');
    });

    it('13. Test to display all billing detail fields', () => {
        cy.componentVisiblityCheck('#address');
        cy.componentVisiblityCheck('#post_code');
        cy.componentVisiblityCheck('#country_code');
        cy.componentVisiblityCheck('#state');
        cy.componentVisiblityCheck('#city');
    });

    it('14.Test to display all company detail fields', () => {
        cy.componentVisiblityCheck('#company_name');
        cy.componentVisiblityCheck('#website_url');
        cy.componentVisiblityCheck('#tax_id');
        cy.componentVisiblityCheck('#HowDidYouHear');
    });

    it('15. Test to validate that required fields are filled before submission', () => {
        cy.get('.submit').click();
        cy.checkAlert('There were errors. Please try again!');
    });

    xit('16. Test to interact with the "I\'m not a robot" checkbox manually', () => {
        // Interact with the iframe containing the reCAPTCHA
        cy.frameLoaded('iframe'); // Load the iframe
        cy.iframe().find('.recaptcha-checkbox').click(); // Click the checkbox inside the iframe
    });

    xit('17. Test to enable the Sign Up button when all fields are valid', () => {
        // Fill in all fields with valid data
        cy.get('input[placeholder="First Name"]').type('John');
        cy.get('input[placeholder="Last Name"]').type('Doe');
        cy.get('input[placeholder="Email"]').type('john.doe@example.com');
        cy.get('input[placeholder="Min 6 characters"]').type('123');
        cy.get('#address').type('123 Main St');
        cy.get('#post_code').type('12345');
        cy.get('#country_code').select('India');
        cy.get('#state-select').select('Goa');
        cy.get('#city').type('panji');
        cy.get('#company_name').type('Company Inc.');
        cy.get('#website_url').type('https://company.com');
        cy.get('#tax_id').type('123-45-6789');
        cy.get('#HowDidYouHear').click();
        cy.get('iframe').then(($iframe) => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).find('.recaptcha-checkbox').click();
        });
        cy.get('.submit').should('not.be.disabled');
    });

    xit('18. Test to require password to be at least 6 characters', () => {
        cy.get('input[placeholder="Min 6 characters"]').type('123');
        cy.get('body').click();
        cy.checkAlert('Please enter a password of at least 6 and maximum 48 characters');
    });
});
