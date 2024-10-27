import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private activeLinkSource = new BehaviorSubject<string>('');
  activeLink$ = this.activeLinkSource.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  setActiveLink(link: string): void {
    this.activeLinkSource.next(link);
  }

  resetActiveLink(): void {
    this.activeLinkSource.next('');
  }

  // Metoda do logiki ustalania aktywnego linku na podstawie scrollowania
  updateActiveLinkOnScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const teamSection = document.getElementById('team');
      if (teamSection) {
        const teamRect = teamSection.getBoundingClientRect();
        const teamIsVisibleEnough =
          teamRect.top <= window.innerHeight * 0.75 &&
          teamRect.bottom > window.innerHeight * 0.25;

        this.setActiveLink(teamIsVisibleEnough ? 'team' : 'start');
      }
    }
  }
}
