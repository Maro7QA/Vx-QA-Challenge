/// <reference types='codeceptjs' />
const homePage = require("../pages/homePage");
const { I } = inject();

Given('I open www.verivox.de', async () => {
  I.amOnPage('/');
});

Then('I select accept all cookies', async () => {
  homePage.acceptAllCookies();
});

When('I navigate to Versicherungen and select Privathaftpflicht', async () => {
  homePage.selectInsuranceInHeader();
  });

Then('I enter age {string} and {string}', async (age,option) => {
  homePage.fillInAge(age);
  homePage.selectFamilyOption(option);
});

Then('I go to the Privathaftpflicht personal information page', async () => {
  homePage.selectSubmitButton();
});
