import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AssistanceRoutingModule} from './assistance-routing.module';
import {AssistanceComponent} from "./assistance.component";
import {PsychologicalConsultationsComponent} from "./psychological-consultations/psychological-consultations.component";
import {SensoryIntegrationTherapyComponent} from "./sensory-integration-therapy/sensory-integration-therapy.component";
import {
  NeurodevelopmentalReflexTherapyComponent
} from "./neurodevelopmental-reflex-therapy/neurodevelopmental-reflex-therapy.component";
import {NeuroTactileTherapyComponent} from "./neuro-tactile-therapy/neuro-tactile-therapy.component";
import {AuditoryProcessingTherapyComponent} from "./auditory-processing-therapy/auditory-processing-therapy.component";
import {HandTherapyComponent} from "./hand-therapy/hand-therapy.component";
import {SpecialistConsultationsComponent} from "./specialist-consultations/specialist-consultations.component";
import {PedagogicalTherapyComponent} from "./pedagogical-therapy/pedagogical-therapy.component";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    AssistanceComponent,
    PsychologicalConsultationsComponent,
    SensoryIntegrationTherapyComponent,
    NeurodevelopmentalReflexTherapyComponent,
    NeuroTactileTherapyComponent,
    AuditoryProcessingTherapyComponent,
    HandTherapyComponent,
    PedagogicalTherapyComponent,
    SpecialistConsultationsComponent,
  ],
  imports: [
    CommonModule,
    AssistanceRoutingModule,
    SharedModule,
  ]
})
export class AssistanceModule { }
