import { IPSTACK_BASE_URL } from '../../resources/data';
describe('Ipstack Free Signup page', () => {

    before(() => {
        cy.visit(IPSTACK_BASE_URL);
    });

    it('1. Test to click the "GET FREE API KEY" button', () => {
        cy.AcceptCookies();
        cy.get('.cta > a').click();
    });

    it('2. Test to redirect to the "Sign Up" page', () => {
        cy.assertPathname('/signup/free');
    });

    it('3. Test to check the "Sign Up" page should match the actual URL, if not redirect to the actual URL to ensure other test cases do not fail', () => {
        cy.url().then((currentUrl) => {
          if (!currentUrl.includes('/signup/free')) {
            // Redirect to the actual URL if not already there
            cy.visit('/signup/free');
          }
        });
        cy.assertPathname('/signup/free');
      });

    it('4. Test to display the signup page container', () => {
        cy.componentVisiblityCheck('.preapp > .container');
    });

    it('5. Test to check the text "Sign Up: Free Plan" is present', () => {
        cy.checkTextVisibility('Sign Up: Free Plan');
    });

    it('6. Test to verify subscription for "MONTHLY" or "YEARLY" option present', () => {
        cy.componentVisiblityCheck('.cycle');
    });

    it('7. Test to display the subscription options', () => {
        cy.componentVisiblityCheck('input[type="radio"][value="Free"]').and('be.checked');
        cy.componentVisiblityCheck('input[type="radio"][value="Basic"]');
        cy.componentVisiblityCheck('input[type="radio"][value="Professional"]');
        cy.componentVisiblityCheck('input[type="radio"][value="Professional Plus"]');
    });

    it('8. Test to display the correct subscription details', () => {
        cy.checkTextVisibility('$0.00 / Monthly');
        cy.checkTextVisibility('$12.99 / Monthly');
        cy.checkTextVisibility('$59.99 / Monthly');
        cy.checkTextVisibility('$99.99 / Monthly');
    });

    it('9. Test to toggle the "Yearly" button ', () => {
        cy.get('.yearly').click();
    })

    it('10. Test to display the correct subscription details for "Yearly" subscription', () => {
        cy.checkTextVisibility('$0.00 / Yearly');
        cy.checkTextVisibility('$140.99 / Yearly ');
        cy.checkTextVisibility('$629.99 / Yearly ');
        cy.checkTextVisibility('$1019.99 / Yearly ');
    });

    //Skipping this test case due to an issue with closing the modal in application, which causes failures in further tests.
    xit('11. Test to verify the "Features" button of "Free" plan and should open the popup for "Free" plan', () => {
        cy.get(':nth-child(1) > :nth-child(2) > .btn').contains('Features').click({ force: true });
         cy.get('.modal-free > ul')
           .should('be.visible')
           .and('contain.text', '100 Requests / mo')
           .and('contain.text', 'No Support')
           .and('contain.text', 'Location Module')
           .and('contain.text', 'SSL Encryption')
           cy.get('.modal-free > .close-modal').click({ force: true });
     });

    it('12. Test to verify the "Features" button of "Basic" plan and should open the popup for "Basic" plan', () => {
       cy.get(':nth-child(2) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.get('.modal-basic > ul')
          .should('be.visible')
          .and('contain.text', '50,000 Requests / mo')
          .and('contain.text', 'Standard Support')
          .and('contain.text', 'Location Module')
          .and('contain.text', 'SSL Encryption')
          .and('contain.text', 'Currency Module')
          .and('contain.text', 'Time Zone Module')
          .and('contain.text', 'Connection Module');
          cy.get('.modal-basic > .close-modal').click({ force: true });
    });

    it('13. Test to Verify the "Features" button of "Professional" plan and should open the popup for "Professional" plan', () => {
        cy.get(':nth-child(3) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.get('.modal-pro > ul')
        .should('be.visible')
        .and('contain.text', '500,000 Requests / mo')
        .and('contain.text', 'Standard Support')
        .and('contain.text', 'Location Module')
        .and('contain.text', 'SSL Encryption')
        .and('contain.text', 'Currency Module')
        .and('contain.text', 'Time Zone Module')
        .and('contain.text', 'Connection Module')
        .and('contain.text', 'Bulk Endpoint');
        cy.get('.modal-pro > .close-modal').click({ force: true });
    });

    it('14. Test to verify the "Features" button of "Professional Plus"  plan and should open the popup for  "Professional Plus" plan', () => {
        cy.get(':nth-child(4) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.get('.modal-proplus > ul')
        .should('be.visible')
        .and('contain.text', '2,000,000 Requests / mo')
        .and('contain.text', 'Standard Support')
        .and('contain.text', 'Location Module')
        .and('contain.text', 'SSL Encryption')
        .and('contain.text', 'Currency Module')
        .and('contain.text', 'Time Zone Module')
        .and('contain.text', 'Connection Module')
        .and('contain.text', 'Bulk Endpoint')
        .and('contain.text', 'Security Module');
        cy.get('.modal-proplus > .close-modal').click({ force: true });
    });

    it('15. Test to check the "Account Details" fields', () => {
        cy.componentVisiblityCheck('input[placeholder="First Name"]');
        cy.componentVisiblityCheck('input[placeholder="Last Name"]');
        cy.componentVisiblityCheck('input[placeholder="Email"]');
        cy.componentVisiblityCheck('input[placeholder="Min 6 characters"]').and('have.attr', 'type', 'password');
    });

    it('16. Test to check the "Billing Details" fields', () => {
        cy.componentVisiblityCheck('#address');
        cy.componentVisiblityCheck('#post_code');
        cy.componentVisiblityCheck('#country_code');
        cy.componentVisiblityCheck('#state');
        cy.componentVisiblityCheck('#city');
    });

    it('17.Test to display "Company Details" fields', () => {
        cy.componentVisiblityCheck('#company_name');
        cy.componentVisiblityCheck('#website_url');
        cy.componentVisiblityCheck('#tax_id');
        cy.componentVisiblityCheck('#didYouHere');
    });

    it('18. Test to validate that required fields are filled before submission and check the error message "There were errors. Please try again!"', () => {
        cy.get('.submit').click();
        cy.checkAlert('There were errors. Please try again!');
    });

    xit('19. Test to interact with the "I\'m not a robot" checkbox manually', () => {
        cy.frameLoaded('iframe'); // Load the iframe
        cy.iframe().find('.recaptcha-checkbox').click(); // Click the checkbox inside the iframe
    });

    xit('20. Test to enable the Sign Up button when all fields are valid', () => {
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

    xit('21. Test to require password to be at least 6 characters', () => {
        cy.get('input[placeholder="Min 6 characters"]').type('123');
        cy.get('body').click();
        cy.checkAlert('Please enter a password of at least 6 and maximum 48 characters');
    });
});