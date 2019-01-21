import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-add-claims',
  templateUrl: 'add-claims.html'
})
export class AddClaimsPage {

  all: Observable<any>;

  private claims: AngularFireList<any>;

   constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
    this.claims = db.list('/claims');
    this.all = this.claims.valueChanges();
  }


  addClaimsInfo(name, date, batterySize, code, invoiceNo, flexcidBranch, location, contact):void {

  	this.claims.push({
            name: name,
            date: date,
            batterySize: batterySize,
            code: code,
            invoiceNo: invoiceNo,
            flexcidBranch: flexcidBranch,
            location: location,
            contact: contact,
          }).then( ClaimsPage => {
		      this.navCtrl.pop();
		    }, error => {
		      console.log(error);
		    });

  }




}
