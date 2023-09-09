import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dr } from './models/dr';

@Injectable({
  providedIn: 'root'
})
export class DrService {

  constructor(private http: HttpClient) { }

  getdrs(): Observable<Dr[]> {
    return this.http.get<Dr[]>("http://localhost:8080/getallDr").pipe(catchError(this.handleError));
  }

  saveDr(did: any, first_name: any, last_name: any, email: any, password: any, specialist: any, gender: any,
    age: any, phone: any, dr_status: any): Observable<Dr[]> {
    return this.http.post<Dr[]>("http://localhost:8080/saveDr", ({
      // "did":did,
      "first_name": first_name,
      "last_name": last_name,
      "email": email,
      "password": password,
      "specialist": specialist,
      "gender": gender,
      "age": age,
      "phone": phone,
      "dr_status": dr_status
    })).pipe(catchError(this.handleError))
  }

  deleteDr(did:number):Observable<Dr[]> {
    return this.http.delete<Dr[]>("http://localhost:8080/deleteDrById/"+ did)
      .pipe(catchError(this.handleError));
  }

  updateDrs(did:any, first_name:any, last_name:any, email:any, password:any, specialist:any, gender:any, age:any, phone:any, dr_status:any): Observable<Dr[]> {
    return this.http.put<Dr[]>("http://localhost:8080/updateDrById/"+did,{
      "did":did,
      "first_name":first_name,
      "last_name":last_name,
      "email":email,
      "password":password,
      "specialist":specialist,
      "gender":gender,
      "age":age,
      "phone":phone,
      "dr_status":dr_status
    }).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => {
      return error.message;
    })
  }
}
