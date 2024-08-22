import { Component } from '@angular/core';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrl: './price-list.component.css'
})
export class PriceListComponent {

  services = [
    { name: 'Konsultacje psychologiczne', price: '170 zł', time: '50 min', link: '/assistance/psychologicalConsultations' },
    { name: 'Diagnoza integracji sensorycznej', price: '150 zł', time: '50 min (zazwyczaj 3x 50 min)', link: '/assistance/sensoryIntegrationTherapy' },
    { name: 'Pisemny opis diagnozy SI', price: '150 zł', time: '', link: '/assistance/siDiagnosisDescription' },  // Assuming it's related to SI
    { name: 'Terapia Integracji sensorycznej', price: '130 zł', time: '50 min', link: '/assistance/sensoryIntegrationTherapy' },
    { name: 'Terapia NeuroTaktylna MNRI', price: '130 zł', time: '50 min', link: '/assistance/neuroTactileTherapy' },
    { name: 'Terapia ręki', price: '130 zł', time: '50 min', link: '/assistance/handTherapy' },
    { name: 'Diagnoza neurorozwojowa odruchów INPP', price: '150 zł', time: '3x 50 min', link: '/assistance/neurodevelopmentalReflexTherapy' },
    { name: 'Spotkania kontrolne INPP', price: '150 zł', time: '50 min', link: '/assistance/neurodevelopmentalReflexTherapy' },
    { name: 'Pisemny opis diagnozy INPP', price: '150 zł', time: '', link: '/assistance/neurodevelopmentalReflexTherapy' },
    { name: 'Konsultacje specjalistyczne', price: '150 zł', time: '50 min', link: '/assistance/specialistConsultations' },
    { name: 'Pisemna opinia', price: '50 zł', time: '', link: '/assistance/writtenOpinion' }  // Assuming it's related to specialist consultations
  ];


}
