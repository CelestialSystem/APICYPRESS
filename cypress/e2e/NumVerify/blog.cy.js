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

    it('2. Tets to check "Recent Post" section is presentx', () => {
        cy.componentVisiblityCheck('.et_pb_text_0', '\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\tRECENT POST\n\t\t\t')
    });

    
});

