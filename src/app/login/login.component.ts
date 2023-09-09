import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(){

  }

  public loginForm : FormGroup = new FormGroup({
    emailid:new FormControl(""),
    password:new FormControl("")
  })

  login(){
    if(this.loginForm.get('emailid')?.value==='prathmesh.s.kakade@gmail.com' && this.loginForm.get('password')?.value==='psk') {
      console.log("valid");
      localStorage.setItem("loggedIn","true")
    } else {
      localStorage.setItem("loggedIn","false")

    }
  }

}
