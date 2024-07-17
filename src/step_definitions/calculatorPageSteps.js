/// <reference types='codeceptjs' />
const calculatorPage = require("../pages/calculatorPage");

Then('I enter birth date {string}', (birthDate) => {
  calculatorPage.fillInBirthdate(birthDate);
});

Then('I enter zip code {string}', (zipCode) => {
  calculatorPage.fillInZipCode(zipCode);
});

Then('I click the {string} button', (buttonText) => {
 calculatorPage.selectSubmitButton(buttonText);
});
