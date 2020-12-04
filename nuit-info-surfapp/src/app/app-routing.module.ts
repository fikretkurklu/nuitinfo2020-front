import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';

const routes: Routes = [
  { path : 'home', component : PageConnexionComponent },
  { path : '',   redirectTo: '/home', pathMatch: 'full' },
  { path : 'register', component : PageInscriptionComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
