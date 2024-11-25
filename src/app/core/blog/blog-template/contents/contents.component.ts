import {Component, Input} from '@angular/core';
import {blogCard} from "../../../../interfaces/blogCard";

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrl: './contents.component.css'
})
export class ContentsComponent {

  @Input() blog!: blogCard;

}
