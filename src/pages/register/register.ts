import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  public registerForm;
  email: AbstractControl;
  password: AbstractControl;
  error: any;

  constructor(public navCtrl: NavController, public auth: AuthService, public navParams: NavParams, public fb: FormBuilder) {
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.registerForm = this.fb.group({
      fullname: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      location: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      country: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      phone: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
      individualComp: ['', Validators.compose([Validators.minLength(1), Validators.required])],
      role: ['', Validators.compose([Validators.minLength(1), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });

    this.email = this.registerForm.controls['email'];     
    this.password = this.registerForm.controls['password'];   }

  doRegister(){
    let data = this.registerForm.value;
		let credentials = {
			email: data.email,
			password: data.password
    };
    
    this.auth.registerUser(credentials).then( () => {
    this.navCtrl.setRoot(LoginPage);
    }, error => {
      console.log(error);
        if (error.code === 'auth/weak-password' || error.code === 'auth/email-already-in-use')
        {
          alert(error.message);
        }
        this.error = error;
    });

    }
  

}