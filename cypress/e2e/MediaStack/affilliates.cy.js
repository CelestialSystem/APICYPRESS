describe('Documentation Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
      cy.visit('https://mediastack.com/');
      cy.wait(2000); // Wait for the page to load
    });
  
    it('0. Test to Accept Cookies if not already accepted', () => {
      // Check if the "Accept Cookies" button is visible or exists
      cy.AcceptCookies();
    });
  
    it('1. Test to check affiliate hyperlink is there', () => {
        cy.componentVisiblityCheck('.header > .container > ul > :nth-child(4) > a', 'Affiliates');
    });

    it('2. Test to Click on affiliate hyperlink', () => {
        cy.get('.header > .container > ul > :nth-child(4) > a').click();
    });
  
    it('3. Test to Check the title of Affiliates page', () => {
        cy.componentVisiblityCheck('h1',  '\n                        Earn Passive Income with                                                     Mediastack Affiliate Program\n                                            ');
    });
  
    it('4. Test to click on apply button', () => {
        cy.get('.content > .btn').click();
        cy.url().should('eq', 'https://partners.mediastack.com/');
    });
  
    it('5. Test to check description to be visible', () => {
        cy.componentVisiblityCheck('.description-label');
    });
  
    it('6. Test to check email input field is there', () => {
        cy.componentVisiblityCheck('.puser_email', 'Email');
    });
  
    it('7. Test to check user can type on email input field', () => {
        cy.get('#puser_email').type('cypresstest@gmail.com');
        cy.get('#puser_email').should('have.value', 'cypresstest@gmail.com');
    });
  
    it('8. Test to check First Name input field is there', () => {
        cy.componentVisiblityCheck('.puser_profile_first_name', 'First name');
    });
  
    it('9. Test to check user can type on First Name input field', () => {
        cy.get('.puser_profile_first_name').type('Test User');
        cy.get('#puser_profile_attributes_first_name').should('have.value', 'Test User');
    });
  
    it('10. Test to check password input field is there', () => {
        cy.componentVisiblityCheck('.puser_password', 'Password');
    });
  
    it('11. Test to check user can type on password input field', () => {
        cy.get('.puser_password').type('1234abc');
        cy.get('#puser_password').should('have.value', '1234abc');
    });
  
    it('12. Test to check the checkbox', () => {
        cy.get('.checkbox').click();
        cy.get('#puser_promoter_marketing_consent').should('be.checked');
    });
  
    it('13. Test to check Sign Up button is there', () => {
        cy.componentVisiblityCheck('.btn', 'Sign Up');
        cy.go('back')
    });
  
    it('14. Test to check title "Why Join the Mediastack Affiliate Program?"', () => {
        cy.get('.aboutSection > h2').scrollIntoView();
        cy.componentVisiblityCheck('.aboutSection > h2', 'Why Join the Mediastack Affiliate Program?');
    });

    it('15. Test to check title "Simplify Promotion with Comprehensive Resources"', () => {
        cy.get('.heading > h2').scrollIntoView();
        cy.componentVisiblityCheck('.heading > h2', 'Simplify Promotion with Comprehensive Resources');
    });

    it('16. Test to check title "Who Can Become an Mediastack Affiliate?"', () => {
        cy.get('.ipstack > .container > h2').scrollIntoView();
        cy.componentVisiblityCheck('.ipstack > .container > h2', 'Who Can Become an Mediastack Affiliate?');
    });

    it('17. Test to check title "Your Network, Our Ideal Customer"', () => {
        cy.get('.content > h2').scrollIntoView();
        cy.componentVisiblityCheck('.content > h2', 'Your Network, Our Ideal Customer');
    });
  
    it('18. Test to check title "What our Affiliates Are Saying"', () => {
        cy.get('.testimonials > .container > h2').scrollIntoView();
        cy.componentVisiblityCheck('.testimonials > .container > h2', 'What our Affiliates Are Saying');
    });
  
    it('19. Test to arrow buttons should be visible', () => {
        cy.get('.custom-nav').should('be.visible');
    });

    it('20. Test to check title "Affiliate Program: Terms & Conditions"', () => {
        cy.get('.termsConditions > h2').scrollIntoView();
        cy.componentVisiblityCheck('.termsConditions > h2', 'Affiliate Program: Terms & Conditions');
    });
  
    it('21. Test to check title "Get Answers to Your Questions (FAQ)"', () => {
        cy.get('.Accordions > .container > :nth-child(1)').scrollIntoView();
        cy.componentVisiblityCheck('.Accordions > .container > :nth-child(1)', 'Get Answers to Your Questions (FAQ)');
    });

    it('22. Test to Click on expand button', () => {
        cy.get(':nth-child(2) > .accordion').click();
        cy.componentVisiblityCheck(':nth-child(2) > .accordion-content');
    });

    it('23. Test to Click on collapse button', () => {
        cy.get(':nth-child(2) > .accordion').click();
        cy.get(':nth-child(2) > .accordion-content').should('not.be.visible');
    });
    
    it('24. Test to check title "Affiliate Links"', () => {
        cy.get('.Our_links > h2.text-center').scrollIntoView();
        cy.componentVisiblityCheck('.Our_links > h2.text-center', 'Affiliate Links');
    });

    it('25. Test to click on "Sign Up Now and Become an Ipapi Affiliate!" button', () => {
        cy.get('.container > .btn').click();
        cy.url().should('eq', 'https://partners.mediastack.com/');
        cy.go('back');
    });
  
    it('26. Test to click on "Affiliate" button from footer', () => {
        cy.get('.custom-container > :nth-child(2) > :nth-child(6)');
        cy.url().should('eq', 'https://affiliate.mediastack.com/');
    });
  }); 