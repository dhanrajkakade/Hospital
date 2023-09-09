import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HospitalComponent } from './hospital/hospital.component';
import { DrRegisterComponent } from './dr-register/dr-register.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { NewDrComponent } from './new-dr/new-dr.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { UpdateDrComponent } from './update-dr/update-dr.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'specialities', component:SpecialitiesComponent},
  {path:'services', component:ServicesComponent},
  {path:'about', component:AboutComponent},
  {path:'appointment', component:AppointmentComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'dr-register', component:DrRegisterComponent},
  {path:'new-dr', component:NewDrComponent, canActivate:[AuthGuard]},
  {path:'pat-register', component:PatientRegisterComponent},
  {path:'new-patient', component:NewPatientComponent},
  {path:'hospital', component:HospitalComponent},
  {path:'update/:did/:first_Name/:last_Name/:email/:password/:specialist/:gender/:age/:phone/:dr_Status', component:UpdateDrComponent},
  {path:'login', component:LoginComponent},
  {path:'**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
