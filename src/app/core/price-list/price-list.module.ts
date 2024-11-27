import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceListRoutingModule } from './price-list-routing.module';
import { PriceListComponent } from './price-list.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [PriceListComponent],
  imports: [CommonModule, PriceListRoutingModule, SharedModule],
})
export class PriceListModule {}
