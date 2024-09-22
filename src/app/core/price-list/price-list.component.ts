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
      description: 'Podczas konsultacji psychologicznych pacjent ma możliwość porozmawiania z doświadczonym psychologiem na temat swoich trudności emocjonalnych, psychicznych lub behawioralnych. Konsultacje te pomagają w zrozumieniu problemów, diagnozie stanu emocjonalnego oraz w ustaleniu ewentualnej dalszej terapii. Konsultacje mogą obejmować wsparcie w radzeniu sobie ze stresem, lękami, depresją, problemami w relacjach, a także trudnościami życiowymi. Celem jest zidentyfikowanie obszarów wymagających wsparcia i ustalenie dalszych kroków terapeutycznych.'
    },
    {
      name: 'Diagnoza integracji sensorycznej',
      price: '150 zł',
      time: '50 min (zazwyczaj 3x 50 min)',
      description: 'Diagnoza obejmuje: wywiad z rodzicem, kwestionariusz sensomotoryczny, obserwacja kliniczna dziecka, testy, obserwacja spontanicznej zabawy, ustne omówienie diagnozy i zaleceń, plan ćwiczeń do domu.\n' +
        'Diagnoza trwa w większości  150 minut i zazwyczaj jest podzielona na 2 spotkania: pierwsze trwa ok. 1h. 40 minut i obejmuje dokładną rozmowę z rodzicem i początek diagnozowania dziecka, drugie spotkanie to dokończenie diagnozy i omówienie jej z rodzicem. Można też rozdzielić diagnozę na 3 odrębne spotkania.\n' +
        '\n' +
        'Czas diagnozy może się wydłużyć do 200 minut (wszystko zależy od współpracy dziecka) jednak w zdecydowanej większości trwa założone 150 min.*'
    },
    {
      name: 'Terapia Integracji sensorycznej',
      price: '130 zł',
      time: '50 min',
      description: 'Terapia integracji sensorycznej (SI) jest skierowana do dzieci, które mają trudności z przetwarzaniem bodźców sensorycznych, takich jak dźwięk, dotyk, równowaga, czy wzrok. Terapia pomaga dziecku lepiej integrować i reagować na bodźce z otoczenia poprzez wykonywanie specjalnie dobranych ćwiczeń na sali integracji sensorycznej. Zajęcia są dostosowane indywidualnie do potrzeb dziecka i mają na celu poprawę jego funkcjonowania w codziennych sytuacjach. Po zakończeniu sesji terapeuta omawia przebieg zajęć z rodzicem, udzielając zaleceń do pracy w domu, aby wspierać dalszy rozwój dziecka.'
    },
    {
      name: 'Terapia NeuroTaktylna MNRI',
      price: '130 zł',
      time: '50 min',
      description: 'Terapia NeuroTaktylna MNRI (Metoda Neuro-Sensoryczno-Refleksyjna) jest przeznaczona dla dzieci, które mają trudności w regulacji napięcia mięśniowego, przetwarzaniu bodźców sensorycznych oraz integracji odruchów. Podczas zajęć dziecko pracuje nad poprawą funkcjonowania układu nerwowego poprzez specjalne ćwiczenia aktywujące i integrujące naturalne odruchy. Terapia wspiera poprawę koordynacji ruchowej, koncentracji oraz reakcji na bodźce zewnętrzne. Po zakończeniu sesji terapeuta omawia z rodzicem przebieg zajęć, udzielając wskazówek dotyczących dalszej pracy w domu, co pomaga utrwalić efekty terapii i wspiera rozwój dziecka w codziennych sytuacjach.'
    },
    {
      name: 'Terapia ręki',
      price: '130 zł',
      time: '50 min',
      description: 'Terapia ręki to specjalistyczne zajęcia skierowane do dzieci, które mają trudności z precyzyjnymi ruchami rąk, koordynacją, pisaniem lub codziennymi czynnościami wymagającymi sprawności manualnej. Podczas terapii dziecko pracuje na sali integracji sensorycznej (SI), gdzie wykonywane są ćwiczenia poprawiające motorykę małą, koordynację wzrokowo-ruchową oraz siłę i precyzję ruchów. Po zakończeniu sesji terapeuta omawia zajęcia z rodzicem, udzielając wskazówek do dalszej pracy w domu, co wspiera postępy w rozwoju dziecka.'
    },
    {
      name: 'Terapia pedagogiczna',
      price: '130 zł',
      time: '50 min',
      description: 'Terapia pedagogiczna skierowana jest do dzieci i młodzieży mających trudności w nauce, koncentracji, czytaniu, pisaniu lub liczeniu. Celem terapii jest wsparcie w rozwijaniu umiejętności szkolnych oraz poprawa zdolności poznawczych i emocjonalnych. Podczas zajęć terapeuta pedagogiczny indywidualnie pracuje nad usprawnieniem procesów uczenia się, budowaniem pewności siebie, a także poprawą motywacji do nauki. Terapia pedagogiczna jest szczególnie pomocna dla dzieci z trudnościami edukacyjnymi, dysleksją, dysgrafią, czy problemami z koncentracją uwagi.'
    },
    {
      name: 'Diagnoza neurorozwojowa odruchów INPP',
      price: '150 zł',
      time: '3x 50 min',
      description: 'Diagnoza obejmuje: wywiad z rodzicem, kwestionariusz INPP, testy, ustne omówienie wyników, ćwiczenia do domu, kontakt z terapeutą w sprawie prawidłowo wykonywanych ćwiczeń w domu.'
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
      description: 'Konsultacje ze specjalistą procesów przetwarzania sensorycznego, wzorców ruchowych dziecka, procesów neurorozwojowych  dla rodziców, którzy mają trudności w ustaleniu źródła trudności szkolnych i ruchowych w powiązaniu z rozwojem motoryczno-sensorycznym dziecka. Specjalistą pomoże dobrać odpowiednią formę terapii.'
    },
    {
      name: 'Terapia widzenia',
      price: '75 zł/ 155zł',
      time: '30 min/ 45 min',
      description: 'Terapia widzenia jest przeznaczona dla dzieci, które mają trudności z przetwarzaniem bodźców wzrokowych, koncentracją wzrokową, koordynacją wzrokowo-ruchową lub funkcjami wzroku, takimi jak śledzenie obiektów i skupienie. Podczas terapii dziecko wykonuje specjalne ćwiczenia wzmacniające zdolności widzenia i przetwarzania informacji wzrokowych. Terapia ma na celu poprawę umiejętności związanych z nauką, pisaniem, czytaniem oraz ogólną koordynacją. Po zakończeniu zajęć terapeuta omawia postępy z rodzicem, udzielając wskazówek dotyczących dalszych ćwiczeń w domu, aby wspierać rozwój umiejętności wzrokowych dziecka. Dla dzieci w wieku 1-6 lat sesje trwają 30 minut natomiast dla dzieci powyżej 6 roku życia 45min.'
    },
    {
      name: 'Diagnoza funkcjonalna wzroku wraz z pisemną opinią 280 zł',
      price: '280 zł',
      time: '45 min',
      description: 'Diagnoza obejmuje ocenę funkcji wzrokowych dziecka oraz przygotowanie pisemnej opinii.'
    },
  ];

  documents = [
    {
      name: 'Pisemny opis diagnozy SI',
      price: '150 zł',
      time: '',
      description: 'Wydanie pisemnego dokumentu zawierającego opis procesów przetwarzania sensorycznego dziecka na podstawie przeprowadzonej diagnozy.'
    },

    {
      name: 'Pisemny opis diagnozy INPP',
      price: '150 zł',
      time: '',
      description: 'Diagnoza obejmuje: wywiad z rodzicem, kwestionariusz INPP, testy, ustne omówienie wyników, ćwiczenia do domu, kontakt z terapeutą w sprawie prawidłowo wykonywanych ćwiczeń w domu.'
    },
    {
      name: 'Pisemna opinia',
      price: '50 zł',
      time: '50 min (zazwyczaj 3x 50 min)',
      description: 'Wydanie pisemnej opinii na temat funkcjonowania dziecka na zajęciach/terapii/ postępów terapii do szkoły, przedszkola, Poradni Psychologiczno-Pedagogicznej itd.'
    }
  ];

}
