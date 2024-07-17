/// <reference types='codeceptjs' />
const calculatorPage = require("../pages/calculatorPage");

Then('I enter birth date {string}', async (birthDate) => {
  calculatorPage.fillInBirthdate(birthDate);
});

Then('I enter zip code {string}', async (zipCode) => {
  calculatorPage.fillInZipCode(zipCode);
});

Then('I click the {string} button', async (buttonText) => {
 calculatorPage.selectSubmitButton(buttonText);
});
