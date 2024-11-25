import {Component, Input} from '@angular/core';
import {Sections} from "../../../../../interfaces/blogCard";

@Component({
  selector: 'app-subsections',
  templateUrl: './subsections.component.html',
  styleUrl: './subsections.component.css'
})
export class SubsectionsComponent {
  @Input() section!: Sections;
  @Input() i!: number;
}
