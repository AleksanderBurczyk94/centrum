import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppPaths } from '../../app-paths';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  appPath = AppPaths;

  constructor(private readonly router: Router) {}
  goToContact() {
    this.router.navigate([this.appPath.CONTACT]);
  }

  goToRodo() {
    this.router.navigate([this.appPath.RODO]);
  }

  goToJob() {
    this.router.navigate([this.appPath.JOB]);
  }
}
