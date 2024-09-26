describe('Positionstack pricing page', () => {
    before(() => {
        cy.visit('https://positionstack.com/');
    });

    it('1. Test to accept cookies if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2.Test to click on the "Pricing" hyperlink and navigate to the "Pricing" page', () => {
        cy.get('ul > :nth-child(1) > a').click();
    });

    it('3.Test to check the presence of text "Fair Pricing At Any Scale"', () => {
        cy.componentVisiblityCheck('.hero > .container > h2', 'Fair Pricing At Any Scale');
    });

    it('4.Test to check the presence of the "Monthly" and "Yearly" toggle field', () => {
        cy.componentVisiblityCheck('.cycle');
    });

    it('5.Test to check the "Monthly" toggle field present', () => {
        cy.componentVisiblityCheck('.monthly');
    });

    it('6.Test to check the "Yearly" toggle field', () => {
        cy.componentVisiblityCheck('.yearly');
    });

    it('7.Test to check the "Discount" text', () => {
        cy.get('a.yearly').then(($element) => {
            const afterContent = window.getComputedStyle($element[0], '::after').getPropertyValue('content');
            cy.log('::after content: ', afterContent);
            expect(afterContent).to.contain('up to 15% Discount');
        });
    });

    it('8.Test to check the "Free" plan', () => {
        cy.componentVisiblityCheck('.free > .main_container > .mc_header', '\n                            Free\n                            ');
        cy.componentVisiblityCheck('.free > .main_container > .price > .monthly_data', '$0');
    });

    it('9.Test to check the "Basic" plan', () => {
        cy.componentVisiblityCheck('.standard > .main_container > .mc_header > heading', 'Basic');
        cy.componentVisiblityCheck('.standard > .main_container > .short_description', 'Basic level - commercial use with advanced features and up to 100,000 requests.')
        cy.componentVisiblityCheck('.standard  > .main_container > .price > .monthly_data', '\n                                    $9.99\n                                    per month\n                                    or $8.99 if billed yearly\n                                ');
        cy.get('.standard > .main_container > .platinum_support_main > .platinum_support_div > #toggleImage').click();
    });

    it('10.Test to check the "Professional" plan', () => {
        cy.componentVisiblityCheck('.business > .main_container > .mc_header > heading', 'Professional');
        cy.componentVisiblityCheck('.business > .main_container > .short_description', 'Most popular - access to batch endpoint and up to 1 million monthly requests.');
        cy.componentVisiblityCheck('.business > .main_container > .price > .monthly_data', '\n                                    $49.99\n                                    per month\n                                    or $43.99 if billed yearly\n                                ');
    });

    it('11.Test to check the "Business" plan', () => {
        cy.componentVisiblityCheck('.business_pro > .main_container > .mc_header > heading', 'Business');
        cy.componentVisiblityCheck('.business_pro > .main_container > .short_description', 'Business level - full suite of features and up to 3 million monthly requests.')
        cy.componentVisiblityCheck('.business_pro  > .main_container > .price > .monthly_data', '\n                                    $99.99\n                                    per month\n                                    or $84.99 if billed yearly\n                                ');
    });

    it('12.Test to check the "Enterprise" plan', () => {
        cy.componentVisiblityCheck('.enterprise > .main_container > .mc_header > heading', 'Enterprise');
        cy.componentVisiblityCheck('.enterprise > .main_container > .short_description', 'Looking for more? Contact us for a quote.');
        cy.componentVisiblityCheck('.enterprise > .main_container > .price > div', 'Custom Pricing');
    });

    it('13.Test to check the "Free" plan "Features"', () => {
        cy.componentVisiblityCheck('.free > .features_container > ul > .feature_api_requests', '25,000 Requests')
        cy.componentVisiblityCheck('.free > .features_container > ul > .feature_support', 'No Support')
        cy.componentVisiblityCheck('.free > .features_container > ul > .feature_license', 'Personal License');
        cy.componentVisiblityCheck('.free > .features_container > ul > .feature_forward', 'Forward Geocoding');
        cy.componentVisiblityCheck('.free > .features_container > ul > .feature_reverse', 'Reverse Geocoding');
        cy.componentVisiblityCheck('.free > .features_container > ul > .feature_https', 'HTTPS Encryption');
    });

    it('14.Test to check the "Features" in the "Basic" plan', () => {
        cy.componentVisiblityCheck('.standard > .features_container > ul > .feature_api_requests', '100,000 Requests')
        cy.componentVisiblityCheck('.standard > .features_container > ul > .currency_module', '+ 0.00014985 each')
        cy.componentVisiblityCheck('.standard > .features_container > ul > .feature_support', 'Standard Support')
        cy.componentVisiblityCheck('.standard > .features_container > ul > .feature_license', 'Commercial License')
        cy.componentVisiblityCheck('.standard > .features_container > ul > .feature_forward', 'Forward Geocoding')
        cy.componentVisiblityCheck('.standard > .features_container > ul > .feature_reverse', 'Reverse Geocoding');
        cy.componentVisiblityCheck('.standard > .features_container > ul > .feature_https', 'HTTPS Encryption')
        cy.componentVisiblityCheck('.standard > .features_container > ul > .feature_rate', 'Extended Rate Limit');
        cy.componentVisiblityCheck('.standard > .features_container > ul > .feature_formats', 'JSON, XML & GeoJSON');
        cy.componentVisiblityCheck('.standard > .features_container > ul > .feature_maps', 'Embeddable Maps');
        cy.componentVisiblityCheck('.standard > .features_container > ul > .feature_languages', 'Multiple Languages');
    });

    it('15. Test to check the "Features" in the "Professional" plan', () => {
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_api_requests', '1,000,000 Requests')
        cy.componentVisiblityCheck('.business > .features_container > ul > .currency_module', '+ 0.000074985 each')
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_support', 'Standard Support')
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_license', 'Commercial License')
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_forward', 'Forward Geocoding')
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_reverse', 'Reverse Geocoding');
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_https', 'HTTPS Encryption')
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_rate', 'Extended Rate Limit');
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_formats', 'JSON, XML & GeoJSON');
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_maps', 'Embeddable Maps');
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_languages', 'Multiple Languages');
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_batch', 'Batch Requests');
    });

    it('16. Test to check the "Features" in the "Business" plan', () => {
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_api_requests', '3,000,000 Requests')
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .currency_module', '+ 0.000049995 each');
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_support', 'Standard Support');
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_license', 'Commercial License');
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_forward', 'Forward Geocoding');
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_reverse', 'Reverse Geocoding');
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_https', 'HTTPS Encryption');
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_rate', 'Extended Rate Limit');
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_formats', 'JSON, XML & GeoJSON');
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_maps', 'Embeddable Maps');
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_languages', 'Multiple Languages');
        cy.componentVisiblityCheck('.business_pro > .features_container > ul > .feature_batch', 'Batch Requests');
    });

    it('17. Test to check the "Features" in the "Enterprise" plan', () => {
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_api_requests', 'Volume Requests');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_license', 'Commercial License');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_forward', 'Forward Geocoding');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_reverse', 'Reverse Geocoding');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_https', 'HTTPS Encryption');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_rate', 'Flexible Rate Limit');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_formats', 'JSON, XML & GeoJSON');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_maps', 'Embeddable Maps');
        cy.componentVisiblityCheck('.enterprise> .features_container > ul > .feature_languages', 'Multiple Languages');
        cy.componentVisiblityCheck('.enterprise> .features_container > ul > .feature_batch', 'Batch Requests');
        cy.componentVisiblityCheck('.feature_custom', 'Custom Solutions');
    });

    it('18. Toggle the subscription button to "Yearly"', () => {
        cy.get('.yearly').click();
    });

    it('19.Test to check the "Free" plan for "Yearly"', () => {
        cy.componentVisiblityCheck('.free > .main_container > .mc_header > heading', 'Free');
        cy.componentVisiblityCheck('.free > .main_container > .price > .yearly_data', '$0');
    });

    it('20.Test to check the "Basic" plan for "Yearly"', () => {
        cy.componentVisiblityCheck('.standard > .main_container > .mc_header > heading', 'Basic');
        cy.componentVisiblityCheck('.standard > .main_container > .short_description', 'Basic level - commercial use with advanced features and up to 100,000 requests.')
        cy.componentVisiblityCheck('.standard > .main_container > .price > .yearly_data', '\n                                    $8.99\n                                    per month\n                                    billed yearly\n                                ');
    });

    it('21.Test to check the "Professional" plan for "Yearly"', () => {
        cy.componentVisiblityCheck('.business > .main_container > .mc_header > heading', 'Professional');
        cy.componentVisiblityCheck('.business > .main_container > .price > .yearly_data', '\n                                    $43.99\n                                    per month\n                                    billed yearly\n                                ');
    });

    it('22.Test to check the "Business" plan for "Yearly"', () => {
        cy.componentVisiblityCheck('.business_pro > .main_container > .mc_header > heading', 'Business');
        cy.componentVisiblityCheck('.business_pro > .main_container > .price > .yearly_data', '\n                                    $84.99per month\n                                    billed yearly\n                                ');
    });

    it('23. Test to check the "Platinum Support!" text present', () => {
        cy.componentVisiblityCheck('.platinum_right_section > h3', 'Platinum Support!')
    });

    it('24.Test to check "Find Out More!" button is present', () => {
        cy.componentVisiblityCheck('.platinum_right_section > div', '\n                            FIND OUT MORE \n                        ');
    });

    it('25.Test to check "Find Out More!" button click', () => {
        cy.get('.platinum_right_section > div').should('be.visible').click();
        cy.go('back');
    });

    it('26. Test to check "Free" plan "GET FREE API KEY" button', () => {
        cy.get('.free > .main_container > .signup_link').should('be.visible', 'contain.text', 'GET FREE API KEY').click();
        cy.go('back');
    });

    it('27. Test to check "Basic" plan "SIGN UP" button', () => {
        cy.get('.standard > .main_container > .signup_link').should('be.visible', 'contain.text', 'SIGN UP').click();
        cy.go('back');
    });

    it('28. Test to check "Professional" plan "SIGN UP" button', () => {
        cy.get('.business > .main_container > .signup_link').should('be.visible', 'contain.text', 'SIGN UP').click();
        cy.go('back');
    });

    it('29. Test to check "Buisness" plan "SIGN UP" button', () => {
        cy.get('.business_pro > .main_container > .signup_link').should('be.visible', 'contain.text', 'SIGN UP').click();
        cy.go('back');
    });

    it('30. Test to check "Enterprise" plan "SIGN UP" button', () => {
        cy.get('.enterprise > .main_container > .signup_link').should('be.visible', 'contain.text', 'CONTACT US').click({ force: true });
        cy.go('back');
    });

    it('31. Test to check "Frequently Asked Questions" section present', () => {
        cy.componentVisiblityCheck('.faq', 'Frequently Asked Questions');
    });

    it('32. Test to check "Get Free Api Key" button', () => {
        cy.get('.container > a').should('be.visible', 'contain.text', 'Get Free Api Key').click();
        cy.go('back');
    });
});
