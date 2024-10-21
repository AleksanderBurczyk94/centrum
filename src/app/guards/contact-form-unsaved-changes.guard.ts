import {ActivatedRouteSnapshot, CanDeactivate} from '@angular/router';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ContactComponent} from "../core/contact/contact.component";


@Injectable({
  providedIn: 'root'
})
export class contactFormUnsavedChangesGuard implements CanDeactivate<ContactComponent> {
  canDeactivate(component: ContactComponent): boolean {
    if (component && component.submitted) {
      return true;
    }
    if (component && component.contactForm && component.contactForm.dirty) {
      return confirm('Masz niezapisane zmiany. Czy na pewno chcesz opuścić tę stronę?');
    }
    return true;
  }
}
