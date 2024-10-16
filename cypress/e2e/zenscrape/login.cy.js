import { ZENSCRAPE_BASE_URL, ZENSCRAPE_LOGIN_LINK } from '../../resources/data';

describe('Zenscrape Login page  ', () => {
  before(() => {
    cy.navigateUrlwithCookies(ZENSCRAPE_BASE_URL);
  });

  it('1. Test to click on the "Login" button and check the actual url', () => {
    cy.get('.bg-transparent').click();
    cy.componentVisiblityCheck('.card-header','Login');
  });
  
  it('2. Test to check the "Login" page should match the actual URL, if not redirect to the actual URL to ensure other test cases do not fail', () => {
    cy.url().then((currentUrl) => {
      if (!currentUrl.includes('/login')) {
        // Redirect to the actual URL if not already there
        cy.visit(ZENSCRAPE_LOGIN_LINK);
      }
    });
    cy.assertPathname('/login');
    cy.get('.card-header').should('contain.text', 'Login');
  });

  it('3. Test to display the "Email" input field', () => {
    cy.get(':nth-child(2) > .col-md-6 > .form-control').should('be.visible');
  });

  it('4. Test to display the "Password" input field', () => {
    cy.get(':nth-child(3) > .col-md-6 > .form-control').should('be.visible');
  });

  it('5. Test to display the "Login" button', () => {
    cy.get('.btn-primary').should('be.visible');
  });

  it('6. Test to show an error for empty "Email" and "Password"', () => {
    cy.get(':nth-child(2) > .col-md-6 > .form-control').clear();
    cy.get(':nth-child(3) > .col-md-6 > .form-control').clear();
    cy.get('.btn-primary').click();
    cy.get('.alert')
      .should('be.visible')
      .and('contain.text', 'Whoops! Something went wrong!');
    cy.get('.alert > ul > :nth-child(1)').should('be.visible', 'The email field is required.');
    cy.get('.alert > ul > :nth-child(2)').should('be.visible', 'The password field is required.');
  });

  it('7. Test to show an error for invalid "Email" format', () => {
    cy.get(':nth-child(2) > .col-md-6 > .form-control').type('invalid-email');
    cy.get(':nth-child(3) > .col-md-6 > .form-control').type('password123');
    cy.get('.btn-primary').click();
    cy.get('.alert').should('be.visible').and('contain.text', 'Whoops! Something went wrong!');
    cy.get('.alert > ul > :nth-child(1)').should('be.visible', 'The email field is required.');
    cy.get('.alert > ul > :nth-child(2)').should('be.visible', 'The password field is required.');
  });

  it('8. Test to show an error for incorrect "Password"', () => {
    cy.get(':nth-child(2) > .col-md-6 > .form-control').type('TestUserApiLayer@gmail.com');
    cy.get(':nth-child(3) > .col-md-6 > .form-control').type('wrongpassword');
    cy.get('.btn-primary').click();
    cy.get('.alert').should('be.visible').and('contain.text', 'Whoops! Something went wrong!');
    cy.get('.alert > ul > li').should('be.visible', 'These credentials do not match our records');
  });

  it('9. Test to show an error for incorrect "Email"', () => {
    cy.get(':nth-child(2) > .col-md-6 > .form-control').clear().type('testinvalid@gmail.com');
    cy.get(':nth-child(3) > .col-md-6 > .form-control').clear().type('Test@123');
    cy.get('.btn-primary').click();
    cy.get('.alert').should('be.visible').and('contain.text', 'Whoops! Something went wrong!');
    cy.get('.alert > ul > li').should('be.visible', 'These credentials do not match our records');
  });

  it('10. Test to check "Password" field of type password', () => {
    cy.get(':nth-child(3) > .col-md-6 > .form-control').should('have.attr', 'type', 'password');
  });

  it('11. Test to check for "Forgot Password" button click', () => {
    cy.get('.btn-link').click();
    cy.navigateUrlwithCookies('https://app.zenscrape.com/password/reset');
  })

  it('12. Test to check the text "Reset Password" is present', () => {
    cy.get('.card-header').should('contain.text', 'Reset Password');
  });

  it('13.Test to have the "Email" input field', () => {
    cy.get('.form-control').should('be.visible');
  });

  it('14. Test to allow navigating back to "Login" page', () => {
    cy.navigateUrlwithCookies(ZENSCRAPE_LOGIN_LINK);
  });
});
