import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  @ViewChild('navbarNavAltMarkup') navbarNavAltMarkup!: ElementRef;

  constructor(private renderer: Renderer2) {}

  collapseNav() {
    if (this.navbarNavAltMarkup && this.navbarNavAltMarkup.nativeElement.classList.contains('show')) {
      this.renderer.removeClass(this.navbarNavAltMarkup.nativeElement, 'show');
    }
  }
}
