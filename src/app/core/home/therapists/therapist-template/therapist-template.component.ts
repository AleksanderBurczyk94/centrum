import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Therapist } from '../../../../interfaces/therpaists';
import { TherapistService } from '../../../../services/therapist.service';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-therapist-template',
  templateUrl: './therapist-template.component.html',
  styleUrls: ['./therapist-template.component.css'],
})
export class TherapistTemplateComponent implements OnInit, OnDestroy {
  therapist: Therapist | null = null;
  private therapistSubscription: Subscription | null = null;

  constructor(
    private readonly therapistService: TherapistService,
    private readonly route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    // Pobierz `id` terapeuty z parametrów URL
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.therapistService.setActiveTherapistId(id);
    });

    // Subskrybuj zmiany terapeuty i aktualizuj tytuł oraz meta tagi
    this.therapistSubscription = this.therapistService
      .getActiveTherapistObservable()
      .subscribe((therapist) => {
        this.therapist = therapist;
        this.setTitleAndMeta();
        this.setCanonicalLink(); // Dodanie lub aktualizacja linku kanonicznego
      });
  }

  nextTherapist(): void {
    this.therapistService.nextTherapist();
  }

  prevTherapist(): void {
    this.therapistService.prevTherapist();
  }

  setTitleAndMeta(): void {
    if (this.therapist) {
      this.titleService.setTitle(this.therapist.seoData.title);
      this.metaService.updateTag({
        name: 'description',
        content: this.therapist.seoData.metaDescription,
      });
    } else {
      console.warn('setTitleAndMeta: Brak terapeuty!');
    }
  }

  setCanonicalLink(): void {
    if (this.therapist) {
      // Tworzenie dynamicznego URL kanonicznego
      const canonicalUrl = `https://rownowagacentrum.pl/terapeuta/${this.therapist.id}`;

      // Znajdź istniejący link kanoniczny w <head>
      let link: HTMLLinkElement | null = this.document.querySelector(
        "link[rel='canonical']"
      );

      if (!link) {
        // Jeśli link kanoniczny nie istnieje, utwórz go
        link = this.document.createElement('link');
        link.setAttribute('rel', 'canonical');
        this.document.head.appendChild(link);
      }

      // Zaktualizuj lub ustaw atrybut `href` dla linku kanonicznego
      link.setAttribute('href', canonicalUrl);
    } else {
      console.warn('setCanonicalLink: Brak terapeuty!');
    }
  }

  ngOnDestroy(): void {
    if (this.therapistSubscription) {
      this.therapistSubscription.unsubscribe();
    }
  }
}
