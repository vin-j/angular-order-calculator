import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';           // standalone
import { OrderComponent } from './order/app';             // standalone
import { CalculatorComponent } from './calculator/app';   // standalone
import { BankComponent } from './bank/app';               // standalone
import { CalculatorjsComponent } from './calculatorjs/app'; // standalone
import { OrdersComponent } from './orders/app';           // standalone

@NgModule({
  declarations: [],   // no standalone components here!
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    // Import standalone components here:
    AppComponent,
    OrderComponent,
    CalculatorComponent,
    BankComponent,
    CalculatorjsComponent,
    OrdersComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
