import { IPSTACK_BASE_URL } from '../../resources/data';

describe('IPstack Social media icons', () => {
    before(() => {
        cy.visit('https://ipstack.com');
    });

    it('1.Test to check "Twitter" icon is present', () => {
        cy.AcceptCookies();
        cy.scrollTo('bottom');
        cy.componentVisiblityCheck('.github > a > img');
    });

    it('2.Test to click on "Twitter" icon', () => {
        cy.scrollTo('bottom');
        cy.get('.github > a > img').click();
        cy.url('eq', 'https://x.com/apilayer/')
    });

    it('3. Test to check "Facebook" icon is present', () => {
        cy.visit('https://ipstack.com')
        cy.scrollTo('bottom');
        cy.componentVisiblityCheck('.facebook > a > img').should('be.visible');
    });

    it('4. Test to click on "Facebook" icon', () => {
        cy.visit('https://ipstack.com')
        cy.scrollTo('bottom');
        cy.get('.facebook > a > img').click();
        cy.url('eq', 'https://facebook.com/apilayer/')
    });

    it('5. Test to check "Instagram" icon is present', () => {
        cy.visit('https://ipstack.com')
        cy.scrollTo('bottom');
        cy.componentVisiblityCheck('.twitter > a > img');
    });

    it('6. Test to click on "Instagram" icon', () => {
        cy.visit('https://ipstack.com')
        cy.scrollTo('bottom');
        cy.get('.twitter > a > img').click();
        cy.url('eq', 'https://instagram.com/apilayer/');
    });

    it('7. Test to check "Youtube" icon is present', () => {
        cy.visit('https://ipstack.com')
        cy.scrollTo('bottom');
        cy.componentVisiblityCheck('.youtube > a > img');
    });

    it('8. Test to click on "Youtube" icon', () => {
        cy.scrollTo('bottom');
        cy.get('.youtube > a > img').click();
        cy.url('eq', 'https://youtube.com/apilayer/')
    });

    it('9. Test to check "Linkdin" icon is present', () => {
        cy.visit('https://ipstack.com')
        cy.scrollTo('bottom');
        cy.componentVisiblityCheck('.instagram > a > img');
    });

    it('10. Test to click on "Linkdin" icon', () => {
        cy.scrollTo('bottom');
        cy.get('.instagram > a > img').click();
        cy.url('eq', 'https://linkdin.com/apilayer/')
    });
})