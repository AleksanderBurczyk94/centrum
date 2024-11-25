import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BlogService} from "../../../../services/blog.service";
import {Meta, Title} from "@angular/platform-browser";
import {TherapistService} from "../../../../services/therapist.service";
import {AppPaths} from "../../../../app-paths";

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrl: './autor.component.css'
})
export class AutorComponent {

  appPaths = AppPaths;

  constructor(
    private readonly router: Router,

    private readonly therapistService: TherapistService,
  ) {
  }

  therapists = this.therapistService.getTherapists();

  goToTherapist(id: number): void {
    this.therapistService.setActiveTherapistId(id);
    this.router.navigate([this.appPaths.THERAPIST_TEMPLATE, id]);
  }
}
