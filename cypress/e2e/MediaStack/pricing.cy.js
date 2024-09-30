describe('MediaStack Pricing page', () => {
    before(() => {
        cy.visit('https://mediastack.com/');
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });
 
    it('2.Test to navigate to the "Pricing" page', () => {
        cy.get('ul > :nth-child(1) > a').click();
    });
 
    it('3.Test to check the presence of "News Data Subscriptions" text', () => {
        // Check for the presence of Pricing
        cy.componentVisiblityCheck('.hero > .container > h2',  'News Data Subscriptions');
    });
 
    it('4.Test to check the presence of the "Toggle" field', () => {
        // Check for the presence of all pricing cards
        cy.componentVisiblityCheck('.cycle');
 
    });
 
    it('5.Test to check the "Monthly Toggle" field', () => {
        // Check for the presence of all pricing cards
        cy.componentVisiblityCheck('.monthly');
 
    });
 
    it('6.Test to check the "Yearly Toggle" field', () => {
        // Check for the presence of all pricing cards
        cy.componentVisiblityCheck('.yearly');
 
    });
 
    it('7.Test to check the "Discount" text', () => {
        cy.get('a.yearly').then(($element) => {
            // Access the pseudo-element's content using JavaScript
            const afterContent = window.getComputedStyle($element[0], '::after').getPropertyValue('content');
            cy.log('::after content: ', afterContent);
            // Assert the content if you know what to expect
            expect(afterContent).to.contain('up to 15% Discount'); // Adjust as needed
        });
    });
 
    it('8.Test to check the "Free plan"', () => {
        cy.componentVisiblityCheck('.free > .main_container > .mc_header', '\n                            Free\n                            ');
        cy.componentVisiblityCheck('.free > .main_container > .price > .monthly_data', '$0');
    });
 
    it('9.Test to check the "Standard plan"', () => {
        cy.componentVisiblityCheck('.basic', 'Standard');
        cy.componentVisiblityCheck('.basic > .main_container > .price > .monthly_data', '\n                                    $24.99\n                                    per month\n                                    or $22.99 if billed yearly\n                                ');
    });
 
    it('10.Test to check the "Buisness plan"', () => {
        cy.componentVisiblityCheck('.business > .main_container > .mc_header > heading', 'Business'); 
        cy.componentVisiblityCheck('.business > .main_container > .price > .monthly_data', '\n                                    $249.99\n                                    per month\n                                    or $212.99 if billed yearly\n                                ');
    });
 
    it('11.Test to check the "Professional plan"', () => {
        cy.componentVisiblityCheck('.professional > .main_container > .mc_header > heading', 'Professional');
        cy.componentVisiblityCheck('.professional > .main_container > .price > .monthly_data', '\n                                    $99.99\n                                    per month\n                                    or $87.99 if billed yearly\n                                ');
    });
 
    it('12.Test to check the "Enterprice plan"', () => {
        cy.componentVisiblityCheck('.enterprise > .main_container > .mc_header > heading', 'Enterprise');
        cy.componentVisiblityCheck('.enterprise > .main_container > .price > div', 'Custom Pricing');
    });
 
    it('13.Test to check the "Free plan" features', () => {
        cy.componentVisiblityCheck('.free > .features_container > ul > .feature_api_requests',  '500 Calls / mo')
        cy.componentVisiblityCheck('.free > .features_container > ul > .feature_sources', 'All News Sources')
        cy.componentVisiblityCheck('.feature_data_delayed', 'Delayed News Data')
        cy.componentVisiblityCheck('.free > .features_container > ul > .feature_languages', 'All 13 Languages');
        cy.componentVisiblityCheck('.free > .features_container > ul > .feature_support', 'No Support');
        cy.componentVisiblityCheck('.free > .features_container > ul > .feature_https', 'HTTPS Encryption');
    });

    it('14.Test to check the features in the "Standard plan"', () => {
        cy.componentVisiblityCheck('.basic > .features_container > ul > .feature_api_requests', '10,000 Calls / mo')
        cy.componentVisiblityCheck('.basic > .features_container > ul > .currency_module', '+ 0.0037485 each')
        cy.componentVisiblityCheck('.basic > .features_container > ul > .feature_sources', 'All News Sources')
        cy.componentVisiblityCheck('.basic > .features_container > ul > .feature_data', 'Live News Data')
        cy.componentVisiblityCheck('.basic > .features_container > ul > .feature_languages', 'All 13 Languages')
        cy.componentVisiblityCheck('.basic > .features_container > ul > .feature_https', 'HTTPS Encryption')
        cy.componentVisiblityCheck('.basic > .features_container > ul > .feature_historical', 'Historical Data');
        cy.componentVisiblityCheck('.basic > .features_container > ul > .feature_commercial', 'Commercial Use');
        cy.componentVisiblityCheck('.basic > .features_container > ul > .feature_support', 'Standard Support');
    });
 
    it('15. Test to check the features in the "Professional plan"', () => {
        // Directly target the .professional > .features selector and verify its content
        cy.componentVisiblityCheck('.professional > .features_container > ul > .feature_api_requests', '50,000 Calls / mo')
        cy.componentVisiblityCheck('.professional > .features_container > ul > .currency_module', '+ 0.0029997 each')
        cy.componentVisiblityCheck('.professional > .features_container > ul > .feature_sources', 'All News Sources')
        cy.componentVisiblityCheck('.professional > .features_container > ul > .feature_data', 'Live News Data')
        cy.componentVisiblityCheck('.professional > .features_container > ul > .feature_languages', 'All 13 Languages')
        cy.componentVisiblityCheck('.professional > .features_container > ul > .feature_https', 'HTTPS Encryption')
        cy.componentVisiblityCheck('.professional > .features_container > ul > .feature_historical', 'Historical Data');
        cy.componentVisiblityCheck('.professional > .features_container > ul > .feature_commercial', 'Commercial Use');
        cy.componentVisiblityCheck('.professional > .features_container > ul > .feature_support', 'Standard Support');
    });

    it('16. Test to check the features in the "Buisness plan"', () => {
        // Directly target the .professional_plus > .features selector and verify its content
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_api_requests', '250,000 Calls / mo')
        cy.componentVisiblityCheck('.business > .features_container > ul > .currency_module', '+ 0.00149994 each')
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_sources', 'All News Sources')
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_data', 'Live News Data')
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_languages', 'All 13 Languages')
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_https', 'HTTPS Encryption')
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_historical', 'Historical Data');
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_commercial', 'Commercial Use');
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_support', 'Standard Support');
    });
 
    it('17. Test to check the features in the "Enterprise plan"', () => {
        // Directly target the .enterprise > .features selector and verify its content
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_api_requests', 'Volume Calls / mo');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_sources', 'All News Sources');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_data', 'Live News Data');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_languages', 'All 13 Languages');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_https', 'HTTPS Encryption');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_historical', 'Historical Data');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_commercial', 'Commercial Use');
        // cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_security', 'Custom Solutions')
        cy.componentVisiblityCheck('.feature_custom', 'Custom Solutions');
    });
 
    it('18. Toggle the "Subscription" button to yearly', () => {
        cy.get('.yearly').click();
    });
 
    it('19.Test to check the "Free plan"', () => {
        cy.componentVisiblityCheck('.free > .main_container > .mc_header > heading', 'Free');
        cy.componentVisiblityCheck('.free > .main_container > .price > .yearly_data', '$0');
    });
 
    it('20.Test to check the "Standard plan"', () => {
        cy.componentVisiblityCheck('.basic > .main_container > .mc_header > heading', 'Standard');
        cy.componentVisiblityCheck('.basic > .main_container > .price > .yearly_data', '\n                                    $22.99\n                                    per month\n                                    billed yearly\n                                ');
    });

    it('21.Test to check the "Buisness plan"', () => {
        cy.componentVisiblityCheck('.business > .main_container > .mc_header > heading', 'Business'); 
        cy.componentVisiblityCheck('.business > .main_container > .price > .yearly_data', '\n                                    $212.99\n                                    per month\n                                    billed yearly\n                                ');
    });
 
    it('22.Test to check the "Professional"', () => {
        cy.componentVisiblityCheck('.professional > .main_container > .mc_header > heading', 'Professional');
        cy.componentVisiblityCheck('.professional > .main_container > .price > .yearly_data', '\n                                    $87.99\n                                    per month\n                                    billed yearly\n                                ');
    });
 
    it('23.Test to check "Platinum Support!" button is present', () => {
        cy.componentVisiblityCheck('.platinum_right_section > div',  '\n                            FIND OUT MORE \n                        ');
    });
 
    it('24.Test to check "Platinum Support" button click', () => {
        cy.get('.platinum_right_section > div').should('be.visible').click();
        cy.go('back');
    });
 
    it('25. Test to click "Get free api key" button', () =>{
        cy.get('.free > .main_container > .signup_link').should('be.visible', 'contain.text', 'GET FREE API KEY').click();
        cy.go('back');
    });
 
    it('26. Test to check Standard plan "Sign Up" button', () =>{
        cy.get('.basic > .main_container > .signup_link').should('be.visible', 'contain.text', 'SIGN UP').click();
        cy.go('back');
    });
 
    it('27. Test to check  Buisness plan "Sign Up" button', () =>{
        cy.get('.business > .main_container > .signup_link').should('be.visible', 'contain.text', 'SIGN UP').click();
        cy.go('back');
    });
    
    it('28. Test to check  Buisness pro plus plan "Sign Up" button', () =>{
        cy.get('.professional > .main_container > .signup_link').should('be.visible', 'contain.text', 'SIGN UP').click();
        cy.go('back');
    });
});
 