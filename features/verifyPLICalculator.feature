Feature: [F100] Privathaftpflicht calculator
As a Verivox user, I want to use the Privathaftpflicht calculator and tariff search pages 
so that I can select the best available tariff based on price.

Background: Go to PLI result list page
 Given that I can open www.verivox.de
   And I select accept all cookies 
  When I navigate to Versicherungen and select Privathaftpflicht 
   And I enter age "38" and Single ohne Kinder
  Then I go to the Privathaftpflicht personal information page
   And I enter birth date "20.01.1982"
   And I enter zip code "13088" 
   And I click the "Jetzt vergleichen" button
 
Scenario: [S101] Verify the PLI calculator @alltests @scenario1
    Then I should see a page that lists the available tariffs for my selection
    And I see at least five tariffs

Scenario: [S102] Load multiple tariff result pages @alltests @scenario2
    When I see the tariff result list page displayed
    Then I should see the total number of available tariffs listed above all the result list 
    When I scroll to the end of the result list page
    Then I should see only the first "20" tariffs displayed
    When I click on the button labeled "20" weitere Tarife laden
    Then I should see the next "20" tariffs displayed
    And I can continue to load any additional tariffs until all tariffs have been displayed
    Then The weitere Tarife laden button is no longer displayed when all the tariffs are visible
    And the total number of tariffs displayed matches the total listed number of tariffs above result list

Scenario: [S103] Verify offer details for a selected tariff @alltests @scenario3
    And I see the tariff result list page displayed
    Then I should see the tariff price of the first tariff
    When I open tariff details
    Then I see tariff details sections: Weitere Leistungen, Allgemein, Tätigkeiten und Hobbys AND I see tariff details sections: Miete & Immobilien and Dokumente
    And I see the Zum Online-Antrag button
    Then I verify both Tarifdetails and Zum Online-Antrag buttons are shown
    And I verify the expected page contents and tariff details for your selected tariff are shown


