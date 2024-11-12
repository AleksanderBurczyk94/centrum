import { Component } from '@angular/core';
import {TherapistService} from "../../../../services/therapist.service";
import {Therapist} from "../../../../interfaces/therpaists";

@Component({
  selector: 'app-magdalena-mokrzycka',
  templateUrl: './magdalena-mokrzycka.component.html',
  styleUrl: './magdalena-mokrzycka.component.css'
})
export class MagdalenaMokrzyckaComponent {

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
