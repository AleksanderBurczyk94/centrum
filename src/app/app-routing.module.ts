import {NgModule} from '@angular/core';
import {ExtraOptions, NavigationEnd, Router, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {RodoComponent} from "./core/footer/rodo/rodo.component";
import {AppPaths} from "./app-paths";
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
      description: 'Zakres pomocy Centrum Równowaga w Kaliszu: integracja sensoryczna, psycholog dziecięcy, INPP, i inne usługi wspierające rozwój dzieci!'
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
  },
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
