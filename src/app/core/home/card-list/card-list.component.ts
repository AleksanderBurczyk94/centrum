import {Component} from '@angular/core';
import {AssistanceCard} from '../../../interfaces/assistanceCard';
import {NavbarService} from "../../../services/navbar.service";
import {AppPaths} from "../../../app-paths";

@Component({
  selector: 'app-assistance-scope',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {


  public appPaths = AppPaths

  constructor(public navbarService: NavbarService,
  ) {
  }

  resetActiveLink() {
    this.navbarService.resetActiveLink()
  }

  cards: AssistanceCard[] = [
    {
      imgSrc: 'assets/img/glowa-z-plusem.png',
      imgAlt: 'ikona głowy z plusem symbolizująca konsultacje psychologiczne',
      title: 'Konsultacje psychologiczne',
      description: 'Wsparcie psychologiczne dla dzieci, młodzieży i&nbsp;rodziców, pomoc w&nbsp;radzeniu sobie z&nbsp;emocjami, stresem, obniżoną samooceną, trudnościami relacyjnymi. Rozwijanie umiejętności społeczno-emocjonalnych, mindfullnes.',
      path: this.appPaths.PSYCHOLOGICAL_CONSULTATIONS
    },
    {
      imgSrc: 'assets/img/hustawka.png',
      imgAlt: 'ikona huśtawki symobolizujaca terapie SI',
      title: 'Terapia integracji sensorycznej',
      description: 'Wsparcie dzieci z&nbsp;trudnościami ruchowymi i&nbsp;przetwarzania sensorycznego. Diagnoza i&nbsp;terapia integracji sensorycznej.',
      path: this.appPaths.SENSORY_INTEGRATION_THERAPY
    },
    {
      imgSrc: 'assets/img/mozg.png',
      imgAlt: 'ikona mózgu symbolizujaca terapie nerorozwojową odruchów',
      title: 'Terapia neurorozwojowa odruchów INPP',
      description: 'Stymulacja i&nbsp;wygaszanie odruchów pierwotnych, poprawa umiejętności szkolnych, wsparcie neurorozwojowe, eliminacja choroby lokomocyjnej.',
      path: this.appPaths.NEURODEVELOPMENTAL_REFLEX_THERAPY
    },
    {
      imgSrc: 'assets/img/masaz.png',
      imgAlt: 'ikona masazu symbolizujaca terapie nerotaktylna',
      title: 'Terapia NeuroTaktylna MNRI',
      description: 'Normalizacja pracy układu nerwowego, niwelowanie obronności dotykowej i&nbsp;niewystarczającej wrażliwości na&nbsp;bodźce sensoryczne.',
      path: this.appPaths.NEUROTACTILE_THERAPY
    },
    {
      imgSrc: 'assets/img/ucho.png',
      imgAlt: 'ikona ucha symbolizujaca przetwarzanie słuchowe Johansena',
      title: 'Diagnoza i terapia przetwarzania słuchowego Johansena',
      description: 'Wspomaganie rozwoju zdolności słuchowych i&nbsp;koncentracji, niwelowanie nadwrażliwości słuchowej, poprawa przetwarzania bodźców dźwiękowych.',
      path: this.appPaths.AUDITORY_PROCESSING_THERAPY
    },
    {
      imgSrc: 'assets/img/dłon.png',
      imgAlt: 'ikona ręki symbolizujaca terapie reki',
      title: 'Diagnoza i terapia ręki',
      description: 'Terapia motoryki małej, poprawa nieprawidłowego chwytu pisarskiego, poprawa koordynacji ruchowej, sprawności manualnej i&nbsp;precyzyjnej, wspieranie samodzielności dziecka w&nbsp;codziennych czynnościach.',
      path: this.appPaths.HAND_THERAPY
    },
    {
      imgSrc: 'assets/img/puzzle.png',
      imgAlt: 'ikona puzzli symbolizujaca terapie pedagogiczna',
      title: 'Terapia pedagogiczna',
      description: 'Wsparcie edukacyjne dzieci z&nbsp;trudnościami w&nbsp;nauce, rozwój umiejętności szkolnych i&nbsp;społecznych. Terapia dostosowana do&nbsp;indywidualnych potrzeb dziecka.',
      path: this.appPaths.PEDAGOGICAL_THERAPY
    },
    {
      imgSrc: 'assets/img/vision.png',
      imgAlt: 'ikona oka z długopisem i linijką na nim sybol terapii widzenia',
      title: 'Terapia widzenia',
      description: 'Poprawa przetwarzania wzrokowego u&nbsp;dzieci z&nbsp;trudnościami w&nbsp;nauce i&nbsp;percepcji. Wspomaganie koncentracji i&nbsp;precyzji w&nbsp;zadaniach wymagających sprawności wzrokowej.',
      path: this.appPaths.VISION_THERAPY
    },
    {
      imgSrc: 'assets/img/konsultacje.png',
      imgAlt: 'ikona kobiety za biurkiem symbolizujaca konsultacje specjalistyczne',
      title: 'Konsultacje specjalistyczne',
      description: 'Indywidualne konsultacje dla&nbsp;rodziców w&nbsp;zakresie przetwarzania sensorycznego, rozwoju ruchowego i&nbsp;społeczno-emocjonalnego dzieci, w&nbsp;tym dzieci w&nbsp;spektrum autyzmu, ADHD, mutyzmu wybiórczego, niepełnosprawności intelektualnej.',
      path: this.appPaths.SPECIALIST_CONSULTATIONS
    }
  ];
}
