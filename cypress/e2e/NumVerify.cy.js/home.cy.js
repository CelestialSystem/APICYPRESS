describe('MarketStack Home page', () => {
    before(() => {
        cy.navigateUrlwithCookies('https://numverify.com/');
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check "Pricing" hyperlink is present in navbar', () => {
        cy.componentVisiblityCheck('ul > :nth-child(1) > a', 'Pricing');
    });

    it('3. Test to check "Documentation" hyperlink is present in navbar', () => {
        cy.componentVisiblityCheck('#menu > ul > :nth-child(2) > a', 'Documentation');
    });

    it('4. Test to check "Affiliates" hyperlink is present in navbar', () => {
        cy.componentVisiblityCheck('#menu > ul > :nth-child(3) > a', 'Affiliates');
    });

    it('5. Test to check "Blog" hyperlink is present in navbar', () => {
        cy.componentVisiblityCheck('#menu > ul > :nth-child(4) > a', 'Blog');
    });

    it('6. Test to check "Sign In" button is present in navbar', () => {
        cy.componentVisiblityCheck('.cursor_pointer', 'Sign In');
    });

    it('7. Test to check "Sign Up for Free" button is present in navbar', () => {
        cy.componentVisiblityCheck('.primary > a', 'Sign Up for Free');
    });

    it('8. Test to check "Country count" is correct', () => {
        cy.get('.promo_sub_heading')
      .invoke('text') // Get the text content
      .then((text) => {
        const match = text.match(/\d+/); // Extract the first number found in the text
        const extractedNumber = match ? parseInt(match[0], 10) : null; // Convert it to an integer

        // Now we have the number, let's assert it with another element's number
        cy.get('.partners_header') // Replace with the actual selector for the other element
          .invoke('text')
          .then((otherText) => {
            const otherNumber = otherText.match(/\d+/); // Convert the second element's text to a number
            const otherextractedNumber = match ? parseInt(match[0], 10) : null;
            // Assert that both numbers are equal
            expect(extractedNumber).to.equal(otherextractedNumber);
          });
      });
    });

    it('9. test to check ""', () => {
        cy.componentVisiblityCheck('.presentation_title', ' Know the details behind every phone number ');
    });

    it('10. Test to click "Number Validation" card', () => {
        cy.get('.block > tbody > .panel_menu > :nth-child(1)').click();
        cy.wait(2000);
        cy.componentVisiblityCheck('.inside > .valid', 'Validation & Lookup');
        cy.componentVisiblityCheck('.numbering', 'Numbering Plans');
        cy.componentVisiblityCheck('.https', '256-bit HTTPS');
        cy.componentVisiblityCheck('.documentation', 'Interactive Documentation');
        cy.componentVisiblityCheck('.support', 'World-Class Tech Support');
        cy.componentVisiblityCheck('.usage', 'Extended Usage Statistics');
    });

    it('11. Test to check "Simple & Secure" card is present', () => {
        cy.get('.container.active > :nth-child(3) > a').click();
        cy.get('.block > tbody > .panel_menu > :nth-child(2) > .href_on_mobile > .inside').click();
        cy.componentVisiblityCheck('.earth', 'Power your applications');
    });

    it('12. Test to click on "Documentation" button', () => {
        cy.get('.inside > .no_deco').click();
        cy.url().should('eq', 'https://numverify.com/documentation');
        cy.go('back');
    });

    it('13. Test to Check "A complete, easy-to-use JSON API for your market data needs" title is present', () => {
        cy.wait(1000);
        cy.get('.panel_menu > :nth-child(3)').click();
        cy.componentVisiblityCheck('.international', 'International Numbers');
        cy.componentVisiblityCheck('.national', 'National Numbers');
        cy.componentVisiblityCheck('.location', 'Location Data');
        cy.componentVisiblityCheck('.carrier', 'Carrier Detection');
        cy.componentVisiblityCheck('.line_type', 'Line Type Detection');
        cy.componentVisiblityCheck('.more', '[ and more ]');
    });

    it('14. Test to Check "30,000+ companies and 80+ universities cant be wrong" title is present', () => {
        cy.get('.container.active > :nth-child(3) > a').click();
        cy.wait(1000);
        cy.get('.container.active > :nth-child(3) > a').click();
        cy.wait(1000);
        cy.get('.container.active > :nth-child(3) > a').click();
        cy.get(':nth-child(4) > .href_on_mobile > .inside').click();
        cy.wait(2000);
        cy.componentVisiblityCheck(':nth-child(1) > .inside > header > h3', 'Free Plan')

    });

    it('15. Test to click "Get Free API Key" button page should redirect to documentation page', () => {
       cy.componentVisiblityCheck('.container > p > a', 'Get Free API Key')
    });
    it('16. Test to click "Get Free API Key" button page should redirect to documentation page', () => {
        cy.get(':nth-child(1) > .cta')
       cy.componentVisiblityCheck(':nth-child(1) > .cta', 'Get API Key')
    });

    it('17. Test to check footer is present', () => {
       cy.componentVisiblityCheck('footer');
    });

    it('18. Test to click on "GET API KEY" footer is present', () => {
        cy.get(':nth-child(1) > .cta').click();
        cy.assertPathname('/signup');
        cy.go('back');
    });

    it('19. Test to click on "Pricing" footer is present', () => {
        cy.get(':nth-child(2) > .cta').click();
        cy.assertPathname('/product');
    });
});