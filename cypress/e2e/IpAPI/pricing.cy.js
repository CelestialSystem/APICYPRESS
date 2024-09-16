describe('IpApi Pricing page', () => {
    before(() => {
        cy.visit('https://ipapi.com/login');
        cy.wait(2000); // Wait for the page to load
    });

    it('0. Test to Accept Cookies if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('1.Test to navigate to the Pricing page', () => {
        cy.get('ul > :nth-child(1) > a').click();
    });

    it('2.Test to check the presence of Pricing text', () => {
        cy.componentVisiblityCheck('.hero > .container > h2', 'Plans that scale with your business');
    });

    it('3.Test to check the presence of the toggle field', () => {
        cy.componentVisiblityCheck('.cycle');
    });

    it('4.Test to check the monthly toggle field', () => {
        cy.componentVisiblityCheck('.monthly');
    });

    it('5.Test to check the Yearly toggle field', () => {
        cy.componentVisiblityCheck('.yearly');
    });

    it('6.Test to check the Discount text', () => {
        cy.get('a.yearly').then(($element) => {
            const afterContent = window.getComputedStyle($element[0], '::after').getPropertyValue('content');
            cy.log('::after content: ', afterContent);
            expect(afterContent).to.contain('up to 15% Discount');
        });
    });

    it('7.Test to chek the Free plan', () => {
        cy.componentVisiblityCheck('.free > .main_container > .mc_header', '\n                            Free\n                            ');
        cy.componentVisiblityCheck('.free > .main_container > .price > .monthly_data', '$0');
    });

    it('8.Test to chek the Standard plan', () => {
        cy.componentVisiblityCheck('.standard', 'Standard');
        cy.componentVisiblityCheck('.standard > .main_container > .price > .monthly_data', '$10');
    });

    it('9.Test to chek the Buisness plan', () => {
        cy.componentVisiblityCheck('.business > .main_container > .mc_header > heading', 'Business');
        cy.componentVisiblityCheck('.business > .main_container > .price > .monthly_data', '$50');
    });

    it('10.Test to chek the Buisness Pro', () => {
        cy.componentVisiblityCheck('.business_pro > .main_container > .mc_header > heading', 'Business Pro');
        cy.componentVisiblityCheck('.business_pro > .main_container > .price > .monthly_data', '$100');
    });

    it('11.Test to chek the Enterprice plan', () => {
        cy.componentVisiblityCheck('.enterprise > .main_container > .mc_header > heading', 'Enterprise');
        cy.componentVisiblityCheck('.enterprise > .main_container > .price > div', 'Custom Pricing');
    });

    it('12.Test to check the Free plan features', () => {
        cy.componentVisiblityCheck('.free > .features_container > ul > .feature_api_requests', '100 Lookups')
        cy.componentVisiblityCheck('.free > .features_container > ul > .feature_support', 'No Support')
        cy.componentVisiblityCheck('.free > .features_container > ul > .feature_location', 'Location Data')
        cy.componentVisiblityCheck('.free > .features_container > ul > .feature_https', 'HTTPS Encryption');
    });

    it('13.Test to check the features in the Standard plan', () => {
        cy.componentVisiblityCheck('.standard > .features_container > ul > .feature_api_requests', '50,000 Lookups')
        cy.componentVisiblityCheck('.standard > .features_container > ul > .feature_support', 'Standard Support')
        cy.componentVisiblityCheck('.standard > .features_container > ul > .feature_location', 'Location Data')
        cy.componentVisiblityCheck('.standard > .features_container > ul > .feature_https', 'HTTPS Encryption')
        cy.componentVisiblityCheck('.standard > .features_container > ul > :nth-child(6)', 'Currency Data')
        cy.componentVisiblityCheck('.standard > .features_container > ul > .feature_time', 'Time Zone Data')
        cy.componentVisiblityCheck('.standard > .features_container > ul > .feature_connection', 'Connection Data');
    });

    it('14. Test to check the features in the Buisness plan', () => {
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_api_requests', '500,000 Lookups')
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_support', 'Standard Support')
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_location', 'Location Data')
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_https', 'HTTPS Encryption')
        cy.componentVisiblityCheck('.business > .features_container > ul > :nth-child(6)', 'Currency Data')
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_time', 'Time Zone Data')
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_connection', 'Connection Data')
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_bulk', 'Bulk Lookups');
    });

    it('15. Test to check the features in the Buisness Pro plan', () => {
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_api_requests', '2,000,000 Lookups')
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_support', 'Standard Support')
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_location', 'Location Data')
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_https', 'HTTPS Encryption')
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > :nth-child(6)', 'Currency Data')
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_time', 'Time Zone Data')
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_connection', 'Connection Data')
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_bulk', 'Bulk Lookups')
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_security', 'Security Data');
    });

    it('16. Test to check the features in the Enterprise plan', () => {
        // Directly target the .enterprise > .features selector and verify its content
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_api_requests', 'Volume Lookups')
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_location', 'Location Data')
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_https', 'HTTPS Encryption')
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > :nth-child(6)', 'Currency Data')
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_time', 'Time Zone Data')
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_connection', 'Connection Data')
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_bulk', 'Bulk Lookups')
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_security', 'Security Data')
        cy.componentVisiblityCheck('.feature_custom', 'Custom Solutions');
    });

    it('17. Toggle the subscription button to yearly', () => {
        cy.get('.yearly').click();
    });

    it('18.Test to chek the Free plan', () => {
        cy.componentVisiblityCheck('.free > .main_container > .mc_header > heading', 'Free');
        cy.componentVisiblityCheck('.free > .main_container > .price > .yearly_data', '$0');
    });

    it('19.Test to chek the Standard plan', () => {
        cy.componentVisiblityCheck('.standard', 'Standard');
        cy.componentVisiblityCheck('.standard > .main_container > .price > .yearly_data', '$9');
    });

    it('20.Test to chek the Buisness plan', () => {
        cy.componentVisiblityCheck('.business > .main_container > .mc_header > heading', 'Business');
        cy.componentVisiblityCheck('.business > .main_container > .price > .yearly_data', '$43.99');
    });

    it('21.Test to chek the Buisness Pro', () => {
        cy.componentVisiblityCheck('.business_pro > .main_container > .mc_header > heading', 'Business Pro');
        cy.componentVisiblityCheck('.business_pro > .main_container > .price > .yearly_data', '$85');
    });

    it('22.Test to chek Platinum Support! button is there or not', () => {
        cy.componentVisiblityCheck('.platinum_right_section > h3', 'Platinum Support!');
    });

    it('23.Test to check platinum support button click', () => {
        cy.get('.platinum_right_section > div').should('be.visible').click();
        cy.go('back');
    });

    it('24. Test to check Get free api key button', () => {
        cy.get('.free > .main_container > .signup_link').should('be.visible', 'contain.text', 'GET FREE API KEY').click();
        cy.go('back');
    });

    it('25. Test to check Standard plan sign up button', () => {
        cy.get('.standard > .main_container > .signup_link').should('be.visible', 'contain.text', 'SIGN UP').click();
        cy.go('back');
    });

    it('26. Test to check  Buisness plan sign up button', () => {
        cy.get('.business > .main_container > .signup_link').should('be.visible', 'contain.text', 'SIGN UP').click();
        cy.go('back');
    });

    it('27. Test to check  Buisness pro plus plan sign up button', () => {
        cy.get('.business_pro > .main_container > .signup_link').should('be.visible', 'contain.text', 'SIGN UP').click();
        cy.go('back');
    });

    xit('28. Test to check  Enterprise plan sign up button', () => {
        cy.get('.enterprise > .main_container > .signup_link').should('be.visible', 'contain.text', 'CONTACT US').click();
        cy.go('back');
    });
});
