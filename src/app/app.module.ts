import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from './../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { TabsPage } from '../pages/tabs/tabs';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';

import { RetailAgencyPage } from '../pages/retail-agency/retail-agency';
import { AddRetailAgencyPage } from '../pages/add-retail-agency/add-retail-agency';

import { OrderBatteryPage } from '../pages/order-battery/order-battery';
import { AddOrderBatteryPage } from '../pages/add-order-battery/add-order-battery';

import { MerchandisingPage } from '../pages/merchandising/merchandising';
import { AddMerchandisingPage } from '../pages/add-merchandising/add-merchandising';

import { FlexcidRetailPage } from '../pages/flexcid-retail/flexcid-retail';
import { AddFlexcidRetailPage } from '../pages/add-flexcid-retail/add-flexcid-retail';

import { ScrapShopPage } from '../pages/scrap-shop/scrap-shop';
import { AddScrapShopPage } from '../pages/add-scrap-shop/add-scrap-shop';

import { ClaimsPage } from '../pages/claims/claims';
import { AddClaimsPage } from '../pages/add-claims/add-claims';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { firebaseConfig } from '../config';
import { AuthService } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Page3,
    TabsPage,
    RetailAgencyPage,
    AddRetailAgencyPage,
    OrderBatteryPage,
    AddOrderBatteryPage,
    MerchandisingPage,
    AddMerchandisingPage,
    FlexcidRetailPage,
    AddFlexcidRetailPage,
    ScrapShopPage,
    AddScrapShopPage,
    ClaimsPage,
    AddClaimsPage,
    LoginPage,
    RegisterPage

  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Page3,
    TabsPage,
    RetailAgencyPage,
    AddRetailAgencyPage,
    OrderBatteryPage,
    AddOrderBatteryPage,
    MerchandisingPage,
    AddMerchandisingPage,
    FlexcidRetailPage,
    AddFlexcidRetailPage,
    ScrapShopPage,
    AddScrapShopPage,
    ClaimsPage,
    AddClaimsPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
