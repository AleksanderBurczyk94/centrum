import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AppPaths } from '../app-paths';

@Injectable({
  providedIn: 'root',
})
export class BlockRootGuard implements CanActivate {
  constructor(private readonly router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // Sprawdź, czy użytkownik próbuje wejść na dokładną ścieżkę `/zakres-pomocy`
    if (!route.firstChild) {
      // Jeśli nie ma children (czyli to dokładnie '/zakres-pomocy')
      this.router.navigate([AppPaths.PAGE_NOT_FOUND]); // Przekierowanie na stronę 404
      return false; // Blokuj dostęp
    }
    return true; // Pozwól na dostęp do children
  }
}
