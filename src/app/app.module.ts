import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIconModule} from "@angular/material/icon";
import {WhiteButtonComponent} from "./shered/white-button/white-button.component";
import {BodyComponent} from "./core/body/body.component";
import {OrangeButtonComponent} from "./shered/orange-button/orange-button.component";
import {NavbarComponent} from "./core/navbar/navbar.component";
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrangeButtonComponent,
    BodyComponent,
    WhiteButtonComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
