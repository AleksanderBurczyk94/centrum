import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TherapistTemplateComponent} from "./therapist-template.component";


const routes: Routes = [
  {
    path: ':id',
    component: TherapistTemplateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TherapistTemplateRoutingModule {}
