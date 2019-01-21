import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'page-add-order-battery',
  templateUrl: 'add-order-battery.html'
})
export class AddOrderBatteryPage {

  all: Observable<any>;

  orderBatteries: AngularFireList<any>;

   constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
    this.orderBatteries = db.list('/order-batteries');
    this.all = this.orderBatteries.valueChanges();
  }

  addOrderBatteryInfo(name, date, batterySize, carMake, carYear, quantity, oldBattery, location, contact):void {

  	this.orderBatteries.push({
            name: name,
            date: date,
            batterySize: batterySize,
            carMake: carMake,
            carYear: carYear,
            quantity: quantity,
            oldBattery: oldBattery,
            location: location,
            contact: contact,
            }).then( OrderBatteryPage => {
		      this.navCtrl.pop();
		    }, error => {
		      console.log(error);
		    });

  }

  

}
