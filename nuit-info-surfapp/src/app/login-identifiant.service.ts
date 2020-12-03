import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginID } from './login-id';

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
