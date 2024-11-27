import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { ContactBoxComponent } from './contact-box/contact-box.component';
import { FormBoxComponent } from './form-box/form-box.component';

@NgModule({
  declarations: [
    ContactComponent,
    MapComponent,
    ContactBoxComponent,
    FormBoxComponent,
  ],
  exports: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ContactModule {}
