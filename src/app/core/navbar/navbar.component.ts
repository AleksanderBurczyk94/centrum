import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {NavbarService} from "../../services/navbar.service";
import {AppPaths} from "../../app-paths";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('navbarNavAltMarkup', { static: true }) navbarNavAltMarkup!: ElementRef;
  appPaths = AppPaths;

  constructor(private renderer: Renderer2, public navbarService: NavbarService) {}

  ngOnInit(): void {
    this.navbarService.updateActiveLinkOnScroll();  // Sprawdzanie stanu na początku
  }

  get activeLink$() {
    return this.navbarService.activeLink$;
  }
  setActiveLink(link: string){
    this.navbarService.setActiveLink(link)
  }
  resetActiveLink(){
    this.navbarService.resetActiveLink()
  }

  // Monitorowanie zdarzenia przewijania
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.navbarService.updateActiveLinkOnScroll();  // Delegujemy logikę scrollowania do serwisu
  }

  // Zamykanie nawigacji mobilnej
  collapseNav() {
    const navbarCollapse = this.navbarNavAltMarkup.nativeElement;
    if (navbarCollapse.classList.contains('show')) {
      this.renderer.removeClass(navbarCollapse, 'show');
    }
  }
}
