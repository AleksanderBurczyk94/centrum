import {CanDeactivate} from '@angular/router';
import {Injectable} from "@angular/core";
import {ContactComponent} from "../core/contact/contact.component";


@Injectable({
  providedIn: 'root'
})
export class contactFormUnsavedChangesGuard implements CanDeactivate<ContactComponent> {
  canDeactivate(component: ContactComponent): boolean {

    if (!component) {
      return true;
    }

    if (component.submitted) {
      return true;
    }

    if (component.contactForm) {
      if (component.contactForm.dirty) {
        return confirm('Masz niezapisane zmiany. Czy na pewno chcesz opuścić tę stronę?');
      }
    } else {
      console.error("Błąd: component.contactForm jest undefined");
    }

    return true;
  }
}
