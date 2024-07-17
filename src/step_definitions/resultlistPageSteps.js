/// <reference types='codeceptjs' />
const resultlistPage = require("../pages/resultlistPage");
const { I } = inject();

Then('I should see a page that lists the available tariffs for my selection', async () => {
   resultlistPage.verifyResultlistPageLoadsTariffs();
   resultlistPage.verifyResultlistPageShowsResults();
  });
  
  Then('I see at least {string} tariffs', async (number) => {
    resultlistPage.verifyNumberOfTariffsAreShownAtLeast(number);
  });
  
  When('I see the tariff result list page displayed', async () => {
    resultlistPage.verifyResultlistPageLoadsTariffs();
    resultlistPage.verifyTariffResultlistPageIsDisplayed();
  });
  
  Then('I should see the total number of available tariffs listed above all the result list', async () => {
    await resultlistPage.verifyTotalNumberOfTariffsIsShownAboveResultlist();
 });
  
  When('I scroll to the end of the result list page', async () => {
    I.scrollPageToBottom();
  });
  
  Then('I should see only the first {string} tariffs displayed', async (number) => {
    resultlistPage.verifyNumberOfTariffsAreShownAtLeast();
 });
  
  When('I click on the button labeled {string}', async (buttonText) => {
    I.click(`${buttonText}`);
  });
  
  Then('I should see the next {string} tariffs displayed', async (number) => {
    resultlistPage.verifyMoreTariffsAreLoaded(number);
  });
  
  Then('I can continue to load any additional tariffs until all tariffs have been displayed', async () => {
    await resultlistPage.loadAllRemainingTariffs();
  });
  
  Then('The weitere Tarife laden button is no longer displayed when all the tariffs are visible', async () => {
    const { I } = inject();
    I.dontSeeElement(resultlistPage.loadMoreButtonId);
  });
  
  Then('The total number of tariffs displayed matches the total listed number of tariffs above result list', async () => {
    await resultlistPage.verifyTotalNumberOfTariffsAboveResultlistMatchesNumberofAllTariffs();
  });
  
  Then('I should see the tariff price of the {string} tariff', async (number) => {
    resultlistPage.verifyPriceOfTariff(number);
  });
  
  When('I open tariff details for {string} tariff', async (number) => {
    resultlistPage.selectOpenTariffDetailsForASingleTariff(number);
  });
  
  Then('I see tariff details sections: Weitere Leistungen, Allgemein, Tätigkeiten und Hobbys, Miete & Immobilien and Dokumente', async () => {
  resultlistPage.verifyDetailsSectionInHeader();
  });

  Then('I see the Zum Online-Antrag button', async () => {
    I.see('ZUM ONLINE-ANTRAG');
  });
  
  Then('I verify both Tarifdetails and Zum Online-Antrag buttons are shown', async () => {
    //two Zum Online-Antrag buttons
    resultlistPage.verifySubmitButtonsAreShown();
    //two tariff details buttons
    resultlistPage.verifyTariffDetailsButtonsAreShown();
  });
  
  Then('I verify the expected page contents and tariff details for your selected tariff are shown', async () => {
    // Check the details of the selected tariff
    resultlistPage.tariffDetailsSectionAreShown();  
  });