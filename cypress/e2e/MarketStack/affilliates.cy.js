import { MARKETSTACK_BASE_URL, PARTNER_MARKETSTACK, AFFILIATES_MARKETSTACK } from '../../resources/data';

describe('MarketStack Affiliates page', () => {
    before(() => {
      cy.visit(MARKETSTACK_BASE_URL);
    });
  
    it('1. Test to "Accept Cookies" if not already accepted', () => {
      // Check if the "Accept Cookies" button is visible or exists
      cy.AcceptCookies();
    });
  
    it('2. Test to check "Affiliate" hyperlink is present', () => {
        cy.componentVisiblityCheck('.header > .container > ul > :nth-child(4) > a', 'Affiliates');
    });

    it('3. Test to click on "Affiliate" hyperlink', () => {
        cy.get('.header > .container > ul > :nth-child(4) > a').click();
        cy.url().should('eq', 'https://affiliate.marketstack.com/');
    });
  
    it('4. Test to Check the title of Affiliates page', () => {
        cy.componentVisiblityCheck('h1',  '\n                        Earn Passive Income with                                                     Marketstack Affiliate Program\n                                            ');
    });
  
    it('5. Test to click on "Apply" button', () => {
        cy.get('.content > .btn').click();
        cy.url().should('eq', 'https://partners.marketstack.com/');
    });
  
    it('6. Test to check "Description" to be present', () => {
        cy.componentVisiblityCheck('.description-label');
    });
  
    it('7. Test to check "Email" input field is present', () => {
        cy.componentVisiblityCheck('.puser_email', 'Email');
    });
  
    it('8. Test to check user can type on "Email" input field', () => {
        cy.get('#puser_email').type('cypresstest@gmail.com');
        cy.get('#puser_email').should('have.value', 'cypresstest@gmail.com');
    });
  
    it('9. Test to check "First Name" input field is present', () => {
        cy.componentVisiblityCheck('.puser_profile_first_name', 'First name');
    });
  
    it('10. Test to check user can type on "First Name" input field', () => {
        cy.get('.puser_profile_first_name').type('Test User');
        cy.get('#puser_profile_attributes_first_name').should('have.value', 'Test User');
    });
  
    it('11. Test to check "Password" input field is present', () => {
        cy.componentVisiblityCheck('.puser_password', 'Password');
    });
  
    it('12. Test to check user can type on "Password" input field', () => {
        cy.get('.puser_password').type('1234abc');
        cy.get('#puser_password').should('have.value', '1234abc');
    });
  
    it('13. Test to check the "checkbox"', () => {
        cy.get('.checkbox').click();
        cy.get('#puser_promoter_marketing_consent').should('be.checked');
    });
  
    it('14. Test to check "Sign Up" button is present', () => {
        cy.componentVisiblityCheck('.btn', 'Sign Up');
        cy.go('back')
    });
  
    it('15. Test to check title "Why Join the Marketstack Affiliate Program?" is present', () => {
        cy.get('.aboutSection > h2').scrollIntoView();
        cy.componentVisiblityCheck('.aboutSection > h2', 'Why Join the Marketstack Affiliate Program?');
    });

    it('16. Test to check title "Simplify Promotion with Comprehensive Resources" is present', () => {
        cy.get('.heading > h2').scrollIntoView();
        cy.componentVisiblityCheck('.heading > h2', 'Simplify Promotion with Comprehensive Resources');
    });

    it('17. Test to check title "Who Can Become an Marketstack Affiliate?" is present', () => {
        cy.get('.ipstack > .container > h2').scrollIntoView();
        cy.componentVisiblityCheck('.ipstack > .container > h2', 'Who Can Become an Marketstack Affiliate?');
    });

    it('18. Test to check title "Your Network, Our Ideal Customer" is present', () => {
        cy.get('.content > h2').scrollIntoView();
        cy.componentVisiblityCheck('.content > h2', 'Your Network, Our Ideal Customer');
    });
  
    it('19. Test to check title "What our Affiliates Are Saying" is present', () => {
        cy.get('.testimonials > .container > h2').scrollIntoView();
        cy.componentVisiblityCheck('.testimonials > .container > h2', 'What our Affiliates Are Saying');
    });
  
    it('20. Test to "Arrow" buttons should be present', () => {
        cy.get('.custom-nav').should('be.visible');
    });

    it('21. Test to check title "Affiliate Program: Terms & Conditions" is present', () => {
        cy.get('.termsConditions > h2').scrollIntoView();
        cy.componentVisiblityCheck('.termsConditions > h2', 'Affiliate Program: Terms & Conditions');
    });
  
    it('22. Test to check title "Get Answers to Your Questions (FAQ)" is present', () => {
        cy.get('.Accordions > .container > :nth-child(1)').scrollIntoView();
        cy.componentVisiblityCheck('.Accordions > .container > :nth-child(1)', 'Get Answers to Your Questions (FAQ)');
    });

    it('23. Test to click on expand button', () => {
        cy.get(':nth-child(2) > .accordion').click();
        cy.componentVisiblityCheck(':nth-child(2) > .accordion-content');
    });

    it('24. Test to click on collapse button', () => {
        cy.get(':nth-child(2) > .accordion').click();
        cy.get(':nth-child(2) > .accordion-content').should('not.be.visible');
    });

    it('25. Test to check title "Affiliate Links" is present', () => {
        cy.get('.Our_links > h2.text-center').scrollIntoView();
        cy.componentVisiblityCheck('.Our_links > h2.text-center', 'Affiliate Links');
    });

    it('26. Test to click on "Sign Up Now and Become an MarketStack Affiliate!" button', () => {
        cy.get('.container > .btn').click();
        cy.url().should('eq', PARTNER_MARKETSTACK);
    });
  
    it('27. Test to click on "Affiliate" button from footer', () => {
        cy.navigateUrlwithCookies(MARKETSTACK_BASE_URL);
        cy.get('.custom-container > :nth-child(2) > :nth-child(6) > a').click({force:true});
        cy.url().should('eq', AFFILIATES_MARKETSTACK);
    });
  }); 
  