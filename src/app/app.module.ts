import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatIconModule} from "@angular/material/icon";
import {WhiteButtonComponent} from "./shered/white-button/white-button.component";
import {ColorButtonComponent} from "./shered/orange-button/color-button.component";
import {NavbarComponent} from "./core/navbar/navbar.component";
import {FooterComponent} from './core/footer/footer.component';
import {HomeComponent} from './core/home/home.component';
import { AboutusComponent } from './core/aboutus/aboutus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OfferComponent } from './core/offer/offer.component';
import { ScopeOfAssistanceComponent } from './core/scope-of-assistance/scope-of-assistance.component';
import { ContactComponent } from './core/contact/contact.component';
import { PriceListComponent } from './core/price-list/price-list.component';
import { AppointmentComponent } from './core/appointment/appointment.component';
import { AssistanceScopeComponent } from './core/home/assistance-scope/assistance-scope.component';
import { TherapistsComponent } from './core/home/therapists/therapists.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ColorButtonComponent,
    WhiteButtonComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    PageNotFoundComponent,
    OfferComponent,
    ScopeOfAssistanceComponent,
    ContactComponent,
    PriceListComponent,
    AppointmentComponent,
    AssistanceScopeComponent,
    TherapistsComponent,
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
