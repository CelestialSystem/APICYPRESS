/// <reference types="cypress" />
import { IP_API_BASE_URL, IP_STACK_BASE_URL, IPSTACK_BASE_URL, AVIATION_STACK_BASE_URL, 
  POSITIONSTACK_BASE_URL, NUM_VERIFICATION_SIGNUP, IP_INFO_BASE_URL, WEATHER_STACK_BASE_URL
 } from '../../resources/data';
import { generateEmail } from '../../support/commands';
import 'cypress-iframe';
import 'cypress-wait-until';

var listOfApis = ['ipinfo','aviation_stack','ip_stack','weather_stack', 'position_stack','ipapi'],
    baseUrl, api_name;

// Function to return URL based on API name
function getApiUrl(apiName) {
  const apiDetails = {
    'aviation_stack': {
      url: `${AVIATION_STACK_BASE_URL}signup`,
      baseUrl: AVIATION_STACK_BASE_URL
    },
    'ip_stack': {
      url: `${IP_STACK_BASE_URL}signup`,
      baseUrl: IPSTACK_BASE_URL
    },
    'weather_stack': {
      url: `${WEATHER_STACK_BASE_URL}signup`,
      baseUrl: WEATHER_STACK_BASE_URL
    },
    'position_stack': {
      url: `${POSITIONSTACK_BASE_URL}signup`,
      baseUrl: POSITIONSTACK_BASE_URL
    },
    'numverify': {
      url: NUM_VERIFICATION_SIGNUP,
      baseUrl: null
    },
    'ipinfo': {
      url: `${IP_INFO_BASE_URL}/signup`,
      baseUrl: IP_INFO_BASE_URL
    },
    'ipapi': {
      url: `${IP_API_BASE_URL}signup/free`,
      baseUrl: IP_API_BASE_URL
    },
    'zenserp': {
      url: 'https://app.zenserp.com/register',
      baseUrl: 'https://app.zenserp.com/'
    }
  };

  if (!apiDetails[apiName]) {
    throw new Error(`API details not found for: ${apiName}`);
  }

  const { url, baseUrl: base } = apiDetails[apiName];
  baseUrl = base; // Assigning the global `baseUrl` variable
  api_name = apiName;
  return url;
}



Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("1. Sign Up Page", function () {
  var email = generateEmail(),
      password = 'Test@123456', iframe, checkBox;


  listOfApis.forEach((api) => {
    describe(`${api} API Test Suite`, function () {
      api_name = api;

      before(() => {
        const apiUrl = getApiUrl(api);
        cy.visit(apiUrl);
      });

      describe("Test for Subscription details", function () {

        it('1. Test to "Accept Cookies" if not already accepted', () => {
          cy.AcceptCookies();
        });

        /* Test for user signup with mandatory fields. Manual captcha completion required; 
        timeout added to allow this. */
        describe("1. Sign up user", function () {
          it('1. it should sign up the user on sign up click', () => {
            cy.get('#first_name').type('test');
            cy.get('#last_name').type('user');
            cy.get('#email').type(email);
            cy.get('#password').type(password);
            cy.get('#address_free').type('test address');
            cy.get('#post_code_free').type('691601');
            cy.get('#country_code_free').select('India');
            cy.get(':nth-child(4) > .state-select').select('Kerala');
            cy.get('#city_free').type('test');

            cy.log(email);
            cy.log('Add Captcha');

            cy.pause();
          });

          it('2. Test to click on visit dashboard button', () => {
            cy.get('.btn_subscribe').click(); // 'Visit Dashboard' button click
            cy.url().should('include', `${baseUrl}dashboard`);
          });

          it('3. Test to check for signout button click', () => {
            cy.contains('a', 'Sign Out').click(); // Signout button click
            cy.url().should('include', `${baseUrl}login`); // Navigate to Log in page
          });
        });

         describe("2. Sign In", function () {
          // Test to sign in using the provided email and password and verify successful login
          it('1. Test to check for sign in', () => {
            cy.get('#email').type(email);
            cy.get('#password').type(password);
            cy.get('.submit').click();
            cy.url().should('include', `${baseUrl}dashboard?logged_in=1`);
          });

          it('2. Test to check for the signed-in email and account email are the same', () => {
            cy.contains('a', 'Account').click();
            cy.get('#email_address').invoke('val')
            .then((value) => {
              expect(value).to.equal(email.toLowerCase()); // Checking if the signed-in email and profile email are the same
            });
          });
        });

          // Upgrade plan from free to basic
          describe("3. Upgrade plan", function () {

            // For APIs with basic upgrade plan
            if (['aviation_stack', 'ip_stack', 'position_stack', 'ipinfo'].includes(api_name)) {
              it('1. Test to upgrade plan', () => {
                cy.contains('a', 'Upgrade').click(); // Click on upgrade button on sidebar
                cy.get('.basic > .heading > .button').click(); // Click on upgrade button on the basic plan section
                cy.wait(1000); // wait for a window to open
                cy.checkTextVisibility('Please confirm your upgrade by choosing your preferred billing frequency.');
              });
          
              it('2. Test to check basic plan', () => {
                cy.get('.platinum_upgrade').click(); // Click on the upgrade button in the window
                cy.checkTextVisibility('Selected: Basic Plan'); // Check plan got updated to Basic Plan
              });
          
              it('3. Test to check signout button click', () => {
                cy.contains('a', 'Sign Out').click(); // Sign out button click
                cy.checkTextVisibility('Log in');
              });
          
              it('4. Test to check on login and check the plan is basic', () => {
                cy.get('#email').type(email);
                cy.get('#password').type(password);
                cy.get('.submit').click();
                cy.contains('a', 'Subscription Plan').click(); // Click on Subscription plan button on sidebar
                cy.checkTextVisibility('Your subscription: Basic Plan');
                cy.contains('a', 'Sign Out').click();
              });
            }
          
            // For APIs with standard upgrade plan
            else if (['weather_stack', 'ipapi'].includes(api_name)) {
              it('1. Test to upgrade plan', () => {
                if (api_name === 'ipinfo') {
                  cy.get('.selected > a > .doc_inner').click();
                  cy.get('.basic37 > .heading > .button').click();
                } else {
                  cy.contains('a', 'Upgrade').click(); // Click on upgrade button on sidebar
                  cy.get('.standard > .heading > .button').click(); // Click on upgrade button on the standard plan section
                }
                cy.wait(1000); // wait for a window to open
                cy.checkTextVisibility('Please confirm your upgrade by choosing your preferred billing frequency.');
              });
          
              it('2. Test to check standard plan', () => {
                cy.get('.platinum_upgrade').click(); // Click on the upgrade button in the window
                cy.checkTextVisibility('Selected: Standard Plan'); // Check plan got updated to Standard Plan
              });
          
              it('3. Test to check signout button click', () => {
                cy.get(':nth-child(3) > .sidebar_header > a > .doc_inner').click(); // Sign out button click
                cy.checkTextVisibility('Log in');
              });
          
              it('4. Test to check on login and check the plan is standard', () => {
                cy.get('#email').type(email);
                cy.get('#password').type(password);
                cy.get('.submit').click();
                cy.contains('a', 'Subscription Plan').click(); // Click on Subscription plan button on sidebar
                cy.checkTextVisibility('Your subscription: Standard Plan');
                cy.contains('a', 'Sign Out').click();
              });
            } else  if (['ipinfo'].includes(api_name)) {
              it('1. Test to upgrade plan', () => {
                cy.contains('a', 'Upgrade').click(); // Click on upgrade button on sidebar
                cy.get('.free > .product_container > .main_container > .signup_link').click() // Click on Show Options link on the basic plan section
                cy.wait(1000);
                cy.get('.basic37 > .heading > .button').click(); //Click on the upgrade button on the basic plan section
                cy.wait(1000); // wait for a window to open
                cy.checkTextVisibility('Please confirm your upgrade by choosing your preferred billing frequency.');
              });
          
              it('2. Test to check basic plan', () => {
                cy.get('.platinum_upgrade').click(); // Click on the upgrade button in the window
                cy.checkTextVisibility('Selected: Basic Plan'); // Check plan got updated to Basic Plan
              });
          
              it('3. Test to check signout button click', () => {
                cy.contains('a', 'Sign Out').click(); // Sign out button click
                cy.checkTextVisibility('Log in');
              });
          
              it('4. Test to check on login and check the plan is basic', () => {
                cy.get('#email').type(email);
                cy.get('#password').type(password);
                cy.get('.submit').click();
                cy.contains('a', 'Subscription Plan').click(); // Click on Subscription plan button on sidebar
                cy.checkTextVisibility('Your subscription: Basic Plan');
                cy.contains('a', 'Sign Out').click();
              });
            }
          });
          
      });
    });
  });
});
