import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';

import { NavbarComponent } from './navbar/navbar.component';

import { photoprofilComponent } from './photoprofil/photoprofil.component';


@NgModule({
  declarations: [
    AppComponent,
    PageConnexionComponent,
    PageInscriptionComponent,
    NavbarComponent,
    photoprofilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
