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
        title: 'Konsultacje Psychologiczne - Równowaga Kalisz'
      },
      {
        path: 'handTherapy',
        component: HandTherapyComponent,
        title: 'Diagnoza i Terapia Ręki'
      },
      {
        path: 'neuroTactileTherapy',
        component: NeuroTactileTherapyComponent,
        title: 'Terapia NeuroTaktylna MNRI'
      },
      {
        path: 'neurodevelopmentalReflexTherapy',
        component: NeurodevelopmentalReflexTherapyComponent,
        title: 'Terapia Odruchów INPP - Neurorozwój'
      },
      {
        path: 'sensoryIntegrationTherapy',
        component: SensoryIntegrationTherapyComponent,
        title: 'Terapia Integracji Sensorycznej'
      },
      {
        path: 'auditoryProcessingTherapy',
        component: AuditoryProcessingTherapyComponent,
        title: 'Diagnoza i Terapia Słuchowa Joansena'
      },
      {
        path: 'pedagogicalTherapy',
        component: PedagogicalTherapyComponent,
        title: 'Terapia Pedagogiczna - Centrum Równowaga'
      },
      {
        path: 'specialistConsultations',
        component: SpecialistConsultationsComponent,
        title: 'Konsultacje Specjalistyczne'
      },
      {
        path: 'visionTherapy',
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
export class AssistanceRoutingModule { }
