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
      title: 'Konsultacje psychologiczne',
      description: 'Wsparcie psychologiczne dla dzieci, młodzieży i&nbsp;rodziców, pomoc w&nbsp;radzeniu sobie z&nbsp;emocjami, stresem, obniżoną samooceną, trudnościami relacyjnymi. Rozwijanie umiejętności społeczno-emocjonalnych, mindfullnes.',
      path: AppRoutes.PSYCHOLOGICAL_CONSULTATIONS
    },
    {
      imgSrc: 'assets/img/huśtawka.png',
      imgAlt: 'ikona huśtawki',
      title: 'Terapia integracji sensorycznej',
      description: 'Wsparcie dzieci z&nbsp;trudnościami ruchowymi i&nbsp;przetwarzania sensorycznego. Diagnoza i&nbsp;terapia integracji sensorycznej.',
      path: AppRoutes.SENSORY_INTEGRATION_THERAPY
    },
    {
      imgSrc: 'assets/img/mózg.png',
      imgAlt: 'ikona mózgu',
      title: 'Terapia neurorozwojowa odruchów INPP',
      description: 'Stymulacja i&nbsp;wygaszanie odruchów pierwotnych, poprawa umiejętności szkolnych, wsparcie neurorozwojowe, eliminacja choroby lokomocyjnej.',
      path: AppRoutes.NEURODEVELOPMENTAL_REFLEX_THERAPY
    },
    {
      imgSrc: 'assets/img/masarz.png',
      imgAlt: 'ikona masażu',
      title: 'Terapia NeuroTaktylna MNRI',
      description: 'Normalizacja pracy układu nerwowego, niwelowanie obronności dotykowej i&nbsp;niewystarczającej wrażliwości na&nbsp;bodźce sensoryczne.',
      path: AppRoutes.NEUROTACTILE_THERAPY
    },
    {
      imgSrc: 'assets/img/ucho.png',
      imgAlt: 'ikona ucha',
      title: 'Diagnoza i terapia przetwarzania słuchowego Johansena',
      description: 'Wspomaganie rozwoju zdolności słuchowych i&nbsp;koncentracji, niwelowanie nadwrażliwości słuchowej, poprawa przetwarzania bodźców dźwiękowych.',
      path: AppRoutes.AUDITORY_PROCESSING_THERAPY
    },
    {
      imgSrc: 'assets/img/dłoń.png',
      imgAlt: 'ikona ręki',
      title: 'Diagnoza i terapia ręki',
      description: 'Terapia motoryki małej, poprawa nieprawidłowego chwytu pisarskiego, poprawa koordynacji ruchowej, sprawności manualnej i&nbsp;precyzyjnej, wspieranie samodzielności dziecka w&nbsp;codziennych czynnościach.',
      path: AppRoutes.HAND_THERAPY
    },
    {
      imgSrc: 'assets/img/puzzle.png',
      imgAlt: 'ikona puzzli',
      title: 'Terapia pedagogiczna',
      description: 'Wsparcie edukacyjne dzieci z&nbsp;trudnościami w&nbsp;nauce, rozwój umiejętności szkolnych i&nbsp;społecznych. Terapia dostosowana do&nbsp;indywidualnych potrzeb dziecka.',
      path: AppRoutes.PEDAGOGICAL_THERAPY
    },
    {
      imgSrc: 'assets/img/vision.png',
      imgAlt: 'ikona oka z długopisem i linijką na&nbsp;nim',
      title: 'Terapia widzenia',
      description: 'Poprawa przetwarzania wzrokowego u&nbsp;dzieci z&nbsp;trudnościami w&nbsp;nauce i&nbsp;percepcji. Wspomaganie koncentracji i&nbsp;precyzji w&nbsp;zadaniach wymagających sprawności wzrokowej.',
      path: AppRoutes.VISION_THERAPY
    },
    {
      imgSrc: 'assets/img/konsultacje.png',
      imgAlt: 'ikona kobiety za biurkiem',
      title: 'Konsultacje specjalistyczne',
      description: 'Indywidualne konsultacje dla&nbsp;rodziców w&nbsp;zakresie przetwarzania sensorycznego, rozwoju ruchowego i&nbsp;społeczno-emocjonalnego dzieci, w&nbsp;tym dzieci w&nbsp;spektrum autyzmu, ADHD, mutyzmu wybiórczego, niepełnosprawności intelektualnej.',
      path: AppRoutes.SPECIALIST_CONSULTATIONS
    }
  ];
}
