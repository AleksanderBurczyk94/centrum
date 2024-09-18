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
import {
  PaulinaOkrasaBurczykComponent
} from "./core/home/therapists/paulina-okrasa-burczyk/paulina-okrasa-burczyk.component";
import {PedagogicalTherapyComponent} from "./core/assistance/pedagogical-therapy/pedagogical-therapy.component";
import {
  KarolinaOkrasaStaszakComponent
} from "./core/home/therapists/karolina-okrasa-staszak/karolina-okrasa-staszak.component";

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // Ustawienia przywracania pozycji przewijania
  anchorScrolling: 'enabled',           // Włączenie przewijania do elementu z kotwicą
  scrollOffset: [0, -100],              // Przesunięcie o 100px w górę
};

export const AppRoutes = {
  //nav + main
  HOME: '',
  ASSISTANCE: 'assistance',
  PRICE_LIST: 'priceList',
  OUR_CENTER: 'ourCenter',
  BLOG: 'blog',
  CONTACT: 'contact',
  APPOINTMENT: 'appointment',
  MINORS_PROTECTION: 'minorsProtection',
  RODO: 'rodo',
  PAGE_NOT_FOUND: '**',

  //asistance children
  PSYCHOLOGICAL_CONSULTATIONS: 'psychologicalConsultations',
  SENSORY_INTEGRATION_THERAPY: 'sensoryIntegrationTherapy',
  NEURODEVELOPMENTAL_REFLEX_THERAPY: 'neurodevelopmentalReflexTherapy',
  NEUROTACTILE_THERAPY: 'neuroTactileTherapy',
  AUDITORY_PROCESSING_THERAPY: 'auditoryProcessingTherapy',
  HAND_THERAPY: 'handTherapy',
  SPECIALIST_CONSULTATIONS: 'specialistConsultations',
  SI_DIAGNOSIS_DESCRIPTION: 'siDiagnosisDescription',
  PEDAGOGICAL_THERAPY: 'pedagogicalTherapy',
  WRITTEN_OPINION: 'writtenOpinion',

  //therapists
  PAULINA_OKRASA_BURCZYK: 'paulinaOkrasaBurczyk',
  KAROLINA_OKRASA_STASZAK: 'KarolinaOkrasaStaszakComponent',
};


const routes: Routes = [
  {path: AppRoutes.HOME, component: HomeComponent, title: 'start'},
  {
    path: AppRoutes.ASSISTANCE,
    component: AssistanceComponent,
    title: 'Zakres pomocy',
    children: [
      {
        path: AppRoutes.PSYCHOLOGICAL_CONSULTATIONS,
        component: PsychologicalConsultationsComponent,
        title: 'Konsultacje psychologiczne'
      },
      {path: AppRoutes.HAND_THERAPY, component: HandTherapyComponent, title: 'Diagnoza i terapia ręki'},
      {
        path: AppRoutes.NEUROTACTILE_THERAPY,
        component: NeuroTactileTherapyComponent,
        title: 'Terapia NeuroTaktylna MNRI'
      },
      {
        path: AppRoutes.NEURODEVELOPMENTAL_REFLEX_THERAPY,
        component: NeurodevelopmentalReflexTherapyComponent,
        title: 'Diagnoza i terapia neurorozwojowa odruchów INPP'
      },
      {
        path: AppRoutes.SENSORY_INTEGRATION_THERAPY,
        component: SensoryIntegrationTherapyComponent,
        title: 'Diagnoza i terapia integracji sensorycznej'
      },
      {
        path: AppRoutes.AUDITORY_PROCESSING_THERAPY,
        component: AuditoryProcessingTherapyComponent,
        title: 'Diagnoza i terapia Joansena'
      },
      {
        path: AppRoutes.PEDAGOGICAL_THERAPY,
        component: PedagogicalTherapyComponent,
        title: 'Teapia Pedagogiczna'
      },
      {
        path: AppRoutes.SPECIALIST_CONSULTATIONS,
        component: SpecialistConsultationsComponent,
        title: 'Konsultacje specjalistyczne'
      },
      {
        path: AppRoutes.SI_DIAGNOSIS_DESCRIPTION,
        component: SiDiagnosisDescriptionComponent,
        title: 'Pisemny opis diagnozy SI'
      },
      {
        path: AppRoutes.WRITTEN_OPINION,
        component: WrittenOpinionComponent,
        title: 'Pisemna opinia'
      },
    ]
  },
  {path: AppRoutes.PRICE_LIST, component: PriceListComponent, title: 'Cennik'},
  {path: AppRoutes.OUR_CENTER, component: OurCenterComponent, title: 'Nasze Centrum'},
  {path: AppRoutes.BLOG, component: BlogComponent, title: 'Blog'},
  {
    path: AppRoutes.CONTACT,
    component: ContactComponent,
    title: 'Kontakt',
    canDeactivate: [contactFormUnsavedChangesGuard]
  },
  {path: AppRoutes.APPOINTMENT, component: AppointmentComponent, title: 'Umów wizytę'},
  {path: AppRoutes.MINORS_PROTECTION, component: MinorsProtectionComponent, title: 'Standardy ochrony małoletnich'},
  {path: AppRoutes.RODO, component: RodoComponent, title: 'Rodo'},

  {path: AppRoutes.PAULINA_OKRASA_BURCZYK, component: PaulinaOkrasaBurczykComponent, title: 'Paulina Okrasa-Burczyk'},
  {path: AppRoutes.KAROLINA_OKRASA_STASZAK, component: KarolinaOkrasaStaszakComponent, title: 'Karolina Okrasa-Staszak'},

  {path: AppRoutes.PAGE_NOT_FOUND, component: PageNotFoundComponent, title: 'Page not found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
