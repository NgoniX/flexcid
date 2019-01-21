import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AddRetailAgencyPage } from '../add-retail-agency/add-retail-agency'

@Component({
  selector: 'page-retail-agency',
  templateUrl: 'retail-agency.html'
})
export class RetailAgencyPage {

  all: Observable<any>;
  retails: AngularFireList<any>;
	

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {

    this.retails = db.list('/retail-agency');
    this.all = this.retails.valueChanges();

  }


  //navigate to add retail agency page
  addRetailAgency(){

    this.navCtrl.push(AddRetailAgencyPage);

  }


}
