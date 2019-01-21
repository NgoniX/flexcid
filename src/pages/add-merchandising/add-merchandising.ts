import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-add-merchandising',
  templateUrl: 'add-merchandising.html'
})
export class AddMerchandisingPage {

  all: Observable<any>;

	merchandisings: AngularFireList<any>;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
    this.merchandisings = db.list('/merchandisings');
    this.all = this.merchandisings.valueChanges();
  }

  addMerchInfo(batNo, date, batterySize, merchNo, quantity, collected, guarantee, price, batterySold, collection, invoiceNo):void {
    this.merchandisings.push({
      batNo: batNo,
      date: date,
      batterySize: batterySize,
      merchNo: merchNo,
      quantity: quantity,
      collected: collected,
      guarantee: guarantee,
      price: price,
      batterySold: batterySold,
      collection: collection,
      invoiceNo: invoiceNo
    }).then( MerchandisingPage => {
      this.navCtrl.pop();
    }, error => {
      console.log(error);
    });
  }

}
