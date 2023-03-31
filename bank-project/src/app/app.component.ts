import { Component } from '@angular/core';
import { UserauthService } from './services/userauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bank-project';
  products: any;

  constructor(private productData: UserauthService) {}
}
