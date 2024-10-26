import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppPaths} from "../../app-paths";
import {TherapyConsentComponent} from "./therapy-consent/therapy-consent.component";
import {ImageConsentComponent} from "./image-consent/image-consent.component";
import {MinorsProtectionComponent} from "./minors-protection/minors-protection.component";
import {DocumentsComponent} from "./documents.component";

let routes: Routes = [
  {
    path: '',
    component: DocumentsComponent,
    children: [
      {
        path: AppPaths.THERAPY_CONSENT,
        component: TherapyConsentComponent,
        title: 'Zgoda na udział w terapii'
      },
      {
        path: AppPaths.IMAGE_CONSENT,
        component: ImageConsentComponent,
        title: 'Zgoda na publikacje wizerunku'
      },
      {
        path: AppPaths.MINORS_PROTECTION,
        component: MinorsProtectionComponent,
        title: 'Standardy ochrony małoletnich'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DokumentsRoutingModule {
}
