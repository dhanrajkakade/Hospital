import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Pat } from './models/ps';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }

  getPa():Observable<Pat[]>{
    return this.http.get<Pat[]>("http://localhost:8080/getAllPatients").pipe(catchError(this.handleError)); 
}

savePatient(pid: any, full_name: any, age: any, address: any, phone: any, email: any, symptoms: any): Observable<Pat[]> {
  return this.http.post<Pat[]>("http://localhost:8080/savePatients", ({
    // "pid":pid,
    "full_name": full_name,
    "age": age,
    "address": address,
    "phone": phone,
    "email": email,
    "symptoms": symptoms
  })).pipe(catchError(this.handleError))
}

deletePatient(pid:number):Observable<Pat[]> {
  return this.http.delete<Pat[]>("http://localhost:8080/deletePatientById/"+ pid)
    .pipe(catchError(this.handleError));
}

handleError(error:HttpErrorResponse) {
  return throwError(()=>{
    return error.message;
  })
}
}

