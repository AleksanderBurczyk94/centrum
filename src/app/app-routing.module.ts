import {NgModule} from '@angular/core';
import {ExtraOptions, NavigationEnd, Router, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {RodoComponent} from "./core/footer/rodo/rodo.component";
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
import {filter} from "rxjs";
import {Meta, Title} from "@angular/platform-browser";

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 100],
};

const routes: Routes = [
  {
    path: AppPaths.HOME,
    component: HomeComponent,
    title: 'Diagnoza i Terapia Integracji Sensorycznej - Równowaga Kalisz',
    data: {
      description: 'Profesjonalna diagnoza i terapia integracji sensorycznej w Kaliszu dla dzieci i dorosłych.'
    }
  },
  {
    path: AppPaths.ASSISTANCE,
    loadChildren: () => import('./core/assistance/assistance.module').then(m => m.AssistanceModule),
    title: 'Zakres Pomocy– Psycholog dziecięcy, integracja sensoryczna (SI), INPP',  data: {
      description: 'TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
    }
  },
  {
    path: AppPaths.PRICE_LIST,
    loadChildren: () => import('./core/price-list/price-list.module').then(m => m.PriceListModule),
    title: 'Cennik Usług Terapeutycznych - Centrum Równowaga'
  },
  {
    path: AppPaths.OUR_CENTER,
    loadChildren: () => import('./core/our-center/our-center.module').then(m => m.OurCenterModule),
    title: 'Galeria zdjęć- Równowaga Kalisz'
  },
  {
    path: AppPaths.BLOG,
    loadChildren: () => import('./core/blog/blog.module').then(m => m.BlogModule),
    component: BlogComponent,
    title: 'Blog Terapeutyczny - Centrum Równowaga'
  },
  {
    path: AppPaths.DOCUMENTS,
    loadChildren: () => import('./core/documents/dokuments.module').then(m => m.DokumentsModule),
    title: 'Dokumenty i Formularze - Centrum Równowaga'
  },
  {
    path: AppPaths.CONTACT,
    loadChildren: () => import('./core/contact/contact.module').then(m => m.ContactModule),
    title: 'Kontakt z Centrum Równowaga - Adres, Telefon, Wizyta'
  },
  {
    path: AppPaths.RODO,
    loadChildren: () => import('./core/footer/rodo/rodo.module').then(m => m.RodoModule),
    component: RodoComponent,
    title: 'RODO - Polityka Prywatności'
  },
  {
    path: AppPaths.PAULINA_OKRASA_BURCZYK,
    component: PaulinaOkrasaBurczykComponent,
    title: 'Paulina Okrasa-Burczyk - Dobry terapeuta, psycholog'
  },
  {
    path: AppPaths.KAROLINA_OKRASA_STASZAK,
    component: KarolinaOkrasaStaszakComponent,
    title: 'Karolina Okrasa-Staszak - Psycholog Centrum Równowaga'
  },
  {
    path: AppPaths.SYLWIA_SZUMSKA,
    component: SywiaSzumskaComponent,
    title: 'Sylwia Szumska - Terapeuta Równowaga'
  },
  {
    path: AppPaths.MAGDALENA_MOKRZYCKA,
    component: MagdalenaMokrzyckaComponent,
    title: 'Magdalena Mokrzycka - Specjalista Równowaga'
  },
  {
    path: AppPaths.AGATA_MAGDZICKA_BANACH,
    component: AgataMagdzickaBanachComponent,
    title: 'Agata Magdzicka-Banach - Terapia Dzieci i Młodzieży'
  },
  {
    path: AppPaths.MARTA_KESICKA,
    component: MartaKesickaComponent,
    title: 'Marta Kęsicka - Terpia Gabinet Równowaga'
  },
  {
    path: AppPaths.PAGE_NOT_FOUND,
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule),
    title: 'Błąd 404 - Strona Nie Znaleziona',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private readonly router: Router, private readonly titleService: Title, private readonly metaService: Meta) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const route = this.router.routerState.root;
      this.updateMetaTags(route);
    });
  }

  private updateMetaTags(route: any) {
    let child = route.firstChild;
    while (child) {
      if (child.snapshot.data['title']) {
        this.titleService.setTitle(child.snapshot.data['title']);
      }

      if (child.snapshot.data['description']) {
        this.metaService.updateTag({ name: 'description', content: child.snapshot.data['description'] });
      }

      child = child.firstChild;
    }
  }
}
