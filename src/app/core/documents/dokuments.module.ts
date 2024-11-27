import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DokumentsRoutingModule } from './dokuments-routing.module';
import { DocumentsComponent } from './documents.component';
import { MinorsProtectionComponent } from './minors-protection/minors-protection.component';
import { ImageConsentComponent } from './image-consent/image-consent.component';
import { TherapyConsentComponent } from './therapy-consent/therapy-consent.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    DocumentsComponent,
    MinorsProtectionComponent,
    ImageConsentComponent,
    TherapyConsentComponent,
  ],
  imports: [CommonModule, DokumentsRoutingModule, SharedModule],
})
export class DokumentsModule {}
