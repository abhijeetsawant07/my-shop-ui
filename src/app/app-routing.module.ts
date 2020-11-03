import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WipComponent } from './wip/wip.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'order', loadChildren: () => import('./modules/order/order.module').then(m => m.OrderModule) },
  { path: 'products', component: WipComponent },
  { path: 'brands', component: WipComponent },
  { path: 'deals', component: WipComponent },
  { path: 'services', component: WipComponent },
  { path: 'account', component: WipComponent },
  { path: 'saved', component: WipComponent },
  { path: 'wip', component: WipComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
