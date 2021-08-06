import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaryDetailComponent } from './salary-detail.component';

const routes: Routes = [{ path: '', component: SalaryDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaryDetailRoutingModule { }
