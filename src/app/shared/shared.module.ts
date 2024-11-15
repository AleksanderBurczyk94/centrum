import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WhiteContainerComponent} from "./white-container/white-container.component";
import {BackBtnComponent} from "./back-btn/back-btn.component";
import {BannerComponent} from "./banner/banner.component";
import {TransparentBtnComponent} from "./white-button/transparent-btn.component";
import {NextBackBtnComponent} from "./next-back-btn/next-back-btn.component";
import {ColorButtonComponent} from "./color-button/color-button.component";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    BackBtnComponent,
    WhiteContainerComponent,
    BannerComponent,
    TransparentBtnComponent,
    NextBackBtnComponent,
    ColorButtonComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ],
  exports: [
    BackBtnComponent,
    WhiteContainerComponent,
    BannerComponent,
    TransparentBtnComponent,
    NextBackBtnComponent,
    ColorButtonComponent,
  ]
})
export class SharedModule { }
