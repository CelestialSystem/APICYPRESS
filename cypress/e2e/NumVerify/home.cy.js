import { NUMVERIFY_BASE_URL } from '../../resources/data';

describe('NumVerify Home page', () => {
    before(() => {
        cy.navigateUrlwithCookies(NUMVERIFY_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check "Pricing" hyperlink is present in navbar', () => {
        cy.componentVisiblityCheck(':nth-child(1) > a > .helvetica', 'Pricing');
    });

    it('3. Test to check "Documentation" hyperlink is present in navbar', () => {
        cy.componentVisiblityCheck(':nth-child(2) > a > .helvetica', 'Documentation');
    });

    it('4. Test to check "Affiliates" hyperlink is present in navbar', () => {
        cy.componentVisiblityCheck(':nth-child(3) > a > .helvetica', 'Affiliates');
    });

    it('5. Test to check "Blog" hyperlink is present in navbar', () => {
        cy.componentVisiblityCheck('#menu > ul > :nth-child(4) > a', 'Blog');
    });

    it('6. Test to check title "Sign In" is visible is preSsent', () => {
        cy.componentVisiblityCheck('.cursor_pointer', "Sign In");
    });

    it('7. Test to check title "Sign Up for Free" button is present', () => {
        cy.componentVisiblityCheck('.primary > a', "Sign Up for Free");
    });

    it('8. Test to check count of "country" is correct', () => {
        cy.get('.promo_sub_heading')
      .invoke('text') // Get the text content
      .then((text) => {
        const match = text.match(/\d+/); // Extract the first number found in the text
        const extractedNumber = match ? parseInt(match[0], 10) : null; // Convert it to an integer

        // Now we have the number, let's assert it with another element's number
        cy.get('.partners_header') // Replace with the actual selector for the other element
          .invoke('text')
            const number = text.match(/\d+/); // Extract the first number found in the text
            const partnerCount = number ? parseInt(match[0], 10) : null; // Convert it to an integer
            // const otherNumber = parseInt(otherText, 10); // Convert the second element's text to a number

            // Assert that both numbers are equal
            expect(extractedNumber).to.equal(partnerCount);
          });
      });

    it('9. Test to check "Number Validation" card is present', () => {
       cy.componentVisiblityCheck('.data_intro', 'Number Validation');
    });

    it('10. Test to check "Simple & Secure API" card is present', () => {
       cy.componentVisiblityCheck('.href_on_mobile > .inside > .integration', 'Simple & Secure API');
    });

    it('11. Test to check "Advanced Tools" card is present', () => {
       cy.componentVisiblityCheck(':nth-child(3) > .href_on_mobile > .inside > .functionality', 'Advanced Tools');
    });

    it('12. Test to check "Easy on your Budget" card is present', () => {
       cy.componentVisiblityCheck(':nth-child(4) > .href_on_mobile > .inside > .budget', 'Easy on your Budget');
    });

    it('13. Test to click "Number Validation" card', () => {
        cy.get('.data_intro').click();
        cy.componentVisiblityCheck('.inside > .valid', 'Validation & Lookup');
        cy.get('.href_on_mobile > .inside > .integration').click();
     });

     it('14. Test to click "Simple & Secure API" card is present', () => {
        cy.get('.href_on_mobile > .inside > .integration').click();
        cy.componentVisiblityCheck('.earth', 'Power your applications');
        cy.get('.container.active > :nth-child(3) > a').click();
        cy.wait(1000); // Due to CSS effects, added a wait
        cy.get('.container.active > :nth-child(3) > a').click();
     });

     it('15. Test to click "Advanced Tool" card is present', () => {
        cy.get(':nth-child(3) > .href_on_mobile > .inside > .functionality').click();
        cy.componentVisiblityCheck('.international', 'International Numbers');
        cy.wait(1000); // Due to CSS effects, added a wait
        cy.get('.container.active > :nth-child(3) > a').click();
        cy.wait(1000); // Due to CSS effects, added a wait
        cy.get('.container.active > :nth-child(3) > a').click();
        cy.wait(1000); // Due to CSS effects, added a wait
        cy.get('.container.active > :nth-child(3) > a').click();
     });

     it('16. Test to click "Easy on your Budget" card is present', () => {
        cy.get(':nth-child(4) > .href_on_mobile > .inside > .budget').click();
        cy.componentVisiblityCheck(':nth-child(1) > .inside > header > h3', 'Free Plan');
     });

    it('17. Test to check footer is present', () => {
       cy.wait(1000); // Due to CSS effects, added a wait
       cy.componentVisiblityCheck('#footer');
    });
});