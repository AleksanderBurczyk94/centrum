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
import {CardListComponent} from './core/home/card-list/card-list.component';
import {TherapistsComponent} from './core/home/therapists/therapists.component';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {AssistanceComponent} from './core/assistance/assistance.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BlogComponent} from './core/blog/blog.component';
import {OurCenterComponent} from './core/our-center/our-center.component';
import {MinorsProtectionComponent} from './core/footer/minors-protection/minors-protection.component';
import {RodoComponent} from './core/footer/rodo/rodo.component';
import {WhiteContainerComponent} from "./shered/white-container/white-container.component";
import {BannerComponent} from './shered/banner/banner.component';
import { PsychologicalConsultationsComponent } from './core/assistance/psychological-consultations/psychological-consultations.component';
import { SensoryIntegrationTherapyComponent } from './core/assistance/sensory-integration-therapy/sensory-integration-therapy.component';
import { NeurodevelopmentalReflexTherapyComponent } from './core/assistance/neurodevelopmental-reflex-therapy/neurodevelopmental-reflex-therapy.component';
import { NeuroTactileTherapyComponent } from './core/assistance/neuro-tactile-therapy/neuro-tactile-therapy.component';
import { AuditoryProcessingTherapyComponent } from './core/assistance/auditory-processing-therapy/auditory-processing-therapy.component';
import { HandTherapyComponent } from './core/assistance/hand-therapy/hand-therapy.component';
import { SpecialistConsultationsComponent } from './core/assistance/specialist-consultations/specialist-consultations.component';
import { WrittenOpinionComponent } from './core/assistance/written-opinion/written-opinion.component';
import { SiDiagnosisDescriptionComponent } from './core/assistance/si-diagnosis-description/si-diagnosis-description.component';
import { PaulinaOkrasaComponent } from './core/home/therapists/paulina-okrasa/paulina-okrasa.component';

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
    MinorsProtectionComponent,
    RodoComponent,
    WhiteContainerComponent,
    BannerComponent,
    PsychologicalConsultationsComponent,
    SensoryIntegrationTherapyComponent,
    NeurodevelopmentalReflexTherapyComponent,
    NeuroTactileTherapyComponent,
    AuditoryProcessingTherapyComponent,
    HandTherapyComponent,
    SpecialistConsultationsComponent,
    WrittenOpinionComponent,
    SiDiagnosisDescriptionComponent,
    PaulinaOkrasaComponent,
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
