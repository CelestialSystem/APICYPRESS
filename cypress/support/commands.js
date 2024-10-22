// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



/*******************************************NEW UTILL METHODS FOR APILAYER ************************************************************** */


/**
 * pass routeName and this switchToRoute will visit to particular route and wait untill the page loads
 * 
 * Ex how to use this method in .cy.js file 
 * Use this in  before() to make sure all the content load's
 * 
 *  @example
 * cy.switchToRoute ('properties-sortable--sortable');
 */
Cypress.Commands.add('switchToURL', (url) => {
    cy.visit(url);
    cy.log("log", "This is console log : Navigated to given url " + url);
});

Cypress.Commands.add('AcceptCookies', () => {
    // Check if the "Accept Cookies" button is visible or exists
    cy.get('body').then((body) => {
        if (body.find('#cookiescript_accept').length > 0) {
            cy.intercept('GET', '/collect*').as('apiRequest');
            cy.get('#cookiescript_accept').click(); // Click the button if it exists
            cy.wait('@apiRequest', { timeout: 60000 });
            cy.log('Cookies accepted.');
        } else {
            cy.log('Cookies already accepted or not present.');
        }
    });
});

Cypress.Commands.add('hasOverlapComponent', (cmp1, cmp2) => {
    cmp1.then(($el1) => {
        const rect1 = $el1[0].getBoundingClientRect();

        cmp2.then(($el2) => {
            const rect2 = $el2[0].getBoundingClientRect();

            // Check for overlap
            const overlapX = (rect1.left < rect2.right && rect1.right > rect2.left);
            const overlapY = (rect1.top < rect2.bottom && rect1.bottom > rect2.top);

            cy.log("overlapX", overlapX);
            cy.log("overlapY", overlapY);
            cy.then(() => {
                expect(overlapX && overlapY).to.equal(false); // No overlap expected
            });
        });
    });
});

Cypress.Commands.add('navigateUrlwithCookies', (url) => {
    cy.visit(url);
    cy.log("log", "This is console log : Navigated to given url " + url);
    cy.AcceptCookies();
});


Cypress.Commands.add('checkComponentItemCount', (componentSelector, textSelector) => {
    // Extract the text content from the textSelector element
    cy.get(textSelector).invoke('text').then((text) => {
        cy.get(textSelector).click();
        const expectedCount = parseInt(text, 10);
        cy.get(componentSelector).children().should('have.length', expectedCount);
    });
});

Cypress.Commands.add('componentVisiblityCheck', (selector, expectedText) => {
    const element = cy.get(selector).should('be.visible');
    if (expectedText) {
        element.and('contain.text', expectedText);
    }
});

Cypress.Commands.add('checkLabelAndType', (labelSelector, expectedText, inputSelector, inputValue) => {
    cy.get(labelSelector).should('have.text', expectedText);
    cy.get(inputSelector).type(inputValue);
});

Cypress.Commands.add('assertPathname', (expectedPath) => {
    cy.location('pathname').should('eq', expectedPath);
});

Cypress.Commands.add('checkAlert', (expectedText) => {
    cy.componentVisiblityCheck('.alerts', expectedText);
});

Cypress.Commands.add('checkPlanFeatures', (planClass, features) => {
    const featureSelector = `.${planClass} > .features`;
    features.forEach(feature => {
        cy.get(featureSelector).should('contain.text', feature);
    });
});

Cypress.Commands.add('checkTextVisibility', (text) => {
    cy.contains(text).should('be.visible');
});

Cypress.Commands.add('redirectToUrl', (baseUrl, endpoint) => {
    cy.origin(baseUrl, { args: { url: baseUrl, endpoint } }, ({ url, endpoint }) => {
        cy.url().should('eq', `${url}${endpoint}`);
        // Navigate back to the original page
        cy.go('back');
    });
});

Cypress.Commands.add('checkIfScrolledToEl', (ele) => {
    cy.get(ele).then(($el) => {
        const elTop = $el[0].getBoundingClientRect().top;

        expect(elTop).to.be.greaterThan(0);
        expect(elTop).to.be.lessThan(Cypress.config('viewportHeight'));
    });
});

//code to check the modal and text present in that.
Cypress.Commands.add('checkModal', (headerText, featureText) => {
    cy.get('.modal-content').should('exist').and('be.visible');
    cy.get('.modal-header').contains(headerText).should('be.visible');
    cy.get('.plan-feature-list > li').should('be.visible').and('contain.text', featureText);
    cy.get('.modal-footer > .btn').click();
    // Added wait of 1 second because there is 3s transition delay added in the css for the model
    cy.wait(1000);
});

//command to move to documentation tab in API layer.
Cypress.Commands.add('moveToDoc', (url) => {
    cy.intercept('GET', '/marketplace/' + url + '/tabs/api_docs').as('apiRequest');
    cy.get('#documentation-tab').click();
    cy.wait('@apiRequest', { timeout: 60000 });
    cy.componentVisiblityCheck('#documentation');
});

//command to check pro plan for an API in API layer.
Cypress.Commands.add('proPlanCheck', (cost, req) => {
    cy.componentVisiblityCheck('.card > .card-header > .h3', 'Pro Plan');
    cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .plan-price', '$' + cost);
    cy.componentVisiblityCheck('.media-body');
    cy.get('#pricing .plan').eq(2).within(() => {
        cy.get('a').contains('Subscribe').click({ force: true });
    });
    // Adding wait due to the css animation of 300 ms
    cy.wait(1000);
    cy.get('.sidebar-content').should('be.visible');
    cy.get('body').click();
    cy.wait(1000);
    cy.get('.sidebar-content', { timeout: 7000 }).should('not.be.visible');;
    cy.get('.media-body').contains(' ' + req + ' Requests / Monthly ').should('be.visible');
    cy.get('.media-body').contains(' Standard Support ').should('be.visible');
});

//command to check starter plan for an API in API layer.
Cypress.Commands.add('starterPlanCheck', (cost, req) => {
    cy.checkTextVisibility('MOST POPULAR');
    cy.componentVisiblityCheck('.card > .card-header > .h3', 'Starter Plan');
    cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .plan-price', '$' + cost);
    cy.componentVisiblityCheck('.media-body');
    cy.get('#pricing .plan').eq(1).within(() => {
        cy.get('a').contains('Subscribe').click({ force: true });
    });
    // Adding wait due to the css animation of 300 ms
    cy.wait(1000);
    cy.get('.sidebar-content', { timeout: 7000 }).should('be.visible');
    cy.get('body').click();
    cy.wait(1000);
    cy.get('.sidebar-content', { timeout: 7000 }).should('not.be.visible');;
    cy.get('.media-body').contains(' ' + req + ' Requests / Monthly ').should('be.visible');
    cy.get('.media-body').contains(' Standard Support ').should('be.visible');
});

//command to check Free plan for an API in API layer.
Cypress.Commands.add('freePlanCheck', (req) => {
    cy.componentVisiblityCheck('.card > .card-header > .h3', 'Free Plan');
    cy.componentVisiblityCheck('.card > .card-header > .mb-3 > .plan-price', '$0');
    cy.componentVisiblityCheck('.media-body');
    cy.get('#pricing .plan').first().within(() => {
        cy.get('a').contains('Subscribe').click({ force: true });
    });
    // Adding wait due to the css animation of 300 ms
    cy.wait(1000);
    cy.get('.sidebar-content', { timeout: 7000 }).should('be.visible');
    cy.get('body').click();
    cy.wait(1000);
    cy.get('.sidebar-content', { timeout: 7000 }).should('not.be.visible');;
    cy.get('.media-body').contains(' ' + req + ' Requests / Monthly ').should('be.visible');
    cy.get('.media-body').contains(' Free for Lifetime ').should('be.visible');
    cy.get('.media-body').contains(' No Credit Card Required ').should('be.visible');
});

// Command to check the header and Description text is present
Cypress.Commands.add('checkHeaderAndDescription', (headerText, paragraphText) => {
    cy.get('.text-primary')
        .should('be.visible')
        .and('contain.text', headerText);

    cy.checkTextVisibility(paragraphText);
});

//command to check the Livedemo for an API in API layer.
Cypress.Commands.add('liveDemo', () => {
    cy.componentVisiblityCheck('.show-code', 'Live Demo');
    cy.get('.show-code').should('be.visible').click({ force: true });
    cy.componentVisiblityCheck('.sidebar-content').should('be.visible').contains('Sign in to APILayer');
    cy.get('body').click(0, 0);
});

//command to Verifying the pricing, api info and the documetation tabs is available in the home page 
Cypress.Commands.add('verifyTabs', (additionalTabs = []) => {
    // Default Tab Selectors
    const defaultTabs = [
        '#pricing-tab',
        '#details-tab',
        '#documentation-tab'
    ];

    // Combine Default Tabs with Additional Tabs
    const allTabs = [...defaultTabs, ...additionalTabs];

    // Loop through each tab and check visibility
    allTabs.forEach(selector => {
        cy.get(selector).should('be.visible');
    });
});

//command to verify the  interaction with the 'check the documentation' link.
Cypress.Commands.add('checkTheDocumentation', (expectedText) => {
    cy.componentVisiblityCheck('p > a').contains('check the documentation.');
    cy.get('a[href="javascript:;"]').contains('check the documentation.')
        .should('be.visible')
        .click({ force: true });
    cy.checkTextVisibility(expectedText);
});

//command to verify the presence and visibility of the review rating section in home page.
Cypress.Commands.add('checkReviewRating', () => {
    cy.get('.media.align-items-center[href="/"]')
        .should('exist')
        .and('be.visible');

    cy.get('.media-body.font-size-1.text-body')
        .contains('APILayer')
        .should('exist')
        .and('be.visible');

    cy.get('.d-flex.align-items-center li img[alt="Review rating"]')
        .should('be.visible');
});

//command to Verifying that the related products and the footer are present. 
Cypress.Commands.add('checkRelatedProductAndFooter', () => {
    cy.componentVisiblityCheck('.h1', 'Related Products')
        .should('be.visible');

    cy.componentVisiblityCheck('footer.bg-primary')
        .should('be.visible');
});

Cypress.Commands.add('checkSubscribeForFreeAndClick', () => {
    cy.componentVisiblityCheck('#subscribeButton', "Subscribe for Free");
    cy.get('#subscribeButton').click({force:true});
    cy.get('#pricing').should('be.visible');
    cy.checkIfScrolledToEl('#pricing');
});
