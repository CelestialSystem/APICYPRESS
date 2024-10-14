import { NUMVERIFY_BASE_URL } from '../../resources/data';

describe('NumVerify Blogs Page', () => {
    before(() => {
        cy.visit(NUMVERIFY_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Click on "Blog" button from footer', () => {
        cy.get('#menu > ul > :nth-child(4) > a').click();
        cy.url().should('eq', 'https://blog.numverify.com/')
    });

    it('3. test to check "Recent Post" section is present', () => {
        cy.componentVisiblityCheck('.et_pb_text_0', '\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\tRECENT POST\n\t\t\t');
    });

    it('4. test to check "Top Post" section is present', () => {
        cy.componentVisiblityCheck('.et_pb_text_1', '\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\tTOP POST\n\t\t\t');
    });

    it('5. test to check "pagination" section is present', () => {
        cy.componentVisiblityCheck('.wp-pagenavi');
    });

    it('6. test to check recent blogs should be present in blog view', () => {
        cy.get(':nth-child(1) > .wp-block-latest-posts__post-title')
      .invoke('text')
      .then((firstText) => {
        cy.get('#post-15503 > .entry-title > a')
          .invoke('text')
          .then((secondText) => {
            expect(firstText.trim()).to.equal(secondText.trim());
          });
      });
    });
});