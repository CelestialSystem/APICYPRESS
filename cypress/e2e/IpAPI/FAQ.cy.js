describe('IpApi FAQ Page', () => {
  before(() => {
    cy.visit('https://ipapi.com');
    cy.wait(2000); // Wait for the page to load
  });

  it('0. Test to Accept Cookies if not already accepted', () => {
    cy.AcceptCookies();
  });

  it('1. Test to check if "FAQ" hyperlink is present', () => {
    cy.componentVisiblityCheck('.header > .container > ul > :nth-child(3)', 'FAQ')
  });

  it('2. Test to Click on "FAQ" hyperlink', () => {
    cy.get('.header > .container > ul > :nth-child(3)').click();
    cy.assertPathname('/faq');
  });

  it('3. Test to Check the title of FAQ page', () => {
    cy.componentVisiblityCheck('.hero > .container', 'Frequently Asked Questions');
  });

  it('4. Test to Check the Sub heading "General" is present', () => {
    cy.componentVisiblityCheck('.container > :nth-child(1) > h3', 'General');
  });

  it('5. Test to Click on expand button of general', () => {
    cy.get(':nth-child(1) > ul > :nth-child(1) > .question').click();
  });

  it('6. Test to Check after expand answer is present or not', () => {
    cy.componentVisiblityCheck('.open > .answer');
  });

  it('7. Test to Check Collapse answer ', () => {
    cy.get('.open > .question').click();
  });

  it('8. Test to Check subheading is "IP Data & API" is present', () => {
    cy.componentVisiblityCheck(':nth-child(2) > h3', 'IP Data & API')
  });

  it('9. Test to Click on expand button of "IP Data & API"', () => {
    cy.get(':nth-child(2) > ul > :nth-child(1) > .question').click();
  });

  it('10. Test to  Check after expand answer is present', () => {
    cy.componentVisiblityCheck('.open > .answer');
  });

  it('11. Test to Click on collaspe button', () => {
    cy.get('.open > .question').click();
  });

  it('12. Test to Check subheading is "Plans, Pricing & Payment" is present', () => {
    cy.componentVisiblityCheck(':nth-child(3) > h3', 'Plans, Pricing & Payment')
  });

  it('13. Test to Click on expand button of "Plans, Pricing & Payment"', () => {
    cy.get(':nth-child(3) > ul > :nth-child(1) > .question').click();
  });

  it('14. Test to  Check after expand answer is present', () => {
    cy.componentVisiblityCheck('.open > .answer');
  });

  it('15. Test to Click on collaspe button', () => {
    cy.get('.open > .question').click();
  });

  it('16. Test to Click on "GET API KEY ACCESS"', () => {
    cy.get('.container > p > a').click();
    cy.assertPathname('/signup/free');
  });

});