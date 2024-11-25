import {Component, Input} from '@angular/core';
import {blogCard} from "../../../../interfaces/blogCard";

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.css'
})
export class SectionsComponent {

  @Input() blog!: blogCard;

}
