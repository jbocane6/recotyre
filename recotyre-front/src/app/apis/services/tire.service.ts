import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TireService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:4000/tires/';

  addTire(tire: any) {
    return this.http.post(this.url + 'create', tire);
  }

  listTire() {
    return this.http.get(this.url);
  }

  deleteTire(id:any) {
    return this.http.delete(this.url + id);
  }

  singleTire(tire: any) {
    return this.http.get(this.url + 'id');
  }

  updateTire(id: any, tire: any) {
    return this.http.patch(this.url + id, tire);
  }
}
