import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginIdentifiantService } from '../login-identifiant.service';

@Component({
  selector: 'app-page-connexion',
  templateUrl: './page-connexion.component.html',
  styleUrls: ['./page-connexion.component.css']
})

export class PageConnexionComponent implements OnInit {

  constructor(private login : LoginIdentifiantService) { }

  ngOnInit(): void {
  }

  onSave(form: NgForm) {
    this.login.login(form.value['email'], form.value['password']);
  }

}