import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../../providers/auth-service/auth-service';
import { Page1 } from '../page1/page1';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public loginForm;
  email: AbstractControl;
  password: AbstractControl;
  error: any;

  constructor(public navCtrl: NavController, public auth: AuthService, public navParams: NavParams, public fb: FormBuilder) {
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });

    this.email = this.loginForm.controls['email'];     
    this.password = this.loginForm.controls['password'];
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

  loginUser(){
    
    let data = this.loginForm.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
    };

    if(this.loginForm.valid) {
        this.auth.loginWithEmail(credentials).then(data => {
          this.navCtrl.setRoot(Page1);
          console.log(data);
        }, error=>{
          console.log(error);
          if (error.code == 'auth/user-not-found')
          {
            alert('User not found');
          }
        });
      }
  }

}
