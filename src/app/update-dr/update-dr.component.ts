import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DrService } from '../dr.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-dr',
  templateUrl: './update-dr.component.html',
  styleUrls: ['./update-dr.component.css']
})
export class UpdateDrComponent implements OnInit{

  constructor(private route:ActivatedRoute, private drService:DrService, private router:Router) {}
  
  did:any="";
  first_Name:any="";
  last_Name:any="";
  email:any="";
  password:any="";
  specialist:any="";
  gender:any="";
  age:any="";
  phone:any="";
  dr_Status:any="";

  public updateForm: FormGroup = new FormGroup({
    first_name:new FormControl(this.first_Name),
    last_name:new FormControl(this.last_Name),
    email:new FormControl(this.email),
    password:new FormControl(this.password),
    specialist:new FormControl(this.specialist),
    gender:new FormControl(this.gender),
    age:new FormControl(this.age),
    phone:new FormControl(this.phone),
    dr_status:new FormControl(this.dr_Status)
  });

    ngOnInit(): void {

      this.route.paramMap.subscribe({
        next:(data)=>{
          this.did=data.get('did');    
          this.first_Name=data.get('first_name'); 
          this.last_Name=data.get('last_name');
          this.email=data.get('email');
          this.password=data.get('password');
          this.specialist=data.get('specialist');
          this.gender=data.get('gender');
          this.age=data.get('age');
          this.phone=data.get('phone');
          this.dr_Status=data.get('dr_status');
        }
      })

      this.updateForm.setValue({
        first_name:this.first_Name,
        last_name:this.last_Name,
        email:this.email,
        password:this.password,
        specialist:this.specialist,
        gender:this.gender,
        age:this.age,
        phone:this.phone,
        dr_status:this.dr_Status,
      }
      )
    }

    submit(){
      this.drService.updateDrs(this.did, 
      this.updateForm.get('first_name')?.value,
      this.updateForm.get('last_name')?.value,
      this.updateForm.get('email')?.value,
      this.updateForm.get('password')?.value,
      this.updateForm.get('specialist')?.value,
      this.updateForm.get('gender')?.value,
      this.updateForm.get('age')?.value,
      this.updateForm.get('phone')?.value,
      this.updateForm.get('dr_status')?.value).subscribe({
        next:(data)=>{
          this.router.navigate(['dr-register']);
        },
        error:(error)=>{
          alert(error);
        }
      })
    }

}

