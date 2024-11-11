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
import { VisionTherapyComponent } from './vision-therapy/vision-therapy.component';
import {AppPaths} from "../../app-paths";

let routes: Routes = [
  {
    path: '',
    component: AssistanceComponent,
    children: [
      {
        path: AppPaths.PSYCHOLOGICAL_CONSULTATIONS,
        component: PsychologicalConsultationsComponent,
        title: 'Konsultacje Psychologiczne - Równowaga Kalisz',
        data: {
          description: 'Umów się na konsultacje psychologiczne w Centrum Równowaga w Kaliszu. Profesjonalna pomoc w radzeniu sobie z emocjami, stresem, lękami i problemami w relacjach.'
        }
      },
      {
        path: AppPaths.HAND_THERAPY,
        component: HandTherapyComponent,
        title: 'Diagnoza i Terapia Ręki',
        data: {
          description: 'Odkryj skuteczną diagnozę i terapię ręki w Centrum Równowaga w Kaliszu. Pomagamy w rozwijaniu motoryki małej, czucia głębokiego i precyzyjnych ruchów u dzieci.'
        }
      },
      {
        path: AppPaths.NEUROTACTILE_THERAPY,
        component: NeuroTactileTherapyComponent,
        title: 'Terapia NeuroTaktylna MNRI®',
        data: {
          description: 'Terapia NeuroTaktylna MNRI® w Kaliszu – popraw funkcjonowanie układu nerwowego dziecka. Skuteczne wsparcie rozwoju sensoryczno-ruchowego w Centrum Równowaga.'
        }
      },
      {
        path: AppPaths.NEURODEVELOPMENTAL_REFLEX_THERAPY,
        component: NeurodevelopmentalReflexTherapyComponent,
        title: 'Terapia Odruchów INPP - Neurorozwój',
        data: {
          description: 'Terapia odruchów INPP w Centrum Równowaga w Kaliszu. Pomagamy dzieciom rozwijać wzorce ruchowe i neurorozwój poprzez ćwiczenia i wsparcie dla rodziców.'
        }
      },
      {
        path: AppPaths.SENSORY_INTEGRATION_THERAPY,
        component: SensoryIntegrationTherapyComponent,
        title: 'Terapia Integracji Sensorycznej',
        data: {
          description: 'Zapisz dziecko na terapię integracji sensorycznej w Kaliszu. Centrum Równowaga wspiera dzieci z trudnościami w przetwarzaniu bodźców i poprawia ich rozwój.'
        }
      },
      {
        path: AppPaths.AUDITORY_PROCESSING_THERAPY,
        component: AuditoryProcessingTherapyComponent,
        title: 'Diagnoza i Terapia Słuchowa Joansena',
        data: {
          description: 'Diagnoza i terapia słuchowa Johansena w Kaliszu. Pomóż dziecku poprawić koncentrację, zdolności słuchowe i przetwarzanie dźwięków w Centrum Równowaga.'
        }
      },
      {
        path: AppPaths.PEDAGOGICAL_THERAPY,
        component: PedagogicalTherapyComponent,
        title: 'Terapia Pedagogiczna - Centrum Równowaga',
        data: {
          description: 'Indywidualna terapia pedagogiczna w Centrum Równowaga w Kaliszu. Wspieramy dzieci z trudnościami w nauce, koncentracji i motywacji do edukacji.'
        }
      },
      {
        path: AppPaths.SPECIALIST_CONSULTATIONS,
        component: SpecialistConsultationsComponent,
        title: 'Konsultacje Specjalistyczne',
        data: {
          description: 'Skorzystaj z konsultacji specjalistycznych w Kaliszu. Centrum Równowaga oferuje wsparcie w diagnozowaniu trudności szkolnych, sensorycznych i neurorozwojowych.'
        }
      },
      {
        path: AppPaths.VISION_THERAPY,
        component: VisionTherapyComponent,
        title: 'Terapia Widzenia - Rozwój Dziecka',
        data: {
          description: 'Terapia widzenia w Kaliszu – wspieramy rozwój zdolności wzrokowych u dzieci. Centrum Równowaga oferuje indywidualne zajęcia poprawiające koordynację i percepcję wzrokową.'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistanceRoutingModule {}
