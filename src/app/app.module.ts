import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { ServicesComponent } from './services/services.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HospitalComponent } from './hospital/hospital.component';
import { DrRegisterComponent } from './dr-register/dr-register.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { NewDrComponent } from './new-dr/new-dr.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateDrComponent } from './update-dr/update-dr.component';
import { FooterComponent } from './footer/footer.component';
import { TrainerCardComponent } from './trainer-card/trainer-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SpecialitiesComponent,
    ServicesComponent,
    AppointmentComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    HospitalComponent,
    DrRegisterComponent,
    PatientRegisterComponent,
    NewDrComponent,
    NewPatientComponent,
    UpdateDrComponent,
    FooterComponent,
    TrainerCardComponent,
    NavBarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
