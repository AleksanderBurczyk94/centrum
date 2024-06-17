import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phoneNummer:new FormControl(''),
    email: new FormControl(''),
    checkBox: new FormControl(false),
    textMessage: new FormControl(''),
  });
}
