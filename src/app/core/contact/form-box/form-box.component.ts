import { Component } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-box',
  templateUrl: './form-box.component.html',
  styleUrl: './form-box.component.css',
})
export class FormBoxComponent {
  submitted = false;

  showSuccessAlert = false;
  showFeilureAlert = false;

  constructor(private readonly contactService: ContactService) {}

  get controls() {
    return this.contactForm.controls;
  }

  contactForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(70),
    ]),
    lastName: new FormControl('', [
      Validators.minLength(1),
      Validators.maxLength(70),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    checkBox: new FormControl(false, [Validators.requiredTrue]),
    textMessage: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(500),
    ]),
  });

  getErrorMessage(control: FormControl): string {
    if (control.hasError('required') && control === this.controls.checkBox) {
      return 'Musisz wyrazić zgodę na przetwarzanie danych osobowych';
    }
    if (control.hasError('required')) {
      return 'Pole jest wymagane';
    }
    if (control.hasError('minlength')) {
      return 'Za mała liczba znaków';
    }
    if (control.hasError('maxlength')) {
      return 'Za duża liczba znaków';
    }
    return control.hasError('email') ? 'Nieprawidłowy adres email' : '';
  }

  submitForm() {
    this.submitted = true;

    if (this.contactForm.valid) {
      this.contactService.sendEmail(this.contactForm.value).then(
        (response) => {
          console.log(
            'Wiadomość została wysłana:',
            response.status,
            response.text
          );

          this.showSuccessAlert = true;
          setTimeout(() => (this.showSuccessAlert = false), 3000);

          this.contactForm.reset();
          this.submitted = false;
        },
        (error) => {
          console.error('Błąd wysyłania wiadomości:', error);
          this.showFeilureAlert = true;
          setTimeout(() => (this.showFeilureAlert = false), 3000);
        }
      );
    }
  }
}
