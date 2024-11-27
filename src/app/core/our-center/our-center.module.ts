import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurCenterRoutingModule } from './our-center-routing.module';
import { OurCenterComponent } from './our-center.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [OurCenterComponent],
  imports: [CommonModule, OurCenterRoutingModule, SharedModule],
})
export class OurCenterModule {}
