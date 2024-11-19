import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, map, Observable, Subscription} from 'rxjs';
import {Therapist} from "../interfaces/therpaists";
import {Router} from "@angular/router";
import {AppPaths} from "../app-paths";

@Injectable({
  providedIn: 'root'
})
export class TherapistService implements OnDestroy {
  public appPaths = AppPaths;
  private activeTherapistIndex: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private readonly activeTherapistSubscription: Subscription;

  private readonly therapists: Therapist[] = [{
    id: 0,
    seoData: {
      title: 'Paulina Okrasa-Burczyk - Terapeuta integracji seonsorycznej',
      metaDescription: 'Paulina Okrasa-Burczyk - założycielka Centrum Równowaga w Kaliszu, psycholog, pedagog, terapeutka SI i INPP, specjalistka w pracy z dziećmi w spektrum autyzmu.'
    },
    name: 'Paulina Okrasa-Burczyk',
    role: 'Założycielka Centrum Równowaga, pedagożka, terapeutka integracji&nbsp;sensorycznej, terapeutka neurorozwojowa metody&nbsp;INPP i&nbsp;przetwarzania słuchowego, socjoterapeutka, terapeutka dzieci w&nbsp;spektrum autyzmu i&nbsp;z&nbsp;niepełnosprawnością intelektualną, logopedka',
    webpImg: 'assets/img/Paulina-Okrasa-Burczyk.webp',
    alterImg: 'assets/img/Paulina-Okrasa-Burczyk.jpg',
    assistance: [
      'Diagnoza i&nbsp;terapia integracji sensorycznej',
      'Diagnoza i&nbsp;terapia neurorozwojowa odruchów&nbsp;INPP',
      'Diagnoza i&nbsp;terapia ręki',
      'Diagnoza i&nbsp;terapia przetwarzania słuchowego Johansena',
      'Terapia NeuroTaktylna&nbsp;MNRI®',
      'Konsultacje sensomotoryczne i&nbsp;neurorozwojowe dla&nbsp;rodziców',
    ],

    aboutMe: `
    Na&nbsp;co&nbsp;dzień wspieram dzieci w&nbsp;prawidłowym rozwoju sensomotorycznym i&nbsp;neuropsychologicznym. Podczas
    przeprowadzania diagnoz i&nbsp;terapii staram się patrzeć na&nbsp;dziecko i&nbsp;jego najbliższe otoczenie w&nbsp;holistyczny
    i&nbsp;całościowy sposób, co&nbsp;umożliwia mi&nbsp;wybór najlepszych form i&nbsp;metod wsparcia dla&nbsp;konkretnych trudności i&nbsp;wyzwań,
    z&nbsp;którymi zmagają się dzieci i&nbsp;ich rodzice.
    `,
    sections: [
      {
        title: 'Holistyczne podejście do&nbsp;terapii',
        content: `Moje podejście obejmuje całościowe spojrzenie na&nbsp;dziecko i&nbsp;jego otoczenie. W&nbsp;razie potrzeby kieruję dzieci na&nbsp;pogłębioną diagnostykę z&nbsp;zakresu neurologopedii, fizjoterapii, osteopatii, konsultacji psychologicznych, psychoterapii czy&nbsp;psychodietetyki.`,
      },
      {
        title: 'Relacja z&nbsp;dzieckiem – klucz do&nbsp;sukcesu',
        content: `Najważniejszym elementem terapii jest dla&nbsp;mnie nawiązanie relacji z&nbsp;dzieckiem, aby&nbsp;czuło się komfortowo i&nbsp;bezpiecznie. Tylko w&nbsp;taki sposób terapia może przynosić oczekiwane efekty.`,
      },
      {
        title: 'Nieustanny rozwój zawodowy',
        content: `Cenię rozwój i&nbsp;stale podnoszę swoje kwalifikacje, aby&nbsp;móc jak&nbsp;najskuteczniej pomagać naszym małym klientom. Pracuję także z&nbsp;dziećmi z&nbsp;r&oacute;żnego rodzaju niepełnosprawnościami oraz&nbsp;w&nbsp;spektrum autyzmu.`,
      },
      {
        title: 'Doświadczenie zawodowe',
        content: `Doświadczenie w&nbsp;pracy z&nbsp;dziećmi zdobywałam pracując kilka lat w&nbsp;specjalnym ośrodku wychowawczym dla&nbsp;chłopców z&nbsp;niepełnosprawnością intelektualną oraz&nbsp;w&nbsp;szkole ogólnodostępnej jako nauczyciel wspomagający dzieci w&nbsp;spektrum autyzmu oraz&nbsp;jako polonistka. Obecnie poza&nbsp;działalnością w&nbsp;Centrum Równowaga jestem także nauczycielem w&nbsp;szkole specjalnej, gdzie&nbsp;pracuję z&nbsp;dziećmi z&nbsp;wszelkiego rodzaju niepełnosprawnościami. Prowadzę także terapię w&nbsp;zakresie Wczesnego Wspomagania Dziecka.`,
      },
      {
        title: 'Zainteresowania naukowe',
        content: `Interesuję się psychologią, szczególnie w&nbsp;kontekście traumy rozwojowej, neuropsychologii, psychoterapii sensomotorycznej oraz&nbsp;Teorii poliwagalnej Stephena Porgesa. Uważam, że&nbsp;umysł i&nbsp;ciało to&nbsp;jedność, którą należy traktować z&nbsp;pełnym zrozumieniem i&nbsp;nigdy nie&nbsp;zapominać, że&nbsp;cały czas na&nbsp;siebie wzajemnie oddziałują.`,
      },
      {
        title: 'Prywatnie',
        content: `W&nbsp;życiu prywatnym jestem właścicielką trzech kundelków – adopciaków, które&nbsp;każdego dnia dostarczają mi&nbsp;wsparcia w&nbsp;postaci dogoterapii. Gorąco polecam adopcję – Nie&nbsp;kupuj, adoptuj! :)`,
      },
    ],
    qualifications: {
      education: [
        'Filologia polska z&nbsp;pedagogiką – studia magisterskie, Uniwersytet Wrocławski',
        'Logopedia ogólna – studia podyplomowe, Uniwersytet Wrocławski',
        'Oligofrenopedagogika – studia podyplomowe',
        'Resocjalizacja i&nbsp;socjoterapia – studia podyplomowe',
        'Wspieranie rozwoju i&nbsp;edukacja osób ze&nbsp;spektrum autyzmu – studia podyplomowe',
        'Integracja sensoryczna – studia podyplomowe, Wyższa Szkoła Edukacja w&nbsp;Sporcie, Instytut Sportu i&nbsp;Rekreacji w&nbsp;Warszawie',
        'Psychologia – studia magisterskie (w&nbsp;trakcie), Akademia Ekonomiczno-Humanistyczna w&nbsp;Warszawie',
      ],
      certificates: [
        'Klinika Integracji Sensorycznej – certyfikat terapeuty i&nbsp;diagnosty integracji sensorycznej, Centrum Integracji Sensorycznej w&nbsp;Warszawie',
        'Johansen Indywidualna Stymulacja Słuchu – indywidualny program treningu słuchowego, certyfikacja jako Provider JIAS, K.&nbsp;Rychetsky, R.&nbsp;Borowiecka, Wrocław',
      ],
      specialistTrainings: [
        'Terapia ręki i&nbsp;zaburzeń motoryki małej I&nbsp;i&nbsp;II&nbsp;stopnia, diagnoza – terapia – masaż, Ośrodek ProCentrum, Wrocław',
        'Apteczka Pierwszej Pomocy Emocjonalnej – kurs w&nbsp;zakresie psychologii pozytywnej, ODN w&nbsp;Kaliszu',
        'Trening Umiejętności Społecznych TUS, terapia grupowa dzieci ze&nbsp;spektrum autyzmu, Fundacja Pomoc Autyzm, Warszawa',
        'Integracja NeuroTaktylna MNRI® – Svetlana Masgutowa Educational Institute, szkolenie w&nbsp;Ośrodku ASTO, Wrocław',
        'Szkolenie Bazowe Pozytywnej Dyscypliny dla&nbsp;Edukacji, ODN Kalisz',
        'Diagnoza i&nbsp;terapia opóźnienia neurorozwojowego – roczne szkolenie programu indywidualnego The Institute for Neuro-Psychological Psychology, Chester (filia: INPP Polska, Warszawa)',
      ],
      sensoryIntegrationTrainings: [
        'Wspomaganie rozwoju dzieci ze&nbsp;specyficznymi trudnościami w&nbsp;nauce – Szkolny Program Interwencyjny Sally Goddard Blythe, Instytut Psychologii Neurofizjologicznej INPP Polska, Maria Matuszkiewicz',
        'Nadreaktywność i&nbsp;Podreaktywność sensoryczna w&nbsp;terapii SI, szkolenie Małgorzata Karga',
        'Integracja Sensoryczna a&nbsp;ADHD, szkolenie Z.&nbsp;Przyrowski',
        'Chodzenie na&nbsp;palcach u&nbsp;dzieci: kiedy norma a&nbsp;kiedy zaburzenie, szkolenie W.&nbsp;Kozłowski, B.&nbsp;Witkowska',
        'Sensoplastyka, szkolenie Inkubator Inspiracji',
        'Diagnoza Procesów Integracji Sensorycznej, Fundacja na&nbsp;Rzecz Rodzin Dzieci z&nbsp;Autyzmem i&nbsp;Innymi Dysfunkcjami Okno',
        'Diagnoza i&nbsp;terapia SI małego dziecka, Fundacja na&nbsp;Rzecz Rodzin Dzieci z&nbsp;Autyzmem i&nbsp;Innymi Dysfunkcjami Okno',
        'Plany terapii w&nbsp;SI, Fundacja na&nbsp;Rzecz Rodzin Dzieci z&nbsp;Autyzmem i&nbsp;Innymi Dysfunkcjami Okno',
        'Obserwacja Kliniczna SI w&nbsp;aspekcie fizjoterapeutycznym, Fundacja na&nbsp;Rzecz Rodzin Dzieci z&nbsp;Autyzmem i&nbsp;Innymi Dysfunkcjami Okno',
        'Ocena napięcia mięśniowego i&nbsp;postawy dziecka w&nbsp;korelacji z&nbsp;zaburzeniami sensorycznymi, szkolenie Fundacja Promyk Słońca, prowadzący W.&nbsp;Kozłowski',
        'Teoria poliwagalna i&nbsp;integracja sensoryczna w&nbsp;praktyce, badanie zależności w&nbsp;teorii i&nbsp;wskazania do&nbsp;terapii, szkolenie Fundacja Promyk Słońca, prowadząca Tracy Murnan Stackhouse',
      ],
    },
    znanyLekarz: 'https://www.znanylekarz.pl/paulina-okrasa/logopeda/kalisz#profile-reviews',
  },
    {
    id: 1,
      seoData: {
        title: 'Sylwia Szumska - Terapeuta Równowaga',
        metaDescription: 'Sylwia Szumska - pedagog, terapeutka SI i specjalistka terapii pedagogicznej w Centrum Równowaga w Kaliszu. Pomaga dzieciom z trudnościami w nauce i rozwoju.'
      },
    name: 'Sylwia Szumska',
    role: 'Pedagożka, terapeutka pedagogiczna, oligofrenopedagog, terapeutka dzieci z&nbsp;zaburzeniami ze&nbsp;spektrum autyzmu, terapeutka integracji&nbsp;sensorycznejcji, terapeutka ręki I&nbsp;i&nbsp;II stopnia',
    webpImg: 'assets/img/awatar-damski.webp',
    alterImg: 'assets/img/awatar-damski.png',
    assistance: [
      'Terapia integracji sensorycznej (SI)',
      'Terapia pedagogiczna dla dzieci z&nbsp;trudnościami w&nbsp;nauce',
      'Wsparcie dzieci z&nbsp;zaburzeniami ze&nbsp;spektrum autyzmu',
      'Terapia ręki I&nbsp;i&nbsp;II stopnia',
      'Terapia dzieci z&nbsp;niepełnosprawnością intelektualną',
      'Socjoterapia – wsparcie w&nbsp;rozwijaniu umiejętności społecznych i&nbsp;emocjonalnych',
      'Zajęcia sensomotoryczne wspomagające koordynację ruchową i&nbsp;motorykę',
      'Wspomaganie rozwoju dzieci z&nbsp;trudnościami szkolnymi (dysleksja, dysgrafia, dyskalkulia)',
      'Konsultacje dla rodziców dotyczące rozwoju dziecka i&nbsp;metod wsparcia',
      'Terapia zaburzeń emocjonalnych i&nbsp;społecznych u&nbsp;dzieci',
    ],
    aboutMe: `
      Praca z&nbsp;dziećmi jest moim powołaniem i&nbsp;świadomym wyborem. Jestem pasjonatką pracy z&nbsp;dziećmi, która
      daje mi&nbsp;wiele radości, bo&nbsp;mogę dzielić się wszystkim, co&nbsp;pomaga w&nbsp;ich funkcjonowaniu i&nbsp;co&nbsp;najważniejsze,
      przynosi uśmiech. Uśmiechnięte dziecko, uśmiechnięty terapeuta to&nbsp;uśmiechnięty i&nbsp;lepszy świat. W&nbsp;swoich
      działaniach kieruję się mottem zaczerpniętym od&nbsp;B.Cage, że „Nauczyciel widzi więcej niż tylko twarze dzieci – stara się zobaczyć ich dusze”.
    `,
    sections: [
      {
        title: 'Nieustanny rozwój zawodowy – zdobywanie nowych doświadczeń',
        content: `
          Pracując z&nbsp;dziećmi z&nbsp;zaburzeniami ze&nbsp;spektrum autyzmu, nieustannie dbam o&nbsp;swój rozwój,
          uczestnicząc w&nbsp;r&oacute;żnego rodzaju szkoleniach, seminariach, kursach, webinariach, projektach i&nbsp;wolontariatach.
          <br><br>
          Dodatkowo, wykorzystując swoją pasję do&nbsp;pracy z&nbsp;dziećmi, pracowałam jako:
          <ul>
            <li>Wolontariusz w&nbsp;ramach projektu hipoterapii „Ćwicz dla&nbsp;siebie. Nie&nbsp;przestawaj. Trenuj” realizowanego przez
            Pleszewskie Stowarzyszenie na&nbsp;Rzecz Os&oacute;b Niepełnosprawnych „Razem w&nbsp;Przyszłość”</li>
            <li>Opiekun zajęć organizowanych przez Miasto Kalisz w&nbsp;ramach „Ferii Zimowych w&nbsp;Mieście dla&nbsp;dzieci kl. I-IV” w&nbsp;Szkole Podstawowej nr&nbsp;1</li>
            <li>Instruktor p&oacute;łkolonii letnich w&nbsp;Klubie Osiedlowym „Blaszak” Kaliskiej Sp&oacute;łdzielni Mieszkaniowej w&nbsp;Kaliszu</li>
            <li>Instruktor p&oacute;łkolonii letnich w&nbsp;Klubie Osiedlowym XXV-lecia Kaliskiej Sp&oacute;łdzielni Mieszkaniowej w&nbsp;Kaliszu</li>
          </ul>
        `,
      },
      {
        title: 'Doświadczenie&nbsp;zawodowe',
        content: `
          Doświadczenie w&nbsp;pracy z&nbsp;dziećmi z&nbsp;niepełnosprawnością intelektualną zdobyłam, praktykując w&nbsp;Zespole
          Placówek Specjalnych w&nbsp;Pleszewie, a&nbsp;następnie rozpoczęłam pracę zawodową i&nbsp;terapeutyczną w&nbsp;szkołach
          ogólnodostępnych jako nauczyciel wsp&oacute;łorganizujący kształcenie dzieci ze&nbsp;spektrum autyzmu, terapię
          pedagogiczną oraz&nbsp;zajęcia integracji sensorycznej. Obecnie, poza&nbsp;pracą terapeuty integracji sensorycznej
          w&nbsp;Centrum R&oacute;wnowaga, pracuję w&nbsp;Szkole Podstawowej nr&nbsp;18 z&nbsp;oddziałami dla&nbsp;Dzieci z&nbsp;Autyzmem,
          gdzie&nbsp;pracuję jako nauczyciel wychowawca klasy 3 dzieci z&nbsp;zaburzeniami ze&nbsp;spektrum autyzmu.
        `,
      },
      {
        title: 'Prywatnie',
        content: `
          W&nbsp;życiu prywatnym czas wolny spędzam z&nbsp;rodziną, naszym domowym pupilem kr&oacute;likiem Hepikiem, przyjaciółmi
          i&nbsp;muzyką. Kocham taniec – tańczę bachatę i&nbsp;salsę. Bardzo lubię prace handmade, dekorację wnętrz,
          podr&oacute;że, długie spacery, prace w&nbsp;ogrodzie wśr&oacute;d kwiat&oacute;w oraz&nbsp;sport, jak&nbsp;wycieczki rowerowe i&nbsp;narty
          bieg&oacute;wki.
        `,
      },
    ],
    qualifications: {
      education: [
        'Niepubliczny Ośrodek Doskonalenia Nauczycieli COGNITUS.PL – Terapia ręki i&nbsp;stopy I oraz&nbsp;II stopnia',
        'Uczelnia Nauk Społecznych w&nbsp;Łodzi – Studia Podyplomowe, Integracja Sensoryczna - diagnoza i&nbsp;terapia',
        'Wyższa Szkoła Bankowa w&nbsp;Poznaniu – Studia Podyplomowe, Edukacja i&nbsp;terapia os&oacute;b z&nbsp;zaburzeniami ze&nbsp;spektrum autyzmu',
        'Collegium Da Vinci Poznań – Studia Podyplomowe, Oligofrenopedagogika z&nbsp;elementami integracji sensorycznej',
        'Gnieźnieńska Wyższa Szkoła Humanistyczno-Menedżerska „MILENIUM” – Studia Podyplomowe, Wychowanie wczesnoszkolne i&nbsp;przedszkolne',
        'Politechnika Poznańska – Studia Uzupełniające Magisterskie, Inżynieria Komunikacji Interpersonalnej i&nbsp;Public Relations',
      ],
      specialistTrainings: [
        'Webinar „Jak polepszyć sen u&nbsp;os&oacute;b ze&nbsp;spektrum autyzmu”, Terapia Zajęciowa Profesjonalnie',
        'Webinar „Sprawozdanie pedagoga specjalnego”, Specjalni.pl Niepubliczny Ośrodek Doskonalenia Nauczycieli',
        'Szkolenie PBP Książnica Pedagogiczna w&nbsp;Kaliszu „TIK-owy nauczyciel – Genial.ly - część II”',
        'Seminarium ODN Kalisz: „Pomoc psychologiczno-pedagogiczna udzielana uczniom przez specjalist&oacute;w szkolnych”',
        'Szkolenie „ABC pracy nauczyciela wsp&oacute;łorganizującego proces kształcenia uczni&oacute;w ze&nbsp;specjalnymi potrzebami edukacyjnymi”',
      ],
      certificates: [
        'Integracja Sensoryczna – diagnoza i&nbsp;terapia, Uczelnia Nauk Społecznych w&nbsp;Łodzi',
        'Terapia ręki i&nbsp;stopy I oraz&nbsp;II stopnia, Cognitus Niepubliczny Ośrodek Doskonalenia Nauczycieli',
        'Certyfikat OSEhero, Og&oacute;lnopolski Projekt Edukacyjny OSEhero w&nbsp;roku szkolnym 2023/2024',
      ],
    },
  },
    {
      id: 2,
      seoData: {
        title: 'Karolina Okrasa-Staszak - Psycholog Centrum Równowaga',
        metaDescription: 'Karolina Okrasa-Staszak - psycholog w Centrum Równowaga w Kaliszu. Specjalizuje się w wsparciu emocjonalnym i terapeutycznym dzieci i młodzieży.'
      },
      name: 'Karolina Okrasa-Staszak',
      role: 'Psycholog',
      webpImg: 'assets/img/awatar-damski.webp',
      alterImg: 'assets/img/awatar-damski.png',
      assistance: [
        'Problemy z regulacją emocji (np. lęk, złość, smutek)',
        'Stres i napięcie związane z codziennym funkcjonowaniem jak i trudnymi zdarzeniami',
        'Obniżona samoocena',
        'Psychosomatyczne dolegliwości (np. bóle brzucha bez przyczyn medycznych)',
        'Trudności w nawiązywaniu i utrzymywaniu relacji rówieśniczych',
        'Lepsze zrozumienie dziecka oraz jego potrzeb',
        'Pomoc w przyjrzeniu się relacji z dzieckiem',
        'Wsparcie w trudnościach rodzicielskich',
        'Dobór odpowiedniej metody pomocy, z możliwością skierowania do innych specjalistów',
      ],
      aboutMe: `
    Każdy etap życia, począwszy od narodzin, wiąże się z różnorodnymi wyzwaniami, które są kluczowe dla dalszego rozwoju.
    Te wyzwania pomagają w zdobywaniu nowych umiejętności, w tym w obszarze zdrowia psychicznego. Każde dziecko ma swoje
    unikalne predyspozycje, wynikające zarówno z jego indywidualnych cech, jak i z wpływu otoczenia. Wspieram dzieci i
    młodzież w radzeniu sobie z tymi wyzwaniami, rozumiejąc, że każdy przypadek jest wyjątkowy.<br><br>

    W dzisiejszym, szybko zmieniającym się świecie, dzieci i młodzież mierzą się nie tylko z naturalnymi trudnościami
    rozwojowymi, ale także z wyzwaniami, które mogą wpływać na ich zdrowie psychiczne. Jeśli dostrzegasz niepokojące
    objawy w funkcjonowaniu psychicznym swojego dziecka lub nastolatka, serdecznie zapraszam na konsultację w naszym
    centrum.
  `,
      sections: [
        {
          title: 'Zakres pracy',
          content: `
        Moja praca obejmuje poradnictwo psychologiczne oraz wsparcie psychologiczne w formie spotkań terapeutycznych z
        dziećmi i nastolatkami. Pracuję z dziećmi w wieku przedszkolnym i szkolnym. Ważnym elementem mojej pracy są
        również spotkania z rodzicami, którzy odgrywają kluczową rolę w prawidłowym rozwoju i wsparciu swoich dzieci. W
        przypadku młodszych dzieci moja praca koncentruje się głównie na współpracy z rodzicami/opiekunami.
      `,
        },
        {
          title: 'Doświadczenie zawodowe',
          content: `
          Doświadczenie zawodowe zdobywałam, pracując na oddziałach szpitalnych, gdzie zajmowałam się diagnozą funkcji poznawczych oraz wsparciem pacjentów, zwracając szczególną uwagę na relacje między ciałem a psychiką. Pracowałam również w instytucjach państwowych, gdzie pomagałam pacjentom w różnego rodzaju kryzysach psychologicznych.
          <br><br>
          Obecnie pracuję w szkole podstawowej, gdzie prowadzę zajęcia indywidualne wspierające rozwój emocjonalny i społeczny dzieci oraz organizuję warsztaty dla klas z zakresu profilaktyki zdrowia psychicznego.
      `,
        },
      ],
      qualifications: {
        education: [
          'Psychologia (specjalność psychologia kliniczna i seksuologia) 5-letnie studia magisterskie na Uniwersytecie im. Adama Mickiewicza w Poznaniu',
          'Przygotowanie pedagogiczne - studia podyplomowe w Wyższej Szkole Kształcenia Zawodowego we Wrocławiu',
          'Studium Psychoterapii Dzieci i Młodzieży - dwuletnie szkolenie w Instytucie Edukacji i Terapii w Poznaniu',
        ],

      },
    },
    {
      id: 3,
      seoData: {
        title: 'Magdalena Mokrzycka - Specjalista Równowaga',
        metaDescription: 'Magdalena Mokrzycka - terapeutka SI w Centrum Równowaga. Specjalizuje się w integracji sensorycznej i wsparciu rozwoju dzieci w Kaliszu.'
      },
      name: 'Magdalena Mokrzycka',
      role: 'Pedagożka, terapeutka integracji&nbsp;sensorycznej',
      webpImg: 'assets/img/awatar-damski.webp',
      alterImg: 'assets/img/awatar-damski.png',
      assistance: [
        'Wsparcie w&nbsp;rozwijaniu umiejętności motorycznych i&nbsp;koordynacji ruchowej',
        'Praca nad regulacją reakcji sensorycznych (nadwrażliwość, podwrażliwość)',
        'Wsparcie w&nbsp;poprawie koncentracji i&nbsp;uwagi',
        'Praca nad rozwijaniem umiejętności adaptacyjnych i&nbsp;samoregulacji',
        'Pomoc w&nbsp;kształtowaniu prawidłowych odruchów i&nbsp;wzorców ruchowych',
        'Konsultacje i&nbsp;instruktaż dla rodziców w&nbsp;zakresie wspierania dziecka w&nbsp;domu',
        'Wsparcie w&nbsp;integracji zmysłów i&nbsp;poprawie codziennego funkcjonowania dziecka'
      ],
      aboutMe: `
    Od&nbsp;zawsze chciałam pracować z&nbsp;dziećmi. Już w&nbsp;dzieciństwie moją ulubioną zabawą była właśnie
    zabawa w&nbsp;szkołę. Lata nauki, studiów i&nbsp;praktyki potwierdziły moje dziecinne marzenia, a&nbsp;rok 2024
    okazał się dla mnie przełomowy, ponieważ ukończyłam studia magisterskie z&nbsp;pedagogiki
    opiekuńczo-wychowawczej oraz studia podyplomowe z&nbsp;terapii integracji sensorycznej.
    Czuję się w&nbsp;pełni wykwalifikowaną osobą, aby pracować z&nbsp;dziećmi i&nbsp;zawsze dążyć do&nbsp;nich z&nbsp;pomocą, jeśli jej
    wymagają.
  `,
      sections: [
        {
          title: 'Indywidualne podejście do&nbsp;każdego dziecka',
          content: `
        Każde dziecko jest inne. Każde ma swoje problemy i&nbsp;obawy. Dla&nbsp;nas pedagogów ważne jest to, aby dotrzeć
        do&nbsp;każdego z&nbsp;nich i&nbsp;pomóc w&nbsp;jak najlepszy sposób. Ważne jest, aby ciągle budować w&nbsp;dziecku
        poczucie własnej wartości. Kluczem do&nbsp;sukcesu jest wypracowanie z&nbsp;dzieckiem indywidualnego sposobu
        pracy, który pozwoli czerpać dziecku radość z&nbsp;pracy z&nbsp;pedagogiem.<br><br>

        Każde dziecko jest inne!<br>
        Każde dziecko jest wyjątkowe!<br>
        Każde dziecko jest piękne!
      `
        },
        {
          title: 'Stałe doskonalenie umiejętności',
          content: `
        W&nbsp;pedagogice nigdy nie&nbsp;można spocząć na&nbsp;laurach. W&nbsp;pracy z&nbsp;dziećmi ważny jest ciągły
        rozwój – nie&nbsp;dla siebie, ale przede wszystkim dla&nbsp;nich, dla&nbsp;dzieci, z&nbsp;którymi
        pracujemy. Wszystko to, co robimy dla&nbsp;nich, wraca do&nbsp;nas często z&nbsp;podwójną energią, dając nam
        „kopa” na&nbsp;poszerzanie swoich kwalifikacji i&nbsp;ciągłe zdobywanie nowych doświadczeń.
      `
        },
        {
          title: 'Prywatnie',
          content: `W&nbsp;życiu prywatnym czas wolny spędzam z&nbsp;dobrą książką i&nbsp;herbatą.',
           'Bardzo lubię gotować i&nbsp;zaskakiwać nowymi przepisami mojego męża oraz&nbsp;bliskich.',
          'Wraz z&nbsp;mężem lubimy wspólnie spędzać czas na&nbsp;wyjazdach i&nbsp;podróżach po&nbsp;pięknej i&nbsp;malowniczej Polsce.',
           'Oboje kochamy zwierzęta! Od&nbsp;ponad półtora roku w&nbsp;naszym życiu pojawił się kocurek rasy Ragdoll.`,
        },
        {
          title: 'Doświadczenie zawodowe',
          content: `
        Od&nbsp;ponad dwóch lat pracuję na&nbsp;cały etat w&nbsp;kaliskiem Domu Dziecka. Praca ta&nbsp;utwierdziła mnie w&nbsp;przekonaniu,
        że&nbsp;pomoc dzieciom to właśnie to, co chcę w&nbsp;życiu robić. Pomimo młodego wieku wciąż dążę do&nbsp;poszerzania
        swojego dorobku zawodowego oraz edukacyjnego, aby w&nbsp;jeszcze bardziej wykwalifikowany sposób służyć
        dzieciom radą i&nbsp;wsparciem. Przez ostatni rok prowadziłam również zajęcia z&nbsp;jogi dla&nbsp;najmłodszych.
      `
        }
      ],
      qualifications: {
        education: [
          'Pedagogika opiekuńczo-wychowawcza z&nbsp;wychowaniem do&nbsp;życia w&nbsp;rodzinie, Uniwersytet Adama Mickiewicza w&nbsp;Poznaniu, Wydział Artystyczno-Pedagogiczny w&nbsp;Kaliszu – studia licencjackie',
          'Pedagogika opiekuńczo-wychowawcza, Uniwersytet Adama Mickiewicza w&nbsp;Poznaniu, Wydział Artystyczno-Pedagogiczny w&nbsp;Kaliszu – studia magisterskie',
          'Integracja sensoryczna – diagnoza i&nbsp;terapia dzieci, Wyższa Szkoła Kształcenia Zawodowego we&nbsp;Wrocławiu – studia podyplomowe',
          'Oligofrenopedagogika z&nbsp;elementami arteterapii, Wyższa Szkoła Kształcenia Zawodowego we&nbsp;Wrocławiu – studia podyplomowe (w&nbsp;trakcie)'
        ]
      }
    },
    {
      id: 4,
      seoData: {
        title: 'Marta Kęsicka - Terapia Gabinet Równowaga',
        metaDescription: 'Marta Kęsicka - pedagog, terapeutka SI w Centrum Równowaga. Specjalizuje się w terapii ruchowej i wsparciu umiejętności społecznych dzieci.'
      },
      name: 'Marta Kęsicka',
      role: 'Pedagożka, terapeutka w&nbsp;zakresie rehabilitacji ruchowej, terapeutka integracji&nbsp;sensorycznej, trenerka umiejętności&nbsp;społecznych, instruktorka pilates, trenerka personalna.',
      webpImg: './assets/img/awatar-damski.webp',
      alterImg: 'assets/img/awatar-damski.png',
      assistance: [
        'Terapia z&nbsp;zakresu stymulacji zmysłów i&nbsp;integracji sensorycznej',
        'Terapia ruchem, kinezyterapia',
        'Korekcja wad postawy',
      ],
      aboutMe: `
      Każdy człowiek to&nbsp;unikalna jednostka posiadająca swój wyjątkowy zespół cech, umiejętności, predyspozycji zarówno psychicznych, jak&nbsp;i&nbsp;fizycznych. Dlatego w&nbsp;swojej pracy z&nbsp;dziećmi i&nbsp;dorosłymi staram się holistycznie patrzeć na&nbsp;drugiego człowieka. Do&nbsp;każdej osoby podchodzę indywidualnie, uwzględniając jej możliwości, potrzeby oraz&nbsp;trudności. W&nbsp;pracy terapeuty łączę elementy terapii SI, rehabilitacji i&nbsp;pilatesu. Ważna jest dla&nbsp;mnie równowaga psychiczna, dlatego stosuję również techniki oddechowe, które pomagają w&nbsp;relaksacji i&nbsp;obniżaniu napięcia. Kierując się filozofią TSR (terapii skoncentrowanej na&nbsp;rozwiązaniach), pracuję na&nbsp;zasobach zarówno psychicznych, jak&nbsp;i&nbsp;fizycznych, co&nbsp;pozytywnie wpływa na&nbsp;funkcjonowanie i&nbsp;rozwój drugiego człowieka.
    `,
      sections: [
        {
          title: 'Relacja z&nbsp;dzieckiem – klucz do&nbsp;sukcesu',
          content: `
          Ważnym aspektem pracy, zwłaszcza z&nbsp;dzieckiem, jest budowanie pozytywnych relacji opartych na&nbsp;życzliwości i&nbsp;empatii. Są&nbsp;one niezbędne, aby&nbsp;dziecko czuło się bezpiecznie i&nbsp;komfortowo, co&nbsp;przekłada się na&nbsp;efektywność terapii oraz&nbsp;chęć współpracy ze&nbsp;strony dzieci.
        `,
        },
        {
          title: 'Nieustanny rozwój zawodowy',
          content: `
          W&nbsp;życiu zawodowym i&nbsp;prywatnym kieruję się zasadą Kaizen: „ulepszania nie&nbsp;ma końca”. Dlatego też rozwój, doskonalenie swoich umiejętności oraz&nbsp;zdobywanie wiedzy są&nbsp;dla&nbsp;mnie niezwykle ważne, aby&nbsp;skutecznie pomagać naszym małym klientom.
        `,
        },
        {
          title: 'Doświadczenie zawodowe',
          content: `
          Obecnie pracuję w&nbsp;szkole podstawowej i&nbsp;ponadpodstawowej jako psycholog, prowadząc konsultacje, trening umiejętności społecznych oraz&nbsp;liczne warsztaty. Organizowałam także gimnastykę korekcyjną i&nbsp;zajęcia ruchowe dla&nbsp;dzieci. Od&nbsp;5 lat prowadzę zajęcia fitness, pilates oraz&nbsp;zdrowy kręgosłup. Mam doświadczenie w&nbsp;pracy z&nbsp;dziećmi, dorosłymi i&nbsp;seniorami, zarówno grupowo, jak&nbsp;i&nbsp;indywidualnie. W&nbsp;swojej pracy łączę aspekty fizyczne i&nbsp;psychiczne, ponieważ wierzę, że&nbsp;obie te&nbsp;sfery się przenikają. Moją ulubioną formą ruchu jest pilates (body&amp;mind). Uwielbiam pracować z&nbsp;dziećmi, gdyż&nbsp;praca ta&nbsp;wymaga dużej uważności, ale&nbsp;przynosi również wiele satysfakcji i&nbsp;radości.
        `,
        },
        {
          title: 'Prywatnie',
          content: `
          W&nbsp;życiu prywatnym jestem mamą – mam córkę i&nbsp;dwóch synów. Około 5 lat temu nasza rodzina powiększyła się o&nbsp;pieska, cudownego kundelka. Lubimy spędzać razem czas, grając w&nbsp;gry planszowe oraz&nbsp;chodząc na&nbsp;spacery. Uwielbiam spacerować po&nbsp;górach i&nbsp;lesie.
        `,
        },
      ],
      qualifications: {
        education: [
          'Pedagogika opiekuńczo-wychowawcza z&nbsp;promocją zdrowia, Wyższa Szkoła Informatyki – licencjat',
          'Pedagogika terapeutyczna z&nbsp;rehabilitacją ruchową, Akademia Humanistyczno-Ekonomiczna w&nbsp;Łodzi – studia magisterskie',
          'Stymulacja zmysłów i&nbsp;integracja sensoryczna, WSB-NLU w&nbsp;Nowym Sączu – studia podyplomowe',
          'Psychologia, WSB-NLU w&nbsp;Nowym Sączu – studia magisterskie (w&nbsp;trakcie)',
          'Psychologia transportu, WSB-NLU w&nbsp;Nowym Sączu – studia podyplomowe (w&nbsp;trakcie)',
        ],
        certificates: [
          'Trener Umiejętności Społecznych i&nbsp;Życiowych – Centrum Szkoleniowo-Terapeutyczne SENS',
          'Pilates instruktor – Polskie Centrum Fitness',
          'Szkoła skoncentrowana na&nbsp;dobrostanie – Edulabor',
          'Pilates Mat 1 – Open Mind Pilates School',
          'Pilates Intermediate – Open Mind Pilates School',
          'Pilates Body Ball – Open Mind Pilates School',
          'Pilates dla&nbsp;Ciężarnych i&nbsp;Osób starszych – Open Mind Pilates School',
          'Zdrowy Kręgosłup Tour – Open Mind Pilates School',
          'Pilates Rollers – Open Mind Pilates School',
          'Metody i&nbsp;Techniki Treningu Online – Online Coaching, Personal Training Academy PTA',
          'Certified Gym Instructor – Personal Training Academy PTA',
          'Certified Personal Trainer – Personal Training Academy PTA',
          'Specjalista masażu klasycznego i&nbsp;odnowy biologicznej',
        ],
        specialistTrainings: [
          'Terapia skoncentrowana na&nbsp;rozwiązaniach – poziom podstawowy, Centrum TSR',
          'Trening zastępowania agresji – Niepubliczny Ośrodek Doskonalenia Nauczycieli Cognitus',
          '„Uczeń z&nbsp;ASD i&nbsp;nadpobudliwością psychoruchową w&nbsp;klasie. Zasady pracy i&nbsp;praktyczne wskazania.” – Promade Sp. z&nbsp;o.o.',
          'Mediacje w&nbsp;szkole jako forma rozwiązywania konfliktów – ODN w&nbsp;Kaliszu',
          '„Rozwijanie kompetencji społecznych uczniów – współczesne wyzwania nauczycieli.” – Promade Sp. z&nbsp;o.o.',
          'Seminarium #Dusza#Ciało – jak&nbsp;dbać o&nbsp;swoje zdrowie psychiczne – Uniwersytet Kaliski',
          '„Są więzy i&nbsp;więzi. O&nbsp;neuronalnych węzłach miłości.” – Fundacja Dbam o&nbsp;mój zasięg',
          'Samoakceptacja jako determinant przyszłych zachowań – Uniwersytet Kaliski',
        ],
      },
    },
  ];

  constructor(private readonly router: Router) {
    this.activeTherapistSubscription = this.activeTherapistIndex.subscribe();
  }

  setActiveTherapistId(id: number): void {
    if (id >= 0 && id < this.therapists.length) {
      this.activeTherapistIndex.next(id);
    } else {
      console.error('Invalid therapist ID:', id);
    }
  }

  getActiveTherapistObservable(): Observable<Therapist> {
    return this.activeTherapistIndex.asObservable().pipe(
      map((index) => this.therapists[index])
    );
  }

  getTherapists(): Therapist[] {
    return this.therapists;
  }

  nextTherapist(): void {
    const currentIndex = this.activeTherapistIndex.getValue();
    const nextIndex = (currentIndex + 1) % this.therapists.length;
    this.activeTherapistIndex.next(nextIndex);
    this.goToActiveTherapist(nextIndex);
  }

  prevTherapist(): void {
    const currentIndex = this.activeTherapistIndex.getValue();
    const prevIndex = (currentIndex - 1 + this.therapists.length) % this.therapists.length;
    this.activeTherapistIndex.next(prevIndex);
    this.goToActiveTherapist(prevIndex);
  }

  goToActiveTherapist(index: number): void {
    const therapist = this.therapists[index];
    this.router.navigate([this.appPaths.THERAPIST_TEMPLATE, therapist.id]);
  }

  ngOnDestroy(): void {
    if (this.activeTherapistSubscription) {
      this.activeTherapistSubscription.unsubscribe();
    }
  }
}
