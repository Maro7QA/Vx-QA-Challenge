/// <reference types='codeceptjs' />
const homePage = require("../pages/homePage");
const { I } = inject();

Given('I open www.verivox.de', () => {
  I.amOnPage('/');
});

Then('I select accept all cookies', () => {
  homePage.acceptAllCookies();
});

When('I navigate to Versicherungen and select Privathaftpflicht', () => {
  homePage.selectInsuranceInHeader();
  });

Then('I enter age {string} and {string}', (age,option) => {
  homePage.fillInAge(age);
  homePage.selectFamilyOption(option);
});

Then('I go to the Privathaftpflicht personal information page', () => {
  homePage.selectSubmitButton();
});
