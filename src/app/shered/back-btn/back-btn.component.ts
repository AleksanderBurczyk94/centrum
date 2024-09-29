import {Component} from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrl: './back-btn.component.css'
})
export class BackBtnComponent {

  constructor(private location: Location) {
  }

  navigateBack() {
    this.location.back();
  }
}
