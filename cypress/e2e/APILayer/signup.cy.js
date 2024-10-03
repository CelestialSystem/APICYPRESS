/// <reference types="cypress" />

describe("Test for Signup and Login for API layer Main page", function () {
  before(() => {
    cy.visit('https://apilayer.com/');
  });

  describe("Test for Signup for API layer Main page", function () {

    it('1. Test to "Accept Cookies" if not already accepted', () => {
      cy.AcceptCookies();
    });

    it('2. Test to select "Sign Up" button from APi layer', () => {
      cy.wait(1000);
      cy.get('#signUpButton').click();
      cy.get('.h2').should('be.visible');
      cy.get('.h2').should('have.text', 'Welcome to APILayer');
      cy.url().should('eq', 'https://apilayer.com/signup');
    })

    it("3. Test to check subtitle of signup page", () => {
      cy.get(':nth-child(2) > p').should('have.text', 'Register now and start using the API marketplace!');
    })

    it('4. Test to update value in "First Name" filed in signup page', () => {
      cy.get('#signinSrName').should('be.visible');
      cy.get('#signup_form > :nth-child(5) > .input-label').should('have.text', 'Full name');
      cy.get('#signinSrName').type('Test User')
    })

    it('5. Test to update "Email Address" in signup page', () => {
      cy.get(':nth-child(6) > .input-label').should('have.text', 'Email address');
      cy.get('#signinSrEmail').type('dayiv47601@albarulo.com');
    })

    it('6. Test to "Update Password" in signup page', () => {
      cy.get(':nth-child(7) > .input-label').should('have.text', 'Password');
      cy.get('#signinSrPassword').type('Test@1234');
    })

    it('7. Test to "update Country" in signup page', () => {
      cy.get(':nth-child(8) > .input-label').should('have.text', 'Country');
      cy.get('#country').select('India');
    })

    it('8. Test to select "you have read terms" in signup page', () => {
      cy.get('#tos-accepted > .custom-control > .custom-control-label').should('have.text', "\nI have read, understand, and agree to APILayer's Terms\nof Use & Privacy Statement\n");
      cy.get('#tos-accepted > .custom-control > .custom-control-label').click();
    })

    it('9. Test to select "terms of use" link in signup page', () => {
      cy.get('[href="https://www.ideracorp.com/legal/apilayer#tabs-2"]').should('have.text', "Terms\nof Use");
      cy.get('[href="https://www.ideracorp.com/legal/apilayer#tabs-2"]').click();
    })

    it('10. Test to select "terms of use" link in signup page', () => {
      cy.get('.custom-control-label > [href="https://www.ideracorp.com/Legal/APILayer/PrivacyStatement"]').should('have.text', "Privacy Statement");
      cy.get('.custom-control-label > [href="https://www.ideracorp.com/Legal/APILayer/PrivacyStatement"]').click();
    })

    it('11. Test to select "you have accept join APIlayer\'s mailing list" in signup page', () => {
      cy.get('#marketing > .custom-control > .custom-control-label').should('have.text', "I agree to join APILayer's mailing list. Read more");
      cy.get('#marketing > .custom-control > .custom-control-label').click();
    })

    it('12. Test to select "terms of use" link in signup page', () => {
      cy.get('#marketing > .custom-control > .custom-control-label > a').should('have.text', "Read more");
      cy.get('#marketing > .custom-control > .custom-control-label > a').click();
    })

    it('13. Test to check "I agree" text after selecting Read more in signup page', () => {
      cy.get('#expandableContent > small').should('be.visible');
      cy.get('#expandableContent > small').should('have.text', "I agree to receive marketing communication from APILayer for product updates, sales services, promotions, news, and events. I can withdraw my consent at any time and update my communication preference at the subscription center from any email received.\n");
    })

    xit('14. Test to hide "I agree" text after selecting Read more in signup page', () => {
      cy.get('#marketing > .custom-control > .custom-control-label').click();
      cy.get('#expandableContent > small').should('not.be.visible');
    })

    it('15. Test to see "Already have an account?"" in signup page is present', () => {
      cy.get('.mb-3 > .text-dark').should('be.visible');
      cy.get('.mb-3 > .text-dark').should('have.text', "Already have an account?");
    })

    it('16. Test to select "Login" button in signup page', () => {
      cy.get('.row > .mb-3 > .font-weight-bold').should('be.visible');
      cy.get('.row > .mb-3 > .font-weight-bold').should('have.text', "Login");
      cy.get('.row > .mb-3 > .font-weight-bold').click();
    })

    it('17. Test to navigate back to signup page after selecting "Login" button', () => {
      cy.go('back');
      cy.get('.h2').should('be.visible');
      cy.get('.h2').should('have.text', 'Welcome to APILayer');
    })

    xit('18. Test to should able to select "I am not a robot" in signup page', () => {
      cy.get('.g-recaptcha')
        .then(($iframes) => {
          $iframes.each(($iframe) => {
            const title = $iframe.contentDocument.body.title; // Access the title of the iframe's document
            if (title === 'reCAPTCHA') {
              // Perform actions on the iframe
              cy.wrap($iframe).within(() => {
                // Your actions here
                cy.get('.recaptcha-checkbox').click();
              });
            }
          });
        });
    })

    it('19. Test to select "Sign Up" button from singup page', () => {
      cy.get('#signup_button').should('have.text', "\nSign Up for free\n \n\n");
      // cy.get('#signup_button').click();
    })
  });
});