import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BankdataService {
  // url = 'http://localhost:8080/bank';
  url = 'https://tech-api-n991.onrender.com/bank';

  constructor(private http: HttpClient) {}

  getBankData() {
    return this.http.get<any[]>(this.url);
  }

  addBankData(data: any) {
    return this.http.post(this.url, data);
  }

  updateStatus(id: any, data: any) {
    return this.http.patch(`${this.url}/${id}`, data);
  }
}
