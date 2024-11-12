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
import {TherapistTemplateComponent} from "./core/home/therapists/therapist-template/therapist-template.component";

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
      description: 'Centrum Równowaga w Kaliszu oferuje terapię psychologiczną, integrację sensoryczną, terapię INPP, wsparcie dla dzieci i dorosłych. Sprawdź naszą ofertę!'
    },

  },
  {
    path: AppPaths.ASSISTANCE,
    loadChildren: () => import('./core/assistance/assistance.module').then(m => m.AssistanceModule),
    title: 'Zakres Pomocy– Psycholog dziecięcy, integracja sensoryczna (SI), INPP',
    data: {
      description: 'Zakres pomocy Centrum Równowaga w Kaliszu: integracja sensoryczna, psycholog dziecięcy, INPP, terapia widzenia i inne usługi wspierające rozwój dzieci!'
    }
  },
  {
    path: AppPaths.PRICE_LIST,
    loadChildren: () => import('./core/price-list/price-list.module').then(m => m.PriceListModule),
    title: 'Cennik Usług Terapeutycznych - Centrum Równowaga',
    data: {
      description: 'Poznaj ceny terapii w Centrum Równowaga  w Kaliszu. Oferujemy konsultacje psychologiczne, integrację sensoryczną,  terapię INPP i wiele innych. Sprawdź szczegóły!'
    }
  },
  {
    path: AppPaths.OUR_CENTER,
    loadChildren: () => import('./core/our-center/our-center.module').then(m => m.OurCenterModule),
    title: 'Galeria zdjęć- Równowaga Kalisz',
    data: {
      description: 'Zobacz galerię zdjęć Centrum Terapii i Wsparcia Rozwoju w Kaliszu. Poznaj nasze przestrzenie terapeutyczne i zobacz, jak pomagamy dzieciom i ich rodzicom.'
    }
  },
  {
    path: AppPaths.BLOG,
    loadChildren: () => import('./core/blog/blog.module').then(m => m.BlogModule),
    component: BlogComponent,
    title: 'Blog Terapeutyczny - Centrum Równowaga',
    data: {
      description: 'Blog Centrum Równowaga w Kaliszu: artykuły o psychologii, terapii, integracji sensorycznej i wsparciu rozwoju dzieci. Odkryj wartościowe porady i inspiracje!'
    }
  },
  {
    path: AppPaths.DOCUMENTS,
    loadChildren: () => import('./core/documents/dokuments.module').then(m => m.DokumentsModule),
    title: 'Dokumenty i Formularze - Centrum Równowaga',
    data: {
      description: 'Pobierz dokumenty i formularze wymagane w Centrum Równowaga w Kaliszu. Znajdź zgody na terapię, formularze ochrony danych i inne ważne informacje.'
    }
  },
  {
    path: AppPaths.CONTACT,
    loadChildren: () => import('./core/contact/contact.module').then(m => m.ContactModule),
    title: 'Kontakt z Centrum Równowaga - Adres, Telefon, Wizyta',
    data: {
      description: 'Skontaktuj się z Centrum Równowaga w Kaliszu. Adres, telefon, formularz kontaktowy oraz informacje o wizytach. Umów się już dziś!'
    }
  },
  {
    path: AppPaths.RODO,
    loadChildren: () => import('./core/footer/rodo/rodo.module').then(m => m.RodoModule),
    component: RodoComponent,
    title: 'RODO - Polityka Prywatności',
    data: {
      description: 'Zapoznaj się z polityką prywatności Centrum Równowaga w Kaliszu. Informacje o przetwarzaniu danych osobowych zgodnie z RODO.'
    }
  },
  {
    path: 'terapeuta/:id',
    component: TherapistTemplateComponent,
    title: 'Terapeuta - Centrum Równowaga!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
  },
  // {
  //   path: AppPaths.PAULINA_OKRASA_BURCZYK,
  //   component: PaulinaOkrasaBurczykComponent,
  //   title: 'Paulina Okrasa-Burczyk - Dobry terapeuta, psycholog',
  //   data: {
  //     description: 'Paulina Okrasa-Burczyk - założycielka Centrum Równowaga w Kaliszu, psycholog, pedagog, terapeutka SI i INPP, specjalistka w pracy z dziećmi w spektrum autyzmu.'
  //   }
  // },
  // {
  //   path: AppPaths.KAROLINA_OKRASA_STASZAK,
  //   component: KarolinaOkrasaStaszakComponent,
  //   title: 'Karolina Okrasa-Staszak - Psycholog Centrum Równowaga',
  //   data: {
  //     description: 'Karolina Okrasa-Staszak - psycholog w Centrum Równowaga w Kaliszu. Specjalizuje się w wsparciu emocjonalnym i terapeutycznym dzieci i młodzieży.'
  //   }
  // },
  // {
  //   path: AppPaths.SYLWIA_SZUMSKA,
  //   component: SywiaSzumskaComponent,
  //   title: 'Sylwia Szumska - Terapeuta Równowaga',
  //   data: {
  //     description: 'Sylwia Szumska - pedagog, terapeutka SI i specjalistka terapii pedagogicznej w Centrum Równowaga w Kaliszu. Pomaga dzieciom z trudnościami w nauce i rozwoju.'
  //   }
  // },
  // {
  //   path: AppPaths.MAGDALENA_MOKRZYCKA,
  //   component: MagdalenaMokrzyckaComponent,
  //   title: 'Magdalena Mokrzycka - Specjalista Równowaga',
  //   data: {
  //     description: 'Magdalena Mokrzycka - terapeutka SI w Centrum Równowaga. Specjalizuje się w integracji sensorycznej i wsparciu rozwoju dzieci w Kaliszu.'
  //   }
  // },
  // {
  //   path: AppPaths.AGATA_MAGDZICKA_BANACH,
  //   component: AgataMagdzickaBanachComponent,
  //   title: 'Agata Magdzicka-Banach - Terapia Dzieci i Młodzieży',
  //   data: {
  //     description: 'Agata Magdzicka-Banach - pedagog, surdopedagog, tyflopedagog i terapeutka EEG Biofeedback w Centrum Równowaga. Wspiera dzieci w spektrum autyzmu i z trudnościami rozwojowymi.'
  //   }
  // },
  // {
  //   path: AppPaths.MARTA_KESICKA,
  //   component: MartaKesickaComponent,
  //   title: 'Marta Kęsicka - Terapia Gabinet Równowaga',
  //   data: {
  //     description: 'Marta Kęsicka - pedagog, terapeutka SI i instruktorka pilates w Centrum Równowaga. Specjalizuje się w terapii ruchowej i wsparciu umiejętności społecznych dzieci.'
  //   }
  // },
  {
    path: AppPaths.PAGE_NOT_FOUND,
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule),
    title: 'Błąd 404 - Strona Nie Znaleziona',
    data: {
      description: 'Strona, której szukasz, nie została znaleziona. Wróć na stronę główną Centrum Równowaga w Kaliszu i odkryj nasze usługi.'
    }
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
        this.metaService.updateTag({name: 'description', content: child.snapshot.data['description']});
      }
      child = child.firstChild;
    }
  }
}
