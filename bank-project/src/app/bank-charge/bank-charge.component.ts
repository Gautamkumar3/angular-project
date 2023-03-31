import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bank-charge',
  templateUrl: './bank-charge.component.html',
  styleUrls: ['./bank-charge.component.css'],
})
export class BankChargeComponent {
  sendData(data: NgForm) {
    console.log(data);
  }
}
