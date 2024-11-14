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
      webpImg: 'assets/img/glowa-z-plusem.webp',
      alterImg: 'assets/img/glowa-z-plusem.png',
      alt: 'ikona głowy z plusem symbolizująca konsultacje psychologiczne',
      title: 'Konsultacje psychologiczne',
      description: 'Wsparcie psychologiczne dla dzieci, młodzieży i&nbsp;rodziców, pomoc w&nbsp;radzeniu sobie z&nbsp;emocjami, stresem, obniżoną samooceną, trudnościami relacyjnymi. Rozwijanie umiejętności społeczno-emocjonalnych, mindfullnes.',
      path: this.appPaths.PSYCHOLOGICAL_CONSULTATIONS
    },
    {
      webpImg: 'assets/img/hustawka.webp',
      alterImg: 'assets/img/hustawka.png',
      alt: 'ikona huśtawki symobolizujaca terapie SI',
      title: 'Terapia integracji sensorycznej',
      description: 'Wsparcie dzieci z&nbsp;trudnościami ruchowymi i&nbsp;przetwarzania sensorycznego. Diagnoza i&nbsp;terapia integracji sensorycznej.',
      path: this.appPaths.SENSORY_INTEGRATION_THERAPY
    },
    {
      webpImg: 'assets/img/mozg.webp',
      alterImg: 'assets/img/mozg.png',
      alt: 'ikona mózgu symbolizujaca terapie nerorozwojową odruchów',
      title: 'Terapia neurorozwojowa odruchów INPP',
      description: 'Stymulacja i&nbsp;wygaszanie odruchów pierwotnych, poprawa umiejętności szkolnych, wsparcie neurorozwojowe, eliminacja choroby lokomocyjnej.',
      path: this.appPaths.NEURODEVELOPMENTAL_REFLEX_THERAPY
    },
    {
      webpImg: 'assets/img/masaz.webp',
      alterImg: 'assets/img/masaz.png',
      alt: 'ikona masazu symbolizujaca terapie nerotaktylna',
      title: 'Terapia NeuroTaktylna MNRI',
      description: 'Normalizacja pracy układu nerwowego, niwelowanie obronności dotykowej i&nbsp;niewystarczającej wrażliwości na&nbsp;bodźce sensoryczne.',
      path: this.appPaths.NEUROTACTILE_THERAPY
    },
    {
      webpImg: 'assets/img/ucho.webp',
      alterImg: 'assets/img/ucho.png',
      alt: 'ikona ucha symbolizujaca przetwarzanie słuchowe Johansena',
      title: 'Diagnoza i terapia przetwarzania słuchowego Johansena',
      description: 'Wspomaganie rozwoju zdolności słuchowych i&nbsp;koncentracji, niwelowanie nadwrażliwości słuchowej, poprawa przetwarzania bodźców dźwiękowych.',
      path: this.appPaths.AUDITORY_PROCESSING_THERAPY
    },
    {
      webpImg: 'assets/img/dłon.webp',
      alterImg: 'assets/img/dłon.png',
      alt: 'ikona ręki symbolizujaca terapie reki',
      title: 'Diagnoza i terapia ręki',
      description: 'Terapia motoryki małej, poprawa nieprawidłowego chwytu pisarskiego, poprawa koordynacji ruchowej, sprawności manualnej i&nbsp;precyzyjnej, wspieranie samodzielności dziecka w&nbsp;codziennych czynnościach.',
      path: this.appPaths.HAND_THERAPY
    },
    {
      webpImg: 'assets/img/puzzle.webp',
      alterImg: 'assets/img/puzzle.png',
      alt: 'ikona puzzli symbolizujaca terapie pedagogiczna',
      title: 'Terapia pedagogiczna',
      description: 'Wsparcie edukacyjne dzieci z&nbsp;trudnościami w&nbsp;nauce, rozwój umiejętności szkolnych i&nbsp;społecznych. Terapia dostosowana do&nbsp;indywidualnych potrzeb dziecka.',
      path: this.appPaths.PEDAGOGICAL_THERAPY
    },
    {
      webpImg: 'assets/img/konsultacje.webp',
      alterImg: 'assets/img/konsultacje.png',
      alt: 'ikona kobiety za biurkiem symbolizujaca konsultacje specjalistyczne',
      title: 'Konsultacje specjalistyczne',
      description: 'Indywidualne konsultacje dla&nbsp;rodziców w&nbsp;zakresie przetwarzania sensorycznego, rozwoju ruchowego i&nbsp;społeczno-emocjonalnego dzieci, w&nbsp;tym dzieci w&nbsp;spektrum autyzmu, ADHD, mutyzmu wybiórczego, niepełnosprawności intelektualnej.',
      path: this.appPaths.SPECIALIST_CONSULTATIONS
    }
  ];
}
