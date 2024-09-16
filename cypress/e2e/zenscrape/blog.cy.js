describe('Blog Page', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.visit('https://zenscrape.com/');
    });

    it('1.Test to navigate to the Blog page', () => {
        cy.get('.gap-8 > [href="/blog"]').should('be.visible').click();
        cy.navigateUrlwithCookies('https://zenscrape.com/blog/');
    });

    it('2. Test to check the text web scraping blog', () => {
        cy.componentVisiblityCheck('.text-3xl', 'Web Scraping Blog');
    });

    it('3. Test to check the text of the web scraping caption', () => {
        cy.componentVisiblityCheck('.text-center > .mt-3', 'Enjoy our web scraping tutorials! We hope to help you with your next web scraping project.');
    });

    it('4. Test to check the Recent post section is there or not', () => {
        cy.componentVisiblityCheck(':nth-child(1)', 'RECENT POSTS');
    });

    it('5. Test to check the Top post section is there or not', () => {
        cy.componentVisiblityCheck('.mt-8', 'TOP POSTS');
    });

    it('6. Test to check the Top python webscraping tools Blog', () => {
        cy.componentVisiblityCheck('.text-sm > [href="https://zenscrape.com/top-python-web-scraping-tools-comparison/"]', 'Top Python Tools for Web Scraping: A Comparative Analysis')
    });

    it('7. Test to check Mastering Headless Browser Automation for Scalable Web Scraping Blog', () => {
        cy.componentVisiblityCheck('.text-sm > [href="https://zenscrape.com/mastering-headless-browser-automation-web-scraping/"]', 'Mastering Headless Browser Automation for Scalable Web Scraping');
    });

    it('8. Test to check the How to build a Simple Proxy Switcher in Node.js? Blog', () => {
        cy.componentVisiblityCheck('.text-sm > [href="https://zenscrape.com/how-to-build-a-simple-proxy-switcher-in-node-js/"]', 'How to build a Simple Proxy Switcher in Node.js?');
    });

    it('9. Test to check Optimizing Data Processing with Python Web Scraping Techniques Blog', () => {
        cy.componentVisiblityCheck(':nth-child(4) > :nth-child(1) > a', 'Optimizing Data Processing with Python Web Scraping Techniques')
    });

    it('10. Test to check The Beginner’s Guide to Scrape Data from APIs Blog', () => {
        cy.componentVisiblityCheck(':nth-child(4) > :nth-child(2) > a', 'The Beginner’s Guide to Scrape Data from APIs');
    });

    it('11. Test to check World’s Leading Web Scraping Services in 2024', () => {
        cy.componentVisiblityCheck(':nth-child(3) > a', 'World’s Leading Web Scraping Services in 2024');
    });

    it('12. Test to check the Top Python Web Scraping Tools Blog', () => {
        cy.get('.text-sm > [href="https://zenscrape.com/top-python-web-scraping-tools-comparison/"]').should('be.visible').click();
        cy.wait(8000);
        cy.componentVisiblityCheck('.post-title > .text-4xl', 'Top Python Tools for Web Scraping: A Comparative Analysis');
        cy.componentVisiblityCheck('.w-full > .text-4xl', 'Top Python Tools for Web Scraping: A Comparative Analysis');
        cy.go('back');
    });

    it('13. Test to check Mastering Headless Browser Automation for Scalable Web Scraping Blog', () => {
        cy.get('.text-sm > [href="https://zenscrape.com/mastering-headless-browser-automation-web-scraping/"]').should('be.visible').click();
        cy.componentVisiblityCheck('.w-full > .text-4xl', 'Mastering Headless Browser Automation for Scalable Web Scraping');
        cy.componentVisiblityCheck('.post-title > .text-4xl', 'Mastering Headless Browser Automation for Scalable Web Scraping');
        cy.go('back');
    });

    it('14. Test to check the How to build a Simple Proxy Switcher in Node.js? Blog', () => {
        cy.get('.text-sm > [href="https://zenscrape.com/how-to-build-a-simple-proxy-switcher-in-node-js/"]').should('be.visible').click();
        cy.componentVisiblityCheck('.post-title > .text-4xl', 'How to build a Simple Proxy Switcher in Node.js?');
        cy.componentVisiblityCheck('.w-full > .text-4xl', 'How to build a Simple Proxy Switcher in Node.js?');
        cy.go('back');
    });

    it('15. Test to check Optimizing Data Processing with Python Web Scraping Techniques Blog', () => {
        cy.get('.text-sm > [href="https://zenscrape.com/optimizing-data-processing-with-python-web-scraping-techniques/"]').should('be.visible').click();
        cy.componentVisiblityCheck('.w-full > .text-4xl', 'Optimizing Data Processing with Python Web Scraping Techniques');
        cy.componentVisiblityCheck('.post-title > .text-4xl', 'Optimizing Data Processing with Python Web Scraping Techniques');
        cy.go('back');
    });

    it('16. Test to check The Beginner’s Guide to Scrape Data from APIs Blog', () => {
        cy.get('.text-sm > [href="https://zenscrape.com/the-beginners-guide-to-scrape-data-from-apis/"]').should('be.visible').click();
        cy.componentVisiblityCheck('.w-full > .text-4xl', 'The Beginner’s Guide to Scrape Data from APIs');
        cy.componentVisiblityCheck('.post-title > .text-4xl', 'The Beginner’s Guide to Scrape Data from APIs')
        cy.go('back');
    });

    it('17. Test to check World’s Leading Web Scraping Services in 2024', () => {
        cy.get('.text-sm > [href="https://zenscrape.com/worlds-leading-web-scraping-services/"]').should('be.visible').click();
        cy.componentVisiblityCheck('.w-full > .text-4xl', 'World’s Leading Web Scraping Services in 2024');
        cy.componentVisiblityCheck('.post-title > .text-4xl', 'World’s Leading Web Scraping Services in 2024')
        cy.go('back');
    });

    it('18. Test to check the Python Tools for a webscrapping from a Blog center page', () => {
        cy.get('.text-xl > [href="https://zenscrape.com/top-python-web-scraping-tools-comparison/"]').should('be.visible').click();
        cy.componentVisiblityCheck('.w-full > .text-4xl', 'Top Python Tools for Web Scraping: A Comparative Analysis');
        cy.componentVisiblityCheck('.post-title > .text-4xl', 'Top Python Tools for Web Scraping: A Comparative Analysis')
        cy.go('back');
    });
});