import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistanceComponent } from './assistance.component';
import { PsychologicalConsultationsComponent } from './psychological-consultations/psychological-consultations.component';
import { HandTherapyComponent } from './hand-therapy/hand-therapy.component';
import { NeuroTactileTherapyComponent } from './neuro-tactile-therapy/neuro-tactile-therapy.component';
import { NeurodevelopmentalReflexTherapyComponent } from './neurodevelopmental-reflex-therapy/neurodevelopmental-reflex-therapy.component';
import { SensoryIntegrationTherapyComponent } from './sensory-integration-therapy/sensory-integration-therapy.component';
import { AuditoryProcessingTherapyComponent } from './auditory-processing-therapy/auditory-processing-therapy.component';
import { PedagogicalTherapyComponent } from './pedagogical-therapy/pedagogical-therapy.component';
import { SpecialistConsultationsComponent } from './specialist-consultations/specialist-consultations.component';
import { AppPaths } from '../../app-paths';
import { BlockRootGuard } from '../../guards/block-root.guard';

const routes: Routes = [
  {
    path: '',
    component: AssistanceComponent,
    canActivate: [BlockRootGuard], // Guard sprawdza, czy dostęp do '/' (zakres-pomocy) ma być zablokowany
    children: [
      {
        path: AppPaths.PSYCHOLOGICAL_CONSULTATIONS,
        component: PsychologicalConsultationsComponent,
        title: 'Konsultacje psychologiczne dla dzieci i młodzieży w Kaliszu',
        data: {
          description:
            'Umów się na konsultacje z psychologiem dziecięcym w Centrum Równowaga w Kaliszu. Wsparcie psychologiczne dla dzieci i młodzieży w regulacji emocji, lęku i stresu.',
        },
      },
      {
        path: AppPaths.HAND_THERAPY,
        component: HandTherapyComponent,
        title: 'Diagnoza i Terapia Ręki w Kaliszu',
        data: {
          description:
            'Odkryj skuteczną diagnozę i terapię ręki w Centrum Równowaga w Kaliszu. Pomagamy w rozwijaniu motoryki małej, czucia głębokiego i precyzyjnych ruchów u dzieci.',
        },
      },
      {
        path: AppPaths.NEUROTACTILE_THERAPY,
        component: NeuroTactileTherapyComponent,
        title: 'Terapia NeuroTaktylna MNRI® w Kaliszu',
        data: {
          description:
            'Terapia NeuroTaktylna MNRI® w Kaliszu – popraw funkcjonowanie układu nerwowego dziecka. Skuteczne wsparcie rozwoju sensoryczno-ruchowego w Centrum Równowaga.',
        },
      },
      {
        path: AppPaths.NEURODEVELOPMENTAL_REFLEX_THERAPY,
        component: NeurodevelopmentalReflexTherapyComponent,
        title: 'Terapia Odruchów INPP w Kaliszu',
        data: {
          description:
            'Terapia odruchów INPP w Centrum Równowaga w Kaliszu. Pomagamy dzieciom rozwijać wzorce ruchowe i neurorozwój poprzez ćwiczenia i wsparcie dla rodziców.',
        },
      },
      {
        path: AppPaths.SENSORY_INTEGRATION_THERAPY,
        component: SensoryIntegrationTherapyComponent,
        title: 'Diagnoza integracji sensorycznej w Kaliszu - Równowaga',
        data: {
          description:
            'Integracja sensoryczna Kalisz. Pomagamy dzieciom lepiej przetwarzać bodźce i poprawić codzienne funkcjonowanie. Zapisz dziecko już dziś!',
        },
      },
      {
        path: AppPaths.AUDITORY_PROCESSING_THERAPY,
        component: AuditoryProcessingTherapyComponent,
        title: 'Diagnoza i Terapia Słuchowa Joansena Kalisz',
        data: {
          description:
            'Diagnoza i terapia słuchowa Johansena Kalisz. Pomóż dziecku poprawić koncentrację, zdolności słuchowe i przetwarzanie dźwięków w Centrum Równowaga.',
        },
      },
      {
        path: AppPaths.PEDAGOGICAL_THERAPY,
        component: PedagogicalTherapyComponent,
        title: 'Terapia Pedagogiczna - Centrum Równowaga w Kaliszu',
        data: {
          description:
            'Indywidualna terapia pedagogiczna w Centrum Równowaga w Kaliszu. Wspieramy dzieci z trudnościami w nauce, koncentracji i motywacji do edukacji.',
        },
      },
      {
        path: AppPaths.SPECIALIST_CONSULTATIONS,
        component: SpecialistConsultationsComponent,
        title: 'Konsultacje Specjalistyczne w Kaliszu',
        data: {
          description:
            'Centrum Równowaga w Kaliszu oferuje wsparcie w diagnozie trudności szkolnych, sensorycznych i neurorozwojowych. Umów się na konsultację!',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssistanceRoutingModule {}
