import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BankdataService } from '../services/bankdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-charge',
  templateUrl: './bank-charge.component.html',
  styleUrls: ['./bank-charge.component.css'],
})
export class BankChargeComponent {
  constructor(private bankData: BankdataService, private router: Router) {}

  sendData(data: NgForm) {
    this.bankData.addBankData(data).subscribe(
      (res: any) => {
        if (res.status === 'success') {
          alert('Data send for approval successfully');
          this.router.navigate(['/']);
        }
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }
}
