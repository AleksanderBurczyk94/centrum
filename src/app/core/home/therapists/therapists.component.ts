import {Component} from '@angular/core';
import {TherapistService} from "../../../services/therapist.service";
import {AppPaths} from "../../../app-paths";
import {Router} from "@angular/router";

@Component({
  selector: 'app-therapists',
  templateUrl: './therapists.component.html',
  styleUrl: './therapists.component.css'
})
export class TherapistsComponent {

  public appPaths = AppPaths

  constructor(private readonly therapistService: TherapistService, private readonly router: Router,) {
  }

  therapists = this.therapistService.getTherapists();


  goToTherapist(id: number): void {
    this.therapistService.setActiveTherapistId(id);
    this.router.navigate([this.appPaths.THERAPIST_TEMPLATE, id]);
  }
}
