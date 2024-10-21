import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurCenterComponent } from './our-center.component';

const routes: Routes = [{ path: '', component: OurCenterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurCenterRoutingModule { }
