import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  private user: firebase.User;

  constructor(private afAuth: AngularFireAuth) { //Add reference to native firebase SDK
    afAuth.authState.subscribe(user => {
			this.user = user;
    });
  }


  loginWithEmail(credentials) {

    console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
    credentials.password);
   
  }

  registerUser(credentials: any) {
    
    return this.afAuth.auth.createUserWithEmailAndPassword(
      credentials.email,
      credentials.password
      );

  }
  
  logout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  get currentUser():any{
    return this.user !== null;
  } 

}
