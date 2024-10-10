import { NUMVERIFY_BASE_URL } from '../../resources/data';

describe('NumVerify Pricing page', () => {
    before(() => {
        cy.visit(NUMVERIFY_BASE_URL);
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
        cy.componentVisiblityCheck(':nth-child(2) > h1',  'Subscription Plans');
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
        cy.componentVisiblityCheck('.yearly_price');
 
    });
 
    it('7.Test to check the "Discount" text', () => {
        cy.componentVisiblityCheck('.toogle_text' ,'Choose annual billing and save upto 15%.')
    });
 
    it('8.Test to check the "Free plan" price and text', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .inside > header', '\n              \t\t\t\tFree Plan\n                        ');
        cy.componentVisiblityCheck(':nth-child(1) > .inside > .pricing > .yearly_price_data',  '\n                            $\n                        \t0.00\n                        \t/ yearly\n                        ');
    });
 
    it('9.Test to check the "Basic plan" price and text', () => {
        cy.componentVisiblityCheck('header.border_right_under_700', 'Basic Plan');
        cy.componentVisiblityCheck(':nth-child(2) > .inside > .pricing > :nth-child(2)',   '\n                            $\n                        \t161.99\n                        \t/ yearly\n                            \n                        ');
    });
 
    it('10.Test to check the "Professional plan" price and text', () => {
        cy.componentVisiblityCheck('header.highlighted', 'Professional Plan');
        cy.componentVisiblityCheck('td.highlighted > .inside > .pricing > :nth-child(2)',   '\n                            $\n                        \t629.99\n                        \t/ yearly\n                            \n                        ');
    });
 
    it('11.Test to check the "Enterprice plan" price and text', () => {
        cy.componentVisiblityCheck('.no_border_left',  '\n              \t\t\t\tEnterprise Plan\n                        ');
        cy.componentVisiblityCheck(':nth-child(4) > .inside > .pricing > :nth-child(2)',  '\n                            $\n                        \t1,325.99\n                        \t/ yearly\n                            \n                        ');
    });
 
    it('12.Test to check the features in the "Free plan"', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .inside > [data-tip="Monthly API Request Volume for this<br>particular subscription plan. (excluding<br> 20% tolerance)"]',  '\n                        100API Requests                        ');
        cy.componentVisiblityCheck(':nth-child(1) > .inside > [data-tip="After reaching 100% of the allowance, <br> overages fees will apply."]',  '\n                         + 0.0000000000Each                         ');
        cy.componentVisiblityCheck(':nth-child(1) > .inside > .two', '\n                        No Support                        ');
        cy.componentVisiblityCheck(':nth-child(1) > .inside > [data-tip="Identify the validity of any phone number <br>for 232 countries, areas and territories<br> around the world."]',  '\n                        Number ValidationReal-time\n                        ');
        cy.componentVisiblityCheck(':nth-child(1) > .inside > [data-tip="Detect carrier and line type information,<br> decide which communications to use, <br>increase leads and fight fraud."]',  '\n                        Carrier & Line TypeDetection\n                        ');
        cy.componentVisiblityCheck(':nth-child(1) > .inside > [data-tip="Know the geographical information behind any<br> phone number, for many numbers even down <br>to the city of registration."]',  '\n                        Country & LocationDetection\n                        ');
        cy.componentVisiblityCheck(':nth-child(1) > .inside > [data-tip="Paid customers may access the API and<br> all validation data securely via 256-bit<br> HTTPS Encryption (SSL)."]',  '\n                        256-bit HTTPSEncryption\n                        ');
    });
    
    it('13.Test to check the features in the "Basic plan"', () => {
        cy.componentVisiblityCheck(':nth-child(2) > .inside > [data-tip="Monthly API Request Volume for this<br>particular subscription plan. (excluding<br> 20% tolerance)"]',  '\n                        5,000API Requests                        ');
        cy.componentVisiblityCheck(':nth-child(2) > .inside > [data-tip="After reaching 100% of the allowance, <br> overages fees will apply."]',  '\n                         + 0.0044970000Each                         ');
        cy.componentVisiblityCheck(':nth-child(2) > .inside > .two', '\n                        Standard Support                        ');
        cy.componentVisiblityCheck(':nth-child(2) > .inside > [data-tip="Identify the validity of any phone number <br>for 232 countries, areas and territories<br> around the world."]',  '\n                        Number ValidationReal-time\n                        ');
        cy.componentVisiblityCheck(':nth-child(2) > .inside > [data-tip="Detect carrier and line type information,<br> decide which communications to use, <br>increase leads and fight fraud."]',  '\n                        Carrier & Line TypeDetection\n                        ');
        cy.componentVisiblityCheck(':nth-child(2) > .inside > [data-tip="Know the geographical information behind any<br> phone number, for many numbers even down <br>to the city of registration."]', '\n                        Country & LocationDetection\n                        ')
        cy.componentVisiblityCheck(':nth-child(2) > .inside > [data-tip="Paid customers may access the API and<br> all validation data securely via 256-bit<br> HTTPS Encryption (SSL)."]',  '\n                        256-bit HTTPSEncryption\n                        ');
    });
 
    it('14. Test to check the features in the "Professional plan"', () => {
        // Directly target the .professional > .features selector and verify its content
        cy.componentVisiblityCheck('td.highlighted > .inside > [data-tip="Monthly API Request Volume for this<br>particular subscription plan. (excluding<br> 20% tolerance)"]', '\n                        50,000API Requests                        ');
        cy.componentVisiblityCheck('td.highlighted > .inside > [data-tip="After reaching 100% of the allowance, <br> overages fees will apply."]', '\n                         + 0.0017997000Each                         ');
        cy.componentVisiblityCheck('td.highlighted > .inside > .two',  '\n                        Standard Support                        ');
        cy.componentVisiblityCheck('td.highlighted > .inside > [data-tip="Identify the validity of any phone number <br>for 232 countries, areas and territories<br> around the world."]', '\n                        Number ValidationReal-time\n                        ');
        cy.componentVisiblityCheck('td.highlighted > .inside > [data-tip="Detect carrier and line type information,<br> decide which communications to use, <br>increase leads and fight fraud."]',  '\n                        Carrier & Line TypeDetection\n                        ');
        cy.componentVisiblityCheck('td.highlighted > .inside > [data-tip="Know the geographical information behind any<br> phone number, for many numbers even down <br>to the city of registration."]',  '\n                        Country & LocationDetection\n                        ');
        cy.componentVisiblityCheck('td.highlighted > .inside > [data-tip="Paid customers may access the API and<br> all validation data securely via 256-bit<br> HTTPS Encryption (SSL)."]', '\n                        256-bit HTTPSEncryption\n                        ');
    });
    it('15. Test to check the features in the "Enterprise plan"', () => {
        // Directly target the .professional_plus > .features selector and verify its content
        cy.componentVisiblityCheck(':nth-child(4) > .inside > [data-tip="Monthly API Request Volume for this<br>particular subscription plan. (excluding<br> 20% tolerance)"]',  '\n                        250,000API Requests                        ');
        cy.componentVisiblityCheck(':nth-child(4) > .inside > [data-tip="After reaching 100% of the allowance, <br> overages fees will apply."]', '\n                         + 0.0007799400Each                         ');
        cy.componentVisiblityCheck(':nth-child(4) > .inside > .two',  '\n                        Standard Support                        ');
        cy.componentVisiblityCheck(':nth-child(4) > .inside > [data-tip="Identify the validity of any phone number <br>for 232 countries, areas and territories<br> around the world."]', '\n                        Number ValidationReal-time\n                        ');
        cy.componentVisiblityCheck(':nth-child(4) > .inside > [data-tip="Detect carrier and line type information,<br> decide which communications to use, <br>increase leads and fight fraud."]',  '\n                        Carrier & Line TypeDetection\n                        ');
        cy.componentVisiblityCheck(':nth-child(4) > .inside > [data-tip="Know the geographical information behind any<br> phone number, for many numbers even down <br>to the city of registration."]', '\n                        Country & LocationDetection\n                        ');
        cy.componentVisiblityCheck(':nth-child(4) > .inside > [data-tip="Paid customers may access the API and<br> all validation data securely via 256-bit<br> HTTPS Encryption (SSL)."]', '\n                        256-bit HTTPSEncryption\n                        ');
    });

    it('16. Toggle the "Subscription" button to yearly', () => {
        cy.get('.yearly_price').click();
    });
 
    it('17.Test to check the "Free plan" price and text', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .inside > header',  '\n              \t\t\t\tFree Plan\n                        ');
        cy.componentVisiblityCheck(':nth-child(1) > .inside > .pricing > .yearly_price_data', '\n                            $\n                        \t0.00\n                        \t/ yearly\n                        ');
    });
 
    it('18.Test to check the "Basic plan" price and text', () => {
        cy.componentVisiblityCheck('header.border_right_under_700', 'Basic');
        cy.componentVisiblityCheck(':nth-child(2) > .inside > .pricing > :nth-child(2)',  '\n                            $\n                        \t161.99\n                        \t/ yearly\n                            \n                        ');
    });

    it('19.Test to check the "Professional Plan" price and text', () => {
        cy.componentVisiblityCheck('header.highlighted', 'Professional Plan'); 
        cy.componentVisiblityCheck('td.highlighted > .inside > .pricing > :nth-child(2)',   '\n                            $\n                        \t629.99\n                        \t/ yearly\n                            \n                        ');
    });
 
    it('20.Test to check the "Enterprise Plan" price and text', () => {
        cy.componentVisiblityCheck('.no_border_left', 'Enterprise Plan');
        cy.componentVisiblityCheck(':nth-child(4) > .inside > .pricing > :nth-child(2)',  '\n                            $\n                        \t1,325.99\n                        \t/ yearly\n                            \n                        ');
    });

    it('21.Test to check the "Volume" price and text', () => {
        cy.componentVisiblityCheck('.inside > .pricing > p', 'Volume');
        cy.componentVisiblityCheck(':nth-child(5) > .inside > header',  'Looking for more?Contact us for a quote .');
    });
});
