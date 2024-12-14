import { NgModule } from '@angular/core';
import {
  ExtraOptions,
  NavigationEnd,
  PreloadAllModules,
  Router,
  RouterModule,
  Routes,
} from '@angular/router';
import { AppPaths } from './app-paths';
import { filter } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../environments/environments';
import { BlockRootGuard } from './guards/block-root.guard';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 125],
};

const routes: Routes = [
  {
    path: AppPaths.HOME,
    loadChildren: () =>
      import('./core/home/home.module').then((m) => m.HomeModule),
    title: 'Diagnoza i Terapia Integracji Sensorycznej Kalisz - Równowaga',
    data: {
      description:
        'Centrum Równowaga w Kaliszu oferuje integrację sensoryczną, konsultacje z psychologiem, terapię INPP, wsparcie dla dzieci i młodzieży. Sprawdź naszą ofertę!',
    },
  },
  {
    path: AppPaths.ASSISTANCE,
    loadChildren: () =>
      import('./core/assistance/assistance.module').then(
        (m) => m.AssistanceModule
      ),
  },
  {
    path: AppPaths.PRICE_LIST,
    loadChildren: () =>
      import('./core/price-list/price-list.module').then(
        (m) => m.PriceListModule
      ),
    title: 'Cennik Usług Terapeutycznych - Centrum Równowaga',
    data: {
      description:
        'Poznaj ceny terapii w Centrum Równowaga  w Kaliszu. Oferujemy konsultacje psychologiczne, integrację sensoryczną,  terapię INPP i wiele innych. Sprawdź szczegóły!',
    },
  },
  {
    path: AppPaths.OUR_CENTER,
    loadChildren: () =>
      import('./core/our-center/our-center.module').then(
        (m) => m.OurCenterModule
      ),
    title: 'Galeria zdjęć- Równowaga Kalisz',
    data: {
      description:
        'Zobacz galerię zdjęć Centrum Terapii i Wsparcia Rozwoju w Kaliszu. Poznaj nasze przestrzenie terapeutyczne i zobacz, jak pomagamy dzieciom i ich rodzicom.',
    },
  },
  {
    path: AppPaths.BLOG,
    loadChildren: () =>
      import('./core/blog/blog.module').then((m) => m.BlogModule),
    title: 'Blog Terapeutyczny - Centrum Równowaga',
    data: {
      description:
        'Blog Centrum Równowaga w Kaliszu: artykuły o psychologii, terapii, integracji sensorycznej i wsparciu rozwoju dzieci. Odkryj wartościowe porady i inspiracje!',
    },
    canActivate: [() => environment.enableBlog],
  },
  {
    path: AppPaths.DOCUMENTS,
    loadChildren: () =>
      import('./core/documents/dokuments.module').then(
        (m) => m.DokumentsModule
      ),
    title: 'Dokumenty i Formularze - Centrum Równowaga',
    data: {
      description:
        'Pobierz dokumenty i formularze wymagane w Centrum Równowaga w Kaliszu. Znajdź zgody na terapię, formularze ochrony danych i inne ważne informacje.',
    },
  },
  {
    path: AppPaths.CONTACT,
    loadChildren: () =>
      import('./core/contact/contact.module').then((m) => m.ContactModule),
    title: 'Kontakt z Centrum Równowaga - Adres, Telefon, Wizyta',
    data: {
      description:
        'Skontaktuj się z Centrum Równowaga w Kaliszu. Adres, telefon, formularz kontaktowy oraz informacje o wizytach. Umów się już dziś!',
    },
  },
  {
    path: AppPaths.THERAPIST,
    loadChildren: () =>
      import(
        './core/home/therapists/therapist-template/therapist-template.module'
      ).then((m) => m.TherapistTemplateModule),
    canActivate: [BlockRootGuard],
  },
  {
    path: AppPaths.RODO,
    loadChildren: () =>
      import('./core/footer/rodo/rodo.module').then((m) => m.RodoModule),
    title: 'RODO - Polityka Prywatności',
    data: {
      description:
        'Zapoznaj się z polityką prywatności Centrum Równowaga w Kaliszu. Informacje o przetwarzaniu danych osobowych zgodnie z RODO.',
    },
  },
  {
    path: AppPaths.JOB,
    loadChildren: () =>
      import('./core/job/job.module').then((m) => m.JobModule),
    title: 'Praca w Centrum Równowaga – Oferty pracy dla terapeutów w Kaliszu',
    data: {
      description:
        'Dołącz do zespołu Centrum Terapii i Wsparcia Rozwoju Równowaga w Kaliszu. Sprawdź aktualne oferty pracy dla terapeutów i innych specjalistów.',
    },
  },
  {
    path: AppPaths.PAGE_NOT_FOUND,
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
    title: 'Błąd 404 - Strona Nie Znaleziona',
    data: {
      description:
        'Strona, której szukasz, nie została znaleziona. Wróć na stronę główną Centrum Równowaga w Kaliszu i odkryj nasze usługi.',
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      ...routerOptions, // przekazanie twoich opcji routingu
      preloadingStrategy: PreloadAllModules, // opcja preładowania
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(
    private readonly router: Router,
    private readonly titleService: Title,
    private readonly metaService: Meta
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
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
        this.metaService.updateTag({
          name: 'description',
          content: child.snapshot.data['description'],
        });
      }
      child = child.firstChild;
    }
  }
}
