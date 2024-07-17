const { I } = inject();

class CalculatorPage {
    //Element Id's
    birthdateId='(//*[@class="ds-input__control"])[1]';
    zipCodeId='input[id="prestep_postcode-input"]';

    fillInBirthdate(birthDate){
        I.waitForVisible(this.birthdateId,10);
        I.fillField(this.birthdateId, birthDate); 
      }

      fillInZipCode(zipCode){
        I.waitForVisible(this.zipCodeId,10);
        I.fillField(this.zipCodeId, zipCode); 
      }
      
      selectSubmitButton(buttonText){
            I.scrollPageToBottom();
            I.wait(1);
            I.click(`button:has-text("${buttonText}")`);
      }
 }
 module.exports = new CalculatorPage();
 