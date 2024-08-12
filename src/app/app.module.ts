import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatIconModule} from "@angular/material/icon";
import {TransparentBtnComponent} from "./shered/white-button/transparent-btn.component";
import {ColorButtonComponent} from "./shered/color-button/color-button.component";
import {NavbarComponent} from "./core/navbar/navbar.component";
import {FooterComponent} from './core/footer/footer.component';
import {HomeComponent} from './core/home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ContactComponent} from './core/contact/contact.component';
import {PriceListComponent} from './core/price-list/price-list.component';
import {AppointmentComponent} from './core/appointment/appointment.component';
import {CardListComponent} from './core/home/assistance-scope/card-list.component';
import {TherapistsComponent} from './core/home/therapists/therapists.component';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {AssistanceComponent} from './core/assistance/assistance.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BlogComponent} from './core/blog/blog.component';
import {OurCenterComponent} from './core/our-center/our-center.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ColorButtonComponent,
    TransparentBtnComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    ContactComponent,
    PriceListComponent,
    AppointmentComponent,
    CardListComponent,
    TherapistsComponent,
    AssistanceComponent,
    BlogComponent,
    OurCenterComponent,
  ],
  bootstrap: [AppComponent], imports: [BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatIconModule,
    ReactiveFormsModule], providers: [
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class AppModule {
}
