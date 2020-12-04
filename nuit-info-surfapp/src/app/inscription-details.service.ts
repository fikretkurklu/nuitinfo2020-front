import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Details } from './details';

@Injectable({
  providedIn: 'root'
})
export class InscriptionDetailsService {

  constructor(private http : HttpClient) { }

  details(d : Details) {
      this.http.post('http://localhost:8080/auth/register', d)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
    }
  }
