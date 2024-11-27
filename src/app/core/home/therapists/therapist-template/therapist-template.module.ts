import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TherapistTemplateRoutingModule } from './therapist-template-routing.module';
import { TherapistTemplateComponent } from './therapist-template.component';
import { SharedModule } from '../../../../shared/shared.module';
import { PersonCarouselComponent } from './person-carousel/person-carousel.component';
import { AboutMeComponent } from './about-me-section/about-me.component';
import { ZnanyLekarzComponent } from './about-me-section/znany-lekarz/znany-lekarz.component';

@NgModule({
  declarations: [
    TherapistTemplateComponent,
    PersonCarouselComponent,
    AboutMeComponent,
    ZnanyLekarzComponent,
  ],
  imports: [CommonModule, TherapistTemplateRoutingModule, SharedModule],
})
export class TherapistTemplateModule {}
