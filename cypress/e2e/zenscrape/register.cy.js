describe('Zenscrape Register page  ', () => {
    before(() => {
        cy.navigateUrlwithCookies('https://zenscrape.com/');
    });

    it('1. Test to click the "Register" button', () => {
        cy.get('.rounded-md > .shadow').click();
    });

    it('2. Test to check the to the "Register" page', () => {
        cy.navigateUrlwithCookies('https://app.zenscrape.com/register');
    });

    it('3. Test to verify "Subscription" text is present', () => {
        cy.get('.float-left').should('be.visible', 'contain.text', 'Subscription');
    });

    it('4. Test to verify subscription options are visible', () => {
        cy.get(':nth-child(1) > :nth-child(1) > .d-flex').should('be.visible');
        cy.get(':nth-child(2) > :nth-child(1) > .d-flex').should('be.visible');
        cy.get(':nth-child(3) > :nth-child(1) > .d-flex').should('be.visible');
        cy.get(':nth-child(4) > :nth-child(1) > .d-flex').should('be.visible');
        cy.get(':nth-child(5) > :nth-child(1) > .d-flex').should('be.visible');
    });

    it('5. Test to verify subscription for "Monthly" or "Yearly" toggle option availble', () => {
        cy.get('.btn-group').should('be.visible');
    });

    it('6. Test to check whether the "Monthly" subscription by default toggled', () => {
        cy.get('.active').should('be.visible');
    });

    it('7. Test to check "All subscription plan prices are excluding applicable vat" text is present', () => {
        cy.get('.m-4').should('be.visible', 'contain.text', 'All subscription plan prices are excluding applicable VAT.');
    });

    it('8. Test to verify the default subscription plan is "Small"', () => {
        cy.get(':nth-child(2) > :nth-child(1) > .d-flex > .radio-select').should('be.visible');
    });

    it('9. Test to verify the "Features" buttons availble for all the plans', () => {
        cy.get(':nth-child(1) > :nth-child(2) > .btn').contains('Features');
        cy.get(':nth-child(2) > :nth-child(2) > .btn').contains('Features');
        cy.get(':nth-child(3) > :nth-child(2) > .btn').contains('Features');
        cy.get(':nth-child(4) > :nth-child(2) > .btn').contains('Features');
        cy.get(':nth-child(5) > :nth-child(2) > .btn').contains('Features');
    });

    it('10. Test to verify the "Monthly" prices for the all subscriptions plans', () => {
        cy.get(':nth-child(1) > :nth-child(3) > .table-plan-text').contains('Free');
        cy.get(':nth-child(2) > :nth-child(3) > .table-plan-text').contains('$59.99 / Monthly');
        cy.get(':nth-child(3) > :nth-child(3) > .table-plan-text').contains('$99.99 / Monthly');
        cy.get(':nth-child(4) > :nth-child(3) > .table-plan-text').contains('$249.99 / Monthly');
        cy.get(':nth-child(5) > :nth-child(3) > .table-plan-text').contains('$349.99 / Monthly');
    });
    
    it('11. Test to verify the "Features" button of the "Free" monthly plan opens the popup', () => {
        cy.get(':nth-child(1) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.checkModal('Free', '1.000 requests per month');
    });

    it('12. Test to verify the "Features" button of "Small" monthly plan opens the popup', () => {
        cy.get(':nth-child(2) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.checkModal('Small', '250.000 requests per month');
    });

    it('13. Test to verify the "Features" button of "Medium" monthly plan opens the popup', () => {
        cy.get(':nth-child(3) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.checkModal('Medium', '1.000.000 requests per month');
    });

    it('14. Test to verify the "Features" button of "Large" monthly plan opens the popup', () => {
        cy.get(':nth-child(4) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.checkModal('Large', '3.000.000 requests per month');
    });

    it('15. Test to verify the "Features" button of "Professional" monthly plan opens the popup', () => {
        cy.get(':nth-child(5) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.checkModal('Professional', '5 000 000 requests per month');
    });
    
    it('16. Test to toggle "Yearly" subscription plan', () => {
        cy.get('.btn-group > :nth-child(2)').contains('Yearly').click({ force: true });
    });

    it('17. Test to verify the "Yearly" prices for the all subscriptions plans', () => {
        cy.get(':nth-child(1) > :nth-child(3) > .table-plan-text').contains('Free');
        cy.get(':nth-child(2) > :nth-child(3) > .table-plan-text').contains('$575.90 / Yearly');
        cy.get(':nth-child(3) > :nth-child(3) > .table-plan-text').contains('$959.90 / Yearly');
        cy.get(':nth-child(4) > :nth-child(3) > .table-plan-text').contains('$2,399.90 / Yearly');
        cy.get(':nth-child(5) > :nth-child(3) > .table-plan-text').contains('$3,359.90 / Yearly');
    });

    it('18. Test to verify the "Features" button of the "Free" plan and should open the popup for "Free" yearly plan', () => {
        cy.get(':nth-child(1) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.checkModal('Free', '1.000 requests per month');
    });

    it('19. Test to verify the "Features" button of "Small" yearly plan and should open the popup for "Small" yearly plan', () => {
        cy.get(':nth-child(2) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.checkModal('Small Yearly', '250 000 requests per month');
    });

    it('20. Test to verify the "Features" button of "Medium" yearly plan and should open the popup for "Medium" yearly plan', () => {
        cy.get(':nth-child(3) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.checkModal('Medium', '1.000.000 requests per month');
    });

    it('21. Test to verify the "Features" button of "Large" yearly plan and should open the popup for "Large" yearly plan', () => {
        cy.get(':nth-child(4) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.checkModal('Large', '3.000.000 requests per month');
    });

    it('22. Test to verify the "Features" button of "Professional" yearly plan and should open the popup for "Professional" yearly plan', () => {
        cy.get(':nth-child(5) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.checkModal('Professional', '5 000 000 requests per month');
    });

    it('23.Test to verify the "Profile" text is present', () => {
        cy.get('.card-header > span').should('contain.text', 'Profile');
    })

    it('24. Test to verify all the "Profile" fields are available and is present', () => {
        cy.contains('Name').should('be.visible');
        cy.contains('E-Mail Address').should('be.visible');
        cy.contains('Password').should('be.visible');
        cy.contains('Confirm Password').should('be.visible');
        cy.contains('Address').should('be.visible');
        cy.contains('Address Line 2').should('be.visible');
        cy.contains('City').should('be.visible');
        cy.contains('State & ZIP / Postal Code').should('be.visible');
        cy.contains(' Country').should('be.visible');
    });

    it('25. Test to check the "Billing Information - Secure Payment powered by Stripe" text is present for the subscription plans', () => {
        cy.get(':nth-child(4) > .col-lg-8 > .card > .card-header').should('be.visible', 'contain.text', 'Billing Information - Secure Payment powered by Stripe');
    });

    it('26. Test to check the "Cardholdr\'s Name" and "Card" number fields are present', () => {
        cy.get(':nth-child(4) > .col-lg-8 > .card > .card-body > form > :nth-child(1) > .col-md-4').should('be.visible').and('contain.text', "Cardholder's Name");
        cy.get(':nth-child(4) > .col-lg-8 > .card > .card-body > form > :nth-child(2) > .col-md-4').should('be.visible').and('contain.text', "Card");
    });

    it('27. Test to select the "Free" plan to register', () => {
        cy.get(':nth-child(1) > :nth-child(1) > .d-flex > .radio-select').click();
    });

    it('28. Test to validate all fields accepts input', () => {
        cy.get(':nth-child(3) > .col-lg-8 > .card > .card-body > form > :nth-child(1) > .col-md-6 > .form-control').type('Test User');
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type('Testuser2@gmail.com');
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type('Password123!');
        cy.get(':nth-child(4) > .col-md-6 > .form-control').type('Password123!');
        cy.get(':nth-child(5) > .col-sm-6 > .form-control').type('New Road');
        cy.get(':nth-child(6) > .col-sm-6 > .form-control').type('Street food road');
        cy.get(':nth-child(7) > .col-sm-6 > .form-control').type('Bengaluru');
        cy.get(':nth-child(8) > :nth-child(2) > .form-control').type('KA');
        cy.get(':nth-child(3) > .form-control').type('10001');
        cy.get(':nth-child(9) > .col-sm-6 > .form-control').select('India');
    });

    xit('29. Test to click on the "Register" button', () => {
        cy.get('.col-md-6 > .btn').click();
        cy.url().should('include', '/email/verify');
    });
});