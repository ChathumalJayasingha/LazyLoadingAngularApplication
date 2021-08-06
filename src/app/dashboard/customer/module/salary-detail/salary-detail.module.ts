import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaryDetailRoutingModule } from './salary-detail-routing.module';
import { SalaryDetailComponent } from './salary-detail.component';


@NgModule({
  declarations: [
    SalaryDetailComponent
  ],
  imports: [
    CommonModule,
    SalaryDetailRoutingModule
  ]
})
export class SalaryDetailModule { }
