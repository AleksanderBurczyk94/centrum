import {Component} from '@angular/core';
import {Therapists} from "../../../interfaces/therpaists";
import {AppRoutes} from "../../../app-routing.module";

@Component({
  selector: 'app-therapists',
  templateUrl: './therapists.component.html',
  styleUrl: './therapists.component.css'
})
export class TherapistsComponent {

  therapists: Therapists[] = [
    {
      name: 'Paulina Okrasa-Burczyk',
      role: 'Założycielka centrum Równowaga, psycholog, terapeuta SI, logopegda',
      image: 'assets/img/Paulina.jpg',
      path: AppRoutes.PAULINA_OKRASA_BURCZYK
    },
    {
      name: 'Sylwia Szumska',
      role: 'Terapeutka SI',
      image: 'assets/img/awatar_damski.png',
      path: AppRoutes.PSYCHOLOGICAL_CONSULTATIONS

    },
    {
      name: 'Magdalena Mokrzycka',
      role: 'Terapeutka SI',
      image: 'assets/img/awatar_damski.png',
      path: AppRoutes.PSYCHOLOGICAL_CONSULTATIONS
    },
    {
      name: 'Karolina Okrasa-Staszak',
      role: 'Psycholog',
      image: 'assets/img/awatar_damski.png',
      path: AppRoutes.KAROLINA_OKRASA_STASZAK
    }
  ];
}
