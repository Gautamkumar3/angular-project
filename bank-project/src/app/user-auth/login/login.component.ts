import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  getFunction(num: any) {
    alert('Someone clicked me' + num);
  }
  displayValue = '';
  handleChange(val: string) {
    console.log(val);
    this.displayValue = val;
  }
  val = 0;
  counterFunc(val:number) {
    this.val+=val
  }
}
