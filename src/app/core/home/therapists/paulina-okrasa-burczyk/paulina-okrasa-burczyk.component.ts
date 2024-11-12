import {Component} from '@angular/core';
import {Therapist} from "../../../../interfaces/therpaists";
import {TherapistService} from "../../../../services/therapist.service";

@Component({
  selector: 'app-paulina-okrasa-burczyk',
  templateUrl: './paulina-okrasa-burczyk.component.html',
  styleUrl: './paulina-okrasa-burczyk.component.css'
})
export class PaulinaOkrasaBurczykComponent {
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
