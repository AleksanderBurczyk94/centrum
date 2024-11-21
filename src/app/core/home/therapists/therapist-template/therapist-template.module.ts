import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TherapistTemplateRoutingModule } from './therapist-template-routing.module';
import {TherapistTemplateComponent} from "./therapist-template.component";
import {SharedModule} from "../../../../shared/shared.module";

@NgModule({
  declarations: [
    TherapistTemplateComponent
  ],
  imports: [
    CommonModule,
    TherapistTemplateRoutingModule,
    SharedModule
  ],
})
export class TherapistTemplateModule {}
