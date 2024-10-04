import { IPSTACK_BASE_URL } from '../../resources/data';

describe('Ipstack Contact page', () => {
    before(() => {
        cy.visit(IPSTACK_BASE_URL);
    });

    it('1. Test to hover on the "Contact Us" hyperlink and choose the "Contact support" and load the "Contact" form page', () => {
        cy.AcceptCookies();
        cy.get('.main-menu > :nth-child(5)').trigger('mouseover');
        cy.get(':nth-child(5) > .submenu > :nth-child(2) > a').click({force: true});
        cy.get('h1').should('contain.text', 'Contact ipstack Sales & Support');
        cy.AcceptCookies();
    });

    it('2. Test to check text  "What if I need more than 2,000,000 API requests per month?" is present', () => {
        cy.checkTextVisibility('What if I need more than 2,000,000 API requests per month?');
    });

    it('3. Test to check the text "Can I cancel anytime?" is present', () => {
        cy.checkTextVisibility('Can I cancel anytime?');
    });

    it('4. Test to check text "How can I pay?" is present', () => {
        cy.checkTextVisibility('How can I pay?');
    });

    it('5. Test to check for the text "Can I pay yearly?" is present', () => {
        cy.get(':nth-child(4) > .q').should('contain.text', 'Can I pay yearly?');
    });

    it('6. Test to verify the presence of "First Name" field', () => {
        cy.componentVisiblityCheck('#first_name');
    });

    it('7. Test to verify the presence of "Last Name" field', () => {
        cy.componentVisiblityCheck('#last_name')
    });

    it('8. Test to verify the presence "Email Address" field', () => {
        cy.componentVisiblityCheck(':nth-child(3) > input')
    });

    it('9. Test to verify the presence of "Country" field', () => {
        cy.componentVisiblityCheck('#country_code');
    });

    it('10. Test to verify the presence of "Subject" dropdown', () => {
        cy.componentVisiblityCheck(':nth-child(6) > select');
    });

    it('11. Test to verify presence of the "Your Message" text area field', () => {
        cy.componentVisiblityCheck(':nth-child(7) > textarea');
    });

    it('12. Test to  check the presence of company information "Apilayer Data Products GmbH" address is present', () => {
        cy.checkTextVisibility('Apilayer Data Products GmbH');
    });

    it('13. Test to verify the company information address "Oppolzergasse 6/1/4" is present', () => {
        cy.checkTextVisibility('Oppolzergasse 6/1/4');
    });

    it('14. Test to  click on the "FAQ" link and verify it navigates to the "FAQ" section', () => {
        cy.contains('FAQ section').click();
        cy.assertPathname('/faq');
        cy.go('back');
        cy.navigateUrlwithCookies(`${IPSTACK_BASE_URL}/contact`);
    });

    it('15. Test to display validation error "Please enter your first name." when submitting empty form', () => {
        // Try to submit the form without filling any fields
        cy.get('.line.submit > .submit').click();
        cy.checkAlert('Please enter your first name.');
    });

    it('16. Test to display validation error "Please enter your last name." after fillig the first name and clicking the submit form', () => {
        cy.get('#first_name').type('John');
        cy.get('.line.submit > .submit').click();
        cy.checkAlert('Please enter your last name.');
    });

    it('17. Test to display validation error "Please provide a valid e-mail address" for email after filling last name and click on the submit button', () => {
        cy.get('#last_name').type('Doe');
        cy.get('.line.submit > .submit').click();
        cy.checkAlert('Please provide a valid e-mail address.');
    });

    it('18. Test to display validation error "Please select your country." for country code after filling email and click on the submit button', () => {
        cy.get(':nth-child(3) > input').type('john.doe@example.com');
        cy.get('.line.submit > .submit').click();
        cy.checkAlert('Please select your country.');
    });

    it('19. Test to display validation error "Please select a subject." for subject after filling country code and click on the submit button', () => {
        cy.get('#country_code').select('India');
        cy.get('#state-select').select('Goa');
        cy.get('.line.submit > .submit').click();
        cy.checkAlert('Please select a subject.');
    });

    it('20. Test to  display validation error "Please compose a message of at least 10 characters." for message field after selecting the sales value and click on the submit button', () => {
        cy.get(':nth-child(6) > select').select('Sales');
        cy.get('.line.submit > .submit').click();
        cy.checkAlert('Please compose a message of at least 10 characters.');
    });

    it('21. Test to check the number of characters more than 10', () => {
        cy.get(':nth-child(7) > textarea').type('This is a test');
        cy.get(':nth-child(7) > textarea').invoke('val').then((text) => {
            if (text.length < 10) {
                cy.checkAlert('Please compose a message of at least 10 characters.');
            }
        });
    });

    it('22. Test to  navigate to the "Docmentation" page after clicking the "EXPLORE THE DOCS" button', () => {
        cy.get('.docs').click();
        cy.navigateUrlwithCookies(`${IPSTACK_BASE_URL}/documentation`);
        cy.navigateUrlwithCookies(`${IPSTACK_BASE_URL}/contact`);
    })

    it('23. Test to  navigate to the "Sign Up" page after clicking the "GET FREE API KEY" button', () => {
        cy.get('.container > .cta').click();
        cy.navigateUrlwithCookies(`${IPSTACK_BASE_URL}/signup/free`);
        cy.navigateUrlwithCookies(`${IPSTACK_BASE_URL}/contact`);
    });
});