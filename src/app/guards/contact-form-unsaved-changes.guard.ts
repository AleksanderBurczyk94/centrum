import {ActivatedRouteSnapshot, CanDeactivate} from '@angular/router';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ContactComponent} from "../core/contact/contact.component";


@Injectable({
  providedIn: 'root'
})
export class contactFormUnsavedChangesGuard implements CanDeactivate<ContactComponent> {
  canDeactivate(component: ContactComponent): boolean {
    if (component.submitted) {
      return true;
    }
    if (component.contactForm.dirty) {
      return confirm('Czy na pewno chcesz opuścić formularz bez wysłania?');
    }
    return true;
  }
}
