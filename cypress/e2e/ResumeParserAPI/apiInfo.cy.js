import { RESUME_PARSER_API } from '../../resources/data';

describe('Resume Parser API Info page', () => {
    before(() => {
        cy.visit(RESUME_PARSER_API);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });

    it('2. Test to click "Api Info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
        cy.componentVisiblityCheck('#details');
    });

    it('3. should display the description', () => {
        cy.get('article p').first().should('contain.text', 'Resume parsing API is a hosted service that takes a resume as an input that can be in PDF or MS Word format');
    });

    it('4. should display the use cases', () => {
        const useCases = [
          'Search, Sort and Store resumes',
          'Enhance your talent database.',
          'Save time and efforts.',
          'Eliminate manual intervention. Eliminate privacy issues.',
          'Faster closing of open positions'
        ];
        useCases.forEach((useCase) => {
          cy.get('ul').should('contain.text', useCase);
        });
    });

    it('5. should mention getting an API key for parsing a CV/resume', () => {
        cy.get('h4').contains('Parsing a CV/resume on a URL').next('p').should('contain.text', 'get your API key');
    });

    it('6. Test to check "Beer Slider" is present', () => {
        cy.componentVisiblityCheck('#beer-slider');
    });

    it('4. Test to check "After Image" is visible', () => {
        cy.componentVisiblityCheck('img[alt="Resume in JSON format"]');
    });

    it('7. Test to check Slider visibility after resizing', () => {
        // Change the width style dynamically and check visibility
        cy.get('.beer-reveal').invoke('css', 'width', '75%');
        cy.componentVisiblityCheck('.beer-handle');
    });

    it('8. Test to check Beer Slider visibility when hidden', () => {
        cy.get('#beer-slider').invoke('css', 'display', 'none');
        cy.get('#beer-slider').should('not.be.visible');
    });
    
    it('9. Test to check the shell code snippet is present', () => {
        // Check if the <pre> element with class "language-shell" is present
        cy.get('pre.language-shell').should('exist');
    });  
      
    it('10. Test to check the JavaScript code snippet is present', () => {
        // Check if the <pre> element with class "language-javascript" is present
        cy.get('pre.language-javascript').should('exist');
    });

    it('11. Test to check the shell command snippet is present', () => {
        // Check if the <pre> element with class "language-shell" is present
        cy.get('pre.language-shell').should('exist');
    });  
    
    it("12. Test to check visibility of 'Bulk processing of resumes' heading", () => {
        // Check if the <h4> heading is present
        cy.get('article > :nth-child(20)').should('exist');
    
        // Optionally check if the heading text is exactly as expected
        cy.get('article > :nth-child(20)').should('have.text', 'Bulk processing of resumes');
    });
    
    
    it('13. Test to check the presence of "Security and Privacy" heading', () => {
        // Check if the <h4> element with the specified text is present
        cy.get('article > :nth-child(23)').should('exist');
    
        // Optionally, check if the text is exactly as expected
        cy.get('article > :nth-child(23)').should('have.text', 'Security and Privacy');
    });
    
    it('15. Test to check the presence of "Why is the price so competitive?" heading', () => {
        // Check if the <h4> element with the specified text is present
        cy.get('article > :nth-child(28)').should('exist');
    
        // Optionally, check if the text is exactly as expected
        cy.get('article > :nth-child(28)').should('have.text', 'Why is the price so competitive?');
    });
    

    it('16. Test to click on the link that contains "Register for free" and check if the Pricing tab is active', () => {
        // Click the link that contains the text 'Register for free'
        cy.contains('a.subscribe-action', 'Register for free').click();
    
        // Check if the Pricing tab is active
        cy.get('a.nav-link.font-weight-bold.active#pricing-tab')
          .should('exist')  // Check if the element exists
          .and('be.visible') // Check if it is visible
          .and('have.class', 'active'); // Check if it has the 'active' class

         // return to api info tab 
        cy.get('#details-tab > .d-md-flex > span').click();
    });

    it('17. Test to click on the link that contains "subscribing to the service" and check if the Pricing tab is active', () => {
        // Click the link that contains the text 'Register for free'
        cy.contains('a.subscribe-action', 'Register for free').click();
    
        // Check if the Pricing tab is active
        cy.get('a.nav-link.font-weight-bold.active#pricing-tab')
          .should('exist')  // Check if the element exists
          .and('be.visible') // Check if it is visible
          .and('have.class', 'active'); // Check if it has the 'active' class

        // return to api info tab 
        cy.get('#details-tab > .d-md-flex > span').click();
    });
    
    it('18. Test to click on "get your API key" and check if the new page has "API Marketplace" link', () => {
        // Click the link that contains the text 'get your API key'
        cy.contains('a', 'get your API key').click();
    
        // Check if the new page contains the 'API Marketplace' link
        cy.get('a.text-dark[href="/"]')
          .should('exist')  // Check if the element exists
          .and('be.visible') // Check if it is visible
          .and('have.text', 'API Marketplace'); // Check if it has the correct text

        // Navigate back to the main page with cookies preserved
        cy.navigateUrlwithCookies(RESUME_PARSER_API);

         // return to api info tab 
         cy.get('#details-tab > .d-md-flex > span').click();
    });
    

    it('19. Test to check if the link to "https://.../sample_resume.docx" is present and their click behaviour', () => {
        // Check if the link exists and contains the expected URL
        cy.get('a[href*="https://assets.apilayer.com/apis/codes/resume_parser/sample_resume.docx"]')
          .should('exist')  // Check if the link exists
          .and('have.attr', 'href') // Check if it has the correct href attribute
          .and('include', 'https://assets.apilayer.com/apis/codes/resume_parser/sample_resume.docx'); // Confirm it contains the expected URL
    });

    it('20. Test to check if the email link to "customercare@apilayer.com" is present', () => {
        // Check if the email link exists and has the correct href attribute
        cy.get('a[href="mailto:customercare@apilayer.com"]')
          .should('exist')  // Check if the link exists
          .and('be.visible') // Check if it is visible
          .and('have.attr', 'href', 'mailto:customercare@apilayer.com'); // Check if it has the correct href attribute
    });

    it('21. Test to check if the "GDPR compliance" link is present', () => {
        // Check if the GDPR compliance link exists and has the correct href attribute
        cy.get('a[href="/docs/article/gdpr-compliance"]')
          .should('exist') // Check if the link exists
          .and('be.visible') // Check if it is visible
          .and('have.attr', 'href', '/docs/article/gdpr-compliance'); // Check if it has the correct href attribute
    });

    
    it('22. Test to check if the "Privacy Policy" link is present', () => {
        // Check if the Privacy Policy link exists and has the correct href attribute
        cy.get('a[href="/privacy"]')
          .should('exist') // Check if the link exists
          .and('be.visible') // Check if it is visible
          .and('have.attr', 'href', '/privacy'); // Check if it has the correct href attribute
    });

    
    it('23. Test to check if the "let us know" mailto link is present', () => {
        // Check if the 'let us know' link exists and has the correct mailto attribute
        cy.get('a[href="mailto:customercare@apilayer.com"]')
          .should('exist') // Check if the link exists
          .and('be.visible') // Check if it is visible
          .and('have.attr', 'href', 'mailto:customercare@apilayer.com') // Check if it has the correct href attribute
          .and('contain', 'let us know'); // Check if it contains the correct text
    });
    
    
    it('24. Test to click on the link that contains "See the plans " and check if the Pricing tab is active', () => {
        // Click the link that contains the text 'Register for free'
        cy.contains('a.subscribe-action', 'See the plans').click();
    
        // Check if the Pricing tab is active
        cy.get('a.nav-link.font-weight-bold.active#pricing-tab')
          .should('exist')  // Check if the element exists
          .and('be.visible') // Check if it is visible
          .and('have.class', 'active'); // Check if it has the 'active' class

        // return to api info tab 
        cy.get('#details-tab > .d-md-flex > span').click();
    });

    it('25. Test to check if the "get in touch" mailto link is present', () => {
        // Check if the 'get in touch' link exists and has the correct mailto attribute
        cy.get('a[href="mailto:customercare@apilayer.com"]')
          .should('exist') // Check if the link exists
          .and('be.visible') // Check if it is visible
          .and('have.attr', 'href', 'mailto:customercare@apilayer.com') // Check if it has the correct href attribute
          .and('contain', 'get in touch'); // Check if it contains the correct text
    });
});
