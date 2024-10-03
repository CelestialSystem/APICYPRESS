import { IPSTACK_BASE_URL } from '../../resources/data';

describe(' Ipstack Glosssary page ', () => {
    before(() => {
        cy.visit(IPSTACK_BASE_URL);
    });

    it('1. Test to naviagate to the "Api Glossary" page', () => {
        cy.AcceptCookies();
        cy.get('.custom-container > :nth-child(3) > :nth-child(5) > a').click();
        cy.navigateUrlwithCookies(`${IPSTACK_BASE_URL}/api-glossary`);
        cy.AcceptCookies();
    });

    it('2. Test to check the text "Ipstack API Glossary" is present', () => {
        cy.checkTextVisibility("Ipstack API Glossary");
    });

    it('3. Test to check the text "Glossary of API Terms, Definitions & Programming Acronyms" is present', () => {
        cy.checkTextVisibility("Glossary of API Terms, Definitions & Programming Acronyms");
    });

    it('4. Test to check text "what is API Glossary" is present', () => {
        cy.checkTextVisibility('What is the API Glossary?');
    });

    it('5. Test to check the sub-heading of the glossary "Ipstack’s API glossary contains an alphabetical list of API-related special terms, definitions, acronyms, and related phrases to help developers understand the terminology. Browse the Ipstack glossary and learn to speak the language of professional API developers!" is present ', () => {
        cy.checkTextVisibility('Ipstack’s API glossary contains an alphabetical list of API-related special terms, definitions, acronyms, and related phrases to help developers understand the terminology. Browse the Ipstack glossary and learn to speak the language of professional API developers!');
    });

    it('6. Test to check the orderwise alphabetical grossary sections.', () => {
        cy.componentVisiblityCheck('#A');
        cy.componentVisiblityCheck('#C');
        cy.componentVisiblityCheck('#D');
        cy.componentVisiblityCheck('#G');
        cy.componentVisiblityCheck('#I');
        cy.componentVisiblityCheck('#U');
        cy.componentVisiblityCheck('#W');
    });

    it('7. Test to chek the "API Access" link', ()=> {
        cy.contains('API Access').click();
        cy.go('back');
    });

    it('8. Test to chek the "DDos" link', ()=> {
        cy.contains('DDoS').click();
        cy.go('back');
    });

    it('9. Test to chek the "ICANN" link', ()=> {
        cy.contains('ICANN').click();
        cy.go('back');
    });

    it('10. Test to click on the "Api Glossary" footer link ', () => {
        cy.get('.custom-container > :nth-child(3) > :nth-child(5) > a').click();
    });
});