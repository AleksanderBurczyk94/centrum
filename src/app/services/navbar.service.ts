import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private activeLinkSource = new BehaviorSubject<string>('');
  activeLink$ = this.activeLinkSource.asObservable();

  constructor() {}



  setActiveLink(link: string): void {
    this.activeLinkSource.next(link);
  }

  resetActiveLink(): void {
    this.activeLinkSource.next('');
  }

  // Metoda do logiki ustalania aktywnego linku na podstawie scrollowania
  updateActiveLinkOnScroll(): void {
    const teamSection = document.getElementById('team');
    if (teamSection) {
      const teamRect = teamSection.getBoundingClientRect();
      const teamIsVisibleEnough = (teamRect.top <= (window.innerHeight * 0.75)) && (teamRect.bottom > (window.innerHeight * 0.25));

      if (teamIsVisibleEnough) {
        this.setActiveLink('team');
      } else {
        this.setActiveLink('start');
      }
    }
  }
}
