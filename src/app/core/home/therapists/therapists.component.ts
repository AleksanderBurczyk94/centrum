import {Component} from '@angular/core';
import {Therapists} from "../../../interfaces/therpaists";
import {AppRoutes} from "../../../app-routing.module";

@Component({
  selector: 'app-therapists',
  templateUrl: './therapists.component.html',
  styleUrl: './therapists.component.css'
})
export class TherapistsComponent {

  therapists:  Therapists[]= [
    {
      name: 'Paulina Okrasa-Burczyk',
      role: 'Założycielka centrum Równowaga, psycholog, terapeuta SI, logopegda',
      image: 'assets/img/Paulina.jpg',
      path: AppRoutes.PAULINA_OKRASA_BURCZYK
    },
    {
      name: 'Bagniara Kowalsa',
      role: 'Terapeuta SI',
      image: 'assets/img/terapeuta1.webp',
      path: AppRoutes.PSYCHOLOGICAL_CONSULTATIONS

    },
    {
      name: 'Nikola Nowak',
      role: 'Psycholog',
      image: 'assets/img/terapeuta2.jpg',
      path: AppRoutes.PSYCHOLOGICAL_CONSULTATIONS
    }
  ];
}
