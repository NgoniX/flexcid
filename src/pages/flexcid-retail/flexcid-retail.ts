import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AddFlexcidRetailPage } from '../add-flexcid-retail/add-flexcid-retail';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-flexcid-retail',
  templateUrl: 'flexcid-retail.html'
})
export class FlexcidRetailPage {

  all: Observable<any>;

	flexcidRetails: AngularFireList<any>;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {

    this.flexcidRetails = db.list('/flexcid-agency');
    this.all = this.flexcidRetails.valueChanges();

  }

  //navigate to add flexcid retail agency page
  addFlexcidRetail(){

    this.navCtrl.push(AddFlexcidRetailPage);

  }

  
}
