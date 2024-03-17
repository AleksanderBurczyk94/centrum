import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatIconModule} from "@angular/material/icon";
import {WhiteButtonComponent} from "./shered/white-button/white-button.component";
import {OrangeButtonComponent} from "./shered/orange-button/orange-button.component";
import {NavbarComponent} from "./core/navbar/navbar.component";
import {FooterComponent} from './core/footer/footer.component';
import {HomeComponent} from './core/home/home.component';
import { AboutusComponent } from './core/aboutus/aboutus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrangeButtonComponent,
    WhiteButtonComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
