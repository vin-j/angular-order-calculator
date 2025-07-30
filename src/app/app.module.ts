

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // standalone
import { OrderComponent } from './order/app';
import { CalculatorComponent } from './calculator/app';
import { BankComponent } from './bank/app';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    OrderComponent,
    CalculatorComponent,
    BankComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


