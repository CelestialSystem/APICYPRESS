describe('Test Caes for Docs/ Documentation', () => {
    before(() => {
        cy.visit('https://apilayer.com');
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click on "Docs" link and check if it is redirecting', () => {
        cy.scrollTo('bottom');
        cy.get(':nth-child(3) > .nav > :nth-child(1) > .nav-link').click();
    });

    it('3. Test to Click on "Account" Card', () => {
        cy.get(':nth-child(3) > .nav > :nth-child(1) > .nav-link').click()
        cy.get(':nth-child(1) > .card > .card-body').click();
    });

    it('4. Account Card content should have "Purchase history"', () => {
        cy.get('[href="/docs/article/purchase-history"] > .card-body').should('contains.text', 'Purchase history')
    });

    it('5. Test to Account Card content should have "Managing API Keys"', () => {
        cy.get('[href="/docs/article/managing-api-keys"] > .card-body').should('contains.text', 'Managing API Keys')
    });

    it('6. Test to Account Card content should have "Communication Preference"', () => {
        cy.get('[href="/docs/article/communication-preferences"] > .card-body').should('contains.text', 'Communication Preference')
    });

    it('7. Account Card content should have "Managing Passwords"', () => {
        cy.get('[href="/docs/article/managing-passwords"] > .card-body').should('contains.text', 'Managing Passwords')
    });

    it('8. Test to Account Card content should have "Managing payment methods"', () => {
        cy.get('[href="/docs/article/managing-payment-methods"] > .card-body').should('contains.text', '\n\n\n\n\n\n\nManaging payment methods\n')
    });

    it('9. Test to Click on "FAQ" Card', () => {
        cy.get(':nth-child(3) > .nav > :nth-child(1) > .nav-link').click()
        cy.get(':nth-child(2) > .card > .card-body').click();
    });

    it('10. Test to FAQ Card content should have "Provider FAQ"', () => {
        cy.get('[href="/docs/article/provider-faq"] > .card-body').should('contains.text', 'Provider FAQ')
    });

    it('11. FAQ Card content should have "Marketplace FAQ"', () => {
        cy.get('[href="/docs/article/marketplace-faq"] > .card-body').should('contains.text', 'Marketplace FAQ')
    });

    it('12. Test to Click on "Introduction" Card', () => {
        cy.get(':nth-child(3) > .nav > :nth-child(1) > .nav-link').click()
        cy.get(':nth-child(3) > .card > .card-body').click();
    });

    it('13. Test to check Introduction Card content should have "GDPR Compliance"', () => {
        cy.get('[href="/docs/article/gdpr-compliance"] > .card-body').should('contains.text', 'GDPR Compliance')
    });

    it('14. Test to check Introduction Card content should have "Getting Started"', () => {
        cy.get('[href="/docs/article/getting-started"] > .card-body').should('contains.text', 'Getting Started')
    });

    it('15. Test to Click on "Subscription" Card', () => {
        cy.get(':nth-child(3) > .nav > :nth-child(1) > .nav-link').click()
        cy.get(':nth-child(4) > .card > .card-body').click();
    });

    it('16. Test to Subscription Card content should have "Cancelling a subscription"', () => {
        cy.get('[href="/docs/article/cancelling-a-subscription"] > .card-body').should('contains.text', 'Cancelling a subscription')
    });

    it('17. Test to Subscription Card content should have "Rate Limits"', () => {
        cy.get('[href="/docs/article/rate-limits"] > .card-body').should('contains.text', 'Rate Limits')
    });

    it('18. Test to Subscription Card content should have "Subscribing to an API plan"', () => {
        cy.get('[href="/docs/article/subscribing-to-an-api"] > .card-body').should('contains.text', 'Subscribing to an API plan')
    });

    it('19. Test to Subscription Card content should have "Upgrading a subscription"', () => {
        cy.get('[href="/docs/article/upgrading-a-subscription"] > .card-body').should('contains.text', 'Upgrading a subscription')
    });

    it('20. Test to Subscription Card content should have "Downgrading a subscription"', () => {
        cy.get('[href="/docs/article/downgrading-a-subscription"] > .card-body').should('contains.text', '\n\n\n\n\n\n\nDowngrading a subscription\n')
    });

    it('21. Test to Click on "Tips and Tricks" Card', () => {
        cy.get(':nth-child(3) > .nav > :nth-child(1) > .nav-link').click()
        cy.get(':nth-child(5) > .card > .card-body').click();
    });

    it('22. Test to check Tips and Tricks Card content should have "Reporting an abuse"', () => {
        cy.get('[href="/docs/article/reporting-an-abuse"] > .card-body').should('contains.text', 'Reporting an abuse')
    });

    it('23. Test to check Tips and Tricks Card content should have "Asking for support"', () => {
        cy.get('[href="/docs/article/asking-for-support"] > .card-body').should('contains.text', 'Asking for support')
    });

    it('24. Test to check Navigate to "Docs"', () => {
        cy.get(':nth-child(3) > .nav > :nth-child(1) > .nav-link').click()
    });

    it('25. Test to "Featured arting" should have following links', () => {
        cy.get('.container.space-2 > .row > :nth-child(1)').should('contains.text', 'Provider FAQ')
        cy.get('.container.space-2 > .row > :nth-child(1)').should('contains.text', 'GDPR Compliance')
        cy.get('.container.space-2 > .row > :nth-child(1)').should('contains.text', 'Managing API Keys')
        cy.get('.container.space-2 > .row > :nth-child(1)').should('contains.text', 'Upgrading a subscription')
    })

    it('26. Test to Click on "Provider FAQ"', () => {
        cy.get(':nth-child(1) > .list-unstyled > :nth-child(1) > .link-underline').click();
        cy.location('pathname').should('eq', '/docs/article/provider-faq');
    })

    it('27. Test to Click on "GDPR Compliance"', () => {
        cy.get(':nth-child(3) > .nav > :nth-child(1) > .nav-link').click()
        cy.get(':nth-child(1) > .list-unstyled > :nth-child(2) > .link-underline').click();
        cy.location('pathname').should('eq', '/docs/article/gdpr-compliance');
    })

    it('28. Test to Click on "Managing API Keys"', () => {
        cy.get(':nth-child(3) > .nav > :nth-child(1) > .nav-link').click()
        cy.get(':nth-child(1) > .list-unstyled > :nth-child(3) > .link-underline').click();
        cy.location('pathname').should('eq', '/docs/article/upgrading-a-subscription');
    })

    it('29. Test to Click on "Upgrading a subscription"', () => {
        cy.get(':nth-child(3) > .nav > :nth-child(1) > .nav-link').click()
        cy.get(':nth-child(1) > .list-unstyled > :nth-child(4) > .link-underline').click();
        cy.location('pathname').should('eq', '/docs/article/managing-api-keys');
    })

    it('30. Test to Click on "Getting started"', () => {
        cy.get(':nth-child(3) > .nav > :nth-child(1) > .nav-link').click()
        cy.get(':nth-child(2) > .list-unstyled > :nth-child(1) > .link-underline').click();
        cy.location('pathname').should('eq', '/docs/article/getting-started');
    })

    it('31. Test to Click on "Managing API Keys"', () => {
        cy.get(':nth-child(3) > .nav > :nth-child(1) > .nav-link').click()
        cy.get(':nth-child(2) > .list-unstyled > :nth-child(2) > .link-underline').click();
        cy.location('pathname').should('eq', '/docs/article/managing-api-keys');
    })

    it('32. Test to Click on "Marketplace FAQ"', () => {
        cy.get(':nth-child(3) > .nav > :nth-child(1) > .nav-link').click()
        cy.get(':nth-child(2) > .list-unstyled > :nth-child(3) > .link-underline').click();
        cy.location('pathname').should('eq', '/docs/article/marketplace-faq');
    })
})