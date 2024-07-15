
Then('I enter birth date {string}', async (birthDate) => {
  const { I } = inject();
  I.fillField('input[name="birthDate"]', birthDate); // Adjust selector as necessary
});

Then('I enter zip code {string}', async (zipCode) => {
  const { I } = inject();
  I.fillField('input[name="zipCode"]', zipCode); // Adjust selector as necessary
});

Then('I click the {string} button', async (buttonText) => {
  const { I } = inject();
  I.click(`button:has-text("${buttonText}")`);
});
