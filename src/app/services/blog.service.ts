import {Injectable} from '@angular/core';
import {AppPaths} from "../app-paths";
import {MatPaginatorIntl, PageEvent} from "@angular/material/paginator";
import {ActivatedRoute, Router} from "@angular/router";
import {blogCard} from "../interfaces/blogCard";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private cards: blogCard[] = [
    {
      id: 0,
      seoData: {
        title: 'Rozwój dziecka - Kluczowe etapy',
        metaDescription:
          'Dowiedz się, jakie są kluczowe etapy rozwoju dziecka oraz jak wspierać je w Centrum Terapii i Wsparcia Rozwoju Równowaga w Kaliszu.',
      },
      webpImg: 'assets/img/usmiechniete-dzieci.webp',
      alterImg: 'assets/img/bawiace-sie-dzieci-centrum-rownowaga.jpg',
      alt: 'Bawiące się dzieci',
      title: 'Rozwój dziecka - Kluczowe etapy',
      date: '29-11-2024',
      shortDescription:
        'W artykule szczegółowo omawiamy kluczowe etapy rozwoju dziecka, ich znaczenie oraz sposoby wspierania w Centrum Terapii i Wsparcia Rozwoju Równowaga w Kaliszu.',
      sections: [
        {
          id: 0,
          title: 'Wczesne lata rozwoju',
          content: `Pierwsze lata życia dziecka to kluczowy czas, w którym kształtują się podstawowe umiejętności motoryczne, językowe i społeczne. W tym okresie dziecko uczy się poprzez zabawę i eksplorację otoczenia.  Ważne jest, aby rodzice i opiekunowie dostarczali odpowiednich bodźców wspierających rozwój. Należy stymulować rozwój sensoryczny poprzez dostarczanie różnorodnych doświadczeń: zabawy w piasku, malowanie farbami palcami, bieganie boso po trawie czy wchodzenie na różnorodne struktury wspinaczkowe.
                    Dziecko rozwija również zdolności komunikacyjne – począwszy od gaworzenia po pierwsze słowa. Warto prowadzić z dzieckiem dialog, odpowiadać na jego dźwięki i uczyć nazw przedmiotów, które widzi wokół siebie.
                    W przypadku trudności w rozwijaniu tych umiejętności, nasze Centrum oferuje konsultacje z terapeutami oraz zajęcia, które pomagają w rozwijaniu zarówno zdolności ruchowych, jak i komunikacyjnych.`,
        },
        {
          id: 1,
          title: 'Rozwój emocjonalny',
          content: `Rozwój emocjonalny dziecka to fundament jego przyszłego funkcjonowania w społeczeństwie. Dzieci uczą się rozpoznawać swoje emocje i odpowiednio je wyrażać. To kluczowy etap, w którym nawiązują więzi z rodzicami i opiekunami, co buduje ich poczucie bezpieczeństwa.
                    Nasze Centrum Terapii i Wsparcia Rozwoju prowadzi zajęcia wspierające rozwój emocjonalny poprzez zabawy grupowe, ćwiczenia empatii oraz techniki relaksacyjne. Pomagamy dzieciom w radzeniu sobie z emocjami, takimi jak złość czy smutek, ucząc je odpowiednich strategii.
                   Rodzice również odgrywają ogromną rolę w tym procesie. Ważne jest, aby reagowali na potrzeby emocjonalne dziecka, okazywali zrozumienie i wsparcie w trudnych chwilach. Dla rodziców oferujemy warsztaty, które uczą, jak budować zdrowe relacje z dziećmi.Rozwój emocjonalny dziecka to fundament jego przyszłego funkcjonowania w społeczeństwie. Dzieci uczą się rozpoznawać swoje emocje i odpowiednio je wyrażać. To kluczowy etap, w którym nawiązują więzi z rodzicami i opiekunami, co buduje ich poczucie bezpieczeństwa.
                    Nasze Centrum Terapii i Wsparcia Rozwoju prowadzi zajęcia wspierające rozwój emocjonalny poprzez zabawy grupowe, ćwiczenia empatii oraz techniki relaksacyjne. Pomagamy dzieciom w radzeniu sobie z emocjami, takimi jak złość czy smutek, ucząc je odpowiednich strategii.
                   Rodzice również odgrywają ogromną rolę w tym procesie. Ważne jest, aby reagowali na potrzeby emocjonalne dziecka, okazywali zrozumienie i wsparcie w trudnych chwilach. Dla rodziców oferujemy warsztaty, które uczą, jak budować zdrowe relacje z dziećmi.Rozwój emocjonalny dziecka to fundament jego przyszłego funkcjonowania w społeczeństwie. Dzieci uczą się rozpoznawać swoje emocje i odpowiednio je wyrażać. To kluczowy etap, w którym nawiązują więzi z rodzicami i opiekunami, co buduje ich poczucie bezpieczeństwa.
                    Nasze Centrum Terapii i Wsparcia Rozwoju prowadzi zajęcia wspierające rozwój emocjonalny poprzez zabawy grupowe, ćwiczenia empatii oraz techniki relaksacyjne. Pomagamy dzieciom w radzeniu sobie z emocjami, takimi jak złość czy smutek, ucząc je odpowiednich strategii.
                   Rodzice również odgrywają ogromną rolę w tym procesie. Ważne jest, aby reagowali na potrzeby emocjonalne dziecka, okazywali zrozumienie i wsparcie w trudnych chwilach. Dla rodziców oferujemy warsztaty, które uczą, jak budować zdrowe relacje z dziećmi.Rozwój emocjonalny dziecka to fundament jego przyszłego funkcjonowania w społeczeństwie. Dzieci uczą się rozpoznawać swoje emocje i odpowiednio je wyrażać. To kluczowy etap, w którym nawiązują więzi z rodzicami i opiekunami, co buduje ich poczucie bezpieczeństwa.
                    Nasze Centrum Terapii i Wsparcia Rozwoju prowadzi zajęcia wspierające rozwój emocjonalny poprzez zabawy grupowe, ćwiczenia empatii oraz techniki relaksacyjne. Pomagamy dzieciom w radzeniu sobie z emocjami, takimi jak złość czy smutek, ucząc je odpowiednich strategii.
                   Rodzice również odgrywają ogromną rolę w tym procesie. Ważne jest, aby reagowali na potrzeby emocjonalne dziecka, okazywali zrozumienie i wsparcie w trudnych chwilach. Dla rodziców oferujemy warsztaty, które uczą, jak budować zdrowe relacje z dziećmi.Rozwój emocjonalny dziecka to fundament jego przyszłego funkcjonowania w społeczeństwie. Dzieci uczą się rozpoznawać swoje emocje i odpowiednio je wyrażać. To kluczowy etap, w którym nawiązują więzi z rodzicami i opiekunami, co buduje ich poczucie bezpieczeństwa.
                    Nasze Centrum Terapii i Wsparcia Rozwoju prowadzi zajęcia wspierające rozwój emocjonalny poprzez zabawy grupowe, ćwiczenia empatii oraz techniki relaksacyjne. Pomagamy dzieciom w radzeniu sobie z emocjami, takimi jak złość czy smutek, ucząc je odpowiednich strategii.
                   Rodzice również odgrywają ogromną rolę w tym procesie. Ważne jest, aby reagowali na potrzeby emocjonalne dziecka, okazywali zrozumienie i wsparcie w trudnych chwilach. Dla rodziców oferujemy warsztaty, które uczą, jak budować zdrowe relacje z dziećmi.Rozwój emocjonalny dziecka to fundament jego przyszłego funkcjonowania w społeczeństwie. Dzieci uczą się rozpoznawać swoje emocje i odpowiednio je wyrażać. To kluczowy etap, w którym nawiązują więzi z rodzicami i opiekunami, co buduje ich poczucie bezpieczeństwa.
                    Nasze Centrum Terapii i Wsparcia Rozwoju prowadzi zajęcia wspierające rozwój emocjonalny poprzez zabawy grupowe, ćwiczenia empatii oraz techniki relaksacyjne. Pomagamy dzieciom w radzeniu sobie z emocjami, takimi jak złość czy smutek, ucząc je odpowiednich strategii.
                   Rodzice również odgrywają ogromną rolę w tym procesie. Ważne jest, aby reagowali na potrzeby emocjonalne dziecka, okazywali zrozumienie i wsparcie w trudnych chwilach. Dla rodziców oferujemy warsztaty, które uczą, jak budować zdrowe relacje z dziećmi.`,
        },
        {
          id: 2,
          title: 'Wsparcie sensoryczne',
          content: `Niektóre dzieci mogą mieć trudności z przetwarzaniem bodźców sensorycznych. Objawia się to np. nadwrażliwością na dźwięki, zapachy czy faktury, a także trudnościami w równowadze i koordynacji ruchowej. W naszym Centrum Równowaga oferujemy terapię integracji sensorycznej, która wspiera dzieci w lepszym przetwarzaniu bodźców z otoczenia. Terapia ta obejmuje zabawy na specjalistycznym sprzęcie, takim jak huśtawki terapeutyczne, ścieżki sensoryczne czy podwieszane platformy.
                     Zajęcia prowadzone są w przyjaznej atmosferze, co sprzyja rozwojowi dziecka i pomaga mu lepiej radzić sobie w codziennych sytuacjach. Terapia sensoryczna to nie tylko pomoc dla dzieci z trudnościami – jest również formą stymulacji rozwoju dla dzieci, które chcą rozwijać swoje zdolności ruchowe i poznawcze.`,
          subsections: [
            {title: 'Znaczenie zabawy', content: 'Zabawa wspiera rozwój poznawczy...'},
            {title: 'Rozwój emocji', content: 'Rozwijanie empatii i rozumienia emocji...'}
          ]
        },
        {
          id: 3,
          title: 'Rola rodziców w rozwoju dziecka',
          content: `Rodzice odgrywają kluczową rolę w rozwoju dziecka. Ich wsparcie, uwaga i zaangażowanie wpływają na rozwój emocjonalny, społeczny i intelektualny. Ważne jest, aby spędzać czas z dzieckiem, wspólnie się bawić i odpowiadać na jego potrzeby. W Centrum Równowaga oferujemy konsultacje dla rodziców, które pomagają zrozumieć etapy rozwoju dziecka oraz skuteczne metody wsparcia. Prowadzimy również warsztaty edukacyjne, które uczą, jak radzić sobie z wyzwaniami wychowawczymi, takimi jak zachowania trudne, konflikty między rodzeństwem czy adaptacja do przedszkola lub szkoły.`,
          subsections: [
            {title: 'Znaczenie zabawy', content: 'Zabawa wspiera rozwój poznawczy...'},
            {title: 'Rozwój emocji', content: 'Rozwijanie empatii i rozumienia emocji...'}, {
              title: 'Znaczenie zabawy',
              content: 'abawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.\n                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.\n                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.\n                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.\n                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.\n                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.\n                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.Ważne jest, aby rodzice angażowali się w zabawę z dz'
            },
            {title: 'Rozwój emocji', content: 'Rozwijanie empatii i rozumienia emocji...'}
          ]
        },
        {
          id: 4,
          title: 'Znaczenie zabawy w rozwoju',
          content: `Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.
                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.
                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.
                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.
                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.
                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.
                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.
                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.
                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.
                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.
                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.
                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.
                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.
                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.
                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.
                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.
                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.
                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.
                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.
                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.
                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.Zabawa jest podstawową formą aktywności dziecka, dzięki której uczy się nowych umiejętności. Poprzez zabawę dziecko rozwija kreatywność, zdolności poznawcze oraz umiejętności społeczne.
                    Ważne jest, aby rodzice angażowali się w zabawę z dzieckiem, oferując różnorodne formy aktywności. W naszym Centrum organizujemy zajęcia grupowe, które promują współpracę i uczą dzieci, jak dzielić się zabawkami, współdziałać w grupie oraz rozwiązywać konflikty.`,
        },
        {
          id: 5,
          title: 'Podsumowanie',
          content: `Rozwój dziecka to proces wieloaspektowy, który wymaga zaangażowania rodziców oraz specjalistów. Każde dziecko rozwija się w swoim tempie i potrzebuje indywidualnego podejścia.
                     Centrum Terapii i Wsparcia Rozwoju Równowaga oferuje kompleksową pomoc na każdym etapie rozwoju dziecka. Dzięki naszym specjalistycznym zajęciom i wsparciu rodziców tworzymy warunki, które sprzyjają pełnemu wykorzystaniu potencjału dziecka.`,
        },
      ],
    },
    {
      id: 1,
      seoData: {
        title: 'Jak radzić sobie z trudnościami szkolnymi?',
        metaDescription:
          'Praktyczne porady i rozwiązania dla dzieci z trudnościami szkolnymi. Dowiedz się, jak Centrum Równowaga może pomóc Twojemu dziecku.',
      },
      webpImg: 'assets/img/usmiechniete-dzieci.webp',
      alterImg: 'assets/img/bawiace-sie-dzieci-centrum-rownowaga.jpg',
      alt: 'Dzieci w szkole',
      title: 'Jak radzić sobie z trudnościami szkolnymi?',
      date: '15-10-2024',
      shortDescription:
        'Artykuł zawiera porady dla rodziców dzieci z trudnościami szkolnymi, w tym jak nasze centrum może pomóc w rozwiązywaniu tych problemów.',
      sections: [
        {
          id: 0,
          title: 'Rozpoznanie trudności',
          content: `Pierwszym krokiem jest dokładne rozpoznanie problemów, z jakimi boryka się dziecko. Może to być trudność w nauce czy problemy w relacjach z rówieśnikami.`,
        },
        {
          id: 1,
          title: 'Indywidualny plan terapii',
          content: `W Centrum Równowaga opracowujemy indywidualne plany terapeutyczne, które odpowiadają na potrzeby każdego dziecka.`,
        },
        {
          id: 2,
          title: 'Wsparcie rodziców',
          content: `Nie tylko dzieci, ale również rodzice mogą liczyć na nasze wsparcie. Organizujemy warsztaty i konsultacje, które pomagają w zrozumieniu potrzeb dziecka.`,
        },
      ],
    },
    {
      id: 2,
      seoData: {
        title: 'Znaczenie integracji sensorycznej',
        metaDescription:
          'Dowiedz się, czym jest integracja sensoryczna i jakie korzyści płyną z jej stosowania w terapii dzieci w naszym centrum w Kaliszu.',
      },
      webpImg: 'assets/img/usmiechniete-dzieci.webp',
      alterImg: 'assets/img/bawiace-sie-dzieci-centrum-rownowaga.jpg',
      alt: 'Zajęcia integracji sensorycznej',
      title: 'Znaczenie integracji sensorycznej',
      date: '01-12-2024',
      shortDescription:
        'Artykuł o integracji sensorycznej i jej wpływie na rozwój dzieci. Przeczytaj, jak nasze centrum wspiera dzieci w terapii sensorycznej.',
      sections: [
        {
          id: 0,
          title: 'Czym jest integracja sensoryczna?',
          content: `Integracja sensoryczna to proces, w którym układ nerwowy organizuje bodźce docierające z otoczenia. U niektórych dzieci proces ten może być zaburzony.`,
        },
        {
          id: 1,
          title: 'Jak wygląda terapia?',
          content: `Nasza terapia integracji sensorycznej polega na dostarczaniu dziecku kontrolowanych bodźców, które pomagają w lepszym przetwarzaniu informacji.`,
        },
        {
          id: 2,
          title: 'Korzyści płynące z terapii',
          content: `Terapia integracji sensorycznej poprawia koncentrację, równowagę i zdolności motoryczne, co ma pozytywny wpływ na rozwój dziecka.`,
        },
      ],
    },
  ];


  private pageSize = 5;        // Rozmiar strony
  private currentPage = 0;     // Bieżąca strona
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  getCards() {
    return this.cards;
  }

  getCard(id: number) {
    return this.cards[id];
  }

  getPaginatedCards() {
    const startIndex = this.currentPage * this.pageSize;
    return this.cards.slice(startIndex, startIndex + this.pageSize);
  }

  updatePagination(event: PageEvent) {
    this.pageSize = event.pageSize
    this.currentPage = event.pageIndex
  }


  navigateToBlog(appPaths: typeof AppPaths, id: number): void {
    this.router.navigate([appPaths.BLOG, id]);
  }

  get getPageSize(): number {
    return this.pageSize;
  }

  get getCurrentPage(): number {
    return this.currentPage;
  }
}
