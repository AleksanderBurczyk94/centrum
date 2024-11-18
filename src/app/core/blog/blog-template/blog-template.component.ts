import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BlogService} from "../../../services/blog.service";
import {MatPaginatorIntl} from "@angular/material/paginator";
import {blogCard} from "../../../interfaces/blogCard";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-blog-template',
  templateUrl: './blog-template.component.html',
  styleUrl: './blog-template.component.css'
})
export class BlogTemplateComponent implements OnInit {

  card!: blogCard;

  id!: number;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private titleService: Title,
    private metaService: Meta
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.card = this.blogService.getCard(this.id)
      this.setTitleAndMeta();
    })
  }

  setTitleAndMeta(): void {
    if (this.card) {
      this.titleService.setTitle(this.card.seoData.title);
      console.log("this.card.seoData.metaDescription!!!!!" + this.card.seoData.metaDescription)
      this.metaService.updateTag({ name: 'description', content: this.card.seoData.metaDescription });
    } else {
      console.warn("setTitleAndMeta: Brak terapeuty!");
    }
  }


}
