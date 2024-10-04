import { IPAPI_BASE_URL } from '../../resources/data';

describe('IpApi FAQ page', () => {
  before(() => {
    cy.visit(IPAPI_BASE_URL);
  });

  it('1. Test to "Accept Cookies" if not already accepted', () => {
    cy.AcceptCookies();
  });

  it('2. Test to check if "FAQ" hyperlink is present', () => {
    cy.componentVisiblityCheck('.header > .container > ul > :nth-child(3)', 'FAQ')
  });

  it('3. Test to click on "FAQ" hyperlink', () => {
    cy.get('.header > .container > ul > :nth-child(3)').click();
    cy.assertPathname('/faq');
  });

  it('4. Test to check the title of FAQ page', () => {
    cy.componentVisiblityCheck('.hero > .container', 'Frequently Asked Questions');
  });

  it('5. Test to check the sub heading "General" is present', () => {
    cy.componentVisiblityCheck('.container > :nth-child(1) > h3', 'General');
  });

  it('6. Test to click on expand button of general', () => {
    cy.get(':nth-child(1) > ul > :nth-child(1) > .question').click();
  });

  it('7. Test to check after expand answer is present', () => {
    cy.componentVisiblityCheck('.open > .answer');
  });

  it('8. Test to check collapse answer ', () => {
    cy.get('.open > .question').click();
  });

  it('9. Test to check subheading is "IP Data & API" is present', () => {
    cy.componentVisiblityCheck(':nth-child(2) > h3', 'IP Data & API')
  });

  it('10. Test to click on expand button of "IP Data & API"', () => {
    cy.get(':nth-child(2) > ul > :nth-child(1) > .question').click();
  });

  it('11. Test to check after expand answer is present', () => {
    cy.componentVisiblityCheck('.open > .answer');
  });

  it('12. Test to click on collaspe button', () => {
    cy.get('.open > .question').click();
  });

  it('13. Test to check subheading is "Plans, Pricing & Payment" is present', () => {
    cy.componentVisiblityCheck(':nth-child(3) > h3', 'Plans, Pricing & Payment')
  });

  it('14. Test to click on expand button of "Plans, Pricing & Payment"', () => {
    cy.get(':nth-child(3) > ul > :nth-child(1) > .question').click();
  });

  it('15. Test to check after expand answer is present', () => {
    cy.componentVisiblityCheck('.open > .answer');
  });

  it('16. Test to click on collaspe button', () => {
    cy.get('.open > .question').click();
  });

  it('17. Test to click on "GET API KEY ACCESS"', () => {
    cy.get('.container > p > a').click();
    cy.assertPathname('/signup/free');
  });

});