describe('Free Signup page', () => {

    before(() => {
        // Visit the main page before running any tests
        cy.visit('https://ipstack.com/');
    });

    it('1. Test to click the free signup button', () => {
        cy.AcceptCookies();
        // Click the free signup button
        cy.get('.cta > a').click();
    });

    it('2. Test to redirect to the signup page', () => {
        // Wait for the URL to change to the signup page (assuming it redirects)
        cy.url().should('include', '/signup/free');
    });

    it('2. Test to check the login page should match the actual URL, if not redirect to the actual URL to ensure other test cases do not fail', () => {
        cy.url().then((currentUrl) => {
          if (!currentUrl.includes('/signup/free')) {
            // Redirect to the actual URL if not already there
            cy.visit('/signup/free');
          }
        });
        cy.url().should('include', '/signup/free');
      });

    it('3. Test to display the signup page container', () => {
        // Wait for the specific container to be visible
        cy.get('.preapp > .container').should('be.visible');
    });

    it('4. Test to display the signup page heading', () => {
        cy.get('.plan_name_heading').should('be.visible');
        cy.get('strong').should('contain.text', 'Sign Up: ');
    });

    it('5. Test to Verify subscription monthly or yearly option availble or not', () => {
        cy.get('.cycle').should('be.visible');
    });

    it('6. Test to display the subscription options', () => {
        cy.get('input[type="radio"][value="Free"]').should('be.visible').and('be.checked');
        cy.get('input[type="radio"][value="Basic"]').should('be.visible')
        cy.get('input[type="radio"][value="Professional"]').should('be.visible');
        cy.get('input[type="radio"][value="Professional Plus"]').should('be.visible');
    });

    it('7. Test to display the correct subscription details', () => {
        cy.get('label').next('div').should('contain.text', '$0.00 / Monthly');
        cy.get('label').next('div').should('contain.text', '$12.99 / Monthly');
        cy.get('label').next('div').should('contain.text', '$59.99 / Monthly');
        cy.get('label').next('div').should('contain.text', '$99.99 / Monthly');
    });

    it('8. Test to verify the "Features" button of basic monthly plan and should open the popup for basic monthly plan', () => {
        cy.get(':nth-child(2) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.componentVisiblityCheck('.modal-basic > .modal-header', "BASIC");
        cy.get('.modal-basic > ul')
          .should('be.visible')
          .and('contain.text', '50,000 Requests / mo')
          .and('contain.text', 'Standard Support')
          .and('contain.text', 'Location Module')
          .and('contain.text', 'SSL Encryption')
          .and('contain.text', 'Currency Module')
          .and('contain.text', 'Time Zone Module')
          .and('contain.text', 'Connection Module');
          cy.get('.modal-footer > .btn').click({ force: true });
          cy.wait(500);
    });

    it('9. Test to Verify the "Features" button of medium monthly plan and should open the popup for medium monthly plan', () => {
        cy.get(':nth-child(3) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.get('.modal-header').contains('Medium');
        cy.get('.plan-feature-list > li').should('be.visible', 'contain.text', '1.000.000 requests per month');
        cy.get('.modal-footer > .btn').click({ force: true });
        cy.wait(500);
    });

    it('10. Test to verify the "Features" button of large monthly plan and should open the popup for large monthly plan', () => {
        cy.get(':nth-child(4) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.get('.modal-header').contains('Large');
        cy.get('.plan-feature-list > li').should('be.visible', 'contain.text', '3.000.000 requests per month');
        cy.get('.modal-footer > .btn').click({ force: true });
        cy.wait(500);
    });

    it('11. Test to verify the "Features" button of professional monthly plan and should open the popup for professional monthly plan', () => {
        cy.get(':nth-child(5) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.get('.modal-header').contains('Professional');
        cy.get('.plan-feature-list > li').should('be.visible', 'contain.text', '5 000 000 requests per month');
        cy.wait(500);
        cy.get('.modal-footer > .btn').click({ force: true });
    });

    it('12. Test to display all account detail fields', () => {
        cy.get('input[placeholder="First Name"]').should('be.visible');
        cy.get('input[placeholder="Last Name"]').should('be.visible');
        cy.get('input[placeholder="Email"]').should('be.visible');
        cy.get('input[placeholder="Min 6 characters"]').should('be.visible').and('have.attr', 'type', 'password');
    });

    it('13. Test to display all billing detail fields', () => {
        cy.get('#address').should('be.visible');
        cy.get('#post_code').should('be.visible');
        cy.get('#country_code').should('be.visible');
        cy.get('#state').should('be.visible');
        cy.get('#city').should('be.visible');
    });

    it('14.Test to display all company detail fields', () => {
        cy.get('#company_name').should('be.visible');
        cy.get('#website_url').should('be.visible');
        cy.get('#tax_id').should('be.visible');
        cy.get('#didYouHere').should('be.visible');
    });


    it('15. Test to validate that required fields are filled before submission', () => {
        // Attempt to submit the form without filling all fields
        cy.get('.submit').click();
        // Assert that errors are shown for all required fields
        cy.get('.alerts').should('be.visible').and('contain.text', 'There were errors. Please try again!');
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
        cy.get('#didYouHere').click()
        cy.get('iframe').then(($iframe) => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).find('.recaptcha-checkbox').click();
        });


        cy.get('.submit').should('not.be.disabled');
    });

    xit('18. Test to require password to be at least 6 characters', () => {
        cy.get('input[placeholder="Min 6 characters"]').type('123');
        cy.get('body').click();
        cy.get('.alerts').should('be.visible').and('contain.text', 'Please enter a password of at least 6 and maximum 48 characters');
    });
});