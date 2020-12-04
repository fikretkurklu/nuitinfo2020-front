import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { AcceuilComponent } from './acceuil/acceuil.component'; 
import { SanteComponent } from './sante/sante.component';
import { photoprofilComponent } from './photoprofil/photoprofil.component';
import { InfopageComponent } from './infopage/infopage.component';

const routes: Routes = [
  { path : 'acceuil', component : AcceuilComponent },
  { path : '',   redirectTo: '/acceuil', pathMatch: 'full' },
  { path : 'home', component : PageConnexionComponent },
  { path : 'sante', component : SanteComponent },
  { path : 'photoprofil', component : photoprofilComponent },
  { path : 'infopage', component : InfopageComponent },
  { path : 'register', component : PageInscriptionComponent},
  { path : 'page-connexion', component : PageConnexionComponent },
  { path : 'page-inscription', component : PageInscriptionComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
