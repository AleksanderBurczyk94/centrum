import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {AppRoutes} from "../../app-routing.module";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @ViewChild('navbarNavAltMarkup', {static: true}) navbarNavAltMarkup!: ElementRef;
  routes = AppRoutes;


  collapseNav() {
    const navbarCollapse = this.navbarNavAltMarkup.nativeElement;
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }}
}
