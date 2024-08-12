import { Component } from '@angular/core';
import {AssistanceCard} from "../../../interfaces/assistanceCard";

@Component({
  selector: 'app-assistance-scope',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  cards: AssistanceCard[] = [
    {
      imgSrc: 'assets/img/repetitive.png',
      imgAlt: 'head with puzzle pieces inside',
      title: 'Integracja sensoryczna',
      description: 'diagnoza, konsultacje i wsparcie psychologiczne, psychoedukacja, interwencja kryzysowa, pomoc seksuologiczna – edukacja i terapia'
    },
    {
      imgSrc: 'assets/img/noise.png',
      imgAlt: 'head with a pill inside',
      title: 'Psycholog',
      description: 'konsultacje, diagnoza psychiatryczna, leczenie lekami, psychoedukacja dla pacjentów i bliskich oraz wizyty kontrolne w przyjaznej i profesjonalnej atmosferze'
    },
    {
      imgSrc: 'assets/img/heart.png',
      imgAlt: 'brain examin with a magnifying glass',
      title: 'Terapia ręki',
      description: 'terapia poznawczo-behawioralna, terapia schematów, terapia dialektyczno-behawioralna, terapia akceptacji i zaangażowania, mindfulness'
    },
    {
      imgSrc: 'assets/img/adhd.png',
      imgAlt: 'graph and people learning',
      title: 'Terapia neurotaktylna',
      description: 'treningi relaksacji, asertywności oraz mindfulness (uważność) umożliwiają poszerzanie wiedzy, umiejętności oraz rozwój osobisty i zawodowy'
    },
    {
      imgSrc: 'assets/img/mind.png',
      imgAlt: 'great britain flag',
      title: 'Terapia, diagnoza odruchów INPP',
      description: 'We provide psychological diagnosis, psychoeducation, consultations, diagnosis, counselling and psychotherapy in English also via internet (Skype)'
    },
    {
      imgSrc: 'assets/img/painted.png',
      imgAlt: 'monitor with a character on the screen',
      title: 'Terapia słuchowa',
      description: 'konsultacje psychologiczne, diagnoza, terapia, interwencja kryzysowa, treningi w formie rozmowy wideo przez Skype oraz wsparcie psychologicze przez e-mail'
    },
    {
      imgSrc: 'assets/img/painted.png',
      imgAlt: 'monitor with a character on the screen',
      title: 'Konsultacje specjalistyczne',
      description: 'konsultacje psychologiczne, diagnoza, terapia, interwencja kryzysowa, treningi w formie rozmowy wideo przez Skype oraz wsparcie psychologicze przez e-mail'
    }
  ];

}
