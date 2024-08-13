import {Component} from '@angular/core';
import {AssistanceCard} from "../../../interfaces/assistanceCard";

@Component({
  selector: 'app-assistance-scope',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  cards: AssistanceCard[] = [
    {
      imgSrc: 'assets/img/głowa_z_plusem.png',
      imgAlt: 'brain examin with a magnifying glass',
      title: 'Konsultacje psychologicze',
      description: 'terapia poznawczo-behawioralna, terapia schematów, terapia dialektyczno-behawioralna, terapia akceptacji i zaangażowania, mindfulness'
    },
    {
      imgSrc: 'assets/img/huśtawka.png',
      imgAlt: 'head with puzzle pieces inside',
      title: 'Diagnoza i terapia integracji sensorycznej',
      description: 'diagnoza, konsultacje i wsparcie psychologiczne, psychoedukacja, interwencja kryzysowa, pomoc seksuologiczna – edukacja i terapia'
    },
    {
      imgSrc: 'assets/img/mózg.png',
      imgAlt: 'graph and people learning',
      title: 'Diagnoza i terapia neurorozwojowa odruchów INPP',
      description: 'treningi relaksacji, asertywności oraz mindfulness (uważność) umożliwiają poszerzanie wiedzy, umiejętności oraz rozwój osobisty i zawodowy'
    },
    {
      imgSrc: 'assets/img/masarz.png',
      imgAlt: 'great britain flag',
      title: 'Terapia NeuroTaktylna MNRI',
      description: 'We provide psychological diagnosis, psychoeducation, consultations, diagnosis, counselling and psychotherapy in English also via internet (Skype)'
    },
    {
      imgSrc: 'assets/img/ucho.png',
      imgAlt: 'monitor with a character on the screen',
      title: 'Diagnoza i terapia przetwarzania słuchowego Johansena',
      description: 'konsultacje psychologiczne, diagnoza, terapia, interwencja kryzysowa, treningi w formie rozmowy wideo przez Skype oraz wsparcie psychologicze przez e-mail'
    },
    {
      imgSrc: 'assets/img/dłoń.png',
      imgAlt: 'monitor with a character on the screen',
      title: 'Diagnoza i terapia ręki',
      description: 'konsultacje psychologiczne, diagnoza, terapia, interwencja kryzysowa, treningi w formie rozmowy wideo przez Skype oraz wsparcie psychologicze przez e-mail'
    },
    {
      imgSrc: 'assets/img/konsultacje.png',
      imgAlt: 'monitor with a character on the screen',
      title: 'Konsultacje specjalistyczne',
      description: 'konsultacje psychologiczne, diagnoza, terapia, interwencja kryzysowa, treningi w formie rozmowy wideo przez Skype oraz wsparcie psychologicze przez e-mail'
    }
  ];

}
