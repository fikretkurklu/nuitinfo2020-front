import { Component, OnInit } from '@angular/core';
import { InscriptionDetailsService } from '../inscription-details.service';
import { NgForm } from '@angular/forms';
import { Details } from '../details';

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.css']
})
export class PageInscriptionComponent implements OnInit {

  constructor(private details: InscriptionDetailsService) { }

  ngOnInit(): void {
  }

  createDetails(form : NgForm) : Details {
    let d = <Details> {};
    d.name = form.value['firstname'];
    d.username = form.value['username'];
    d.surname = form.value['name'];
    d.email = form.value['email'];
    d.password = form.value['password'];
    d.confPassword = form.value['confPassword'];
    d.surfLevel = form.value['surfLevel'];
    d.city = form.value['city'];
    return d;
  }

  onSave(form:NgForm) {
    let d = this.createDetails(form);
    console.log(d);
    this.details.details(d);
  }
}

