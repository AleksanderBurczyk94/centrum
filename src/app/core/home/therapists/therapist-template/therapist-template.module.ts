import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TherapistTemplateRoutingModule } from './therapist-template-routing.module';
import {TherapistTemplateComponent} from "./therapist-template.component";
import {SharedModule} from "../../../../shared/shared.module";
import { PersonCarouselComponent } from './person-carousel/person-carousel.component';

@NgModule({
  declarations: [
    TherapistTemplateComponent,
    PersonCarouselComponent
  ],
  imports: [
    CommonModule,
    TherapistTemplateRoutingModule,
    SharedModule
  ],
})
export class TherapistTemplateModule {}
