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
            cy.wait('@apiRequest');
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

//code to check the modal and text present in that.
Cypress.Commands.add('checkModal', (headerText, featureText) => {
    cy.get('.modal-content').should('exist').and('be.visible');
    cy.get('.modal-header').contains(headerText).should('be.visible');
    cy.get('.plan-feature-list > li').should('be.visible').and('contain.text', featureText);
    cy.get('.modal-footer > .btn').click();
    // Added wait of 1 second because there is 3s transition delay added in the css for the model
    cy.wait(1000);
  });
