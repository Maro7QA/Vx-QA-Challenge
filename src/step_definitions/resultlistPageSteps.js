Then('I should see a page that lists the available tariffs for my selection', async () => {
    I.seeElement('.tariff-list'); // Adjust selector as necessary
  });
  
  Then('I see at least five tariffs', async () => {
    I.seeNumberOfElements('.tariff-item', 5); // Adjust selector as necessary
  });
  
  When('I see the tariff result list page displayed', async () => {
    I.seeElement('.tariff-list'); // Adjust selector as necessary
  });
  
  Then('I should see the total number of available tariffs listed above all the result list', async () => {
    I.seeElement('.total-tariffs'); // Adjust selector as necessary
  });
  
  When('I scroll to the end of the result list page', async () => {
    I.scrollTo('.tariff-list', { offset: -10 }); // Adjust selector as necessary
  });
  
  Then('I should see only the first {string} tariffs displayed', async (number) => {
    I.seeNumberOfElements('.tariff-item', parseInt(number)); // Adjust selector as necessary
  });
  
  When('I click on the button labeled {string} weitere Tarife laden', async (buttonText) => {
    I.click(`button:has-text("${buttonText}")`);
  });
  
  Then('I should see the next {string} tariffs displayed', async (number) => {
    I.seeNumberOfElements('.tariff-item', parseInt(number) * 2); // Adjust selector as necessary
  });
  
  Then('I can continue to load any additional tariffs until all tariffs have been displayed', async () => {
    let isButtonVisible = true;
    while (isButtonVisible) {
      try {
        I.click('button:has-text("weitere Tarife laden")');
        I.wait(2); // Wait for new tariffs to load, adjust time if necessary
      } catch (e) {
        isButtonVisible = false;
      }
    }
  });
  
  Then('The weitere Tarife laden button is no longer displayed when all the tariffs are visible', async () => {
    I.dontSee('button:has-text("weitere Tarife laden")');
  });
  
  Then('the total number of tariffs displayed matches the total listed number of tariffs above result list', async () => {
    const totalTariffs = await I.grabTextFrom('.total-tariffs'); // Adjust selector as necessary
    const displayedTariffs = await I.grabNumberOfVisibleElements('.tariff-item'); // Adjust selector as necessary
    I.assertEqual(parseInt(totalTariffs), displayedTariffs);
  });
  
  Then('I should see the tariff price of the first tariff', async () => {
    I.seeElement('.tariff-item:first-child .tariff-price'); // Adjust selector as necessary
  });
  
  When('I open tariff details', async () => {
    I.click('.tariff-item:first-child .tariff-details-button'); // Adjust selector as necessary
  });
  
  Then('I see tariff details sections: Weitere Leistungen, Allgemein, Tätigkeiten und Hobbys AND I see tariff details sections: Miete & Immobilien and Dokumente', async () => {
    I.seeElement('.details-Weitere-Leistungen'); // Adjust selector as necessary
    I.seeElement('.details-Allgemein'); // Adjust selector as necessary
    I.seeElement('.details-Tätigkeiten-und-Hobbys'); // Adjust selector as necessary
    I.seeElement('.details-Miete-Immobilien'); // Adjust selector as necessary
    I.seeElement('.details-Dokumente'); // Adjust selector as necessary
  });
  
  Then('I see the Zum Online-Antrag button', async () => {
    I.seeElement('.zum-online-antrag-button'); // Adjust selector as necessary
  });
  
  Then('I verify both Tarifdetails and Zum Online-Antrag buttons are shown', async () => {
    I.seeElement('.tarifdetails-button'); // Adjust selector as necessary
    I.seeElement('.zum-online-antrag-button'); // Adjust selector as necessary
  });
  
  Then('I verify the expected page contents and tariff details for your selected tariff are shown', async () => {
    // Check the details of the selected tariff, adjust selectors as necessary
    I.seeElement('.selected-tariff-details');
  });