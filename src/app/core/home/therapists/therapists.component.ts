import {Component} from '@angular/core';
import {TherapistService} from "../../../services/therapist.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-therapists',
  templateUrl: './therapists.component.html',
  styleUrl: './therapists.component.css'
})
export class TherapistsComponent {

  constructor(private therapistService: TherapistService) {
  }

  therapists = this.therapistService.getTherapists();

}
