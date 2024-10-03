import { IPSTACK_BASE_URL } from '../../resources/data';

describe('Ipstack Login page ', () => {
  before(() => {
    cy.visit(IPSTACK_BASE_URL);
  });

  it('1. Test to click the "Login" button and navigate to "Login" page', () => {
    cy.AcceptCookies();
    cy.get('.login > a').click();
  });
  
  it('2. Test to check the text "Login" is present', () => {
    cy.AcceptCookies();
    cy.assertPathname('/login');
    cy.checkTextVisibility('Log in');
  });

  it('3. Test to display the "Email" input field', () => {
    cy.componentVisiblityCheck('#email');
  });

  it('4. Test to display the "Password" input field', () => {
    cy.componentVisiblityCheck('#password');
  });

  it('5. Test to display the "Login" button', () => {
    cy.componentVisiblityCheck('.submit');
  });

  it('6. Test to show an error for empty "Email" and "Password"', () => {
    cy.get('#email').clear();
    cy.get('#password').clear();
    cy.get('.submit').click();
    cy.checkAlert('Please enter your account email and password.');
  });

  it('7. Test to show an error for invalid "Email" format', () => {
    cy.get('#email').type('invalid-email');
    cy.get('#password').type('password123');
    cy.get('.submit').click();
    cy.checkAlert('Please enter your account email and password');
    cy.get('#email').clear();
  });

  it('8. Test to show an error for incorrect "Password"', () => {
    cy.get('#email').type('TestUserApiLayer@gmail.com');
    cy.get('#password').type('wrongpassword');
    cy.get('.submit').click();
    cy.checkAlert('Login failed. Please try again.');
  });

  it('9. Test to show an error for incorrect "Email"', () => {
    cy.get('#email').clear().type('test@gmail.com');
    cy.get('#password').clear().type('tester@123');
    cy.get('.submit').click();
    cy.checkAlert('Login failed. Please try again.');
  });

  it('10. Test to check "Password" field of type password', () => {
    cy.get('#password').should('have.attr', 'type', 'password');
  });

  it('11. Test to click on "Forgot password" link', () => {
    cy.componentVisiblityCheck('.forgot');
    cy.get('.forgot').click();
    cy.navigateUrlwithCookies(`${IPSTACK_BASE_URL}/forgot`);
  });

  it('12. Test to load the "Forgot Password" page', () => {
    cy.checkTextVisibility('Forgot Password');
  });

  it('13. Test to have the "Email" input field on the "Forgot Password" page', () => {
    cy.componentVisiblityCheck('#email');
  });

  it('14. Test to allow navigating back to "Login" page', () => {
    cy.componentVisiblityCheck('.log_in_instead');
    cy.get('.log_in_instead').click();
    cy.assertPathname('/login');
  });

  xit('15. Test to "Login" successfully with valid credentials', () => {
    cy.get('#email').clear().type('TestUserApiLayer@gmail.com');
    cy.get('#password').clear().type('tester@123');
    cy.get('.submit').click();
  });

  xit('16. Test to allow navigating back to "Login" page by clicking the "Sign Out" button', () => {
    cy.contains('Sign Out').click();
    cy.navigateUrlwithCookies(`${IPSTACK_BASE_URL}/login/`);
    cy.checkTextVisibility('Log in');
  });

});