import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatIconModule} from "@angular/material/icon";
import {NavbarComponent} from "./core/navbar/navbar.component";
import {FooterComponent} from './core/footer/footer.component';
import {HomeComponent} from './core/home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PriceListComponent} from './core/price-list/price-list.component';
import {CardListComponent} from './core/home/card-list/card-list.component';
import {TherapistsComponent} from './core/home/therapists/therapists.component';
import {provideHttpClient, withFetch, withInterceptorsFromDi} from "@angular/common/http";
import {BlogComponent} from './core/blog/blog.component';
import {MinorsProtectionComponent} from './core/documents/minors-protection/minors-protection.component';
import {RodoComponent} from './core/footer/rodo/rodo.component';
import {
  PaulinaOkrasaBurczykComponent
} from './core/home/therapists/paulina-okrasa-burczyk/paulina-okrasa-burczyk.component';
import {FaqComponent} from './core/home/faq/faq.component';
import {
  KarolinaOkrasaStaszakComponent
} from './core/home/therapists/karolina-okrasa-staszak/karolina-okrasa-staszak.component';
import {TherapyConsentComponent} from './core/documents/therapy-consent/therapy-consent.component';
import {DocumentsComponent} from './core/documents/documents.component';
import {ImageConsentComponent} from './core/documents/image-consent/image-consent.component';
import {SywiaSzumskaComponent} from './core/home/therapists/sywia-szumska/sywia-szumska.component';
import {MagdalenaMokrzyckaComponent} from './core/home/therapists/magdalena-mokrzycka/magdalena-mokrzycka.component';
import {
  AgataMagdzickaBanachComponent
} from './core/home/therapists/agata-magdzicka-banach/agata-magdzicka-banach.component';
import {SharedModule} from "./shared/shared.module";
import {MartaKesickaComponent} from "./core/home/therapists/marta-kesicka/marta-kesicka.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CardListComponent,
    TherapistsComponent,
    PaulinaOkrasaBurczykComponent,
    FaqComponent,
    KarolinaOkrasaStaszakComponent,
    SywiaSzumskaComponent,
    MagdalenaMokrzyckaComponent,
    AgataMagdzickaBanachComponent,
    MartaKesickaComponent,
  ],
  bootstrap: [AppComponent], imports: [BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatIconModule,
    SharedModule
  ],
  exports: [
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi(), withFetch()), // Dodano `withFetch()`
    provideClientHydration()
  ]
})
export class AppModule {
}
