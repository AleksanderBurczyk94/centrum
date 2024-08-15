import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private serviceID = "service_kpt9e9o";
  private templateID = "template_q1j4d05";
  private userID = "mjIb9G9erDqBA_qmA";

  sendEmail(formData: any): Promise<EmailJSResponseStatus> {
    return emailjs.send(this.serviceID, this.templateID, {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      textMessage: formData.textMessage,
    }, this.userID);
  }
}
