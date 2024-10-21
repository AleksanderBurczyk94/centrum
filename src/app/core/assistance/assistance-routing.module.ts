import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AssistanceComponent} from './assistance.component';
import {PsychologicalConsultationsComponent} from './psychological-consultations/psychological-consultations.component';
import {HandTherapyComponent} from './hand-therapy/hand-therapy.component';
import {NeuroTactileTherapyComponent} from './neuro-tactile-therapy/neuro-tactile-therapy.component';
import {
  NeurodevelopmentalReflexTherapyComponent
} from './neurodevelopmental-reflex-therapy/neurodevelopmental-reflex-therapy.component';
import {SensoryIntegrationTherapyComponent} from './sensory-integration-therapy/sensory-integration-therapy.component';
import {AuditoryProcessingTherapyComponent} from './auditory-processing-therapy/auditory-processing-therapy.component';
import {PedagogicalTherapyComponent} from './pedagogical-therapy/pedagogical-therapy.component';
import {SpecialistConsultationsComponent} from './specialist-consultations/specialist-consultations.component';
import {VisionTherapyComponent} from './vision-therapy/vision-therapy.component';


let routes: Routes = [
  {
    path: '',
    component: AssistanceComponent,
    children: [
      {
        path: 'psychologicalConsultations',
        component: PsychologicalConsultationsComponent,
        title: 'Konsultacje psychologiczne'
      },
      {
        path: 'handTherapy',
        component: HandTherapyComponent,
        title: 'Diagnoza i terapia ręki'
      },
      {
        path: 'neuroTactileTherapy',
        component: NeuroTactileTherapyComponent,
        title: 'Terapia NeuroTaktylna MNRI'
      },
      {
        path: 'neurodevelopmentalReflexTherapy',
        component: NeurodevelopmentalReflexTherapyComponent,
        title: 'Diagnoza i terapia neurorozwojowa odruchów INPP'
      },
      {
        path: 'sensoryIntegrationTherapy',
        component: SensoryIntegrationTherapyComponent,
        title: 'Diagnoza i terapia integracji sensorycznej'
      },
      {
        path: 'auditoryProcessingTherapy',
        component: AuditoryProcessingTherapyComponent,
        title: 'Diagnoza i terapia Joansena'
      },
      {
        path: 'pedagogicalTherapy',
        component: PedagogicalTherapyComponent,
        title: 'Terapia Pedagogiczna'
      },
      {
        path: 'specialistConsultations',
        component: SpecialistConsultationsComponent,
        title: 'Konsultacje specjalistyczne'
      },
      {
        path: 'visionTherapy',
        component: VisionTherapyComponent,
        title: 'Terapia widzenia'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistanceRoutingModule { }
