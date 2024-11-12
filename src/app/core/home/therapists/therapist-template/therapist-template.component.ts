import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Therapist } from '../../../../interfaces/therpaists';
import { TherapistService } from '../../../../services/therapist.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-therapist-template',
  templateUrl: './therapist-template.component.html',
  styleUrls: ['./therapist-template.component.css'],
})
export class TherapistTemplateComponent implements OnInit, OnDestroy {
  therapist: Therapist | null = null;
  private therapistSubscription: Subscription | null = null;

  constructor(private readonly therapistService: TherapistService,
              private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id']; // Zakładając, że masz parametr `id` w URL
      this.therapistService.setActiveTherapistId(id);
      });

    this.therapistSubscription = this.therapistService
      .getActiveTherapistObservable()
      .subscribe((therapist) => {
        this.therapist = therapist;
      });
  }

  nextTherapist(): void {
    this.therapistService.nextTherapist();
  }

  prevTherapist(): void {
    this.therapistService.prevTherapist();
  }

  ngOnDestroy(): void {
    if (this.therapistSubscription) {
      this.therapistSubscription.unsubscribe();
    }
  }
}
