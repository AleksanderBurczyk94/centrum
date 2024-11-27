import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
  faqs = [
    {
      question: 'Czy integracja sensoryczna jest na NFZ?',
      answer:
        'Integracja sensoryczna zazwyczaj nie jest finansowana przez NFZ, dlatego większość terapii odbywa się prywatnie. Istnieją jednak sytuacje, kiedy rodzic może starać się o bezpłatne zajęcia SI dla dzieci posiadających orzeczenie, czy opinię, np. o potrzebie WWRD.',
    },
    {
      question: 'Czy terapia sensoryczna ma sens?',
      answer:
        'Tak, terapia sensoryczna może pomóc dzieciom z zaburzeniami integracji sensorycznej w poprawie ich codziennego funkcjonowania. Jako metoda została pierwotnie stworzona dla dzieci mających trudności w nauce.',
    },
    {
      question: 'Ile kosztuje 1h terapii?',
      answer:
        'Koszt terapii sensorycznej zależy od miejsca i terapeuty, ale zazwyczaj wynosi od 120 do 200 zł. za godzinę.',
    },
    {
      question: 'Do jakiego wieku terapia sensoryczna?',
      answer:
        'Terapia sensoryczna jest najbardziej efektywna w wieku przedszkolnym i wczesnoszkolnym, ale może być prowadzona również u starszych dzieci, w tym w szczególności dla dzieci w spektrum autyzmu i różnymi niepełnosprawnościami.',
    },
    {
      question: 'Po czym poznać, że dziecko ma zaburzenia sensoryczne?',
      answer:
        'Dzieci z zaburzeniami sensorycznymi mogą wykazywać skrajne reakcje na bodźce np. nadwrażliwość lub odwrotnie - potrzebę intensywniejszych doznań sensorycznych. Uwidacznia się również w trudnościach z równowagą, koordynacją, planowaniem ruchu i nieprawidłowo pracującymi mięśniami posturalnymi.',
    },
    {
      question: 'Po jakim czasie widać efekty terapii SI?',
      answer:
        'Efekty terapii sensorycznej mogą być widoczne po kilku miesiącach regularnych zajęć (minimum 6), w zależności od stopnia nasilenia zaburzeń. W przypadku dzieci z orzeczeniami, sukcesem w terapii może być chociażby brak regresu w funkcjonowaniu sensorycznym.',
    },
    {
      question: 'Czy zaburzenia integracji sensorycznej to autyzm?',
      answer:
        'Nie, zaburzenia integracji sensorycznej absolutnie nie są równoznaczne z autyzmem, ale najczęściej współwystęują z tym zaburzeniem.',
    },
    {
      question: 'Jak wygląda diagnoza sensoryczna?',
      answer:
        'Diagnoza sensoryczna polega na obserwacji dziecka podczas spontanicznej zabawy, przeprowadzeniu obserwacji klinicznej, testów, dokładnego wywiadu z rodzicem oraz  wypełnianieniem kwestionariusza sensorycznego.',
    },
    {
      question: 'Co daje dziecku integracja sensoryczna?',
      answer:
        'Terapia sensoryczna pomaga dziecku lepiej przetwarzać bodźce, co może poprawić jego funkcjonowanie w codziennych sytuacjach, a także wspierać rozwój umiejętności szkolnych.',
    },
    {
      question: 'Czy integracja sensoryczna to rehabilitacja?',
      answer:
        'Integracja sensoryczna jest formą terapii, która skupia się na przetwarzaniu bodźców sensorycznych, ale nie jest typową rehabilitacją fizyczną.',
    },
    {
      question: 'Na czym polega dieta sensoryczna?',
      answer:
        'Dieta sensoryczna to plan aktywności i strategii dostosowanych do potrzeb sensorycznych dziecka, które rodzic otrzymuje od terapeuty do realizacji w domu, pomagający w regulacji jego zachowania i funkcjonowania.',
    },
    {
      question: 'Kiedy dziecko potrzebuje terapii?',
      answer:
        'Dziecko może potrzebować terapii, jeśli ma trudności szkolne oraz w codziennym funkcjonowaniu związane z nadwrażliwością lub niedowrażliwością na bodźce, trudnościach z równowagą, koordynacją, planowaniem ruchu i nieprawidłowo pracującymi mięśniami posturalnymi',
    },
    {
      question: 'Skąd biorą się problemy z integracją sensoryczną?',
      answer:
        'Problemy z integracją sensoryczną mogą mieć podłoże genetyczne, neurologiczne lub być wynikiem trudnych doświadczeń wczesnodziecięcych.',
    },

    // Dodatkowe pytania generujące ruch:
    {
      question: 'Czy integracja sensoryczna jest skuteczna?',
      answer:
        'Skuteczność terapii sensorycznej zależy od indywidualnych potrzeb dziecka, ale wiele rodzin zauważa znaczną poprawę po regularnych sesjach.',
    },
    {
      question: 'Jakie są objawy zaburzeń integracji sensorycznej?',
      answer:
        'Objawy mogą obejmować nadwrażliwość na dotyk, dźwięki, trudności z równowagą, problemy z koordynacją i wiele innych.',
    },
    {
      question: 'Gdzie można znaleźć specjalistów od integracji sensorycznej?',
      answer:
        'Specjalistów można znaleźć w prywatnych gabinetach terapeutycznych, poradniach psychologicznych oraz ośrodkach zajmujących się rehabilitacją dzieci.',
    },
    {
      question: 'Czy integracja sensoryczna pomaga dzieciom z ADHD?',
      answer:
        'Nie ma obecnie badań, które potwierdzałyby skuteczność terapii SI w przypadku dzieci z ADHD. Jednak terapia sensoryczna może pomóc dzieciom lepiej przetwarzać bodźce, co może wpłynąć na poprawę koncentracji i zmniejszenie impulsywności.',
    },
    {
      question:
        'Czy mogę samodzielnie pracować nad integracją sensoryczną w domu?',
      answer:
        'Tak, istnieje wiele ćwiczeń, które rodzice mogą wykonywać z dzieckiem w domu, jednak warto skonsultować się z terapeutą, aby dostosować je do potrzeb dziecka.',
    },
    {
      question: 'Jakie zabawy sensoryczne można wykonywać w domu?',
      answer:
        'Zabawy sensoryczne, takie jak malowanie palcami, zabawy z piaskiem kinetycznym, tory przeszkód, czworakowanie, skoki, turlanie, mogą wspierać rozwój sensoryczny dziecka.',
    },
    {
      question: 'Czy integracja sensoryczna jest potrzebna dorosłym?',
      answer:
        'Chociaż terapia sensoryczna jest najczęściej stosowana u dzieci, dorośli z zaburzeniami przetwarzania sensorycznego również mogą odnieść korzyści z terapii.',
    },

    // Nowe pytania:
    {
      question: 'Czy integracja sensoryczna jest bolesna dla dziecka?',
      answer:
        'Nie, terapia sensoryczna nie jest bolesna. Terapia jest świetną formą zabawy i dzieci zazwyczaj bardzo lubią na nią uczęszczać. Ćwiczenia są dostosowane do indywidualnych potrzeb dziecka i mają na celu poprawę jego komfortu.',
    },
    {
      question: 'Jak często powinny odbywać się sesje terapii sensorycznej?',
      answer:
        'Zalecana częstotliwość to 1-2 sesje tygodniowo, w zależności od potrzeb dziecka i planu terapeutycznego.',
    },
    {
      question: 'Czy integracja sensoryczna pomaga w problemach z jedzeniem?',
      answer:
        'Tak, terapia sensoryczna może pomóc dzieciom z problemami związanymi z jedzeniem, jeśli wynikają one z zaburzeń sensorycznych np. nadwrażliwością na tekstury.',
    },
    {
      question: 'Jakie są długoterminowe efekty integracji sensorycznej?',
      answer:
        'Długoterminowe efekty mogą obejmować lepsze przetwarzanie bodźców, poprawę zachowania, umiejętności szkolnych i funkcjonowania w codziennym życiu.',
    },
    {
      question: 'Czy terapia sensoryczna może pomóc w problemach z mówieniem?',
      answer:
        'Terapia sensoryczna może wspierać rozwój mowy u dzieci, szczególnie jeśli trudności wynikają z problemów sensorycznych.',
    },
    {
      question: 'Jakie są najczęstsze zaburzenia sensoryczne u dzieci?',
      answer:
        'Najczęstsze zaburzenia sensoryczne obejmują nadwrażliwość lub niedowrażliwość na dźwięki, dotyk, ruch oraz problemy z równowagą.',
    },
    {
      question:
        'Czy integracja sensoryczna jest zalecana dla dzieci z zespołem Aspergera?',
      answer:
        'Tak, terapia sensoryczna może być pomocna dla dzieci z zespołem Aspergera w radzeniu sobie z trudnościami sensorycznymi.',
    },
    {
      question: 'Czy mogę uczestniczyć w sesjach terapii mojego dziecka?',
      answer:
        'Tak, w szczególności, jeśli chodzi o diagnozę. Jednak często uczestnictwo rodzica w terapii powoduje rozproszenie uwagi dziecka. Jest to jednak kwestia bardzo indywidualna, ponieważ niektóre dzieci bardzo potrzebują poczucia bezpieczeństwa, które zapewnia im rodzic.',
    },
    {
      question:
        'Jakie są koszty terapii sensorycznej w różnych regionach Polski?',
      answer:
        'Koszty terapii mogą się różnić w zależności od regionu, zazwyczaj wahają się od 130 do 200 zł za sesję.',
    },
    {
      question:
        'Czy integracja sensoryczna jest skuteczna u dzieci z zespołem Downa?',
      answer:
        'Tak, terapia sensoryczna może wspierać rozwój dzieci z zespołem Downa, pomagając im lepiej przetwarzać bodźce.',
    },
    {
      question:
        'Czy istnieją alternatywne metody leczenia zaburzeń sensorycznych?',
      answer:
        'Alternatywne metody mogą obejmować terapię zajęciową, terapię ruchową i inne podejścia wspomagające rozwój sensoryczny.',
    },
    {
      question:
        'Jakie są różnice między terapią sensoryczną a terapią zajęciową?',
      answer:
        'Terapia zajęciowa koncentruje się na codziennych czynnościach, natomiast terapia sensoryczna skupia się na przetwarzaniu bodźców sensorycznych.',
    },
    {
      question:
        'Czy terapia sensoryczna może pomóc w problemach z zachowaniem?',
      answer:
        'Tak, terapia sensoryczna może pomóc dzieciom z problemami zachowawczymi, poprawiając ich zdolność do radzenia sobie z bodźcami.',
    },
    {
      question: 'Jakie są najczęstsze mity dotyczące integracji sensorycznej?',
      answer:
        'Niektóre mity obejmują przekonanie, że terapia sensoryczna, że jest przeznaczona tylko dla dzieci z autyzmem.',
    },
    {
      question: 'Jakie są najnowsze badania dotyczące integracji sensorycznej?',
      answer:
        'Najnowsze badania koncentrują się na skuteczności terapii sensorycznej w leczeniu różnych zaburzeń oraz na jej wpływie na rozwój dzieci.',
    },
  ];

  initialFaqsToShow = 4;

  displayedFaqs: { question: string; answer: string }[] = [];

  constructor() {
    this.displayedFaqs = this.faqs.slice(0, this.initialFaqsToShow);
  }

  loadMore() {
    const nextSet = this.displayedFaqs.length + this.initialFaqsToShow;
    this.displayedFaqs = this.faqs.slice(0, nextSet);
  }
}
