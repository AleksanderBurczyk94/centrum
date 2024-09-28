import { Component } from '@angular/core';
import { AssistanceCard } from '../../../interfaces/assistanceCard';
import {AppRoutes} from "../../../app-routing.module";

@Component({
  selector: 'app-assistance-scope',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  public AppRoutes = AppRoutes;


  cards: AssistanceCard[] = [
    {
      imgSrc: 'assets/img/głowa_z_plusem.png',
      imgAlt: 'ikona głowy z plusem',
      title: 'Konsultacje psychologicze',
      description: 'Wsparcie psychologiczne dla dzieci i dorosłych, terapia poznawczo-behawioralna, schematów, akceptacji i zaangażowania, mindfulness.',
      path: AppRoutes.PSYCHOLOGICAL_CONSULTATIONS
    },
    {
      imgSrc: 'assets/img/huśtawka.png',
      imgAlt: 'ikona huśtawki',
      title: 'Terapia integracji sensorycznej',
      description: 'Wsparcie dzieci z zaburzeniami sensorycznymi i ruchowymi. Diagnoza, terapia integracji zmysłów i koordynacji.',
      path: AppRoutes.SENSORY_INTEGRATION_THERAPY
    },
    {
      imgSrc: 'assets/img/mózg.png',
      imgAlt: 'ikona mózgu',
      title: 'Terapia neurorozwojowa odruchów INPP',
      description: 'Stymulacja odruchów pierwotnych, wsparcie neurologiczne i rozwojowe, poprawa koordynacji i koncentracji.',
      path: AppRoutes.NEURODEVELOPMENTAL_REFLEX_THERAPY
    },
    {
      imgSrc: 'assets/img/masarz.png',
      imgAlt: 'ikona masarzu',
      title: 'Terapia NeuroTaktylna MNRI',
      description: 'Praca nad rozwojem neurologicznym, wspieranie dzieci z problemami sensorycznymi i odruchowymi. Terapia oparta na stymulacji odruchów pierwotnych.',
      path: AppRoutes.NEUROTACTILE_THERAPY
    },
    {
      imgSrc: 'assets/img/ucho.png',
      imgAlt: 'ikona ucha',
      title: 'Diagnoza i terapia przetwarzania słuchowego Johansena',
      description: 'Terapia wspomagająca rozwój zdolności słuchowych i koncentracji. Pomaga w poprawie przetwarzania bodźców dźwiękowych i wspiera naukę.',
      path: AppRoutes.AUDITORY_PROCESSING_THERAPY
    },
    {
      imgSrc: 'assets/img/dłoń.png',
      imgAlt: 'ikona ręki',
      title: 'Diagnoza i terapia ręki',
      description: 'Pomoc dzieciom z trudnościami w motoryce małej, poprawa koordynacji ruchowej i sprawności manualnej. Terapia wspiera samodzielność dziecka w codziennych czynnościach.',
      path: AppRoutes.HAND_THERAPY
    },
    {
      imgSrc: 'assets/img/puzzle.png',
      imgAlt: 'icona puzzli',
      title: 'Terapia pedagogiczna',
      description: 'Wsparcie edukacyjne dzieci z trudnościami w nauce, rozwój umiejętności szkolnych i społecznych. Terapia dostosowana do indywidualnych potrzeb dziecka.',
      path: AppRoutes.PEDAGOGICAL_THERAPY
    },
    {
      imgSrc: 'assets/img/vision.png',
      imgAlt: 'icona oka z długopisem i linijką na nim',
      title: 'Terapia widzenia',
      description: 'Poprawa zdolności wzrokowych u dzieci z trudnościami w nauce i percepcji. Terapia wspomaga koncentrację i precyzję w zadaniach wymagających sprawności wzrokowej."',
      path: AppRoutes.VISION_THERAPY
    },
    {
      imgSrc: 'assets/img/konsultacje.png',
      imgAlt: 'ikona kobiety za biurkiem',
      title: 'Konsultacje specjalistyczne',
      description: 'Indywidualne konsultacje i diagnozy w zakresie przetwarzania sensorycznego, rozwoju neuropsychologicznego oraz wsparcie w trudnych sytuacjach życiowych.',
      path: AppRoutes.SPECIALIST_CONSULTATIONS
    }
  ];

}
