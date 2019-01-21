import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'page-order-battery',
  templateUrl: 'order-battery.html'
})
export class OrderBatteryPage {

  all: Observable<any>;

	orderBatteries: AngularFireList<any>;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {

    this.orderBatteries = db.list('/order-batteries');
    this.all = this.orderBatteries.valueChanges();

  }


}
