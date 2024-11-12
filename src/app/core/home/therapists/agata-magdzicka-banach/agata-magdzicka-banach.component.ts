import { Component } from '@angular/core';
import {TherapistService} from "../../../../services/therapist.service";
import {Therapist} from "../../../../interfaces/therpaists";

@Component({
  selector: 'app-agata-magdzicka-banach',
  templateUrl: './agata-magdzicka-banach.component.html',
  styleUrl: './agata-magdzicka-banach.component.css'
})
export class AgataMagdzickaBanachComponent {

  therapist: Therapist | null = null;

  constructor(private therapistService: TherapistService) {
  }


  nextTherapist() {
    this.therapistService.nextTherapist();
  }

  prevTherapist() {
    this.therapistService.prevTherapist();
  }
}
