import {AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChildren} from '@angular/core';
import {Service} from "../../interfaces/services";

declare var bootstrap: any;


@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrl: './price-list.component.css'
})
export class PriceListComponent implements AfterViewInit, OnDestroy {

  @ViewChildren('popoverElement') popoverElements!: QueryList<ElementRef>;
  popovers: any[] = [];

  ngAfterViewInit(): void {
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

  ngOnDestroy(): void {
    document.removeEventListener('click', this.closeAllPopovers.bind(this), true);
  }

  closeAllPopovers(event: MouseEvent): void {
    this.popovers.forEach(popover => {
      if (!popover._element.contains(event.target)) {
        popover.hide();
      }
    });
  }

  services: Service[] = [
    {
      name: 'Konsultacje psychologiczne',
      price: '170 zł',
      time: '50 min',
      description: 'Podczas konsultacji psychologicznych pacjent ma możliwość porozmawiania z&nbsp;doświadczonym psychologiem na&nbsp;temat swoich trudności emocjonalnych, psychicznych lub behawioralnych. Konsultacje te&nbsp;pomagają w&nbsp;zrozumieniu problemów, diagnozie stanu emocjonalnego oraz w&nbsp;ustaleniu ewentualnej dalszej terapii. Konsultacje mogą obejmować wsparcie w&nbsp;radzeniu sobie ze&nbsp;stresem, lękami, depresją, problemami w&nbsp;relacjach, a&nbsp;także trudnościami życiowymi. Celem jest zidentyfikowanie obszarów wymagających wsparcia i&nbsp;ustalenie dalszych kroków terapeutycznych.'
    },
    {
      name: 'Diagnoza integracji sensorycznej',
      price: '150 zł',
      time: '50 min (zazwyczaj 3x 50 min)',
      description: 'Diagnoza obejmuje: wywiad z&nbsp;rodzicem, kwestionariusz sensomotoryczny, obserwację kliniczną dziecka, testy, obserwację spontanicznej zabawy, ustne omówienie diagnozy i&nbsp;zaleceń, plan ćwiczeń do&nbsp;domu i&nbsp;dodatkowe zalecenia.\n' +
        'Diagnoza trwa w&nbsp;większości  150 minut (3x50 min.) i&nbsp;zazwyczaj jest podzielona na&nbsp;2 spotkania: pierwsze trwa ok. 1h. 40 minut (2x50 min.) i&nbsp;obejmuje dokładną rozmowę z&nbsp;rodzicem i&nbsp;początek diagnozowania dziecka, drugie spotkanie (1x50 min.) to&nbsp;dokończenie diagnozy i&nbsp;omówienie jej z&nbsp;rodzicem. Można też rozdzielić diagnozę na&nbsp;3&nbsp;odrębne spotkania. Koszt diagnozy związany jest z&nbsp;czasem jej przeprowadzenia. W&nbsp;przypadku, gdy rodzic posiada wcześniejsze diagnozy SI dziecka lub dziecko ma poniżej 4 lat, bardzo możliwe, że&nbsp;czas diagnozy się skróci, a&nbsp;tym samym jej koszt będzie mniejszy.\n' +
        '\n' +
        'W&nbsp;wyjątkowych przypadkach czas diagnozy może się wydłużyć i&nbsp;będzie potrzebna dodatkowa godzina (trudności ze&nbsp;współpracą dziecka, potrzeba robienia dłuższych przerw po&nbsp;każdym teście), jednak w&nbsp;zdecydowanej większości trwa ona założone 150 min.* Pisemny, obszerny opis diagnozy wydawany jest na&nbsp;prośbę rodzica, a&nbsp;jego koszt wynosi 150 zł.'
    },
    {
      name: 'Terapia integracji sensorycznej',
      price: '130 zł',
      time: '50 min',
      description: 'Terapia SI trwa 50 min. obejmujące ćwiczenia i&nbsp;omówienie zajęć z&nbsp;rodzicem. Polega na&nbsp;wykonywaniu przez dziecko specjalnie dobranych ćwiczeń i&nbsp;zabaw na&nbsp;sali integracji sensorycznej. Zajęcia przeprowadzane są indywidualnie dla&nbsp;każdego dziecka.'
    },
    {
      name: 'Terapia NeuroTaktylna MNRI',
      price: '130 zł',
      time: '50 min',
      description: 'Terapia NeuroTaktylna MNRI (Metoda Neuro-Sensoryczno-Refleksyjna) trwa 50 min. obejmujące stymulację taktylną i&nbsp;omówienie zajęć z&nbsp;rodzicem. Podczas zajęć dziecko leży, a&nbsp;terapeuta pracuje nad&nbsp;poprawą funkcjonowania układu nerwowego poprzez specjalne taktylne ruchy przypominające masaż.'
    },
    {
      name: 'Terapia ręki',
      price: '130 zł',
      time: '50 min',
      description: 'Terapia ręki trwa 50 min. obejmujące ćwiczenia i&nbsp;omówienie zajęć z&nbsp;rodzicem. Polega na&nbsp;wykonywaniu przez dziecko specjalnie dobranych ćwiczeń i&nbsp;zadań, które poza&nbsp;stymulacją czucia głębokiego oraz pracą nad&nbsp;mięśniami posturalnymi, obejmuje również ćwiczenia małej motoryki.'
    },
    {
      name: 'Terapia pedagogiczna',
      price: '130 zł',
      time: '50 min',
      description: 'Terapia pedagogiczna trwa 50 min. obejmujące ćwiczenia i&nbsp;omówienie zajęć z&nbsp;rodzicem. Podczas zajęć terapeuta pedagogiczny indywidualnie pracuje nad&nbsp;usprawnieniem procesów uczenia się, budowaniem pewności siebie, a&nbsp;także poprawą motywacji do&nbsp;nauki. Skupia się nad&nbsp;trudnościami edukacyjnymi, dysleksją, dysgrafią, czy&nbsp;problemami z&nbsp;koncentracją uwagi.'
    },
    {
      name: 'Diagnoza neurorozwojowa odruchów INPP',
      price: '150 zł',
      time: '3x 50 min',
      description: 'Diagnoza obejmuje: wywiad z&nbsp;rodzicem, kwestionariusz INPP, testy, ustne omówienie wyników, ćwiczenia do&nbsp;domu, stały kontakt z&nbsp;terapeutą w&nbsp;sprawie prawidłowo wykonywanych ćwiczeń w&nbsp;domu.'
    },
    {
      name: 'Spotkania kontrolne INPP',
      price: '150 zł',
      time: '50 min',
      description: 'Terapia odruchów INPP w&nbsp;przeciwieństwie do&nbsp;terapii integracji sensorycznej jest terapią domową i&nbsp;ćwiczenia wykonywane są pod&nbsp;kontrolą rodzica. Spotkania kontrolne z&nbsp;terapeutą INPP odbywają się co&nbsp;minimum 8 tygodni.'
    },
    {
      name: 'Konsultacje specjalistyczne',
      price: '150 zł',
      time: '50 min',
      description: 'Konsultacje ze&nbsp;specjalistą procesów przetwarzania sensorycznego, wzorców ruchowych dziecka, procesów neurorozwojowych dla&nbsp;rodziców, którzy mają trudności w&nbsp;ustaleniu źródła trudności szkolnych i&nbsp;ruchowych w&nbsp;powiązaniu z&nbsp;rozwojem motoryczno-sensorycznym dziecka. Specjalista pomoże dobrać odpowiednią formę terapii.'
    },
    {
      name: 'Diagnoza funkcjonalna wzroku wraz z&nbsp;pisemną opinią',
      price: '280 zł',
      time: '45 min',
      description: 'Diagnoza obejmuje ocenę funkcji wzrokowych dziecka oraz przygotowanie pisemnej opinii.'
    },
    {
      name: 'Terapia widzenia',
      price: '75 zł / 155 zł',
      time: '30 min / 45 min',
      description: 'Podczas terapii dziecko wykonuje specjalne ćwiczenia wzmacniające zdolności widzenia i&nbsp;przetwarzania informacji wzrokowych. Terapia ma na&nbsp;celu poprawę umiejętności związanych z&nbsp;nauką, pisaniem, czytaniem oraz&nbsp;ogólną koordynacją. Po&nbsp;zakończeniu zajęć terapeuta omawia postępy z&nbsp;rodzicem, udzielając wskazówek dotyczących dalszych ćwiczeń w&nbsp;domu, aby wspierać rozwój umiejętności wzrokowych dziecka. Dla&nbsp;dzieci w&nbsp;wieku 1-6 lat poleca się sesje trwające 30 minut, natomiast dla&nbsp;dzieci powyżej 6&nbsp;roku życia 45 min. Ostatecznie jednak długość terapii ustala rodzic z&nbsp;terapeutą.'
    },
    {
      name: 'Terapia widzenia 10 spotkań płatnych z&nbsp;góry',
      price: '700 zł',
      time: '30 min',
      description: 'Podczas terapii dziecko wykonuje specjalne ćwiczenia wzmacniające zdolności widzenia i&nbsp;przetwarzania informacji wzrokowych. Terapia ma na&nbsp;celu poprawę umiejętności związanych z&nbsp;nauką, pisaniem, czytaniem oraz&nbsp;ogólną koordynacją. Po&nbsp;zakończeniu zajęć terapeuta omawia postępy z&nbsp;rodzicem, udzielając wskazówek dotyczących dalszych ćwiczeń w&nbsp;domu, aby wspierać rozwój umiejętności wzrokowych dziecka. Dla&nbsp;dzieci w&nbsp;wieku 1-6 lat poleca się sesje trwające 30 minut. Ostatecznie jednak długość terapii ustala rodzic z&nbsp;terapeutą.'
    },
    {
      name: 'Terapia widzenia 10 spotkań płatnych z&nbsp;góry',
      price: '1450 zł',
      time: '45 min',
      description: 'Podczas terapii dziecko wykonuje specjalne ćwiczenia wzmacniające zdolności widzenia i&nbsp;przetwarzania informacji wzrokowych. Terapia ma na&nbsp;celu poprawę umiejętności związanych z&nbsp;nauką, pisaniem, czytaniem oraz&nbsp;ogólną koordynacją. Po&nbsp;zakończeniu zajęć terapeuta omawia postępy z&nbsp;rodzicem, udzielając wskazówek dotyczących dalszych ćwiczeń w&nbsp;domu, aby wspierać rozwój umiejętności wzrokowych dziecka. Dla&nbsp;dzieci powyżej 6&nbsp;roku życia poleca się sesje trwające 45 minut. Ostatecznie jednak długość terapii ustala rodzic z&nbsp;terapeutą.'
    },
  ];

  documents = [
    {
      name: 'Pisemny opis diagnozy SI',
      price: '150 zł',
      time: '',
      description: 'Wydanie pisemnego dokumentu na&nbsp;prośbę rodzica zawierającego opis procesów przetwarzania sensorycznego dziecka na&nbsp;podstawie przeprowadzonej diagnozy.'
    },
    {
      name: 'Pisemny opis diagnozy INPP',
      price: '150 zł',
      time: '',
      description: 'Wydanie pisemnej opinii na&nbsp;prośbę rodzica na&nbsp;temat funkcjonowania dziecka w&nbsp;ramach diagnozy INPP, która ocenia integrację odruchów pierwotnych i&nbsp;jej wpływ na&nbsp;rozwój.'
    },
    {
      name: 'Pisemna opinia',
      price: '50 zł',
      time: '50 min (zazwyczaj 3x 50 min)',
      description: 'Wydanie pisemnej opinii na&nbsp;temat funkcjonowania dziecka na&nbsp;zajęciach/terapii/ postępów terapii do&nbsp;szkoły, przedszkola, poradni psychologiczno-pedagogicznej itd.'
    }
  ];
}
