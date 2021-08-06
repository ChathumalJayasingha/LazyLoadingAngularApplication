import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressDetailRoutingModule } from './address-detail-routing.module';
import { AddressDetailComponent } from './address-detail.component';


@NgModule({
  declarations: [
    AddressDetailComponent
  ],
  imports: [
    CommonModule,
    AddressDetailRoutingModule
  ]
})
export class AddressDetailModule { }
