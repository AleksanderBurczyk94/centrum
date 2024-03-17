import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {AboutusComponent} from "./core/aboutus/aboutus.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: '**', component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
