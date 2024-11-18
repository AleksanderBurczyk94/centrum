import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatIconModule} from "@angular/material/icon";
import {NavbarComponent} from "./core/navbar/navbar.component";
import {FooterComponent} from './core/footer/footer.component';
import {HomeComponent} from './core/home/home.component';
import {CardListComponent} from './core/home/card-list/card-list.component';
import {TherapistsComponent} from './core/home/therapists/therapists.component';
import {provideHttpClient, withFetch, withInterceptorsFromDi} from "@angular/common/http";
import {FaqComponent} from './core/home/faq/faq.component';
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from "./app-routing.module";
import {TherapistTemplateComponent} from './core/home/therapists/therapist-template/therapist-template.component';
import {BlogTemplateComponent} from "./core/blog/blog-template/blog-template.component";
import {BlogModule} from "./core/blog/blog.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CardListComponent,
    TherapistsComponent,
    TherapistTemplateComponent,
    FaqComponent,
  ],
  bootstrap: [AppComponent], imports: [BrowserModule,
    AppRoutingModule,
    MatIconModule,
    SharedModule, BlogModule,
  ],
  exports: [
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    provideClientHydration()
  ]
})
export class AppModule {
}
