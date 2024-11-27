import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Therapist } from '../../../../../interfaces/therpaists';

@Component({
  selector: 'app-person-carousel',
  templateUrl: './person-carousel.component.html',
  styleUrl: './person-carousel.component.css',
})
export class PersonCarouselComponent {
  @Input()
  therapist: Therapist | null = null;

  @Output() nextTherapist = new EventEmitter<void>();
  @Output() prevTherapist = new EventEmitter<void>();

  onNextTherapist(): void {
    this.nextTherapist.emit();
  }

  onPrevTherapist(): void {
    this.prevTherapist.emit();
  }
}
