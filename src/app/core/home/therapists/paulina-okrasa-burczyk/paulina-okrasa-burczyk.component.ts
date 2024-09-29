import {Component} from '@angular/core';
import {Therapist} from "../../../../interfaces/therpaists";
import {TherapistService} from "../../../../services/therapist.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-paulina-okrasa-burczyk',
  templateUrl: './paulina-okrasa-burczyk.component.html',
  styleUrl: './paulina-okrasa-burczyk.component.css'
})
export class PaulinaOkrasaBurczykComponent {
  therapist: Therapist | null = null;

  constructor(private therapistService: TherapistService) {
    this.therapist = this.therapistService.getActiveTherapist();
  }

  nextTherapist() {
    this.therapistService.nextTherapist();
  }

  prevTherapist() {
    this.therapistService.prevTherapist();
  }
}
