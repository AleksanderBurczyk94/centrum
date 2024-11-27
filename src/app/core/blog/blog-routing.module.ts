import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogTemplateComponent } from './blog-template/blog-template.component';
import { BlogCardsComponent } from './blog-cards/blog-cards.component';

const routes: Routes = [
  {
    path: '', // URL: /blog
    component: BlogCardsComponent,
  },
  {
    path: ':id', // URL: /blog/:id
    component: BlogTemplateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
