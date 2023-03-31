import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserauthService {
  // url = 'http://localhost:8080/user/login';
  url = 'https://tech-api-n991.onrender.com/user/login';

  constructor(private http: HttpClient) {}

  userLogin(data: any) {
    return this.http.post(this.url, data);
  }
}
