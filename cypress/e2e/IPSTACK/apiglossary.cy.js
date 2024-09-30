describe(' Ipstack API Glosssary page ', () => {
    before(() => {
        cy.visit('https://ipstack.com/');
    });

    it('1. Test to naviagate to the "Api Glossary" page', () => {
        cy.AcceptCookies();
        cy.get('.custom-container > :nth-child(3) > :nth-child(5) > a').click();
        cy.visit('https://ipstack.com/api-glossary');
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
        // cy.go('back');
    });

    it('8. Test to chek the "API Access" link', ()=> {
        cy.get(':nth-child(4) > :nth-child(1) > a').click();
        cy.go('back');
    });


    it('Test to click on the "Api Glossary" footer link ', () => {
        cy.get('.custom-container > :nth-child(3) > :nth-child(5) > a').click();
    });
});