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
import { ContentsComponent } from './blog-template/contents/contents.component';
import {ContactModule} from "../contact/contact.module";
import { SectionsComponent } from './blog-template/section/sections.component';
import { SubsectionsComponent } from './blog-template/section/subsections/subsections.component';
import { AutorComponent } from './blog-template/autor/autor.component';


@NgModule({
  declarations: [
    BlogComponent,
    TruncatePipe,
    BannerBlogComponent,
    BlogTemplateComponent,
    BlogCardsComponent,
    ContentsComponent,
    SectionsComponent,
    SubsectionsComponent,
    AutorComponent,
  ],
  exports: [
    BannerBlogComponent
  ],
    imports: [
        CommonModule,
        BlogRoutingModule,
        SharedModule,
        MatPaginatorModule,
        ContactModule,
    ]
})
export class BlogModule {

}

