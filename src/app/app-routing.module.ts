import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {PriceListComponent} from "./core/price-list/price-list.component";
import {ContactComponent} from "./core/contact/contact.component";
import {AppointmentComponent} from "./core/appointment/appointment.component";
import {AssistanceComponent} from "./core/assistance/assistance.component";
import {OurCenterComponent} from "./core/our-center/our-center.component";
import {BlogComponent} from "./core/blog/blog.component";
import {MinorsProtectionComponent} from "./core/footer/minors-protection/minors-protection.component";
import {RodoComponent} from "./core/footer/rodo/rodo.component";
import {contactFormUnsavedChangesGuard} from "./guards/contact-form-unsaved-changes.guard";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'assistance', component: AssistanceComponent, title:'Zakres pomocy'},
  {path: 'priceList', component: PriceListComponent, title:'Cennik'},
  {path: 'ourCenter', component: OurCenterComponent, title:'Nasze Centrum'},
  {path: 'blog', component: BlogComponent, title:'Blog'},
  {path: 'contact', component: ContactComponent, title:'Kontakt', canDeactivate: [contactFormUnsavedChangesGuard]},
  {path: 'appointment', component: AppointmentComponent, title:'Umów wizytę'},
  {path: 'minorsProtection', component: MinorsProtectionComponent, title:'Standardy ochrony małoletnich'},
  {path: 'rodo', component: RodoComponent, title:'Rodo'},
  {path: '**', component: PageNotFoundComponent, title:'Page not found' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
// <div class="fw-bold"></div>
}
