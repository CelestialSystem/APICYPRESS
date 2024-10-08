import { WEATHERSTACK_BASE_URL } from '../../resources/data';

describe('Weatherstack Sign Up page', () => {

    before(() => {
        cy.navigateUrlwithCookies(WEATHERSTACK_BASE_URL);
    });

    it('1. Test to click the "SIGN UP FREE" button', () => {
        cy.get('.cta > a').click({ force: true });
        cy.AcceptCookies();
    });

    it('2. Test to verify redirection to the "Sign Up" page', () => {
        cy.assertPathname('/signup/free');
    });

    it('3. Test to verify the "Sign Up" page container is present', () => {
        cy.get('.preapp > .container').should('be.visible');
    });

    it('4. Test to verify the "Sign Up: Free Plan" page heading is present', () => {
        cy.checkTextVisibility('Sign Up: Free Plan');
    });

    it('5. Test to verify "Subscription" text is present', () => {
        cy.componentVisiblityCheck('.bar_bg', 'Subscription');
    });

    it('6. Test to verify the "Monthly" and "Yearly" toggle buttons are present', () => {
        cy.componentVisiblityCheck('.cycle');
    });

    it('7. Test to verify subscription options are visible', () => {
        cy.componentVisiblityCheck(':nth-child(1) > :nth-child(1) > .d-flex', 'Free');
        cy.componentVisiblityCheck(':nth-child(2) > :nth-child(1) > .d-flex', 'Standard');
        cy.componentVisiblityCheck(':nth-child(3) > :nth-child(1) > .d-flex', 'Professional');
        cy.componentVisiblityCheck(':nth-child(4) > :nth-child(1) > .d-flex', 'Business');
    });

    it('8. Test to verify the "Free" plan is selected by default', () => {
        cy.get(':nth-child(1) > :nth-child(1) > .d-flex > .radio-btn').should('be.checked');
    });

    it('9. Test to verify the correct subscription details for the "Monthly" period', () => {
        cy.componentVisiblityCheck(':nth-child(1) > :nth-child(3) > .table-plan-text > .monthly_data', '$0.00 / Monthly');
        cy.componentVisiblityCheck(':nth-child(2) > :nth-child(3) > .table-plan-text > .monthly_data', '$9.99 / Monthly');
        cy.componentVisiblityCheck(':nth-child(3) > :nth-child(3) > .table-plan-text > .monthly_data', '$49.99 / Monthly');
        cy.componentVisiblityCheck(':nth-child(4) > :nth-child(3) > .table-plan-text > .monthly_data', '$99.99 / Monthly');
    });

    xit('10. Test to verify the "Features" button of "Free" plan and should open the popup for "Free" plan', () => {
        cy.get(':nth-child(1) > :nth-child(2) > .btn').contains('Features').click({ force: true });
         cy.get('.modal-free > ul')
           .should('be.visible')
           .and('contain.text', '100 Requests / mo')
           .and('contain.text', 'No Support')
           .and('contain.text', 'Location Module')
           .and('contain.text', 'SSL Encryption')
           cy.get('.modal-free > .close-modal').click({ force: true });
     });

    it('11. Test to verify the "Features" button of "Standard" plan and should open the popup for "Standard" plan', () => {
       cy.get(':nth-child(2) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.get('.modal-basic > ul')
          .should('be.visible')
          .and('contain.text', '50,000 Calls / mo')
          .and('contain.text', 'Standard Support')
          .and('contain.text', 'Real-Time Weather')
          .and('contain.text', 'Location Lookup')
          .and('contain.text', 'HTTPS Encryption')
          .and('contain.text', 'Astronomy Data')
          .and('contain.text', 'Hour by Hour Data')
          .and('contain.text', 'Full Historical Data');
          cy.get('.modal-basic > .close-modal').click({ force: true });
    });

    it('12. Test to Verify the "Features" button of "Professional" plan and should open the popup for "Professional" plan', () => {
        cy.get(':nth-child(3) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.get('.modal-pro > ul')
        .should('be.visible')
        .and('contain.text', '300,000 Calls / mo')
        .and('contain.text', 'Standard Support')
        .and('contain.text', 'Real-Time Weather')
        .and('contain.text', 'Location Lookup')
        .and('contain.text', 'HTTPS Encryption')
        .and('contain.text', 'Astronomy Data')
        .and('contain.text', 'Hour by Hour Data')
        .and('contain.text', 'Full Historical Data')
        .and('contain.text', '7-day Forecast Data')
        .and('contain.text', '40 Languages')
        .and('contain.text', 'Bulk Queries')
        cy.get('.modal-pro > .close-modal').click({ force: true });
    });

    it('13. Test to verify the "Features" button of "Business"  plan and should open the popup for "Business" plan', () => {
        cy.get(':nth-child(4) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.get('.modal-proplus > ul')
        .should('be.visible')
        .and('contain.text', '1,000,000 Calls / mo')
        .and('contain.text', 'Standard Support')
        .and('contain.text', 'Real-Time Weather')
        .and('contain.text', 'Location Lookup')
        .and('contain.text', 'HTTPS Encryption')
        .and('contain.text', 'Astronomy Data')
        .and('contain.text', 'Hour by Hour Data')
        .and('contain.text', 'Full Historical Data')
        .and('contain.text', '14-day Forecast Data')
        .and('contain.text', '40 Languages')
        .and('contain.text', 'Bulk Queries')
        cy.get('.modal-proplus > .close-modal').click({ force: true });
    });
    
    it('14. Test to click the "Yearly" billing toggle button', () => {
        cy.get('.yearly').click();
    });

    it('15. Test to verify the correct subscription details for the "Yearly" period', () => {
        cy.componentVisiblityCheck(':nth-child(1) > :nth-child(3) > .table-plan-text > .yearly_data', '$0.00 / Yearly');
        cy.componentVisiblityCheck(':nth-child(2) > :nth-child(3) > .table-plan-text > :nth-child(2)', '$107.99 / Yearly');
        cy.componentVisiblityCheck(':nth-child(3) > :nth-child(3) > .table-plan-text > :nth-child(2)', '$524.99 / Yearly');
        cy.componentVisiblityCheck(':nth-child(4) > :nth-child(3) > .table-plan-text > :nth-child(2)', '$1019.99 / Yearly');
    });

    it('16. Test to verify all "Account Detail" fields are displayed', () => {
        cy.componentVisiblityCheck('#first_name');
        cy.componentVisiblityCheck('#last_name');
        cy.componentVisiblityCheck('#email');
        cy.componentVisiblityCheck('#password');
    });

    it('17. Test to verify all "Billing Detail" fields are displayed', () => {
        cy.componentVisiblityCheck('#address');
        cy.componentVisiblityCheck('#post_code');
        cy.componentVisiblityCheck('#country_code');
        cy.componentVisiblityCheck('#state');
        cy.componentVisiblityCheck('#city');
    });

    it('18. Test to verify all "Company Detail" fields are displayed', () => {
        cy.componentVisiblityCheck('#company_name');
        cy.componentVisiblityCheck('#website_url');
        cy.componentVisiblityCheck('#tax_id');
        cy.componentVisiblityCheck('#didYouHere');
    });

    it('19. Test to validate that required fields are filled before submission', () => {
        cy.get('.submit').click();
        cy.checkAlert('There were errors. Please try again!');
        cy.checkAlert('Please enter a valid e-mail address twice');
        cy.checkAlert('Please enter a password of at least 6 and maximum 48 characters.');
        cy.checkAlert('Some required fields were left blank');
        cy.checkAlert('First name should only contain letters and white spaces');
        cy.checkAlert('Last name should only contain letters and white spaces');
        cy.checkAlert('Please prove that you are human by ticking the box');
    });

    xit('20. Test to manually interact with the "I\'m not a robot" checkbox', () => {
        cy.frameLoaded('iframe');
        cy.iframe().find('.recaptcha-checkbox').click();
    });

    xit('21. Test to enable the "Sign Up" button when all fields are valid', () => {
        // Fill in all fields with valid data
        cy.get('input[placeholder="First Name"]').type('John');
        cy.get('input[placeholder="Last Name"]').type('Doe');
        cy.get('input[placeholder="Email"]').type('john.doe@example.com');
        cy.get('input[placeholder="Min 6 characters"]').type('123456');
        cy.get('#address').type('123 Main St');
        cy.get('#post_code').type('12345');
        cy.get('#country_code').select('India');
        cy.get('#state-select').select('Goa');
        cy.get('#city').type('Panaji');
        cy.get('#company_name').type('Company Inc.');
        cy.get('#website_url').type('https://company.com');
        cy.get('#tax_id').type('123-45-6789');
        cy.get('#didYouHere').click();
        cy.get('iframe').then(($iframe) => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).find('.recaptcha-checkbox').click();
        });
        cy.get('.submit').should('not.be.disabled');
    });

    xit('22. Test to verify the password is at least 6 characters long', () => {
        cy.get('input[placeholder="Min 6 characters"]').type('123');
        cy.get('body').click();
        cy.checkAlert('Please enter a password of at least 6 and maximum 48 characters');
    });
});
