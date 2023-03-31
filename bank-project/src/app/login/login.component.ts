import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserauthService } from '../services/userauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private userData: UserauthService, private router: Router) {}

  getData(data: NgForm) {
    this.userData.userLogin(data).subscribe(
      (data: any) => {
        if (data.status === 'success') {
          localStorage.setItem('token', JSON.stringify(data.token));
          alert('Login Successfull');
          this.router.navigate(['/']);
        } else {
          alert('Login Failed try again');
        }
      },
      (error: any) => {
        alert(`${error.error.message}`);
      }
    );
  }
}
