
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { DrService } from '../dr.service';
import { Router } from '@angular/router';
import { spamNameValidator } from "../common/spam-name.validator";

@Component({
  selector: 'app-new-dr',
  templateUrl: './new-dr.component.html',
  styleUrls: ['./new-dr.component.css']
})
export class NewDrComponent {

  constructor(private drService: DrService, private route: Router) {

  }
  public regForm:FormGroup = new FormGroup({
    did: new FormControl(""),
    first_name: new FormControl("", [Validators.required, Validators.minLength(2), spamNameValidator(/admin|user/)]),
    last_name: new FormControl("", [Validators.required, Validators.minLength(2)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    specialist: new FormControl("", [Validators.required]),
    gender: new FormControl("", [Validators.required]),
    age: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required, Validators.minLength(10)]),
    dr_status: new FormControl("", [Validators.required]),
    address: new FormGroup({
      street: new FormControl("", [Validators.required]),
      state: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required])
    })
  })

  getData() {
    console.log(this.regForm.get('did')?.value)
    console.log(this.regForm.get('first_name')?.value)
    console.log(this.regForm.get('last_name')?.value)
    console.log(this.regForm.get('email')?.value)
    console.log(this.regForm.get('password')?.value)
    console.log(this.regForm.get('specialist')?.value)
    console.log(this.regForm.get('gender')?.value)
    console.log(this.regForm.get('age')?.value)
    console.log(this.regForm.get('phone')?.value)
    console.log(this.regForm.get('dr_status')?.value)
  }
  onSubmit() {
    console.log("submit", this.regForm)
    // console.log(this.regForm.get('first_Name')?.value)
    // console.log(this.regForm.get('last_Name')?.value)
    // console.log(this.regForm.get('email')?.value)

    this.drService.saveDr(this.regForm.get('did')?.value, this.regForm.get('first_name')?.value, this.regForm.get('last_name')?.value, this.regForm.get('email')?.value, this.regForm.get('password')?.value, this.regForm.get('specialist')?.value, this.regForm.get('gender')?.value, this.regForm.get('age')?.value, this.regForm.get('phone')?.value, this.regForm.get('dr_status')?.value).subscribe({ next: (data) => { console.log(data) }, error: (error) => { console.log(error) } });
    this.route.navigate(['dr-register']);
  }
  
  

}

