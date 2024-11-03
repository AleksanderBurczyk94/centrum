import { Component } from '@angular/core';
import {TherapistService} from "../../../../services/therapist.service";
import {Therapist} from "../../../../interfaces/therpaists";

@Component({
  selector: 'app-karolina-okrasa-staszak',
  templateUrl: './karolina-okrasa-staszak.component.html',
  styleUrl: './karolina-okrasa-staszak.component.css'
})
export class KarolinaOkrasaStaszakComponent {

  therapist: Therapist | null = null;

  constructor(private readonly therapistService: TherapistService) {
    this.therapist = this.therapistService.getActiveTherapist();
  }


  nextTherapist() {
    this.therapistService.nextTherapist();
  }

  prevTherapist() {
    this.therapistService.prevTherapist();
  }
}
