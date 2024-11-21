import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {TherapistsComponent} from "./therapists/therapists.component";
import {FaqComponent} from "./faq/faq.component";
import {CardListComponent} from "./card-list/card-list.component";
import {InfoBarComponent} from "./info-bar/info-bar.component";
import {SharedModule} from "../../shared/shared.module";
import { TopHeroComponent } from './top-hero/top-hero.component';
import { WelcomeBoxComponent } from './welcome-box/welcome-box.component';
import { ReviewBoxComponent } from './review-box/review-box.component';


@NgModule({
  declarations: [
    TherapistsComponent,
    FaqComponent,
    InfoBarComponent,
    CardListComponent,
    TopHeroComponent,
    WelcomeBoxComponent,
    ReviewBoxComponent,
  ],
  exports: [
    CardListComponent,
    TherapistsComponent,
    FaqComponent,
    InfoBarComponent,
    TopHeroComponent,
    WelcomeBoxComponent,
    ReviewBoxComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class HomeModule {
}
