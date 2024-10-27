import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {RodoComponent} from "./core/footer/rodo/rodo.component";
import {contactFormUnsavedChangesGuard} from "./guards/contact-form-unsaved-changes.guard";
import {
  PaulinaOkrasaBurczykComponent
} from "./core/home/therapists/paulina-okrasa-burczyk/paulina-okrasa-burczyk.component";
import {
  KarolinaOkrasaStaszakComponent
} from "./core/home/therapists/karolina-okrasa-staszak/karolina-okrasa-staszak.component";
import {SywiaSzumskaComponent} from "./core/home/therapists/sywia-szumska/sywia-szumska.component";
import {MagdalenaMokrzyckaComponent} from "./core/home/therapists/magdalena-mokrzycka/magdalena-mokrzycka.component";
import {
  AgataMagdzickaBanachComponent
} from "./core/home/therapists/agata-magdzicka-banach/agata-magdzicka-banach.component";
import {AppPaths} from "./app-paths";
import {MartaKesickaComponent} from "./core/home/therapists/marta-kesicka/marta-kesicka.component";
import {BlogComponent} from "./core/blog/blog.component";

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
  {
    path: AppPaths.PRICE_LIST,
    loadChildren: () => import('./core/price-list/price-list.module').then(m => m.PriceListModule),
    title: 'Cennik'
  },
  {
    path: AppPaths.OUR_CENTER,
    loadChildren: () => import('./core/our-center/our-center.module').then(m => m.OurCenterModule),
    title: 'Nasze Centrum'
  },
  {
    path: AppPaths.BLOG,
    loadChildren: () => import('./core/blog/blog.module').then(m => m.BlogModule),
    component: BlogComponent, title: 'Blog'
  },
  {
    path: AppPaths.DOCUMENTS,
    loadChildren: () => import('./core/documents/dokuments.module').then(m => m.DokumentsModule),
    title: 'Dokumenty',
  },
  {
    path: AppPaths.CONTACT,
    loadChildren: () => import('./core/contact/contact.module').then(m => m.ContactModule),
    title: 'Kontakt',
    canDeactivate: [contactFormUnsavedChangesGuard]
  },
  {
    path: AppPaths.RODO,
    loadChildren: () => import('./core/footer/rodo/rodo.module').then(m => m.RodoModule),
    component: RodoComponent, title: 'Rodo'
  },

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

  {
    path: AppPaths.PAGE_NOT_FOUND,
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule),
    title: 'Page not found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
