import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private readonly router: Router) {
  }
  goToContact() {
  this.router.navigate(['/contact'])
  }

  goToRodo() {
    this.router.navigate(['/rodo'])
  }

}
