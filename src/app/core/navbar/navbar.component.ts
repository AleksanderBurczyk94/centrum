import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  @ViewChild('navbarNavAltMarkup') navbarNavAltMarkup: any;

  collapseNav() {
    if (this.navbarNavAltMarkup && this.navbarNavAltMarkup.nativeElement.classList.contains('show')) {
      this.navbarNavAltMarkup.nativeElement.classList.remove('show');
    }
  }
}
