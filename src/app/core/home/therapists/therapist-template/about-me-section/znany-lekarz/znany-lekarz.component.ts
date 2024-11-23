import {Component, Input} from '@angular/core';
import {Therapist} from "../../../../../../interfaces/therpaists";

@Component({
  selector: 'app-znany-lekarz',
  templateUrl: './znany-lekarz.component.html',
  styleUrl: './znany-lekarz.component.css'
})
export class ZnanyLekarzComponent {

  @Input()
  therapist: Therapist | null = null;
}
