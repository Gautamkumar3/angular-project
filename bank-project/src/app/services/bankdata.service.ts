import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BankdataService {
  url = 'http://localhost:8080/bank';

  constructor(private http: HttpClient) {}

  getBankData() {
    return this.http.get<any[]>(this.url);
  }
}
