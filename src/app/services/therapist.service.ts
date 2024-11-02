import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Therapist} from "../interfaces/therpaists";
import {Router} from "@angular/router";
import {AppPaths} from "../app-paths";

@Injectable({
  providedIn: 'root'
})
export class TherapistService {

  private activeTherapistIndex: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private router: Router) {
  }

  private therapists: Therapist[] = [
    {
      id: 0,
      name: 'Paulina Okrasa-Burczyk',
      role: 'Założycielka Centrum Równowaga, pedagożka, terapeutka SI, terapeutka neurorozwojowa metody INPP i&nbsp;przetwarzania słuchowego, socjoterapeutka, terapeutka dzieci w&nbsp;spektrum autyzmu i&nbsp;z&nbsp;niepełnosprawnością intelektualną, logopedka',
      webpImg: 'assets/img/Paulina-Okrasa-Burczyk.webp',
      alterImg: 'assets/img/Paulina-Okrasa-Burczyk.jpg',
      path: `${AppPaths.PAULINA_OKRASA_BURCZYK}`
    },
    {
      id: 1,
      name: 'Karolina Okrasa-Staszak',
      role: 'Psycholog',
      webpImg: 'assets/img/awatar-damski.webp',
      alterImg: 'assets/img/awatar-damski.png',
      path: `${AppPaths.KAROLINA_OKRASA_STASZAK}`
    },
    {
      id: 2,
      name: 'Sylwia Szumska',
      role: 'Pedagożka, terapeutka SI, terapeutka pedagogiczna',
      webpImg: 'assets/img/awatar-damski.webp',
      alterImg: 'assets/img/awatar-damski.png',
      path: `${AppPaths.SYLWIA_SZUMSKA}`
    },
    {
      id: 3,
      name: 'Magdalena Mokrzycka',
      role: 'Terapeutka SI',
      webpImg: 'assets/img/awatar-damski.webp',
      alterImg: 'assets/img/awatar-damski.png',
      path: `${AppPaths.MAGDALENA_MOKRZYCKA}`
    },
    {
      id: 4,
      name: 'Agata Magdzicka-Banach',
      role: 'Pedagożka, terapeutka dzieci z&nbsp;niepełnosprawnością intelektualną oraz&nbsp;zaburzeniami ze&nbsp;spektrum autyzmu, tyflopedagożka, surdopedagożka, terapeutka metody EEG Biofeedback',
      webpImg: 'assets/img/awatar-damski.webp',
      alterImg: 'assets/img/awatar-damski.png',
      path: `${AppPaths.AGATA_MAGDZICKA_BANACH}`
    },
    {
      id: 5,
      name: 'Marta Kęsicka',
      role: 'Pedagogożka, terapeutka w zakresie rehabilitacji ruchowej, terapeutka SI, trenerka umiejętności społecznych, instruktorka pilates, trenerka personalny.',
      webpImg: 'assets/img/awatar-damski.webp',
      alterImg: 'assets/img/awatar-damski.png',
      path: `${AppPaths.MARTA_KESICKA}`
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
