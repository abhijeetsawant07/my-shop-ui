import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderDetailsComponent } from './order-details/order-details.component';

//Lazy loaded modules-All routes are relative to /order
const routes: Routes = [
  { path: 'details', component: OrderDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class OrderRoutingModule { }
