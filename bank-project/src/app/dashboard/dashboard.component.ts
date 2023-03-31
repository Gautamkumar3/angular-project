import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BankdataService } from '../services/bankdata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  allData: any;

  constructor(private bankData: BankdataService, private router: Router) {
    this.bankData.getBankData().subscribe((res) => {
      this.allData = res;
    });
  }

  handleNavigate() {
    this.router.navigate(['/bank-charge']);
  }
}
