import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'page-claims',
  templateUrl: 'claims.html'
})
export class ClaimsPage {

  all: Observable<any>;

  claims: AngularFireList<any>;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {

    this.claims = db.list('/claims');
    this.all = this.claims.valueChanges();

  }

}
