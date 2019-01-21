import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { RetailAgencyPage } from '../pages/retail-agency/retail-agency';
import { OrderBatteryPage } from '../pages/order-battery/order-battery';
import { FlexcidRetailPage } from '../pages/flexcid-retail/flexcid-retail';
import { MerchandisingPage } from '../pages/merchandising/merchandising';
import { ScrapShopPage } from '../pages/scrap-shop/scrap-shop';
import { ClaimsPage } from '../pages/claims/claims';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

 //go to retail agency
 goToRA(){
  this.nav.push(RetailAgencyPage);
}

//go to order battery
goToOB(){
  this.nav.push(OrderBatteryPage);
}

//go to merchandising
goToMD(){
  this.nav.push(MerchandisingPage);
}

//go to flexcid retail
goToFR(){
  this.nav.push(FlexcidRetailPage);
}

//go to scrap shop
goToSS(){
  this.nav.push(ScrapShopPage);
}

//go to claims
goToCL(){
  this.nav.push(ClaimsPage);
}


//go to login page
goToLogin(){
  this.nav.push(LoginPage);
}

//go to register page
goToRegister(){
  this.nav.push(RegisterPage);
}
}
