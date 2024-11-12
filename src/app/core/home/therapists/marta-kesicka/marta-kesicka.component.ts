import { Component } from '@angular/core';
import {Therapist} from "../../../../interfaces/therpaists";
import {TherapistService} from "../../../../services/therapist.service";

@Component({
  selector: 'app-marta-ksiesicka',
  templateUrl: './marta-kesicka.component.html',
  styleUrl: './marta-kesicka.component.css'
})
export class MartaKesickaComponent {

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
