import { Component } from '@angular/core';
import { AssistanceCard } from '../../../interfaces/assistanceCard';
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
      title: 'Konsultacje psychologicze',
      description: 'terapia poznawczo-behawioralna, terapia schematów, terapia dialektyczno-behawioralna, terapia akceptacji i zaangażowania, mindfulness',
      path: AppRoutes.PSYCHOLOGICAL_CONSULTATIONS
    },
    {
      imgSrc: 'assets/img/huśtawka.png',
      imgAlt: 'ikona huśtawki',
      title: 'Diagnoza i terapia integracji sensorycznej',
      description: 'diagnoza, konsultacje i wsparcie psychologiczne, psychoedukacja, interwencja kryzysowa, pomoc seksuologiczna – edukacja i terapia',
      path: AppRoutes.SENSORY_INTEGRATION_THERAPY
    },
    {
      imgSrc: 'assets/img/mózg.png',
      imgAlt: 'ikona mózgu',
      title: 'Diagnoza i terapia neurorozwojowa odruchów INPP',
      description: 'treningi relaksacji, asertywności oraz mindfulness (uważność) umożliwiają poszerzanie wiedzy, umiejętności oraz rozwój osobisty i zawodowy',
      path: AppRoutes.NEURODEVELOPMENTAL_REFLEX_THERAPY
    },
    {
      imgSrc: 'assets/img/masarz.png',
      imgAlt: 'ikona masarzu',
      title: 'Terapia NeuroTaktylna MNRI',
      description: 'We provide psychological diagnosis, psychoeducation, consultations, diagnosis, counselling and psychotherapy in English also via internet (Skype)',
      path: AppRoutes.NEUROTACTILE_THERAPY
    },
    {
      imgSrc: 'assets/img/ucho.png',
      imgAlt: 'ikona ucha',
      title: 'Diagnoza i terapia przetwarzania słuchowego Johansena',
      description: 'konsultacje psychologiczne, diagnoza, terapia, interwencja kryzysowa, treningi w formie rozmowy wideo przez Skype oraz wsparcie psychologicze przez e-mail',
      path: AppRoutes.AUDITORY_PROCESSING_THERAPY
    },
    {
      imgSrc: 'assets/img/dłoń.png',
      imgAlt: 'ikona ręki',
      title: 'Diagnoza i terapia ręki',
      description: 'konsultacje psychologiczne, diagnoza, terapia, interwencja kryzysowa, treningi w formie rozmowy wideo przez Skype oraz wsparcie psychologicze przez e-mail',
      path: AppRoutes.HAND_THERAPY
    },
    {
      imgSrc: 'assets/img/puzzle.png',
      imgAlt: 'icona puzzli',
      title: 'Terapia pedagogiczna',
      description: 'konsultacje psychologiczne, diagnoza, terapia, interwencja kryzysowa, treningi w formie rozmowy wideo przez Skype oraz wsparcie psychologicze przez e-mail',
      path: AppRoutes.PEDAGOGICAL_THERAPY
    },
    {
      imgSrc: 'assets/img/konsultacje.png',
      imgAlt: 'ikona kobiety za biurkiem',
      title: 'Konsultacje specjalistyczne',
      description: 'konsultacje psychologiczne, diagnoza, terapia, interwencja kryzysowa, treningi w formie rozmowy wideo przez Skype oraz wsparcie psychologicze przez e-mail',
      path: AppRoutes.SPECIALIST_CONSULTATIONS
    }
  ];

}
