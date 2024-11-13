import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Therapist } from '../../../../interfaces/therpaists';
import { TherapistService } from '../../../../services/therapist.service';
import { ActivatedRoute } from "@angular/router";
import { Meta, Title } from "@angular/platform-browser";

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
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    // Pobierz `id` terapeuty z parametrów URL
    this.route.params.subscribe((params) => {
      const id = +params['id']; // Zakładając, że masz parametr `id` w URL
      this.therapistService.setActiveTherapistId(id);
    });

    // Subskrybuj zmiany terapeuty i aktualizuj tytuł oraz meta tagi
    this.therapistSubscription = this.therapistService
      .getActiveTherapistObservable()
      .subscribe((therapist) => {
        this.therapist = therapist;
        this.setTitleAndMeta(); // Wywołaj po przypisaniu terapeuty
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
      this.metaService.updateTag({ name: 'description', content: this.therapist.seoData.metaDescription });
    } else {
      console.warn("setTitleAndMeta: Brak terapeuty!");
    }
  }

  ngOnDestroy(): void {
    if (this.therapistSubscription) {
      this.therapistSubscription.unsubscribe();
    }
  }
}
