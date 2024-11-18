import {Component, OnInit} from '@angular/core';
import {MatPaginatorIntl, PageEvent} from "@angular/material/paginator";
import {AppPaths} from "../../app-paths";
import {BlogService} from "../../services/blog.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {

}
