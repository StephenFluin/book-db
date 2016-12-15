import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent  {
  user = {};
  registrationError;
  loginError;
  constructor(public af: AngularFire, public router: Router ) {
    this.af.auth.subscribe(authState => {
      if(authState && authState.uid) {
        this.router.navigateByUrl('/books');
      }
    });
   }
   register(email,password) {
    try {
      this.af.auth.createUser({email:email,password:password})
      .then(result => {
        console.log("User created successfully",result);
        this.router.navigate(['/books/']);
      },
      failure => {
        console.log("error in creating user.");
        this.registrationError = failure;
      })
    }
    catch(ex) {
      console.log("Critical error in user creation.",ex);
      this.registrationError = ex.message;
    }
   }

login(email, password) {
  try {
    this.af.auth.login({email:email, password:password});
  } catch(ex) {
    this.loginError = ex.message;
  }
}

  

}
