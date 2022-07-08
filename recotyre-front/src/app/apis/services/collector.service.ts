import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollectorService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:4000/collectors/';

  addCollector(collector: any) {
    return this.http.post(this.url + 'create', collector);
  }

  listCollector() {
    return this.http.get(this.url);
  }

  deleteCollector(id:any) {
    return this.http.delete(this.url + id);
  }

  singleCollector(collector: any) {
    return this.http.get(this.url + 'id');
  }

  updateCollector(id: any, collector: any) {
    return this.http.patch(this.url + id, collector);
  }
}
