describe('MediaStack Documentation Page', () => {
    before(() => {
        cy.visit('https://mediastack.com/');
    });

    it('1. Test to naviagate to the "Documentation"', () => {
        cy.AcceptCookies();
        cy.get('.header > .container > ul > :nth-child(2) > a').click();
        cy.assertPathname('/documentation');
    });

    it('2. Test to check the text "API Documentation" in the documentation is present', () => {
        cy.AcceptCookies();
        cy.componentVisiblityCheck(':nth-child(1) > h2', 'API Documentation');
    });

    it('3. Test to check the text "Getting Started" is present', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .doc_heading', 'Getting Started');
    });

    it('4. Test to navigate to "API Authentication" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(1) > :nth-child(2) > a', 'API Authentication');
        cy.get('.menu > :nth-child(1) > :nth-child(2) > a').click();
        cy.componentVisiblityCheck('#access_keys > h3', 'API Authentication');
    });

    it('5. Test to navigate to "HTTPS Encryption" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(1) > :nth-child(3) > a', 'HTTPS Encryption');
        cy.get('.menu > :nth-child(1) > :nth-child(3) > a').click();
        cy.componentVisiblityCheck('#https > h3', '256-bit HTTPS Encryption');
    });

    it('6. Test to navigate to "API Error Codes" section', () => {
        cy.componentVisiblityCheck(':nth-child(1) > :nth-child(4) > a', 'API Error Codes');
        cy.get(':nth-child(1) > :nth-child(4) > a').click();
        cy.componentVisiblityCheck('#api_errors > h3', 'API Errors');
    });
    
    it('7. Test to navigate to "Live News" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(2) > :nth-child(2) > a', 'Live News');
        cy.get('.menu > :nth-child(2) > :nth-child(2) > a').click();
        cy.componentVisiblityCheck('#live_news > h3', 'Live News');
    });
    
    it('8. Test to navigate to "Historical News" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(2) > :nth-child(3) > a', 'Historical News');
        cy.get('.menu > :nth-child(2) > :nth-child(3) > a').click();
        cy.componentVisiblityCheck('#historical_news > h3', 'Historical News');
    });
    
    it('9. Test to navigate to "Error Codes" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(2) > :nth-child(4) > a', 'News Sources');
        cy.get('.menu > :nth-child(2) > :nth-child(4) > a').click();
        cy.componentVisiblityCheck('#news_sources > h3', 'News Sources');
    });
    
    it('10.Test to navigate "Specify Sources"', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(3) > :nth-child(2) > a', 'Specify Sources');
        cy.get('.menu > :nth-child(3) > :nth-child(2) > a').click();
        cy.componentVisiblityCheck('#specify_sources > h3', 'Specify Sources');
    });
    
    it('11.Test to navigate to "Specify Categories" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(3) > :nth-child(3) > a', 'Specify Categories');
        cy.get('.menu > :nth-child(3) > :nth-child(3) > a').click();
        cy.componentVisiblityCheck('#specify_categories > h3', 'Specify Categories');
    });
    
    it('12. Test to navigate to "Specify Countries" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(3) > :nth-child(4) > a', 'Specify Countries');
        cy.get('.menu > :nth-child(3) > :nth-child(4) > a').click();
        cy.componentVisiblityCheck('#specify_countries > h3', 'Specify Countries');
    });
    
    it('13. Test to navigate to "Specify Language" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(3) > :nth-child(5) > a', 'Specify Language');
        cy.get('.menu > :nth-child(3) > :nth-child(5) > a').click();
        cy.componentVisiblityCheck('#specify_languages > h3', 'Specify Language');
    });
    
    // Adding tests for the "Options" section
    it('14. Test to navigate to "Search Keyword" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(3) > :nth-child(6) > a', 'Search Keyword');
        cy.get('.menu > :nth-child(3) > :nth-child(6) > a').click();
        cy.componentVisiblityCheck('#search_keywords > h3', 'Search Keyword');
    });
    
    it('15. Test to navigate to "PHP" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(4) > :nth-child(2) > a', 'PHP');
        cy.get('.menu > :nth-child(4) > :nth-child(2) > a').click();
        cy.componentVisiblityCheck('#php > h3', 'PHP');
    });
    
    it('16. Test to navigate to "Python" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(4) > :nth-child(3) > a', 'Python');
        cy.get('.menu > :nth-child(4) > :nth-child(3) > a').click();
        cy.componentVisiblityCheck('#python > h3', 'Code Example - Python');
    });
    
    it('17. Test to navigate to "jQuery" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(4) > :nth-child(4) > a', 'jQuery');
        cy.get('.menu > :nth-child(4) > :nth-child(4) > a').click();
        cy.componentVisiblityCheck('#jquery > h3', 'Code Example - jQuery');
    });
    
    it('18. Test to navigate to "GO" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(4) > :nth-child(5) > a', 'Go');
        cy.get('.menu > :nth-child(4) > :nth-child(5) > a').click();
        cy.componentVisiblityCheck('#go > h3', 'Code Example - Go');
    });
    
    //test cases for the Billing section.
    it('19. Test to navigate to "Ruby" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(4) > :nth-child(6) > a', 'Ruby');
        cy.get('.menu > :nth-child(4) > :nth-child(6) > a').click();
        cy.componentVisiblityCheck('#ruby > h3', 'Code Example - Ruby');
    });

    it('20. Test to navigate to "Billing Overages" section', () => { 
        cy.componentVisiblityCheck('.menu > :nth-child(5) > :nth-child(2) > a', 'Billing Overages')
        cy.get('.menu > :nth-child(5) > :nth-child(2) > a').click();
        cy.componentVisiblityCheck('#billing-overages', 'Business Continuity - API Overages')
    });
});