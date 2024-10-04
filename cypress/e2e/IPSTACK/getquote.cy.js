import { IPSTACK_BASE_URL } from '../../resources/data';

describe('Ipstack Get Quote page', () => {
    before(() => {
        cy.visit(IPSTACK_BASE_URL);
    });

    it('1. Test to hover on the "Contact Us" hyperlink and choose the "Contact Sales" and load the "Get a Quote" form page', () => {
        cy.AcceptCookies();
        cy.get('.main-menu > :nth-child(5)').trigger('mouseover');
        cy.get(':nth-child(5) > .submenu > :nth-child(3) > a').click({ force: true });
        cy.checkTextVisibility('Get a Quote');
        cy.AcceptCookies();
    });

    it('2. Test to verify the presence of the "First Name" field', () => {
        cy.componentVisiblityCheck('#first_name');
    });

    it('3. Test to verify the presence of the "Last Name" field', () => {
        cy.componentVisiblityCheck('#last_name');
    });

    it('4. Test to verify the presence of the "Email Address" field', () => {
        cy.componentVisiblityCheck(':nth-child(3) > input');
    });

    it('5. Test to verify the presence of the "Country Code" field', () => {
        cy.componentVisiblityCheck('#country_code');
    });

    it('6. Test to verify the "Subject" dropdown is present', () => {
        cy.componentVisiblityCheck(':nth-child(6) > select');
    });

    it('7. Test to verify the "Message" textarea is present', () => {
        cy.componentVisiblityCheck(':nth-child(7) > textarea');
    });

    it('8. Test to check the presence of the company information "Apilayer Data Products GmbH"', () => {
        cy.checkTextVisibility('Apilayer Data Products GmbH');
    });

    it('9. Test to verify the company address "Oppolzergasse 6/1/4" is present', () => {
        cy.checkTextVisibility('Oppolzergasse 6/1/4');
    });

    it('10. Test to display validation error "Please enter your first name." when submitting an empty form', () => {
        cy.get('.line.submit > .submit').click();
        cy.checkAlert('Please enter your first name.');
    });

    it('11. Test to display validation error "Please enter your last name." after filling the first name and clicking submit', () => {
        cy.get('#first_name').type('John');
        cy.get('.line.submit > .submit').click();
        cy.checkAlert('Please enter your last name.');
    });

    it('12. Test to display validation error "Please provide a valid e-mail address" after filling the last name and clicking submit', () => {
        cy.get('#last_name').type('Doe');
        cy.get('.line.submit > .submit').click();
        cy.checkAlert('Please provide a valid e-mail address.');
    });

    it('13. Test to display validation error "Please select your country." after filling the email and clicking submit', () => {
        cy.get(':nth-child(3) > input').type('john.doe@example.com');
        cy.get('.line.submit > .submit').click();
        cy.checkAlert('Please select your country.');
    });

    it('14. Test to verify the "Subject" dropdown is already selected as "Sales"', () => {
        cy.get(':nth-child(6) > select').should('have.value', 'Sales').find('option:selected').should('contain.text', 'Sales');
    });

    it('15. Test to display validation error "Please compose a message of at least 10 characters." after selecting the country code and clicking submit', () => {
        cy.get('#country_code').select('India');
        cy.get('#state-select').select('Goa');
        cy.get('.line.submit > .submit').click();
        cy.checkAlert('Please compose a message of at least 10 characters.');
    });

    it('16. Test to check the number of characters in the "Message" field is more than 10', () => {
        cy.get(':nth-child(7) > textarea').type('This is a test');
        cy.get(':nth-child(7) > textarea').invoke('val').then((text) => {
            if (text.length < 10) {
                cy.checkAlert('Please compose a message of at least 10 characters.');
            }
        });
    });

    it('17. Test to navigate to the "Documentation" page after clicking the "EXPLORE THE DOCS" button', () => {
        cy.get('.docs').click();
        cy.navigateUrlwithCookies(`${IPSTACK_BASE_URL}/documentation`);
        cy.navigateUrlwithCookies(`${IPSTACK_BASE_URL}/contact`);
    });

    it('18. Test to navigate to the "Sign Up" page after clicking the "GET FREE API KEY" button', () => {
        cy.get('.container > .cta').click();
        cy.navigateUrlwithCookies(`${IPSTACK_BASE_URL}/signup/free`);
        cy.navigateUrlwithCookies(`${IPSTACK_BASE_URL}/contact`);
    });
});