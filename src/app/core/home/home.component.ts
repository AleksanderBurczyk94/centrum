import {Component, OnInit, Renderer2} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private router: Router,
              private renderer: Renderer2) { }

  goToAppointment() {
    this.router.navigate(['/appointment']);
  }

  ngOnInit(): void {
    const script = this.renderer.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', '');
    script.defer = true;
    this.renderer.appendChild(document.body, script);
  }
}
