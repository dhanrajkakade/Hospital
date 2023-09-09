import { Component, OnInit } from '@angular/core';
import { Dr } from '../models/dr';
import { DrService } from '../dr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dr-register',
  templateUrl: './dr-register.component.html',
  styleUrls: ['./dr-register.component.css']
})
export class DrRegisterComponent implements OnInit {

  public drs: Dr[] = [];

  constructor(private drservice: DrService, private router: Router) {

  }
  ngOnInit(): void {
    this.drservice.getdrs().subscribe({
      next: (data) => {
        this.drs = data;
      }, error: (error) => {
        console.log(error);
      }
    },)
  }

  delete(did: number) {
    console.log("delete" + did)
    this.drservice.deleteDr(did)
      .subscribe({
        next: (data) => {
          // this.drs=data;
          this.drs = this.drs.filter((dr) => {
            return dr.did !== did;
          })
        },
        error: (error) => {
          console.log(error);

          // this.router.navigate(['home']);
          window.location.reload();
        }
      })
  }

  update(dr: Dr) {
    this.router.navigate(['update', dr.did, dr.first_Name, dr.last_Name, dr.email, dr.password, dr.specialist, dr.gender, dr.age, dr.phone, dr.dr_Status])

  }
  


}
