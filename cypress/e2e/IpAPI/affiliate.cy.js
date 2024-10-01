describe('IpApi Affiliate page', () => {
    before(() => {
        cy.visit('https://ipapi.com');
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check "Affiliate" hyperlink is there', () => {
        cy.componentVisiblityCheck('.header > .container > ul > :nth-child(4) > a', 'Affiliates');
    });

    it('3. Test to Click on "Affiliate" hyperlink', () => {
        cy.get('.header > .container > ul > :nth-child(4) > a').click();
    });

    it('4. Test to Check the title of "Affiliates" page', () => {
        cy.componentVisiblityCheck('h1', '\n                        Earn Passive Income with                                                     Ipapi Affiliate Program\n')
    });

    it('5. Test to click on "Apply" button', () => {
        cy.get('.content > .btn').click()
        cy.url().should('eq', 'https://partners.ipapi.com/');
    });

    it('6. Test to check Title is "iPapi Partner Program" is present', () => {
        cy.componentVisiblityCheck('.heading', 'iPapi Partner Program');
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

    it('13. Test to check the checkbox', () => {
        cy.get('.checkbox').click();
    });

    it('14. Test to check "Sign Up" button is present', () => {
        cy.componentVisiblityCheck('.btn', 'Sign Up');
        cy.go('back')
    });

    it('15. Test to check title "Why Join the Ipapi Affiliate Program?" is present', () => {
        cy.get('.aboutSection > h2').scrollIntoView();
        cy.componentVisiblityCheck('.aboutSection > h2', 'Why Join the Ipapi Affiliate Program?')
    });

    it('16. Test to check title "Simplify Promotion with Comprehensive Resources" is present', () => {
        cy.get('.heading > h2').scrollIntoView();
        cy.componentVisiblityCheck('.heading > h2', 'Simplify Promotion with Comprehensive Resources')
    });

    it('17. Test to check title "Who Can Become an Ipapi Affiliate?" is present', () => {
        cy.get('.ipstack > .container > h2').scrollIntoView();
        cy.componentVisiblityCheck('.ipstack > .container > h2', 'Who Can Become an Ipapi Affiliate?')
    });

    it('18. Test to check title "Your Network, Our Ideal Customer" is present', () => {
        cy.get('.content > h2').scrollIntoView();
        cy.componentVisiblityCheck('.content > h2', 'Your Network, Our Ideal Customer')
    });

    it('19. Test to check title "What our Affiliates Are Saying" is present', () => {
        cy.get('.testimonials > .container > h2').scrollIntoView();
        cy.componentVisiblityCheck('.testimonials > .container > h2', 'What our Affiliates Are Saying')
    });

    it('20. Test to "Arrow" buttons is present', () => {
        cy.componentVisiblityCheck('.custom-nav')
    });

    it('21. Test to check title "Affiliate Program: Terms & Conditions" is present', () => {
        cy.get('.termsConditions > h2').scrollIntoView();
        cy.componentVisiblityCheck('.termsConditions > h2', 'Affiliate Program: Terms & Conditions')
    });

    it('22. Test to check title "Get Answers to Your Questions (FAQ)" is present', () => {
        cy.get('.Accordions > .container > :nth-child(1)').scrollIntoView();
        cy.componentVisiblityCheck('.Accordions > .container > :nth-child(1)', 'Get Answers to Your Questions (FAQ)')
    });

    it('23. Test to Click on expand button', () => {
        cy.get(':nth-child(2) > .accordion').click()
    });

    it('24. Test to Click on collapse button', () => {
        cy.get(':nth-child(2) > .accordion').click()
    });

    it('25. Test to check title "Affiliate Links" is present', () => {
        cy.get('.Our_links > h2.text-center').scrollIntoView();
        cy.componentVisiblityCheck('.Our_links > h2.text-center', 'Affiliate Links')
    });

    it('26. Test to click on "Sign Up Now and Become an Ipapi Affiliate!" is present', () => {
        cy.get('.container > .btn').click()
        cy.url().should('eq', 'https://partners.ipapi.com/');
        cy.go('back')
    });

    it('27. Test to click on "Affiliate" button from footer', () => {
        cy.get('.custom-container > :nth-child(2) > :nth-child(6)')
        cy.url().should('eq', 'https://affiliate.ipapi.com/');
    });
});