import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebcamComponent } from './webcam/webcam.component';

import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AcceuilComponent } from './acceuil/acceuil.component';

import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { MeteoComponent } from './meteo/meteo.component';

import { NavbarComponent } from './navbar/navbar.component';

import { photoprofilComponent } from './photoprofil/photoprofil.component';

import { InfopageComponent } from './infopage/infopage.component';



import { SanteComponent } from './sante/sante.component';

import { SensibilisationComponent } from './sensibilisation/sensibilisation.component';


@NgModule({
  declarations: [
    AppComponent,
    PageConnexionComponent,
    PageInscriptionComponent,
    NavbarComponent,
    photoprofilComponent,
    InfopageComponent,
    SanteComponent,
    AcceuilComponent,
    WebcamComponent,
    MeteoComponent,
    SensibilisationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
