describe('IpApi documentation page', () => {
  before(() => {
    cy.visit('https://ipapi.com');
  });

  it('1. Test to "Accept Cookies" if not already accepted', () => {
    cy.AcceptCookies();
  });

  it('2. Test to Click to the "Documentation" hyperlink', () => {
    cy.get('.header > .container > ul > :nth-child(2) > a').click();
  });

  it('3. Test to check "API Documentation" title is present', () => {
    cy.componentVisiblityCheck(':nth-child(1) > h2', 'API Documentation');
  });

  it('4. Test to check "Get Free Api Key" button is present', () => {
    cy.componentVisiblityCheck('.sign_up', 'Get Free API Key')
  });

  it('5. Test to Click on "GET FREE API KEY" button', () => {
    cy.get('.sign_up').click();
    cy.assertPathname('/signup/free');
    cy.go('back');
  });

  it('6. Test to "CODE EXAMPLE" button is present', () => {
    cy.componentVisiblityCheck('.go_to_code_examples', 'Code Example');
  });

  it('7. Test to click "CODE EXAMPLE" button ', () => {
    cy.get('.go_to_code_examples').click();
    cy.componentVisiblityCheck('#php_curl > h2', 'Code Examples');
    cy.get('.go_to_code_examples').scrollIntoView();
  });

  it('8. Test to check sidebar heading should be "Basic"', () => {
    cy.componentVisiblityCheck(':nth-child(1) > .doc_heading', 'Basics')
  });

  it('9. Test to navigate to "API Access Key"', () => {
    cy.get('.menu > :nth-child(1) > :nth-child(2) > a').click();
    cy.get('#access_keys > h3').scrollIntoView();
    cy.componentVisiblityCheck('#access_keys > h3', 'API Access Key & Authentication');
  });

  it('10. Test to navigate to "API Response" section', () => {
    cy.get('.menu > :nth-child(3) > :nth-child(3) > a').scrollIntoView();
    cy.get('.menu > :nth-child(3) > :nth-child(3) > a').click();
    cy.get('#api_response > h3').scrollIntoView();
    cy.componentVisiblityCheck('#api_response > h3', 'API Response');
  });

  it('11. Test to navigate to "API Endpoints" section', () => {
    cy.get(':nth-child(1) > :nth-child(4) > a').scrollIntoView();
    cy.get(':nth-child(1) > :nth-child(4) > a').click();
    cy.get('#api_endpoints > h3').scrollIntoView();
    cy.componentVisiblityCheck('#api_endpoints > h3', 'API Endpoints');
  });

  it('12. Test to navigate to "HTTPS Encryption" section', () => {
    cy.get(':nth-child(1) > :nth-child(5) > a').scrollIntoView();
    cy.get(':nth-child(1) > :nth-child(5) > a').contains('HTTPS Encryption').click();
    cy.get('#https > h3').scrollIntoView();
    cy.componentVisiblityCheck('#https > h3', '256-bit HTTPS Encryption Available on: Standard Plan and higher');
  });

  it('13. Test to navigate to "JSONP Callbacks" section', () => {
    cy.get(':nth-child(1) > :nth-child(6) > a').scrollIntoView();
    cy.get(':nth-child(1) > :nth-child(6) > a').contains('JSONP Callbacks').click();
    cy.get('#jsonp_callbacks > h3').scrollIntoView();
    cy.componentVisiblityCheck('#jsonp_callbacks > h3', 'JSONP Callbacks');
  });

  it('14. Test to navigate to "API Error Codes" section', () => {
    cy.get(':nth-child(1) > :nth-child(7) > a').scrollIntoView();
    cy.get(':nth-child(1) > :nth-child(7) > a').contains('API Error Codes').click();
    cy.get('#api_error_codes > h3').scrollIntoView();
    cy.componentVisiblityCheck('#api_error_codes > h3', 'API Error Codes');
  });

  it('15.Test to check "API Features" text is present', () => {
    cy.componentVisiblityCheck(':nth-child(2) > .doc_heading', 'API Features');
  });

  it('16.Test to navigate to "Standard Lookup" section', () => {
    cy.get('.menu > :nth-child(2) > :nth-child(2) > a').scrollIntoView()
    cy.get('.menu > :nth-child(2) > :nth-child(2) > a').contains('Standard IP Lookup').click();
    cy.get('#standard_lookup > h3').scrollIntoView()
    cy.componentVisiblityCheck('#standard_lookup > h3', 'Standard IP Lookup');
  });

  it('17. Test to navigate to "Bulk IP Lookup" section', () => {
    cy.get('.menu > :nth-child(2) > :nth-child(3) > a').scrollIntoView()
    cy.get('.menu > :nth-child(2) > :nth-child(3) > a').click();
    cy.get('#bulk_lookup > h3').scrollIntoView()
    cy.componentVisiblityCheck('#bulk_lookup > h3', 'Bulk IP Lookup');
  });

  it('18. Test to navigate to "Origin Ip Lookup" section', () => {
    cy.get('.menu > :nth-child(2) > :nth-child(4) > a').scrollIntoView();
    cy.get('.menu > :nth-child(2) > :nth-child(4) > a').click();
    cy.get('#origin_lookup > h3').scrollIntoView();
    cy.componentVisiblityCheck('#origin_lookup > h3', 'Origin IP Lookup');
  });

  it('19. Test to navigate to "Response Objects" section', () => {
    cy.get(':nth-child(13) > a').contains('Response Objects').scrollIntoView();
    cy.get(':nth-child(13) > a').contains('Response Objects').click();
    cy.get('.menu > :nth-child(2) > :nth-child(5) > a').scrollIntoView();
    cy.componentVisiblityCheck('.menu > :nth-child(2) > :nth-child(5) > a', 'Response Objects');
  });

  it('20. Test to navigate to "Specify Response Format" section', () => {
    cy.get('.menu > :nth-child(3) > :nth-child(2) > a').contains('Specify Response Format').scrollIntoView();
    cy.get('.menu > :nth-child(3) > :nth-child(2) > a').contains('Specify Response Format').click();
    cy.get('.menu > :nth-child(3) > :nth-child(2) > a').scrollIntoView();
    cy.componentVisiblityCheck('.menu > :nth-child(3) > :nth-child(2) > a', 'Specify Response Format');
  });

  it('21. Test to navigate to "Specify Response Field" section', () => {
    cy.get('.menu > :nth-child(3) > :nth-child(3) > a').scrollIntoView();
    cy.get('.menu > :nth-child(3) > :nth-child(3) > a').contains('Specify Response Field').click();
    cy.get('#specify_response_fields > h3').should('be.visible').scrollIntoView();
    cy.componentVisiblityCheck('#specify_response_fields > h3', 'Specify Response Fields Available on: All plans');
  });

  it('22. Test to navigate to "Enable Hostname Lookup" section', () => {
    cy.get('.menu > :nth-child(3) > :nth-child(5) > a').scrollIntoView();
    cy.get('.menu > :nth-child(3) > :nth-child(5) > a').contains('Enable Hostname Lookup').click();
    cy.get('#enable_hostname_lookup > h3').scrollIntoView();
    cy.componentVisiblityCheck('#enable_hostname_lookup > h3', 'Enable Hostname Lookup');
  });

  it('23. Test to navigate to "Enable Security Data" section', () => {
    cy.get('.menu > :nth-child(3) > :nth-child(6) > a').scrollIntoView();
    cy.get('.menu > :nth-child(3) > :nth-child(6) > a').contains('Enable Security Data').click();
    cy.get('.menu > :nth-child(3) > :nth-child(6) > a').scrollIntoView();
    cy.componentVisiblityCheck('.menu > :nth-child(3) > :nth-child(6) > a', 'Enable Security Data');
  });

  it('24. Test to navigate to "Billing" text', () => {
    cy.componentVisiblityCheck(':nth-child(5) > .doc_heading', 'Billing');
  });

  it('25. Test to navigate to "Billing Overages" section', () => {
    cy.get('.menu > :nth-child(5) > :nth-child(2) > a').scrollIntoView();
    cy.get('.menu > :nth-child(5) > :nth-child(2) > a').contains('Billing Overages').click();
    cy.get(':nth-child(19) > :nth-child(3)').scrollIntoView();
    cy.componentVisiblityCheck(':nth-child(19) > :nth-child(3)', 'What is an overage?');
  });

  it('26. Test to navigate to "Platinum Support" section', () => {
    cy.get('.menu > :nth-child(5) > :nth-child(3) > a').scrollIntoView()
    cy.get('.menu > :nth-child(5) > :nth-child(3) > a').click();
    cy.get(':nth-child(19) > :nth-child(22)').scrollIntoView();
    cy.componentVisiblityCheck(':nth-child(19) > :nth-child(22)', 'What does Platinum Support include?');
  });

  it('27. Test to check for "Upgrade now" button is present', () => {
    cy.get('.platinum-btn').contains('Upgrade now').click();
    cy.go('back');
  });

  it('28. Test to check for "CONTACT US" button is present', () => {
    cy.componentVisiblityCheck('p > .apilayer-support', 'Contact Us');
  });

  it('29. Test to check for "CONTACT US" button is present', () => {
    cy.get('p > .apilayer-support').click();
    cy.assertPathname('/contact');
  });

  it('30. Test to check for the footer links documentation', () => {
    cy.get('.custom-container > :nth-child(3) > :nth-child(2) > a').click();
  });
});