import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RodoRoutingModule } from './rodo-routing.module';
import {RodoComponent} from "./rodo.component";
import {SharedModule} from "../../../shared/shared.module";



@NgModule({
  declarations: [
    RodoComponent
  ],
  imports: [
    CommonModule,
    RodoRoutingModule,
    SharedModule
  ]
})
export class RodoModule { }
