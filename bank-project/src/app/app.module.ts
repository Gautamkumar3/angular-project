import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BankChargeComponent } from './bank-charge/bank-charge.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, BankChargeComponent],
  imports: [BrowserModule, AppRoutingModule, UserAuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
