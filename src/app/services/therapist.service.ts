import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Therapist } from "../interfaces/therpaists";
import { AppRoutes } from "../app-routing.module";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TherapistService {

  private activeTherapistIndex: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private router: Router) {}

  private therapists: Therapist[] = [
    {
      id: 0,
      name: 'Paulina Okrasa-Burczyk',
      role: 'Założycielka Centrum Równowaga, pedagożka, terapeutka SI, terapeutka neurorozwojowa metody INPP i&nbsp;przetwarzania słuchowego, socjoterapeutka, terapeutka dzieci w&nbsp;spektrum autyzmu i&nbsp;z&nbsp;niepełnosprawnością intelektualną, logopedka',
      image: 'assets/img/Paulina-Okrasa-Burczyk.jpg',
      path: `${AppRoutes.PAULINA_OKRASA_BURCZYK}`
    },
    {
      id: 1,
      name: 'Karolina Okrasa-Staszak',
      role: 'Psycholog',
      image: 'assets/img/awatar_damski.png',
      path: `${AppRoutes.KAROLINA_OKRASA_STASZAK}`
    },
    {
      id: 2,
      name: 'Sylwia Szumska',
      role: 'Pedagożka, terapeutka SI, terapeutka pedagogiczna',
      image: 'assets/img/awatar_damski.png',
      path: `${AppRoutes.SYLWIA_SZUMSKA}`
    },
    {
      id: 3,
      name: 'Magdalena Mokrzycka',
      role: 'Terapeutka SI',
      image: 'assets/img/awatar_damski.png',
      path: `${AppRoutes.MAGDALENA_MOKRZYCKA}`
    },
    {
      id: 4,
      name: 'Agata Magdzicka-Banach',
      role: 'Pedagożka, terapeutka dzieci z&nbsp;niepełnosprawnością intelektualną oraz&nbsp;zaburzeniami ze&nbsp;spektrum autyzmu, tyflopedagożka, surdopedagożka, terapeutka metody EEG Biofeedback',
      image: 'assets/img/awatar_damski.png',
      path: `${AppRoutes.AGATA_MAGDZICKA_BANACH}`
    }
  ];

  getActiveTherapist(): Therapist {
    return this.therapists[this.activeTherapistIndex.getValue()];
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
    this.router.navigate([therapist.path]);
  }

}
