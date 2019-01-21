import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import { AddMerchandisingPage } from '../add-merchandising/add-merchandising';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'page-merchandising',
  templateUrl: 'merchandising.html'
})
export class MerchandisingPage {

  all: Observable<any>;

  merchandisings: AngularFireList<any>;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {

    this.merchandisings = db.list('/merchandisings');
    this.all = this.merchandisings.valueChanges();

  }

  //navigate to add merchandising page
  addMerchandising(){

    this.navCtrl.push(AddMerchandisingPage);

  }

}
