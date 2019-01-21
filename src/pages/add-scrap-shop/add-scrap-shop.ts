import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-add-scrap-shop',
  templateUrl: 'add-scrap-shop.html'
})
export class AddScrapShopPage {

  all: Observable<any>;
  scraps: AngularFireList<any>;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
    this.scraps = db.list('/scrap-shop');
    this.all = this.scraps.valueChanges();
  }

  addScrapShopInfo(name, date, batterySize, location, quantity, collection, deliver, totalWeight, price):void {
    this.scraps.push({
      name: name,
      date: date,
      batterySize: batterySize,
      location: location,
      quantity: quantity,
      collection: collection,
      deliver: deliver,
      totalWeight: totalWeight,
      price: price,
    }).then( ScrapShopPage => {
      this.navCtrl.pop();
    }, error => {
      console.log(error);
    });
  }

}
