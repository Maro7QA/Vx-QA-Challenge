const { I } = inject();

class HomePage {
    //Element Id's
    acceptAllCookiesButton='[class="gdpr-button gdpr-accept-all"]';
    insuranceElementNavigationHeader='[class="page-navigation-item icn-a-angle-right-outlined icn-shield-outlined"]';
    pliElementIdNavigator='[href="/privathaftpflicht/"]';
    inputFieldAge='input[name="age"]';
    familienstandOption='select[title="Familienstand"]';
    textSubmitButton='Jetzt vergleichen';

    acceptAllCookies() {
        I.waitForVisible(this.acceptAllCookiesButton,10);
        I.wait(1);
        I.click(this.acceptAllCookiesButton); 
    }
       
    selectInsuranceInHeader() {
        I.moveCursorTo(this.insuranceElementNavigationHeader);
        I.click(this.pliElementIdNavigator); 
    }

    fillInAge(age) {
        I.fillField(this.inputFieldAge, age); 
    }

    selectFamilyOption(option) {
        I.selectOption(this.familienstandOption, option);
    }

    selectSubmitButton(){
        I.click(this.textSubmitButton);
    }
 }
 
 module.exports = new HomePage();