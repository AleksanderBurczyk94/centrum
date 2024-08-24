import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {PriceListComponent} from "./core/price-list/price-list.component";
import {ContactComponent} from "./core/contact/contact.component";
import {AppointmentComponent} from "./core/appointment/appointment.component";
import {AssistanceComponent} from "./core/assistance/assistance.component";
import {OurCenterComponent} from "./core/our-center/our-center.component";
import {BlogComponent} from "./core/blog/blog.component";
import {MinorsProtectionComponent} from "./core/footer/minors-protection/minors-protection.component";
import {RodoComponent} from "./core/footer/rodo/rodo.component";
import {contactFormUnsavedChangesGuard} from "./guards/contact-form-unsaved-changes.guard";
import {
  AuditoryProcessingTherapyComponent
} from "./core/assistance/auditory-processing-therapy/auditory-processing-therapy.component";
import {HandTherapyComponent} from "./core/assistance/hand-therapy/hand-therapy.component";
import {NeuroTactileTherapyComponent} from "./core/assistance/neuro-tactile-therapy/neuro-tactile-therapy.component";
import {
  NeurodevelopmentalReflexTherapyComponent
} from "./core/assistance/neurodevelopmental-reflex-therapy/neurodevelopmental-reflex-therapy.component";
import {
  PsychologicalConsultationsComponent
} from "./core/assistance/psychological-consultations/psychological-consultations.component";
import {
  SensoryIntegrationTherapyComponent
} from "./core/assistance/sensory-integration-therapy/sensory-integration-therapy.component";
import {
  SpecialistConsultationsComponent
} from "./core/assistance/specialist-consultations/specialist-consultations.component";
import {
  SiDiagnosisDescriptionComponent
} from "./core/assistance/si-diagnosis-description/si-diagnosis-description.component";
import {WrittenOpinionComponent} from "./core/assistance/written-opinion/written-opinion.component";

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // Ustawienia przywracania pozycji przewijania
  anchorScrolling: 'enabled',           // Włączenie przewijania do elementu z kotwicą
  scrollOffset: [0, -100],              // Przesunięcie o 100px w górę
};

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'assistance',
    component: AssistanceComponent,
    title: 'Zakres pomocy',
    children: [
      {
        path: 'auditoryProcessingTherapy',
        component: AuditoryProcessingTherapyComponent,
        title: 'Diagnoza i terapia przetwarzania słuchowego Johansena'
      },
      {path: 'handTherapy', component: HandTherapyComponent, title: 'Diagnoza i terapia ręki'},
      {path: 'neuroTactileTherapy', component: NeuroTactileTherapyComponent, title: 'Terapia NeuroTaktylna MNRI'},
      {
        path: 'neurodevelopmentalReflexTherapy',
        component: NeurodevelopmentalReflexTherapyComponent,
        title: 'Diagnoza i terapia neurorozwojowa odruchów INPP'
      },
      {
        path: 'psychologicalConsultations',
        component: PsychologicalConsultationsComponent,
        title: 'Konsultacje psychologiczne'
      },
      {
        path: 'sensoryIntegrationTherapy',
        component: SensoryIntegrationTherapyComponent,
        title: 'Diagnoza i terapia integracji sensorycznej'
      },
      {
        path: 'specialistConsultations',
        component: SpecialistConsultationsComponent,
        title: 'Konsultacje specjalistyczne'
      },
      {path: 'siDiagnosisDescription', component: SiDiagnosisDescriptionComponent, title: 'Pisemny opis diagnozy SI'},
      {path: 'writtenOpinion', component: WrittenOpinionComponent, title: 'Pisemna opinia'},
    ]
  },
  {path: 'priceList', component: PriceListComponent, title: 'Cennik'},
  {path: 'ourCenter', component: OurCenterComponent, title: 'Nasze Centrum'},
  {path: 'blog', component: BlogComponent, title: 'Blog'},
  {path: 'contact', component: ContactComponent, title: 'Kontakt', canDeactivate: [contactFormUnsavedChangesGuard]},
  {path: 'appointment', component: AppointmentComponent, title: 'Umów wizytę'},
  {path: 'minorsProtection', component: MinorsProtectionComponent, title: 'Standardy ochrony małoletnich'},
  {path: 'rodo', component: RodoComponent, title: 'Rodo'},

  {path: '**', component: PageNotFoundComponent, title: 'Page not found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
