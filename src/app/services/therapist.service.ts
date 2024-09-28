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
      role: 'Założycielka centrum Równowaga, psycholog, terapeuta SI, logopegda',
      image: 'assets/img/Paulina.jpg',
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
      role: 'Terapeutka SI',
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
      role: 'Pedagog, terapeuta dzieci z niepełnosprawnością intelektualną oraz zaburzeniami ze spektrum autyzmu, tyflopedagog, surdopedagog, oligofrenopedagog, terapeuta EEG Biofeedback',
      image: 'assets/img/awatar_damski.png',
      path: `${AppRoutes.AGATA_MAGDZICKA_BANACH}`
    }
  ];

  getActiveTherapist(): Therapist {
    return this.therapists[this.activeTherapistIndex.getValue()];
  }

  getTherapistById(id: number): Therapist | null {
    return this.therapists.find(therapist => therapist.id === id) || null;
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
