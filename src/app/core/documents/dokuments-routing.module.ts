import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppPaths} from "../../app-paths";
import {TherapyConsentComponent} from "./therapy-consent/therapy-consent.component";
import {ImageConsentComponent} from "./image-consent/image-consent.component";
import {MinorsProtectionComponent} from "./minors-protection/minors-protection.component";
import {DocumentsComponent} from "./documents.component";

const routes: Routes = [
  {
    path: '',
    component: DocumentsComponent,
    children: [
      {
        path: AppPaths.THERAPY_CONSENT,
        component: TherapyConsentComponent,
        title: 'Zgoda na udział w terapii',
        data: {
          description: 'Pobierz formularz zgody na udział w terapii w Centrum Równowaga w Kaliszu. Wypełnij i zapewnij sobie profesjonalne wsparcie terapeutyczne.'
        }
      },
      {
        path: AppPaths.IMAGE_CONSENT,
        component: ImageConsentComponent,
        title: 'Zgoda na publikacje wizerunku',
        data: {
          description: 'Formularz zgody na publikację wizerunku w Centrum Równowaga w Kaliszu. Zapewniamy pełną ochronę danych zgodnie z RODO.'
        }
      },
      {
        path: AppPaths.MINORS_PROTECTION,
        component: MinorsProtectionComponent,
        title: 'Ochrona małoletnich - Standardy',
        data: {
          description: 'Zapoznaj się z zasadami ochrony małoletnich w Centrum Równowaga w Kaliszu. Sprawdź nasze standardy bezpieczeństwa i politykę RODO.'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DokumentsRoutingModule {
}
