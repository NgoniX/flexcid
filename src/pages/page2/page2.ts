import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { AddOrderBatteryPage } from '../add-order-battery/add-order-battery';
import { AddClaimsPage } from '../add-claims/add-claims';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}


  // function for order now
   addOrder(){ this.navCtrl.push(AddOrderBatteryPage); }
 


// function for claims
   addClaims(){ this.navCtrl.push(AddClaimsPage); }

}
