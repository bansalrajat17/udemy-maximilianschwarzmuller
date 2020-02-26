import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PredComponent } from './login/login.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { WarningAlertComponent } from './warningalert/warningalert.component';
import { SuccessAlertComponent } from './successalert/successalert.component';

@NgModule({
  declarations: [
    AppComponent,
    PredComponent,
    ShoppingcartComponent,
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
