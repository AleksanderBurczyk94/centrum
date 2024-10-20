import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrl: './back-btn.component.css'
})
export class BackBtnComponent {

  constructor(private router: Router) {
  }

  navigateToStart(){
    this.router.navigate([''])
  }
}
