import { Component } from '@angular/core';
import {Therapist} from "../../../../interfaces/therpaists";
import {TherapistService} from "../../../../services/therapist.service";

@Component({
  selector: 'app-sywia-szumska',
  templateUrl: './sywia-szumska.component.html',
  styleUrl: './sywia-szumska.component.css'
})
export class SywiaSzumskaComponent {
  therapist: Therapist | null = null;

  constructor(private readonly therapistService: TherapistService) {
  }

  nextTherapist() {
    this.therapistService.nextTherapist();
  }

  prevTherapist() {
    this.therapistService.prevTherapist();
  }
}
