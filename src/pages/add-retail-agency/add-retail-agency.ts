import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'page-add-retail-agency',
  templateUrl: 'add-retail-agency.html'
})
export class AddRetailAgencyPage {
  
  all: Observable<any>;

  retails: AngularFireList<any>;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
    this.retails = db.list('/retail-agency');
    this.all = this.retails.valueChanges();
  }

  addRetailInfo(agentNumber, date, batterySize, batteryType, quantity, tested, guarantee, price, batterySold, collection):void {
    this.retails.push({
      agentNumber: agentNumber,
      date: date,
      batterySize: batterySize,
      batteryType: batteryType,
      quantity: quantity,
      tested: tested,
      guarantee: guarantee,
      price: price,
      batterySold: batterySold,
      collection: collection
    }).then( RetailAgencyPage => {
      this.navCtrl.pop();
    }, error => {
      console.log(error);
    });
  }

}
