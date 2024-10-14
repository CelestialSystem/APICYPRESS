import { NUMVERIFY_BASE_URL } from '../../resources/data';

describe('NumVerify Free Signup page', () => {
    before(() => {
        cy.navigateUrlwithCookies(NUMVERIFY_BASE_URL)// Visit the main page before running any tests
    });

    it('1. Test to click the "Free Signup" button', () => {
        cy.get('.primary > a').click({ force: true });
        cy.AcceptCookies();
    });

    it('2. Test to redirect to the "product" page on click of "Sign Up for Free" button', () => {
        cy.assertPathname('/product');
    });

    it('3. Test to click on "Sign Up" button under "Free Plan"', () => {
        cy.get(':nth-child(1) > .inside > :nth-child(4) > .button').click();
        cy.assertPathname('/signup');
    });

    it('4. Test to check  "Sign Up" heading is present', () => {
        cy.componentVisiblityCheck('center.signup_heading > h1', 'Subscription:  Free Plan');
    });

    it('5. Test to check the "Subscription" text', () => {
        cy.componentVisiblityCheck('.bar_bg', 'Subscription');
    });

    it('6. Test to check "Montlhy" and "Yearly" toggle button is there or not', () => {
        cy.componentVisiblityCheck('.cycle');
    });

    it('7. Test to check the "Subscription" options', () => {
        cy.componentVisiblityCheck(':nth-child(1) > :nth-child(1) > .d-flex', 'Free');
        cy.componentVisiblityCheck(':nth-child(2) > :nth-child(1) > .d-flex', 'Basic');
        cy.componentVisiblityCheck(':nth-child(3) > :nth-child(1) > .d-flex', 'Professional');
        cy.componentVisiblityCheck(':nth-child(4) > :nth-child(1) > .d-flex', '\n                                                \n                                                Enterprise\n                                                ');
    });

    it('8. Test check the "free" radio button should be checked by default', () => {
        cy.get(':nth-child(1) > :nth-child(1) > .d-flex > .radio-btn').should('be.checked');
    })

    it('9. Test to check the correct "Subscription Details" for "Monthly" period', () => {
        cy.componentVisiblityCheck('tbody > :nth-child(1) > :nth-child(3)', '$0.00 / Monthly');
        cy.componentVisiblityCheck('tbody > :nth-child(2) > :nth-child(3)', '\n                                                    \n                                                    $14.99 / Monthly                                                    \n                                                    \n                                                    $161.99 / Yearly                                                    \n                                                    \n                                                    10% discount\n                                                     \n                                                ');
        cy.componentVisiblityCheck('tbody > :nth-child(3) > :nth-child(3)', '\n                                                    \n                                                    $59.99 / Monthly                                                    \n                                                    \n                                                    $629.99 / Yearly                                                    \n                                                    \n                                                    12.5% discount\n                                                     \n                                                ');
        cy.componentVisiblityCheck('tbody > :nth-child(4) > :nth-child(3)', '\n                                                    \n                                                    $129.99 / Monthly                                                    \n                                                    \n                                                    $1,325.99 / Yearly                                                     \n                                                    \n                                                    15% discount\n                                                    \n                                                ');
    });

    it('10. Test to click on the "Yearly Billing" toggle button', () => {
        cy.get('.yearly').click();
    });

    it('11. Test to check the correct "Subscription Details" for "Yearly" period', () => {
        cy.componentVisiblityCheck('tbody > :nth-child(1) > :nth-child(3)', '\n                                                    $0.00 / Yearly                                                    ');
        cy.componentVisiblityCheck('tbody > :nth-child(2) > :nth-child(3)',  '\n                                                    \n                                                    $14.99 / Monthly                                                    \n                                                    \n                                                    $161.99 / Yearly                                                    \n                                                    \n                                                    10% discount\n                                                     \n                                                ');
        cy.componentVisiblityCheck('tbody > :nth-child(3) > :nth-child(3)', '\n                                                    \n                                                    $59.99 / Monthly                                                    \n                                                    \n                                                    $629.99 / Yearly                                                    \n                                                    \n                                                    12.5% discount\n                                                     \n                                                ');
        cy.componentVisiblityCheck('tbody > :nth-child(4) > :nth-child(3)',   '\n                                                    \n                                                    $129.99 / Monthly                                                    \n                                                    \n                                                    $1,325.99 / Yearly                                                     \n                                                    \n                                                    15% discount\n                                                    \n                                                ');
    });

    it('12. Test to check all account detail fields', () => {
        cy.componentVisiblityCheck('#first_name');
        cy.componentVisiblityCheck('#last_name');
        cy.componentVisiblityCheck('#email_address');
        cy.componentVisiblityCheck('#password');
    });

    it('13. Test to check all billing detail fields', () => {
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
        cy.componentVisiblityCheck('#didYouHere');
    });

    it('15. Test to validate that required fields are filled before submission', () => {
        cy.get('.submit').click();
        cy.checkAlert('Please enter a valid e-mail address twice.Please enter a password of at least 6 and maximum 48 characters.Some required fields were left blank.First name should only contain letters and white spaces.Last name should only contain letters and white spaces.City should only contain letters and white spaces.Please prove that you are human by ticking the box.');
    });

    xit('16. Test to interact with the "I\'m not a robot" checkbox manually', () => {
        // Interact with the iframe containing the reCAPTCHA
        cy.frameLoaded('iframe'); // Load the iframe
        cy.iframe().find('.recaptcha-checkbox').click(); // Click the checkbox inside the iframe
    });

    xit('17. Test to enable the "Sign Up" button when all fields are valid', () => {
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

    xit('18. Test to require "Password" to be at least 6 characters', () => {
        cy.get('input[placeholder="Min 6 characters"]').type('123');
        cy.get('body').click();
        cy.get('.alerts').should('be.visible').and('contain.text', 'Please enter a password of at least 6 and maximum 48 characters');
    });
});