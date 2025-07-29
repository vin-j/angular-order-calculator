import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/app';
import { CalculatorComponent } from './calculator/app';

const routes: Routes = [
  { path: '', redirectTo: 'order', pathMatch: 'full' },
  { path: 'order', component: OrderComponent },
  { path: 'calculator', component: CalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
