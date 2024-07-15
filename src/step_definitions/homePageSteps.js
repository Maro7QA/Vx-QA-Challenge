/// <reference types='codeceptjs' />
const { I } = inject();

Given('I open www.verivox.de', async () => {
  I.amOnPage('/');
});

Then('I select accept all cookies', async () => {
  I.waitForVisible('button.cookie-accept');
  I.wait(1);
  I.click('button.cookie-accept'); // Adjust selector as necessary
});

When('I navigate to Versicherungen and select Privathaftpflicht', async () => {
  I.click('a[title="Versicherungen"]'); // Adjust selector as necessary
  I.click('a[title="Privathaftpflicht"]'); // Adjust selector as necessary
});

Then('I enter age {string} and Single ohne Kinder', async (age) => {
  I.fillField('input[name="age"]', age); // Adjust selector as necessary
  I.selectOption('select[name="familyStatus"]', 'Single ohne Kinder'); // Adjust selector as necessary
});

Then('I go to the Privathaftpflicht personal information page', async () => {
  // Assuming the previous action navigates to this page
});
