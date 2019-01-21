import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AddScrapShopPage } from '../add-scrap-shop/add-scrap-shop';

@Component({
  selector: 'page-scrap-shop',
  templateUrl: 'scrap-shop.html'
})
export class ScrapShopPage {

  all: Observable<any>;
  scraps: AngularFireList<any>;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {

    this.scraps = db.list('/scrap-shop');
    this.all = this.scraps.valueChanges();

  }

  //navigate to add scrap shop page
  addScrapShop(){

    this.navCtrl.push(AddScrapShopPage);

  }

}
