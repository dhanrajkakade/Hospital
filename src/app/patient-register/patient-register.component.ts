import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pat } from '../models/ps';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit{

  public Pa: Pat[] = [];

  constructor(private patientservice: PatientService, private router: Router) {

  }
  ngOnInit(): void {
    this.patientservice.getPa().subscribe({
      next: (data) => {
        this.Pa = data;
      }, error: (error) => {
        console.log(error);
      }
    },)
  }

  delete(pid: number) {
    console.log("delete: " + pid)
    this.patientservice.deletePatient(pid)
      .subscribe({
        next: (data) => {
          // this.drs=data;
          this.Pa = this.Pa.filter((pt) => {
            return pt.pid !== pid;
          })
        },
        error: (error) => {
          console.log(error);

          // this.router.navigate(['home']);
          window.location.reload();
        }
      })
  }
}
