import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {AboutusComponent} from "./core/aboutus/aboutus.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {OfferComponent} from "./core/offer/offer.component";
import {ScopeOfAssistanceComponent} from "./core/scope-of-assistance/scope-of-assistance.component";
import {PriceListComponent} from "./core/price-list/price-list.component";
import {ContactComponent} from "./core/contact/contact.component";
import {AppointmentComponent} from "./core/appointment/appointment.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent, title:'O nas'},
  {path: 'offer', component: OfferComponent, title:'Oferta'},
  {path: 'scopeOfAssistance', component: ScopeOfAssistanceComponent, title:'Zakres pomocy'},
  {path: 'priceList', component: PriceListComponent, title:'Cennik'},
  {path: 'contact', component: ContactComponent, title:'Kontakt'},
  {path: 'appointment', component: AppointmentComponent, title:'Umów wizytę'},
  {path: '**', component: PageNotFoundComponent, title:'Page not found' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
