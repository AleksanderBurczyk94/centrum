import { Component, Input } from '@angular/core';
import { Therapist } from '../../../../../interfaces/therpaists';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent {
  @Input()
  therapist: Therapist | null = null;
}
