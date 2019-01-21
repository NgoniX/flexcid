import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-add-flexcid-retail',
  templateUrl: 'add-flexcid-retail.html'
})
export class AddFlexcidRetailPage {

  all: Observable<any>;

  flexcidRetails: AngularFireList<any>;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
    this.flexcidRetails = db.list('/flexcid-agency');
    this.all = this.flexcidRetails.valueChanges();
  }

  addFlexcidRetailInfo(batNo, date, batterySize, batteryType, quantity, tested, guarantee, price, batterySold, collection, invoiceNo):void {
    this.flexcidRetails.push({
      batNo: batNo,
      date: date,
      batterySize: batterySize,
      batteryType: batteryType,
      quantity: quantity,
      tested: tested,
      guarantee: guarantee,
      price: price,
      batterySold: batterySold,
      collection: collection,
      invoiceNo: invoiceNo
    }).then( FlexcidRetailPage => {
      this.navCtrl.pop();
    }, error => {
      console.log(error);
    });
  }

}
