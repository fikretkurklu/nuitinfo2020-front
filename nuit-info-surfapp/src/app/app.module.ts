import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { SensibilisationComponent } from './sensibilisation/sensibilisation.component';

@NgModule({
  declarations: [
    AppComponent,
    PageConnexionComponent,
    SensibilisationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
