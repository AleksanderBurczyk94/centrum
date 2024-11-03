import {Component} from '@angular/core';
import {TherapistService} from "../../../services/therapist.service";

@Component({
  selector: 'app-therapists',
  templateUrl: './therapists.component.html',
  styleUrl: './therapists.component.css'
})
export class TherapistsComponent {

  constructor(private readonly therapistService: TherapistService) {
  }

  therapists = this.therapistService.getTherapists();

}
