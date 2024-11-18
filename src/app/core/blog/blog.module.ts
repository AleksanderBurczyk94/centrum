import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './blog.component';
import {SharedModule} from "../../shared/shared.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {TruncatePipe} from "../../pipes/truncate.pipe";
import {BannerBlogComponent} from './blog-template/banner-blog/banner-blog.component';
import {BlogTemplateComponent} from "./blog-template/blog-template.component";
import { BlogCardsComponent } from './blog-cards/blog-cards.component';


@NgModule({
  declarations: [
    BlogComponent,
    TruncatePipe,
    BannerBlogComponent,
    BlogTemplateComponent,
    BlogCardsComponent
  ],
  exports: [
    BannerBlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    MatPaginatorModule,
  ]
})
export class BlogModule {

}

