describe('MarketStack Pricing page', () => {
    before(() => {
        cy.visit('https://marketstack.com/');
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });
 
    it('2.Test to navigate to the "Pricing" page', () => {
        cy.get('ul > :nth-child(1) > a').click();
    });
 
    it('3.Test to check the "Market Data Subscription Plans" title is present', () => {
        // Check for the presence of Pricing
        cy.componentVisiblityCheck('h1',  'Market Data Subscription Plans');
    });
 
    it('4.Test to check the presence of the toggle field', () => {
        // Check for the presence of all pricing cards
        cy.componentVisiblityCheck('.cycle');
 
    });
 
    it('5.Test to check the "Monthly" toggle field', () => {
        // Check for the presence of all pricing cards
        cy.componentVisiblityCheck('.monthly');
 
    });
 
    it('6.Test to check the "Yearly" toggle field', () => {
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
 
    it('8.Test to check the "Free plan" price and text', () => {
        cy.componentVisiblityCheck('.free > .main_container > .mc_header', '\n                            Free\n                            ');
        cy.componentVisiblityCheck('.free > .main_container > .price > .monthly_data', '$0');
    });
 
    it('9.Test to check the "Standard plan" price and text', () => {
        cy.componentVisiblityCheck('.basic', 'Basic');
        cy.componentVisiblityCheck('.basic > .main_container > .price > .monthly_data',  '\n                                    $9.99\n                                    per month\n                                    or $8.99 if billed yearly\n                                ');
    });
 
    it('10.Test to check the "Buisness plan" price and text', () => {
        cy.componentVisiblityCheck('.business > .main_container > .mc_header > heading', 'Business'); 
        cy.componentVisiblityCheck('.business > .main_container > .price > .monthly_data',  '\n                                    $149.99 \n                                    per month\n                                    or $127.99  if billed yearly\n                                ');
    });
 
    it('11.Test to check the "Professional plan" price and text', () => {
        cy.componentVisiblityCheck('.professional > .main_container > .mc_header > heading', 'Professional');
        cy.componentVisiblityCheck('.professional > .main_container > .price > .monthly_data',  '\n                                    $49.99\n                                    per month\n                                    or $43.99 if billed yearly\n                                ');
    });
 
    it('12.Test to check the "Enterprice plan" price and text', () => {
        cy.componentVisiblityCheck('.enterprise > .main_container > .mc_header > heading', 'Enterprise');
        cy.componentVisiblityCheck('.enterprise > .main_container > .price > div', 'Custom Pricing');
    });
 
    it('13.Test to check the features in the "Free plan"', () => {
        cy.componentVisiblityCheck('.free > .features_container > ul > .feature_api_requests',  '100 Requests / mo');
        cy.componentVisiblityCheck('.free > .features_container > ul > .feature_exchanges', '70 Stock Exchanges');
        cy.componentVisiblityCheck('.free > .features_container > ul > .feature_history', '1 Year History');
        cy.componentVisiblityCheck('.free > .features_container > ul > .feature_eod', 'End-of-Day Data');
        cy.componentVisiblityCheck('.free > .features_container > ul > .feature_support', 'No Support');
        cy.componentVisiblityCheck('.free > .features_container > ul > .feature_https', 'HTTPS Encryption');
    });
    
    it('14.Test to check the features in the "Standard plan"', () => {
        cy.componentVisiblityCheck('.basic > .features_container > ul > .feature_api_requests', '10,000 Requests / mo');
        cy.componentVisiblityCheck('.basic > .features_container > ul > .currency_module', '+ 0.0014985 each');
        cy.componentVisiblityCheck('.basic > .features_container > ul > .feature_exchanges', '70 Stock Exchanges');
        cy.componentVisiblityCheck('.basic > .features_container > ul > .feature_history', '10 Years History');
        cy.componentVisiblityCheck('.basic > .features_container > ul > .feature_eod', 'End-of-Day Data');
        cy.componentVisiblityCheck('.basic > .features_container > ul > .feature_indices', 'Market Indices')
        cy.componentVisiblityCheck('.basic > .features_container > ul > .feature_https', 'HTTPS Encryption');
        cy.componentVisiblityCheck('.basic > .features_container > ul > .feature_support', 'Standard Support');
        cy.componentVisiblityCheck('.basic > .features_container > ul > .feature_commercial', 'Commercial Use');
        cy.componentVisiblityCheck('.basic > .features_container > ul > .feature_intraday', 'Intraday Data (US)');
    });
 
    it('15. Test to check the features in the "Professional plan"', () => {
        // Directly target the .professional > .features selector and verify its content
        cy.componentVisiblityCheck('.professional > .features_container > ul > .feature_api_requests', '100,000 Requests / mo');
        cy.componentVisiblityCheck('.professional > .features_container > ul > .currency_module', '+ 0.00074985 each');
        cy.componentVisiblityCheck('.basic > .features_container > ul > .feature_exchanges', '70 Stock Exchanges');
        cy.componentVisiblityCheck('.basic > .features_container > ul > .feature_history', '10 Years History');
        cy.componentVisiblityCheck('.professional > .features_container > ul > .feature_eod', 'End-of-Day Data');
        cy.componentVisiblityCheck('.professional > .features_container > ul > .feature_indices', 'Market Indices');
        cy.componentVisiblityCheck('.professional > .features_container > ul > .feature_https', 'HTTPS Encryption');
        cy.componentVisiblityCheck('.professional > .features_container > ul > .feature_support', 'Standard Support');
        cy.componentVisiblityCheck('.professional > .features_container > ul > .feature_commercial', 'Commercial Use');
        cy.componentVisiblityCheck('.professional > .features_container > ul > .feature_intraday', 'Intraday Data (US)');
        cy.componentVisiblityCheck('.professional > .features_container > ul > .feature_realtime', 'Real-Time Updates');
    });
    it('16. Test to check the features in the "Buisness plan"', () => {
        // Directly target the .professional_plus > .features selector and verify its content
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_api_requests', '500,000 Requests / mo');
        cy.componentVisiblityCheck('.business > .features_container > ul > .currency_module', '+ 0.00044997 each');
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_exchanges', '70 Stock Exchanges');
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_history', '30+ Years History');
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_eod', 'End-of-Day Data');
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_indices', 'Market Indices');
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_https', 'HTTPS Encryption');
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_commercial', 'Commercial Use');
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_intraday', 'Intraday Data (US)');
        cy.componentVisiblityCheck('.business > .features_container > ul > .feature_realtime', 'Real-Time Updates');
    });
 
    it('17. Test to check the features in the "Enterprise plan"', () => {
        // Directly target the .enterprise > .features selector and verify its content
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_api_requests', 'Volume Requests');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_exchanges', '70 Stock Exchanges');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_history', '30+ Years History');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_eod', 'End-of-Day Data');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_indices', 'Market Indices');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_https', 'HTTPS Encryption');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_commercial', 'Commercial Use');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_intraday', 'Intraday Data (US)');
        cy.componentVisiblityCheck('.enterprise > .features_container > ul > .feature_realtime', 'Real-Time Updates');
        cy.componentVisiblityCheck('.feature_custom', 'Custom Solutions');
    });
 
    it('18. Toggle the "Subscription" button to yearly', () => {
        cy.get('.yearly').click();
    });
 
    it('19.Test to check the "Free plan" price and text', () => {
        cy.componentVisiblityCheck('.free > .main_container > .mc_header > heading', 'Free');
        cy.componentVisiblityCheck('.free > .main_container > .price > .yearly_data', '$0');
    });
 
    it('20.Test to check the "Standard plan" price and text', () => {
        cy.componentVisiblityCheck('.basic > .main_container > .mc_header > heading', 'Basic');
        cy.componentVisiblityCheck('.basic > .main_container > .price > .yearly_data', '\n                                    $8.99\n                                    per month\n                                    billed yearly\n                                ');
    });

    it('21.Test to check the "Buisness plan" price and text', () => {
        cy.componentVisiblityCheck('.business > .main_container > .mc_header > heading', 'Business'); 
        cy.componentVisiblityCheck('.business > .main_container > .price > .yearly_data', '\n                                    $127.99\n                                    per month\n                                    billed yearly\n                                ');
    });
 
    it('22.Test to check the "Professional" price and text', () => {
        cy.componentVisiblityCheck('.professional > .main_container > .mc_header > heading', 'Professional');
        cy.componentVisiblityCheck('.professional > .main_container > .price > .yearly_data', '\n                                    $43.99\n                                    per month\n                                    billed yearly\n                                ');
    });
 
    it('23.Test to check "Platinum Support!" button is present', () => {
        cy.componentVisiblityCheck('.platinum_right_section > div',  '\n                            FIND OUT MORE \n                        ');
    });
 
    it('24.Test to check "Platinum support" button click', () => {
        cy.get('.platinum_right_section > div').should('be.visible').click();
        cy.go('back');
    });
 
    it('25. Test to check "Get free api key" button is present', () =>{
        cy.get('.free > .main_container > .signup_link').should('be.visible', 'contain.text', 'GET FREE API KEY').click();
        cy.go('back');
    });
 
    it('26. Test to check Standard plan "Sign up" button', () =>{
        cy.get('.basic > .main_container > .signup_link').should('be.visible', 'contain.text', 'SIGN UP').click();
        cy.go('back');
    });
 
    it('27. Test to check  Buisness plan "Sign up" button', () =>{
        cy.get('.business > .main_container > .signup_link').should('be.visible', 'contain.text', 'SIGN UP').click();
        cy.go('back');
    });
    
    it('28. Test to check  Buisness pro plus plan "Sign up" button', () =>{
        cy.get('.professional > .main_container > .signup_link').should('be.visible', 'contain.text', 'SIGN UP').click();
        cy.go('back');
    });
 
    xit('29. Test to check  Enterprise plan "Sign up" button', () =>{
        cy.get('.enterprise > .main_container > .signup_link').should('be.visible', 'contain.text', 'CONTACT US').click();
        cy.go('back');
    });
});
 