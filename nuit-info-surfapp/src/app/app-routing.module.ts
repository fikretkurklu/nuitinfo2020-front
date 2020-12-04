import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { AcceuilComponent } from './acceuil/acceuil.component'; 
import { SanteComponent } from './sante/sante.component';
import { photoprofilComponent } from './photoprofil/photoprofil.component';
import { InfopageComponent } from './infopage/infopage.component';
import { WebcamComponent } from './webcam/webcam.component';
import { MeteoComponent } from './meteo/meteo.component';
import { SensibilisationComponent } from './sensibilisation/sensibilisation.component';

const routes: Routes = [
  { path : 'acceuil', component : AcceuilComponent },
  { path : '',   redirectTo: '/acceuil', pathMatch: 'full' },
  { path : 'home', component : PageConnexionComponent },
  { path : 'sante', component : SanteComponent },
  { path : 'photoprofil', component : photoprofilComponent },
  { path : 'infopage', component : InfopageComponent },
  { path : 'register', component : PageInscriptionComponent},
  { path : 'page-connexion', component : PageConnexionComponent },
  { path : 'page-inscription', component : PageInscriptionComponent },
  { path : 'webcam', component : WebcamComponent },
  { path : 'meteo', component : MeteoComponent },
  { path : 'sensibilisation', component : SensibilisationComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
