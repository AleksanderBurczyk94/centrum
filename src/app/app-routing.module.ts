import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {PriceListComponent} from "./core/price-list/price-list.component";
import {BlogComponent} from "./core/blog/blog.component";
import {MinorsProtectionComponent} from "./core/documents/minors-protection/minors-protection.component";
import {RodoComponent} from "./core/footer/rodo/rodo.component";
import {contactFormUnsavedChangesGuard} from "./guards/contact-form-unsaved-changes.guard";
import {
  PaulinaOkrasaBurczykComponent
} from "./core/home/therapists/paulina-okrasa-burczyk/paulina-okrasa-burczyk.component";
import {
  KarolinaOkrasaStaszakComponent
} from "./core/home/therapists/karolina-okrasa-staszak/karolina-okrasa-staszak.component";
import {TherapyConsentComponent} from "./core/documents/therapy-consent/therapy-consent.component";
import {DocumentsComponent} from "./core/documents/documents.component";
import {ImageConsentComponent} from "./core/documents/image-consent/image-consent.component";
import {SywiaSzumskaComponent} from "./core/home/therapists/sywia-szumska/sywia-szumska.component";
import {MagdalenaMokrzyckaComponent} from "./core/home/therapists/magdalena-mokrzycka/magdalena-mokrzycka.component";
import {
  AgataMagdzickaBanachComponent
} from "./core/home/therapists/agata-magdzicka-banach/agata-magdzicka-banach.component";
import {AppPaths} from "./app-paths";
import {MartaKesickaComponent} from "./core/home/therapists/marta-kesicka/marta-kesicka.component";

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // Ustawienia przywracania pozycji przewijania
  anchorScrolling: 'enabled',           // Włączenie przewijania do elementu z kotwicą
  scrollOffset: [0, 100],              // Przesunięcie o 100px w górę
};

const routes: Routes = [
  {path: AppPaths.HOME, component: HomeComponent, title: 'start'},
  {
    path: AppPaths.ASSISTANCE,
    loadChildren: () => import('./core/assistance/assistance.module').then(m => m.AssistanceModule),
    title: 'Zakres pomocy',
  },
  {path: AppPaths.PRICE_LIST, component: PriceListComponent, title: 'Cennik'},
  {
    path: AppPaths.OUR_CENTER,
    loadChildren: () => import('./core/our-center/our-center.module').then(m => m.OurCenterModule),
    title: 'Nasze Centrum'
  },
  {path: AppPaths.BLOG, component: BlogComponent, title: 'Blog'},
  {
    path: AppPaths.DOCUMENTS,
    component: DocumentsComponent,
    title: 'Dokumenty',
    children: [
      {path: AppPaths.THERAPY_CONSENT, component: TherapyConsentComponent, title: 'Zgoda na udział w terapii'},
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
  },
  {
    path: AppPaths.CONTACT,
    loadChildren: () => import('./core/contact/contact.module').then(m => m.ContactModule),
    title: 'Kontakt',
    canDeactivate: [contactFormUnsavedChangesGuard]
  },
  {path: AppPaths.RODO, component: RodoComponent, title: 'Rodo'},

  {
    path: AppPaths.PAULINA_OKRASA_BURCZYK,
    component: PaulinaOkrasaBurczykComponent,
    title: 'Paulina Okrasa-Burczyk'
  },
  {
    path: AppPaths.KAROLINA_OKRASA_STASZAK,
    component: KarolinaOkrasaStaszakComponent,
    title: 'Karolina Okrasa-Staszak'
  }, {
    path: AppPaths.SYLWIA_SZUMSKA,
    component: SywiaSzumskaComponent,
    title: 'Sylwia Szumska'
  }, {
    path: AppPaths.MAGDALENA_MOKRZYCKA,
    component: MagdalenaMokrzyckaComponent,
    title: 'Magdalena Mokrzycka'
  }, {
    path: AppPaths.AGATA_MAGDZICKA_BANACH,
    component: AgataMagdzickaBanachComponent,
    title: 'Agata Magdzicka-Banach'
  },
  {
    path: AppPaths.MARTA_KESICKA,
    component: MartaKesickaComponent,
    title: 'Marta Kęsicka'
  },

  {path: AppPaths.PAGE_NOT_FOUND, component: PageNotFoundComponent, title: 'Page not found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
