import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankChargeComponent } from './bank-charge/bank-charge.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'bank-charge', component: BankChargeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
