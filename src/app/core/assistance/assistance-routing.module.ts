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
        title: 'Konsultacje Psychologiczne - Równowaga Kalisz'
      },
      {
        path: AppPaths.HAND_THERAPY,
        component: HandTherapyComponent,
        title: 'Diagnoza i Terapia Ręki'
      },
      {
        path: AppPaths.NEUROTACTILE_THERAPY,
        component: NeuroTactileTherapyComponent,
        title: 'Terapia NeuroTaktylna MNRI®'
      },
      {
        path: AppPaths.NEURODEVELOPMENTAL_REFLEX_THERAPY,
        component: NeurodevelopmentalReflexTherapyComponent,
        title: 'Terapia Odruchów INPP - Neurorozwój'
      },
      {
        path: AppPaths.SENSORY_INTEGRATION_THERAPY,
        component: SensoryIntegrationTherapyComponent,
        title: 'Terapia Integracji Sensorycznej'
      },
      {
        path: AppPaths.AUDITORY_PROCESSING_THERAPY,
        component: AuditoryProcessingTherapyComponent,
        title: 'Diagnoza i Terapia Słuchowa Joansena'
      },
      {
        path: AppPaths.PEDAGOGICAL_THERAPY,
        component: PedagogicalTherapyComponent,
        title: 'Terapia Pedagogiczna - Centrum Równowaga'
      },
      {
        path: AppPaths.SPECIALIST_CONSULTATIONS,
        component: SpecialistConsultationsComponent,
        title: 'Konsultacje Specjalistyczne'
      },
      {
        path: AppPaths.VISION_THERAPY,
        component: VisionTherapyComponent,
        title: 'Terapia Widzenia - Rozwój Dziecka'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistanceRoutingModule {}
