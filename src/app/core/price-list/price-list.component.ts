import { Component } from '@angular/core';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrl: './price-list.component.css'
})
export class PriceListComponent {

  services = [
    { name: 'Konsultacje psychologiczne', price: '170 zł', time: '50 min' },
    { name: 'Diagnoza integracji sensorycznej', price: '150 zł', time: '50 min (zazwyczaj 3x 50 min)' },
    { name: 'Pisemny opis diagnozy SI', price: '150 zł', time: '' },
    { name: 'Terapia Integracji sensorycznej', price: '130 zł', time: '50 min' },
    { name: 'Terapia NeuroTaktylna MNRI', price: '130 zł', time: '50 min' },
    { name: 'Terapia ręki', price: '130 zł', time: '50 min' },
    { name: 'Diagnoza neurorozwojowa odruchów INPP', price: '150 zł', time: '3x 50 min' },
    { name: 'Spotkania kontrolne INPP', price: '150 zł', time: '50 min' },
    { name: 'Pisemny opis diagnozy INPP', price: '150 zł', time: '' },
    { name: 'Konsultacje specjalistyczne', price: '150 zł', time: '50 min' },
    { name: 'Pisemna opinia', price: '50 zł', time: '' }
  ];

}
