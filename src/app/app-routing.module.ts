
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderComponent } from './order/app';
import { CalculatorComponent } from './calculator/app';
import { BankComponent } from './bank/app';
import { CacheComponent } from './cache/app';
import { CalculatorjsComponent } from './calculatorjs/app';
import { OrdersComponent } from './orders/app';

const routes: Routes = [
  { path: '', redirectTo: 'order', pathMatch: 'full' },
  { path: 'order', component: OrderComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'bank', component: BankComponent },
  { path: 'cache', component: CacheComponent },
  { path: 'calculatorjs', component: CalculatorjsComponent },
  { path: 'orders', component: OrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
