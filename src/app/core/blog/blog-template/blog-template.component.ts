import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BlogService} from "../../../services/blog.service";
import {blogCard} from "../../../interfaces/blogCard";
import {Meta, Title} from "@angular/platform-browser";
import {TherapistService} from "../../../services/therapist.service";
import {AppPaths} from "../../../app-paths";

@Component({
  selector: 'app-blog-template',
  templateUrl: './blog-template.component.html',
  styleUrl: './blog-template.component.css'
})
export class BlogTemplateComponent implements OnInit {


  blog!: blogCard;

  id!: number;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private titleService: Title,
    private metaService: Meta,
    private readonly therapistService: TherapistService,

  ) {
  }
  therapists = this.therapistService.getTherapists();

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      const card = this.blogService.getCard(this.id);
      if (card) {
        this.blog = card;
        this.setTitleAndMeta();
      } else {
        console.error(`Blog o ID ${this.id} nie istnieje.`);
      }
    });
  }


  setTitleAndMeta(): void {
    if (this.blog) {
      this.titleService.setTitle(this.blog.seoData.title);
      this.metaService.updateTag({ name: 'description', content: this.blog.seoData.metaDescription });
    } else {
      console.warn("setTitleAndMeta: Brak terapeuty!");
    }
  }



}
