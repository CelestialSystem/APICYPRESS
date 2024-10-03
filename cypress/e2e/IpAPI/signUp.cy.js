import { IPAPI_BASE_URL } from '../../resources/data';

describe('IpApi Signup page', () => {
    before(() => {
        cy.visit(IPAPI_BASE_URL);
    });

    it('1. Test to click the "SIGN UP FREE" button', () => {
        cy.get(':nth-child(4) > :nth-child(4) > a').click();
    });

    it('2. Test to redirect to the "Sign Up" page', () => {
        cy.assertPathname('/signup/free');
    });

    it('3. Test to display the "Sign Up" page container', () => {
        cy.componentVisiblityCheck('.preapp > .container');
    });

    it('4. Test to display the "Sign Up" page heading', () => {
        cy.componentVisiblityCheck('.plan_name_heading');
        cy.componentVisiblityCheck('strong', 'Sign Up: ');
    });

    it('5. Test to display the "Subscription" options', () => {
        cy.componentVisiblityCheck('tbody > :nth-child(1) > :nth-child(1)', 'Free');
        cy.componentVisiblityCheck('tbody > :nth-child(2) > :nth-child(1)', 'Standard');
        cy.componentVisiblityCheck('tbody > :nth-child(3) > :nth-child(1)', '\n                                                \n                                                Business\n                                                ');
        cy.componentVisiblityCheck('tbody > :nth-child(4) > :nth-child(1)', '\n                                                \n                                                Business Pro\n                                                ');
    });

    it('6. Test to display the correct "Subscription" details', () => {
        cy.componentVisiblityCheck(':nth-child(1) > :nth-child(3) > .table-plan-text > .monthly_data',  '\n                                                    $0 / Monthly\n                                                    ');
        cy.componentVisiblityCheck(':nth-child(2) > :nth-child(3) > .table-plan-text > .monthly_data', '\n                                                    $12.99 / Monthly\n                                                    ');
        cy.componentVisiblityCheck(':nth-child(3) > :nth-child(3) > .table-plan-text > .monthly_data', '\n                                                    $59.99 / Monthly\n                                                    ');
        cy.componentVisiblityCheck(':nth-child(4) > :nth-child(3) > .table-plan-text > .monthly_data', '\n                                                    $99.99 / Monthly\n                                                    ');
    });

    it('7. Test to display all "Account Detail" fields', () => {
        cy.componentVisiblityCheck('.account > :nth-child(1)');
        cy.componentVisiblityCheck('.account > :nth-child(2)');
        cy.componentVisiblityCheck('.account > :nth-child(3)');
        cy.get('input[placeholder="Min 6 characters"]').should('be.visible').and('have.attr', 'type', 'password');
    });

    it('8. Test to display all "Billing Detail" fields', () => {
        cy.componentVisiblityCheck('#address');
        cy.componentVisiblityCheck('#post_code');
        cy.componentVisiblityCheck('#country_code');
        cy.componentVisiblityCheck('#state');
        cy.componentVisiblityCheck('#city');
    });

    it('9.Test to display all "Company Detail" fields', () => {
        cy.componentVisiblityCheck('#company_name');
        cy.componentVisiblityCheck('#website_url');
        cy.componentVisiblityCheck('#tax_id');
        cy.componentVisiblityCheck('#didYouHere');
    });

    it('10. Test to check "First Name" field is there and type on it', () => {
        cy.componentVisiblityCheck('#first_name');
        cy.get('#first_name').type('Test first name');
        cy.get('#first_name').should('have.value', 'Test first name')
    });

    it('11. Test to check "Last Name" field is there and type on it', () => {
        cy.componentVisiblityCheck('#last_name');
        cy.get('#last_name').type('Test last name');
        cy.get('#last_name').should('have.value', 'Test last name')
    });

    it('12. Test to check "Email" field is there and type on it', () => {
        cy.componentVisiblityCheck('#email');
        cy.get('#email').type('test@gmail.com');
        cy.get('#email').should('have.value', 'test@gmail.com')
    });

    it('13. Test to check "Address" field is there and type on it', () => {
        cy.componentVisiblityCheck('#address');
        cy.get('#address').type('test address');
        cy.get('#address').should('have.value', 'test address')
    });

    it('14. Test to check "Postal Code" field is there and type on it', () => {
        cy.componentVisiblityCheck('#post_code');
        cy.get('#post_code').type('1112232');
        cy.get('#post_code').should('have.value', '1112232')
    });

    it('15. Test to check "Country" field is there and type on it', () => {
        cy.componentVisiblityCheck('#country_code');
        cy.get('#country_code').select('India');
        cy.get('#country_code').should('have.value', 'IN')
    });

    it('16. Test to check "State" field is there and type on it', () => {
        cy.componentVisiblityCheck('#state-select');
        cy.get('#state-select').select('Karnataka');
        cy.get('#state-select').should('have.value', 'Karnataka')
    });

    it('17. Test to check "City" field is there and type on it', () => {
        cy.componentVisiblityCheck('#city');
        cy.get('#city').type('Banglore', { force: true });
        cy.get('#city').should('have.value', 'Banglore')
    });

    it('18. Test to check "Company Name" field is there and type on it', () => {
        cy.componentVisiblityCheck('#company_name');
        cy.get('#company_name').type('Test Company');
        cy.get('#company_name').should('have.value', 'Test Company')
    });

    it('19. Test to check "Company Url" field is there and type on it', () => {
        cy.componentVisiblityCheck('#website_url');
        cy.get('#website_url').type('https//:test.url');
        cy.get('#website_url').should('have.value', 'https//:test.url')
    });

    it('20. Test to check "Tax ID" field is there and type on it', () => {
        cy.componentVisiblityCheck('#tax_id');
        cy.get('#tax_id').type('11112334545');
        cy.get('#tax_id').should('have.value', '11112334545')
    });

    it('21. Test to check "Tax ID" field is there and type on it', () => {
        cy.componentVisiblityCheck('#didYouHere');
        cy.get('#didYouHere').type('Blog', { force: true });
        cy.get('[data-value="Blog"]').click();
        cy.get('#didYouHere').should('have.value', 'Blog')
    });
});