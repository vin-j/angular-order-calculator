import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderComponent } from './order/app';
import { CalculatorComponent } from './calculator/app';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,         // ⬅️ Standalone component
    OrderComponent,       // ⬅️ Standalone
    CalculatorComponent   // ⬅️ Standalone
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
