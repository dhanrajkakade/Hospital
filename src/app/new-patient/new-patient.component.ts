import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent {

  constructor(private patientService: PatientService , private route: Router) {

  }
  public regForm:FormGroup = new FormGroup({
    did: new FormControl(""),
    full_name: new FormControl(""),
    age: new FormControl(""),
    address: new FormControl(""),
    phone: new FormControl(""),
    email: new FormControl(""),
    symptoms: new FormControl(""),
  })

  getData() {
    console.log(this.regForm.get('pid')?.value)
    console.log(this.regForm.get('full_name')?.value)
    console.log(this.regForm.get('age')?.value)
    console.log(this.regForm.get('address')?.value)
    console.log(this.regForm.get('phone')?.value)
    console.log(this.regForm.get('email')?.value)
    console.log(this.regForm.get('symptoms')?.value)
  }

  onSubmit() {
    console.log("submit", this.regForm)
    // console.log(this.regForm.get('first_Name')?.value)
    // console.log(this.regForm.get('last_Name')?.value)
    // console.log(this.regForm.get('email')?.value)

    this.patientService.savePatient(this.regForm.get('pid')?.value, this.regForm.get('full_name')?.value, this.regForm.get('age')?.value, this.regForm.get('address')?.value, this.regForm.get('phone')?.value, this.regForm.get('email')?.value, this.regForm.get('symptoms')?.value).subscribe({ next: (data) => { console.log(data) }, error: (error) => { console.log(error) } });
    this.route.navigate(['patient-register']);
  

}

}
