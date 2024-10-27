import {ActivatedRouteSnapshot, CanDeactivate} from '@angular/router';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ContactComponent} from "../core/contact/contact.component";


@Injectable({
  providedIn: 'root'
})
export class contactFormUnsavedChangesGuard implements CanDeactivate<ContactComponent> {
  canDeactivate(component: ContactComponent): boolean {
    console.log("TEST: canDeactivate wywołany!");

    if (!component) {
      console.error("Błąd: component jest undefined");
      return true; // Bezpieczne wyjście, gdy komponent jest undefined
    }

    console.log("TEST: component.submitted =", component.submitted);
    if (component.submitted) {
      return true;
    }

    if (component.contactForm) {
      console.log("TEST: component.contactForm.dirty =", component.contactForm.dirty);
      if (component.contactForm.dirty) {
        return confirm('Masz niezapisane zmiany. Czy na pewno chcesz opuścić tę stronę?');
      }
    } else {
      console.error("Błąd: component.contactForm jest undefined");
    }

    return true;
  }
}
