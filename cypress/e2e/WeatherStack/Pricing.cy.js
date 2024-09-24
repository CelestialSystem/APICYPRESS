describe('Pricing page', () => {

    before(() => {
        cy.visit('https://weatherstack.com/');
    });
    it('0. Test to Accept Cookies if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('1.Test to navigate to the Pricing page', () => {
        cy.get('.header > .container > ul > :nth-child(1) > a').click();
    });

    it('2.Test to check the presence of Fair Pricing At Any Scale', () => {
        cy.checkTextVisibility('Fair Pricing for Any Weatherstack API Plan');
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

    it('7.Test to check the Free plan', () => {
        cy.componentVisiblityCheck('.free > .main_container > .mc_header', '\n                            Free\n                            ');
        cy.componentVisiblityCheck('.free > .main_container > .price > .monthly_data', '$0');
    });

    it('8.Test to check the Basic plan', () => {
        cy.componentVisiblityCheck('.standard > .main_container > .mc_header > heading', 'Standard');
        cy.componentVisiblityCheck('.standard > .main_container > .short_description', 'Standard level — includes commercial use with up to 50,000 requests.')
        cy.componentVisiblityCheck('.standard  > .main_container > .price > .monthly_data', '\n                                    $9.99\n                                    per month\n                                    or $8.99 if billed yearly\n                                ');
        cy.get('.standard > .main_container > .platinum_support_main > .platinum_support_div > #toggleImage').click();
    });

    it('9.Test to check the Professional plan', () => {
        cy.componentVisiblityCheck('.business > .main_container > .mc_header > heading', 'Professional');
        cy.componentVisiblityCheck('.business > .main_container > .short_description', 'Professional level — premium features with up to 300,000 monthly requests.');
        cy.componentVisiblityCheck('.business > .main_container > .price > .monthly_data', '\n                                    $49.99\n                                    per month\n                                    or $43.99 if billed yearly\n                                ');
    });

    it('10.Test to check the Business plan', () => {
        cy.componentVisiblityCheck('.business_pro > .main_container > .mc_header > heading', 'Business');
        cy.componentVisiblityCheck('.business_pro > .main_container > .short_description', 'Business level — every feature we have and up to 1,000,000 monthly requests.')
        cy.componentVisiblityCheck('.business_pro  > .main_container > .price > .monthly_data', '\n                                    $99.99\n                                    per month\n                                    or $84.99 if billed yearly\n                                ');
    });

    it('11.Test to check the Enterprise plan', () => {
        cy.componentVisiblityCheck('.enterprise > .main_container > .mc_header > heading', 'Enterprise');
        cy.componentVisiblityCheck('.enterprise > .main_container > .short_description', 'Looking for more? Contact us for a quote.');
        cy.componentVisiblityCheck('.enterprise > .main_container > .price > div', 'Custom Pricing');
    });

    it('12.Test to check the Free plan features', () => {
        cy.componentVisiblityCheck('.free > .features_container > ul > .feature_api_requests', '250 Calls / mo')
        cy.componentVisiblityCheck('.free > .features_container > ul > .feature_support', 'No Support')
        cy.componentVisiblityCheck('.free > .features_container > ul > .feature_current', 'Real-Time Weather');
        cy.componentVisiblityCheck('.free > .features_container > ul > .feature_https', 'HTTPS Encryption');
    });

    it('13.Test to check the features in the Basic plan', () => {
        cy.componentVisiblityCheck('.standard > .features_container > ul > .feature_api_requests', '50,000 Calls / mo')
        cy.componentVisiblityCheck('.standard > .features_container > ul > .currency_module', '+ 0.00023976 each');
        cy.componentVisiblityCheck('.standard > .features_container > ul > .feature_support', 'Standard Support');
        cy.componentVisiblityCheck('.standard > .features_container > ul > .feature_current', 'Real-Time Weather');
        cy.componentVisiblityCheck('.standard > .features_container > ul > .feature_autocomplete', 'Location Lookup');
        cy.componentVisiblityCheck('.standard > .features_container > ul > .feature_https', 'HTTPS Encryption')
        cy.componentVisiblityCheck('.standard > .features_container > ul > .feature_astronomy', 'Astronomy Data');
        cy.componentVisiblityCheck('.standard > .features_container > ul > .feature_hourbyhour', 'Hour by Hour Data');
        cy.componentVisiblityCheck('.standard > .features_container > ul > .feature_history', 'Full Historical Data');
    });

    it('14. Test to check the features in the Professional plan', () => {
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_api_requests', '300,000 Calls / mo')
        cy.componentVisiblityCheck('.business > .features_container > ul > .currency_module', '+ 0.00019996 each')
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_support', 'Standard Support')
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_current', 'Real-Time Weather');
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_autocomplete', 'Location Lookup');
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_https', 'HTTPS Encryption')
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_astronomy', 'Astronomy Data');
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_hourbyhour', 'Hour by Hour Data');
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_history', 'Full Historical Data');
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_forecast', '7-day Forecast Data');
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_languages', '40 Languages');
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_bulk', 'Bulk Queries');
    });

    it('15. Test to check the features in the Business plan', () => {
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_api_requests', '1,000,000 Calls / mo')
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .currency_module', '+ 0.000119988 each')
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_support', 'Standard Support')
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_current', 'Real-Time Weather');
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_autocomplete', 'Location Lookup');
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_https', 'HTTPS Encryption')
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_astronomy', 'Astronomy Data');
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_hourbyhour', 'Hour by Hour Data');
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_history', 'Full Historical Data');
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_forecast', '14-day Forecast Data');
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_languages', '40 Languages');
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_bulk', 'Bulk Queries');
    });

    it('16. Test to check the features in the Enterprise plan', () => {
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_api_requests', 'Volume Calls');
        // cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_api_requests', '1,000,000 Calls / mo')
        // cy.componentVisiblityCheck('.enterprise > .features_container > ul > .currency_module', '+ 0.000119988 each')
        // cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_support', 'Standard Support')
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_current', 'Real-Time Weather');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_autocomplete', 'Location Lookup');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_https', 'HTTPS Encryption')
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_astronomy', 'Astronomy Data');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_hourbyhour', 'Hour by Hour Data');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_history', 'Full Historical Data');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_forecast', '14-day Forecast Data');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_languages', '40 Languages');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_bulk', 'Bulk Queries');
        cy.componentVisiblityCheck('.feature_custom', 'Custom Solutions');
    });

    it('17. Toggle the subscription button to yearly', () => {
        cy.get('.yearly').click();
    });

    it('18.Test to check the Free plan', () => {
        cy.componentVisiblityCheck('.free > .main_container > .mc_header > heading', 'Free');
        cy.componentVisiblityCheck('.free > .main_container > .price > .yearly_data', '$0');
    });

    it('19.Test to check the Standard plan', () => {
        cy.componentVisiblityCheck('.standard > .main_container > .mc_header > heading', 'Standard');
        cy.componentVisiblityCheck('.standard > .main_container > .short_description', 'Standard level — includes commercial use with up to 50,000 requests.')
        cy.componentVisiblityCheck('.standard > .main_container > .price > .yearly_data', '\n                                    $8.99\n                                    per month\n                                    billed yearly\n                                ');
    });

    it('20.Test to check the Professional plan', () => {
        cy.componentVisiblityCheck('.business > .main_container > .mc_header > heading', 'Professional');
        cy.componentVisiblityCheck('.business > .main_container > .price > .yearly_data', '\n                                    $43.99\n                                    per month\n                                    billed yearly\n                                ');
    });

    it('21.Test to check the Business Plan', () => {
        cy.componentVisiblityCheck('.business_pro > .main_container > .mc_header > heading', 'Business');
        cy.componentVisiblityCheck('.business_pro > .main_container > .price > .yearly_data', '\n                                    $84.99\n                                    per month\n                                    billed yearly\n                                ');
    });

    it('22. Test to check the Platinum Support! text or is there are not', () => {
        cy.get('.platinum_right_section > h3')
    });

    it('23.Test to check Find Out More! button is there or not', () => {
        cy.componentVisiblityCheck('.platinum_right_section > div', '\n                            FIND OUT MORE \n                        ');
    });

    it('24.Test to check Find out more button click', () => {
        cy.get('.platinum_right_section > div').should('be.visible').click();
        cy.go('back');
    });

    it('25. Test to check Free Plan Sign Up button', () => {
        cy.get('.free > .main_container > .signup_link').should('be.visible', 'contain.text', 'GET FREE API KEY').click();
        cy.go('back');
    });

    it('26. Test to check Basic plan sign up button', () => {
        cy.get('.standard > .main_container > .signup_link').should('be.visible', 'contain.text', 'SIGN UP').click();
        cy.go('back');
    });

    it('27. Test to check  Professional plan sign up button', () => {
        cy.get('.business > .main_container > .signup_link').should('be.visible', 'contain.text', 'SIGN UP').click();
        cy.go('back');
    });

    it('28. Test to check  Buisness plan sign up button', () => {
        cy.get('.business_pro > .main_container > .signup_link').should('be.visible', 'contain.text', 'SIGN UP').click();
        cy.go('back');
    });

    it('29. Test to check  Enterprise plan sign up button', () => {
        cy.get('.enterprise > .main_container > .signup_link').should('be.visible', 'contain.text', 'CONTACT US').click({ force: true });
        cy.go('back');
    });

    it('30. Test to check  Real time Weather text', () => {
        cy.checkTextVisibility('Real-Time Weather')
    });

    it('31. Test to check  Location Lookup & Autocomplete text', () => {
        cy.checkTextVisibility('Location Lookup & Autocomplete')
    });

    it('32. Test to check Astronomy & Lunar Data text', () => {
        cy.checkTextVisibility('Astronomy & Lunar Data')
    });

    it('33. Test to check  Hour-by-Hour Data text', () => {
        cy.checkTextVisibility('Hour-by-Hour Data')
    });

    it('34. Test to check FAQ section is there or not', () => {
        cy.componentVisiblityCheck('.faq', 'Frequently Asked Questions');
    });

    it('35. Test to check Get Free Api key button', () => {
        cy.get('.container > p > a').should('be.visible', 'contain.text', 'GET STANDARD PLAN').click();
        cy.go('back');
    });
});