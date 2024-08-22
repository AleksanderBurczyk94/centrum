import { Component } from '@angular/core';

@Component({
  selector: 'app-therapists',
  templateUrl: './therapists.component.html',
  styleUrl: './therapists.component.css'
})
export class TherapistsComponent {

  therapists = [
    {
      name: 'Paulina Okrasa-Burczyk',
      role: 'Założycielka centrum Równowaga, psycholog, terapeuta SI, logopegda',
      image: 'assets/img/Paulina.jpg'
    },
    {
      name: 'Bagniara Kowalsa',
      role: 'Terapeuta SI',
      image: 'assets/img/terapeuta1.webp'
    },
    {
      name: 'Nikola Nowak',
      role: 'Psycholog',
      image: 'assets/img/terapeuta2.jpg'
    }
  ];

}
