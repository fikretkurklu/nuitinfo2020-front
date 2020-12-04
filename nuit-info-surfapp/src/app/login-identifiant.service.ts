import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginIdentifiantService {
  constructor(private http: HttpClient) { }

  login(email:string, password:string) {
    this.http.post('http://localhost:8080/auth/login', {email, password})
    .subscribe(
      (response) => {
        localStorage.setItem(email, response.toString());
        console.log();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }
}
