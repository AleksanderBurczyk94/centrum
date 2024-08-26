import { Component } from '@angular/core';
import {AppRoutes} from "../../app-routing.module";

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrl: './price-list.component.css'
})
export class PriceListComponent {

  services = [
    {
      name: 'Konsultacje psychologiczne',
      price: '170 zł',
      time: '50 min',
      link: `/${AppRoutes.ASSISTANCE}/${AppRoutes.PSYCHOLOGICAL_CONSULTATIONS}`
    },
    {
      name: 'Diagnoza integracji sensorycznej',
      price: '150 zł',
      time: '50 min (zazwyczaj 3x 50 min)',
      link: `/${AppRoutes.ASSISTANCE}/${AppRoutes.SENSORY_INTEGRATION_THERAPY}`
    },
    {
      name: 'Pisemny opis diagnozy SI',
      price: '150 zł',
      time: '',
      link: `/${AppRoutes.ASSISTANCE}/${AppRoutes.SI_DIAGNOSIS_DESCRIPTION}`
    },
    {
      name: 'Terapia Integracji sensorycznej',
      price: '130 zł',
      time: '50 min',
      link: `/${AppRoutes.ASSISTANCE}/${AppRoutes.SENSORY_INTEGRATION_THERAPY}`
    },
    {
      name: 'Terapia NeuroTaktylna MNRI',
      price: '130 zł',
      time: '50 min',
      link: `/${AppRoutes.ASSISTANCE}/${AppRoutes.NEUROTACTILE_THERAPY}`
    },
    {
      name: 'Terapia ręki',
      price: '130 zł',
      time: '50 min',
      link: `/${AppRoutes.ASSISTANCE}/${AppRoutes.HAND_THERAPY}`
    },
    {
      name: 'Terapia pedagogiczna',
      price: '130 zł',
      time: '50 min',
      link: `/${AppRoutes.ASSISTANCE}/pedagoicalTherapy`  // Assuming the path is correct
    },
    {
      name: 'Diagnoza neurorozwojowa odruchów INPP',
      price: '150 zł',
      time: '3x 50 min',
      link: `/${AppRoutes.ASSISTANCE}/${AppRoutes.NEURODEVELOPMENTAL_REFLEX_THERAPY}`
    },
    {
      name: 'Spotkania kontrolne INPP',
      price: '150 zł',
      time: '50 min',
      link: `/${AppRoutes.ASSISTANCE}/${AppRoutes.NEURODEVELOPMENTAL_REFLEX_THERAPY}`
    },
    {
      name: 'Pisemny opis diagnozy INPP',
      price: '150 zł',
      time: '',
      link: `/${AppRoutes.ASSISTANCE}/${AppRoutes.NEURODEVELOPMENTAL_REFLEX_THERAPY}`
    },
    {
      name: 'Konsultacje specjalistyczne',
      price: '150 zł',
      time: '50 min',
      link: `/${AppRoutes.ASSISTANCE}/${AppRoutes.SPECIALIST_CONSULTATIONS}`
    },
    {
      name: 'Pisemna opinia',
      price: '50 zł',
      time: '',
      link: `/${AppRoutes.ASSISTANCE}/${AppRoutes.WRITTEN_OPINION}`
    }
  ];



}
