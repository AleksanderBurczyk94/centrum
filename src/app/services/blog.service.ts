import {Injectable} from '@angular/core';
import {AppPaths} from "../app-paths";
import {PageEvent} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {blogCard} from "../interfaces/blogCard";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private cards: blogCard[] = [
    {
      id: 0,
      seoData: {
        title: 'Rola rodziców w terapii integracji sensorycznej – jak budować wspierające środowisko?',
        metaDescription:
          'Dowiedz się, jak rodzice mogą wspierać terapię integracji sensorycznej swojego dziecka, tworząc odpowiednie środowisko w domu i współpracując z terapeutami.',
      },
      webpImg: 'assets/img/blog/rodzice-trzymajacy-dziecko-za-rece.webp',
      alterImg: 'assets/img/blog/rodzice-trzymajacy-dziecko-za-rece.jpg',
      alt: 'Integracja sensoryczna',
      title: 'Rola rodziców w terapii integracji sensorycznej – jak budować wspierające środowisko?',
      date: '2024-11-21',
      illustration: {
        webpImg: 'assets/img/blog/droga-do-efektywnej-integracji-sensorycznej.webp',
        alterImg: 'assets/img/blog/droga-do-efektywnej-integracji-sensorycznej.png',
        alt: 'Lupa skupiająca narzędzia terapeutyczne, zangażowanie rodziców, wpierające środowkisko co daje skuteczną integracje sensoryczną '
      },
      shortDescription:
        'Integracja sensoryczna to kluczowy proces, który pozwala dziecku odbierać i prawidłowo przetwarzać bodźce. Kiedy jest on zaburzony, dziecko może mieć trudności z koncentracją, motoryką, regulacją emocji, umiejętnościami szkolnymi. Terapia integracji sensorycznej daje dziecku narzędzia do radzenia sobie z tymi wyzwaniami, ale jej sukces zależy nie tylko od pracy specjalistów – ogromną rolę odgrywają rodzice. To oni tworzą codzienne środowisko dziecka, które powinno wspierać proces terapeutyczny, a także czuwają nad realizacją zaleceń, które otrzymali od terapeuty SI w przypadku ewentualnych trudności. Jak możesz pomóc swojemu dziecku? Oto szczegółowe wskazówki.',
      sections: [
        {
          id: 100,
          title: 'Zrozumienie potrzeb dziecka',
          contentArray: [`Każde dziecko jest inne, dlatego pierwszym krokiem w budowaniu wspierającego środowiska jest zrozumienie, jakie bodźce sensoryczne wpływają na Twoje dziecko.`],
          lists: [
            {
              type: 'unordered',
              items: [
                '<strong>Obserwuj swoje dziecko:</strong> Zauważ, czy unika określonych dźwięków, dotyku lub zapachów, czy może odwrotnie – potrzebuje ich więcej. Dzieci z nadwrażliwością sensoryczną mogą unikać hałasu, świateł czy tłumów, podczas gdy dzieci z podwrażliwością mogą poszukiwać intensywnych doznań, np. biegając, skacząc, obijając się o przedmioty lub inne osoby.',
                '<strong>Skonsultuj się z terapeutą:</strong> Specjalista pomoże Ci zidentyfikować potrzeby i trudności dziecka oraz wyjaśni, w jaki sposób organizować mu przestrzeń oraz aktywności.',
                '<strong>Zrozum, że potrzeby dziecka mogą się zmieniać:</strong> To, co dziś sprawia trudność, za kilka miesięcy może już nie być problemem. Dlatego ważna jest ciągła obserwacja. Ponadto, to że dziecko ma nadwrażliwość na jedne bodźce w danym obszarze ciała, nie wyklucza, że równocześnie może być podwrażliwe na te same w innym miejscu.',
              ],
            },
          ],
          subsections: [
            {
              title: 'Praktyczne porady',
              lists: [
                {
                  type: 'unordered',
                  items: [
                    'Prowadź dziennik obserwacji – zapisuj, co wywołuje trudności, a co pomaga dziecku w regulacji emocji i zachowań.',
                    'Zdobywaj wiedzę o integracji sensorycznej – czytaj artykuły, ksiązki, a w przypadku, gdy zauważysz wyzwania sensoryczne u swojego dziecka – skonsultuj się ze specjalistą w tej dziedzinie',
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 101,
          title: 'Stymulacja sensoryczna w domu',
          contentArray: ['Dom jest idealnym miejscem do wspierania terapii sensorycznej poprzez zabawy i ćwiczenia dostosowane do potrzeb dziecka.'],
          subsections: [
            {
              title: 'Przykłady aktywności sensorycznych:',
              lists: [
                {
                  type: 'unordered',
                  items: [
                    '<strong>Zabawy z masą plastyczną lub piaskiem kinetycznym:</strong> Pomagają rozwijać zmysł dotyku i relaksują.',
                    '<strong>Ścieżki sensoryczne i tory przeszkód:</strong> : Stwórz w domu trasę z różnorodnymi teksturami (np. miękka mata, kamyczki, tkaniny), przeszkodami (poduszki, pudełka, krzesło, lina, kartony). W zależności od toru niech dziecko przechodzi po nim na czworakach, bokiem, tyłem, na jednej nodze, na palcach, na piętach, skacząc, niosąc książkę na głowie itd. To świetne ćwiczenia dla regulacji najważniejszych systemów zmysłowych: równowagi, dotyku i czucia głębokiego.',
                    '<strong>Huśtawki i zabawy ruchowe:</strong> Jeśli dziecko poszukuje stymulacji ruchowej, warto zainwestować w huśtawkę, hamak, bocianie gniazdo, drabinkę lub różnego rodzaju zajęcia ruchowe.',
                    '<strong>Dźwięki i muzyka:</strong> Eksperymentuj z różnymi dźwiękami i muzyką, aby zobaczyć, co uspokaja, a co może wywoływać dyskomfort.',
                  ],
                },
              ],
              illustration: {
                webpImg: 'assets/img/blog/Jaką-aktywność-sensoryczną-warto-wdrożyć-w-domu.webp',
                alterImg: 'assets/img/blog/Jaką-aktywność-sensoryczną-warto-wdrożyć-w-domu.png',
                alt: 'Schemat pokazujace różne aktywnośći które można wykonać w domu, masa plastyczna, ścieżka sensoryczna, huśtawka, eksperymenty z dźwiękiem'
              },
            }, {
              title: 'Rada dla rodziców:',
              lists: [
                {
                  type: 'unordered',
                  items: [
                    'Stymulacja sensoryczna powinna być regularna, ale nie nadmierna. Zbyt intensywne bodźce mogą przynieść efekt odwrotnym – przestymulować dziecko i wywołać frustrację.',
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 102,
          title: 'Wspierające środowisko w domu',
          contentArray: [`Tworzenie środowiska przyjaznego dla dziecka to kluczowy element terapii. Dom powinien być miejscem, gdzie dziecko czuje się bezpieczne i ma dostęp do narzędzi wspierających integrację sensoryczną.`],
          subsections: [
            {
              title: 'Co możesz zrobić?',
              lists: [
                {
                  type: 'unordered',
                  items: [
                    '<strong>Eliminuj nadmiar bodźców:</strong> Unikaj hałaśliwych urządzeń, intensywnych zapachów i ostrych świateł. Warto również wyznaczyć cichy kącik, w którym dziecko może się wyciszyć. W żadnym wypadku nie stosuj przez długi okres czasu białego szumu do wyciszania dziecka, np. włączonej suszarki, czy odkurzacza w pokoju malucha, bo może to spowodować trudności w przetwarzaniu słuchowym.',
                    '<strong>Stała rutyna:</strong> Dzieci z trudnościami sensorycznymi często potrzebują przewidywalności. Ustal regularne pory posiłków, zabaw i snu.',
                    '<strong>Przestrzeń do eksploracji:</strong> Upewnij się, że dziecko ma miejsce, gdzie może się bawić i eksplorować, np. układać klocki, rysować czy korzystać z sensorycznych narzędzi.',
                  ],
                },
              ],
              illustration: {
                webpImg: 'assets/img/blog/balasnowanie-potrzeb-sensorycznych-u-dzieci.webp',
                alterImg: 'assets/img/blog/balasnowanie-potrzeb-sensorycznych-u-dzieci.png',
                alt: 'Grafika przedstawiająca wagę balansującą potrzeby sensoryczne u dzieci. Po lewej stronie opisane jako Unika intensywnych bodźców i Nadwrażliwość sensoryczna, a po prawej Poszukuje intensywnych bodźców i Podwrażliwość sensoryczna. Pod wagą napis: Balansowanie potrzeb sensorycznych u dzieci.'
              },
            }, {
              title: 'Pro tip:',
              lists: [
                {
                  type: 'unordered',
                  items: [
                    'Wykorzystuj naturalne otoczenie – spacery po lesie, zabawa w piasku czy kąpiel w wannie z bąbelkami, z kisielem, z galaretką, bo to świetne sposoby na stymulację sensoryczną.',
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 103,
          title: 'Współpraca z terapeutą',
          contentArray: [`Rodzice i terapeuci powinni działać jako zespół, którego celem jest dobro dziecka.`],
          lists: [
            {
              type: 'unordered',
              items: [
                '<strong>Regularna terapia:</strong>  Zadbaj, by dziecko uczęszczało na terapię, zgodnie z zaleceniami terapeuty.',
                '<strong>Wdrażanie zaleceń w domu:</strong> Specjalista może zasugerować konkretne ćwiczenia lub strategie, które możesz stosować na co dzień – korzystaj z nich!',
                '<strong>Zadawaj pytania:</strong> Nie bój się pytać o szczegóły terapii i cele, które są stawiane przed dzieckiem.',
              ],
            },
          ],
          subsections: [
            {
              title: 'Korzyści z warsztatów dla rodziców:',
              lists: [
                {
                  type: 'unordered',
                  items: [
                    'Uczestnictwo w warsztatach pomoże Ci lepiej zrozumieć potrzeby sensoryczne dziecka i dostosować do nich codzienne działania.',
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 104,
          title: 'Cierpliwość i zrozumienie',
          contentArray: [`Terapia integracji sensorycznej to proces, który wymaga czasu. Rodzice często chcą natychmiastowych rezultatów, jednak ważne jest, aby pamiętać, że każde dziecko rozwija się w swoim tempie.`],
          subsections: [
            {
              title: 'Jak być wsparciem?',
              lists: [
                {
                  type: 'unordered',
                  items: [
                    '<strong>Bądź cierpliwy:</strong> Dziecko może początkowo opierać się terapii, ale regularność i Twoje wsparcie przyniosą efekty.',
                    '<strong>Doceniaj postępy:</strong> Nawet najmniejsze osiągnięcia są krokiem naprzód. Chwal dziecko za wysiłek i starania.',
                    '<strong>Unikaj presji:</strong> Pozwól dziecku uczyć się w naturalnym tempie. Nadmierne wymagania mogą zniechęcić do terapii.',
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 5,
          title: 'Podsumowanie',
          contentArray: [`Rola rodziców w terapii integracji sensorycznej jest niezastąpiona. To rodzice tworzą codzienne środowisko, które wspiera dziecko w radzeniu sobie z wyzwaniami sensorycznymi. Kluczem jest zrozumienie potrzeb dziecka, regularna współpraca z terapeutą i cierpliwość. Dzięki temu terapia będzie nie tylko skuteczna, ale także okaże się wspaniałą zabawą.`,
            'Jeśli chcesz dowiedzieć się więcej o tym, jak wspierać swoje dziecko, zapraszamy do <strong>Centrum Terapii i Wsparcia Rozwoju "Równowaga"</strong>. Nasz zespół pomoże Ci i Twojemu dziecku osiągnąć harmonię i równowagę w codziennym życiu.'],
        },
      ],
    },
  ];

  private pageSize = 5;        // Rozmiar strony
  private currentPage = 0;     // Bieżąca strona
  constructor(private readonly router: Router) {
  }

  getCards() {
    return this.cards;
  }

  getCard(id: number): blogCard | undefined {
    return this.cards.find(card => card.id === id);
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

}
