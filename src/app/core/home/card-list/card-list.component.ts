import {Component} from '@angular/core';
import {AssistanceCard} from '../../../interfaces/assistanceCard';
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
      description: 'Wsparcie psychologiczne dla dzieci, młodzieży i rodziców, pomoc <br> w radzeniu sobie z emocjami, <br> stresem, obniżoną samooceną, <br> trudnościami relacyjnymi. <br> Rozwijanie umiejętności społeczno-emocjonalnych, mindfullnes, ',
      path: AppRoutes.PSYCHOLOGICAL_CONSULTATIONS
    },
    {
      imgSrc: 'assets/img/huśtawka.png',
      imgAlt: 'ikona huśtawki',
      title: 'Terapia integracji sensorycznej',
      description: 'Wsparcie dzieci z trudnościami ruchowymi i przetwarzania sensorycznego. Diagnoza i terapia integracji sensorycznej ',
      path: AppRoutes.SENSORY_INTEGRATION_THERAPY
    },
    {
      imgSrc: 'assets/img/mózg.png',
      imgAlt: 'ikona mózgu',
      title: 'Terapia neurorozwojowa odruchów INPP',
      description: 'Stymulacja i wygaszanie odruchów pierwotnych, poprawa umiejętności szkolnych, wsparcie neurorozwojowe, eliminacja choroby lokomocyjnej.',
      path: AppRoutes.NEURODEVELOPMENTAL_REFLEX_THERAPY
    },
    {
      imgSrc: 'assets/img/masarz.png',
      imgAlt: 'ikona masarzu',
      title: 'Terapia NeuroTaktylna MNRI',
      description: 'Normalizacja pracy układu nerwowego, niwelowanie obronności dotykowej i niewystarczającej wrażliwość na bodźce sensoryczne.',
      path: AppRoutes.NEUROTACTILE_THERAPY
    },
    {
      imgSrc: 'assets/img/ucho.png',
      imgAlt: 'ikona ucha',
      title: 'Diagnoza i terapia przetwarzania słuchowego Johansena',
      description: 'Wspomaganie rozwoju zdolności słuchowych i koncentracji, niwelowanie nadwrażliwości słuchowej, poprawa przetwarzania bodźców dźwiękowych.',
      path: AppRoutes.AUDITORY_PROCESSING_THERAPY
    },
    {
      imgSrc: 'assets/img/dłoń.png',
      imgAlt: 'ikona ręki',
      title: 'Diagnoza i terapia ręki',
      description: 'Terapia motoryki małej, poprawa nieprawidłowego chwytu pisarskiego, poprawa koordynacji ruchowej, sprawności manualnej i precyzyjnej, wspieranie samodzielności dziecka <br> w codziennych czynnościach.',
      path: AppRoutes.HAND_THERAPY
    },
    {
      imgSrc: 'assets/img/puzzle.png',
      imgAlt: 'icona puzzli',
      title: 'Terapia pedagogiczna',
      description: 'Wsparcie edukacyjne dzieci <br> z trudnościami w nauce, rozwój umiejętności szkolnych i społecznych. Terapia dostosowana <br> do indywidualnych potrzeb dziecka.',
      path: AppRoutes.PEDAGOGICAL_THERAPY
    },
    {
      imgSrc: 'assets/img/vision.png',
      imgAlt: 'icona oka z długopisem i linijką na nim',
      title: 'Terapia widzenia',
      description: 'Poprawa przetwarzania wzrokowego <br> u dzieci z trudnościami w nauce <br> i percepcji. Wspomaganie koncentracji <br> i precyzji w zadaniach wymagających sprawności wzrokowej."',
      path: AppRoutes.VISION_THERAPY
    },
    {
      imgSrc: 'assets/img/konsultacje.png',
      imgAlt: 'ikona kobiety za biurkiem',
      title: 'Konsultacje specjalistyczne',
      description: 'Indywidualne konsultacje dla rodziców w zakresie przetwarzania sensorycznego, rozwoju ruchowego <br> i społeczno-emocjonalnego dzieci,<br> w tym dzieci w spektrum autyzmu, ADHD, mutyzmu wybiórczego,<br> niepełnosprawności intelektualnej.',
      path: AppRoutes.SPECIALIST_CONSULTATIONS
    }
  ];

}
