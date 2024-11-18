import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  QueryList,
  ViewChildren
} from '@angular/core';
import {PriceCard} from "../../interfaces/priceCard";
import {isPlatformBrowser} from '@angular/common';

declare let bootstrap: any;

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements AfterViewInit, OnDestroy {

  @ViewChildren('popoverElement') popoverElements!: QueryList<ElementRef>;
  popovers: any[] = [];

  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.popoverElements.forEach((popoverElement) => {
        const popover = new bootstrap.Popover(popoverElement.nativeElement, {
          trigger: 'click',
          placement: 'left',
          content: popoverElement.nativeElement.getAttribute('data-content') || 'No description provided'
        });
        this.popovers.push(popover);
      });
      document.addEventListener('click', this.closeAllPopovers.bind(this), true);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.removeEventListener('click', this.closeAllPopovers.bind(this), true);
    }
  }

  closeAllPopovers(event: MouseEvent): void {
    this.popovers.forEach((popover: any) => {
      if (!popover._element.contains(event.target)) {
        popover.hide();
      }
    });
  }

  services: PriceCard[] = [
    {
      name: 'Konsultacje psychologiczne',
      price: '170 zł',
      time: '50 min',
      description: 'Podczas konsultacji psychologicznych pacjent ma możliwość porozmawiania z doświadczonym psychologiem na temat swoich trudności emocjonalnych, psychicznych lub behawioralnych. Konsultacje te pomagają w zrozumieniu problemów, diagnozie stanu emocjonalnego oraz w ustaleniu ewentualnej dalszej terapii. Konsultacje mogą obejmować wsparcie w radzeniu sobie ze stresem, lękami, depresją, problemami w relacjach, a także trudnościami życiowymi. Celem jest zidentyfikowanie obszarów wymagających wsparcia i ustalenie dalszych kroków terapeutycznych.'
    },
    {
      name: 'Diagnoza integracji sensorycznej',
      price: '150 zł',
      time: '50 min (zazwyczaj 3x 50 min)',
      description: 'Diagnoza obejmuje: wywiad z rodzicem, kwestionariusz sensomotoryczny, obserwację kliniczną dziecka, testy, obserwację spontanicznej zabawy, ustne omówienie diagnozy i zaleceń, plan ćwiczeń do domu i dodatkowe zalecenia.\n' +
        'Diagnoza trwa w większości  150 minut (3x50 min.) i zazwyczaj jest podzielona na 2 spotkania: pierwsze trwa ok. 1h. 40 minut (2x50 min.) i obejmuje dokładną rozmowę z rodzicem i początek diagnozowania dziecka, drugie spotkanie (1x50 min.) to dokończenie diagnozy i omówienie jej z rodzicem. Można też rozdzielić diagnozę na 3 odrębne spotkania. Koszt diagnozy związany jest z czasem jej przeprowadzenia. W przypadku, gdy rodzic posiada wcześniejsze diagnozy SI dziecka lub dziecko ma poniżej 4 lat, bardzo możliwe, że czas diagnozy się skróci, a tym samym jej koszt będzie mniejszy.\n' +
        '\n' +
        'W wyjątkowych przypadkach czas diagnozy może się wydłużyć i będzie potrzebna dodatkowa godzina (trudności ze współpracą dziecka, potrzeba robienia dłuższych przerw po każdym teście), jednak w zdecydowanej większości trwa ona założone 150 min.* Pisemny, obszerny opis diagnozy wydawany jest na prośbę rodzica, a jego koszt wynosi 150 zł.'
    },
    {
      name: 'Terapia integracji sensorycznej',
      price: '130 zł',
      time: '50 min',
      description: 'Terapia SI trwa 50 min. obejmujące ćwiczenia i omówienie zajęć z rodzicem. Polega na wykonywaniu przez dziecko specjalnie dobranych ćwiczeń i zabaw na sali integracji sensorycznej. Zajęcia przeprowadzane są indywidualnie dla każdego dziecka.'
    },
    {
      name: 'Terapia NeuroTaktylna MNRI®',
      price: '130 zł',
      time: '50 min',
      description: 'Terapia NeuroTaktylna MNRI® (Metoda Neuro-Sensoryczno-Refleksyjna) trwa 50 min. obejmujące stymulację taktylną i omówienie zajęć z rodzicem. Podczas zajęć dziecko leży, a terapeuta pracuje nad poprawą funkcjonowania układu nerwowego poprzez specjalne taktylne ruchy przypominające masaż.'
    },
    {
      name: 'Terapia ręki',
      price: '130 zł',
      time: '50 min',
      description: 'Terapia ręki trwa 50 min. obejmujące ćwiczenia i omówienie zajęć z rodzicem. Polega na wykonywaniu przez dziecko specjalnie dobranych ćwiczeń i zadań, które poza stymulacją czucia głębokiego oraz pracą nad mięśniami posturalnymi, obejmuje również ćwiczenia małej motoryki.'
    },
    {
      name: 'Terapia pedagogiczna',
      price: '130 zł',
      time: '50 min',
      description: 'Terapia pedagogiczna trwa 50 min. obejmujące ćwiczenia i omówienie zajęć z rodzicem. Podczas zajęć terapeuta pedagogiczny indywidualnie pracuje nad usprawnieniem procesów uczenia się, budowaniem pewności siebie, a także poprawą motywacji do nauki. Skupia się nad trudnościami edukacyjnymi, dysleksją, dysgrafią, czy problemami z koncentracją uwagi.'
    },
    {
      name: 'Diagnoza neurorozwojowa odruchów INPP',
      price: '150 zł',
      time: '3x 50 min',
      description: 'Diagnoza obejmuje: wywiad z rodzicem, kwestionariusz INPP, testy, ustne omówienie wyników, ćwiczenia do domu, stały kontakt z terapeutą w sprawie prawidłowo wykonywanych ćwiczeń w domu.'
    },
    {
      name: 'Spotkania kontrolne INPP',
      price: '150 zł',
      time: '50 min',
      description: 'Terapia odruchów INPP w przeciwieństwie do terapii integracji sensorycznej jest terapią domową i ćwiczenia wykonywane są pod kontrolą rodzica. Spotkania kontrolne z terapeutą INPP odbywają się co minimum 8 tygodni.'
    },
    {
      name: 'Konsultacje specjalistyczne',
      price: '150 zł',
      time: '50 min',
      description: 'Konsultacje ze specjalistą procesów przetwarzania sensorycznego, wzorców ruchowych dziecka, procesów neurorozwojowych dla rodziców, którzy mają trudności w ustaleniu źródła trudności szkolnych i ruchowych w powiązaniu z rozwojem motoryczno-sensorycznym dziecka. Specjalista pomoże dobrać odpowiednią formę terapii.'
    },
  ];

  documents = [
    {
      name: 'Pisemny opis diagnozy SI',
      price: '150 zł',
      time: '',
      description: 'Wydanie pisemnego dokumentu na prośbę rodzica zawierającego opis procesów przetwarzania sensorycznego dziecka na podstawie przeprowadzonej diagnozy.'
    },
    {
      name: 'Pisemny opis diagnozy INPP',
      price: '150 zł',
      time: '',
      description: 'Wydanie pisemnej opinii na prośbę rodzica na temat funkcjonowania dziecka w ramach diagnozy INPP, która ocenia integrację odruchów pierwotnych i jej wpływ na rozwój.'
    },
    {
      name: 'Pisemna opinia',
      price: '50 zł',
      time: '50 min (zazwyczaj 3x 50 min)',
      description: 'Wydanie pisemnej opinii na temat funkcjonowania dziecka na zajęciach/terapii/ postępów terapii do szkoły, przedszkola, poradni psychologiczno-pedagogicznej itd.'
    }
  ];
}
