import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarrierService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:4000/carriers/';

  addCarrier(carrier: any) {
    return this.http.post(this.url + 'create', carrier);
  }

  listCarrier() {
    return this.http.get(this.url);
  }

  deleteCarrier(nit:any) {
    return this.http.delete(this.url + 'nit');
  }
}
