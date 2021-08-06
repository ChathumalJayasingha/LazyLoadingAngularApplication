import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import {CustomerDetailComponent} from "./components/customer-detail/customer-detail.component";

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path:'detail/:id', component:CustomerDetailComponent},
  { path: 'salaryDetail', loadChildren: () => import('./module/salary-detail/salary-detail.module').then(m => m.SalaryDetailModule) },
  { path: 'addressDetail', loadChildren: () => import('./module/address-detail/address-detail.module').then(m => m.AddressDetailModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
