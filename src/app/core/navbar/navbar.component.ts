import { Component, ElementRef, OnInit, Renderer2, ViewChild, HostListener } from '@angular/core';
import { AppRoutes } from "../../app-routing.module";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('navbarNavAltMarkup', { static: true }) navbarNavAltMarkup!: ElementRef;
  routes = AppRoutes;
  activeLink: string = ''; // Domyślnie Start jest aktywny

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.onScroll(); // Sprawdzenie pozycji sekcji po inicjalizacji
  }

  // Monitorowanie zdarzenia przewijania
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.onScroll();
  }

  // Logika scrollowania
  onScroll(): void {
    const teamSection = document.getElementById('team');
    if (teamSection) {
      const teamRect = teamSection.getBoundingClientRect();

      const teamIsVisibleEnough = (teamRect.top <= (window.innerHeight * 0.75)) && (teamRect.bottom > (window.innerHeight * 0.25));


      // Sprawdzenie, czy sekcja "Team" jest w zasięgu widoczności
      if (teamIsVisibleEnough) {
        this.activeLink = 'team';
      }
      // Jeśli sekcja Team jest całkowicie poza widokiem, podkreślamy "Start"
      else {
        this.activeLink = 'start';
      }
    }
  }

  // Ustawienie aktywnego linku
  setActive(link: string): void {
    this.activeLink = link;
  }

  // Reset aktywnego linku
  resetActive(): void {
    this.activeLink = '';  // Resetuje klasę active
  }

  // Zamykanie nawigacji mobilnej
  collapseNav() {
    const navbarCollapse = this.navbarNavAltMarkup.nativeElement;
    if (navbarCollapse.classList.contains('show')) {
      this.renderer.removeClass(navbarCollapse, 'show');
    }
  }
}
