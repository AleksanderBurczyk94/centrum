import {Component, Input} from '@angular/core';
import {AppPaths} from "../../../../app-paths";
import {blogCard} from "../../../../interfaces/blogCard";

@Component({
  selector: 'app-banner-blog',
  templateUrl: './banner-blog.component.html',
  styleUrl: './banner-blog.component.css'
})
export class BannerBlogComponent {
  appPaths = AppPaths;
  @Input() blog!: blogCard;
}
