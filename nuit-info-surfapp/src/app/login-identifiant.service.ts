import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginID } from './login-id';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoginIdentifiantService {
  constructor(private http: HttpClient) { }

  login(email:string, password:string) {
    this.http.post<LoginID>('http://localhost/8080/auth/login', {email, password})
    .subscribe(
      () => {
        console.log('Login sucessfull !');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }
}
