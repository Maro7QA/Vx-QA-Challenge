const { I } = inject();
const chai = require('chai');
const { assert } = require('console');
const expect = chai.expect;


class ResultlistPage {
    //Element Id's
    loadingAnimationId='[class="product-hold"]'
    resultContainerId='[class="results-container"]'
    productId='(//*[@class="product"])[XX]'
    filterId='[class="filtered"]';
    vxspinnerId='[class="vx-spinner"]';
    loadMoreButtonId ='[class="button load-more-button"]'
    priceId='(//*[@class="price"])[XX]';
    tariffDetailsId='(//*[@class="button secondary button-toggle"])[XX]'
    wichtigsteLeistungenId= '.navigation > li:nth-child(1)'
    allgemeinId='.navigation > li:nth-child(2)'
    taetigkeitenUndHobbysId='.navigation > li:nth-child(3)'
    mieteUndImmobilienId='.navigation > li:nth-child(4)'
    dokumenteId='.navigation > li:nth-child(5)'
    submitButtonTariffDetailsOpenAboveId='div.product-container.details-open > div.product-group.product-group-action > div.cta > button:nth-child(2)'; // Zum Online-Antrag tariff details above
    submitButtonTariffDetailsOpenBelowId= 'div.detail-container > div > div.cta > button:nth-child(2)'; //// Zum Online-Antrag tariff details below
    tariffDetailsButtonAboveId='(//*[@class="button secondary button-toggle open"])'
    tariffDetailsButtonMinimizeId='[class="button-toggle-frameless open"]'
    detailsNavigationheaderId= '[class="navigation"]'
    productIndexId='[id="productIndexXX_XX-checkbox"]'
     
verifyResultlistPageLoadsTariffs(){
    I.wait(1); //stabilzer
    I.waitForVisible(this.loadingAnimationId,20); 
    I.waitForInvisible(this.loadingAnimationId,20); 

}

verifyResultlistPageShowsResults(){
    I.waitForVisible(this.resultContainerId,20); 
    I.seeInCurrentUrl('/privathaftpflicht/vergleich/#/pli/results');
    I.dontSee('0 Tarife von 0,00 € bis 0,00 €');
}

verifyNumberOfTariffsAreShownAtLeast(number){
    for (let i = 1; i <= parseInt(number); i++) {
        I.scrollTo(this.productId.replace("XX",i))
        I.seeElement(this.productId.replace("XX",i))
      }
}
    
verifyTariffResultlistPageIsDisplayed(){
    I.seeElement(this.resultContainerId); 
}

async grabTotalTariffNumber() {
    I.waitForVisible(this.filterId,20);
    const tariffNumber = await I.grabTextFrom(this.filterId);
    const arrayTariffNumber = tariffNumber.split("  ");
    const numberOfTotalTariff = arrayTariffNumber[0].split(" ");
    return numberOfTotalTariff;
  }

async verifyTotalNumberOfTariffsIsShownAboveResultlist(){
    const numberOfTotalTariff = await this.grabTotalTariffNumber();
    expect(Number(numberOfTotalTariff[1])).to.be.above(0); // Assert that numberOfTotalTariffAsNumber is above 0 
    expect(numberOfTotalTariff[2]).to.include('Tarife'); //check if 2nd value matches the word "tarife"
}
   
verifyOnlyCertainNumberOfTariffsAreShown(number){
    I.wait(1);//stabilzer
    const productIndexLastTariff=this.productIndexId.replace("XX_XX",`${number}_${number}`);
    I.seeElement(productIndexLastTariff); // verify that tariff number is visible
    const productIndexLastTariffPlusOne=this.productIndexId.replace("XX_XX",`${parseInt(number)+1}_${parseInt(number)+1}`); 
    I.dontSeeElement(productIndexLastTariffPlusOne); // verify that tariff number + 1 is not visible
}

verifyMoreTariffsAreLoaded(number){
    I.waitForInvisible(this.vxspinnerId);
    const integerNumber = parseInt(number, 10);
    const numberTotal=2*integerNumber;
    I.wait(1);//stabilzer
    I.scrollPageToBottom();
    I.wait(1);//stabilzer
    const productIndexLastTariff=this.productIndexId.replace("XX_XX",`${numberTotal}_${numberTotal+1}`);
    I.seeElement(productIndexLastTariff);
}
  
async loadAllRemainingTariffs(){
 // Use a loop to click the button as long as it is visible
 for (let i = 0; i < 100; i++) { // Set a high number for the loop limit
    I.wait(2); // Add a short wait to prevent rapid firing clicks
   let numberOfVisibleButton = await I.grabNumberOfVisibleElements(this.loadMoreButtonId)
    if (numberOfVisibleButton > 0) {
      I.click(this.loadMoreButtonId);
    } else {
      break; // Exit the loop if the button is no longer visible
    }
  }
}

async verifyTotalNumberOfTariffsAboveResultlistMatchesNumberofAllTariffs(){
    const numberOfTotalTariff = await this.grabTotalTariffNumber();
    const totalTariffs=numberOfTotalTariff[1];
    I.scrollPageToBottom();
    I.waitForVisible(`[id*="productIndex${parseInt(totalTariffs)}"]`);
    I.seeElement(`[id*="productIndex${parseInt(totalTariffs)}"]`); // verify if tariff number shown in filter section does match with final tariff of result list
    I.dontSeeElement(`[id*="productIndex${parseInt(totalTariffs)+1}"]`); // verify that tariff number + 1 is not visible

}
  
  verifyPriceOfTariff(number){
    I.waitForVisible(this.priceId.replace("XX",number),10)
    I.seeElement(this.priceId.replace("XX",number));
  }
 
  selectOpenTariffDetailsForASingleTariff(number){
    I.click(this.tariffDetailsId.replace("XX",number));
  }
 
  verifyDetailsSectionInHeader(){
    I.waitForVisible(this.wichtigsteLeistungenId,5);
    I.waitForVisible(this.allgemeinId,5)
    I.waitForVisible(this.taetigkeitenUndHobbysId,5)
    I.waitForVisible(this.mieteUndImmobilienId,5)
    I.waitForVisible(this.dokumenteId,5)
  }
  
  
 verifySubmitButtonsAreShown(){
    I.seeElement(this.submitButtonTariffDetailsOpenAboveId)
    I.seeElement(this.submitButtonTariffDetailsOpenBelowId)
 }
 
 verifyTariffDetailsButtonsAreShown(){
    I.seeElement(this.tariffDetailsButtonAboveId)
    I.seeElement(this.tariffDetailsButtonMinimizeId)
 }

 tariffDetailsSectionAreShown(){
    I.click(this.wichtigsteLeistungenId)// Wich­tigs­te Leis­tun­gen
    I.see('Ma­xima­le De­ckun­gs­sum­me und Ab­gren­zun­gen');

    I.click(this.allgemeinId)// Allge­mein
    I.see('Ma­xima­le De­ckun­gs­sum­me und Ab­gren­zun­gen');

    I.click(this.taetigkeitenUndHobbysId)// Tä­tig­kei­ten und Hob­bys
    I.see('Ver­si­cher­te Tä­tig­kei­ten');

    I.click(this.mieteUndImmobilienId)// Miete & Im­mo­bi­li­en
    I.see('Miet­sachschä­den als Mie­ter');

    I.click(this.dokumenteId)// Do­kumen­te
    I.seeElement('div.detail-container > div > a:nth-child(5)');
  }
 }
 
 module.exports = new ResultlistPage();