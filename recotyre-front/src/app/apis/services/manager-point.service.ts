import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerPointService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:4000/managerPoints/';

  addManagerPoint(managerPoint: any) {
    return this.http.post(this.url + 'create', managerPoint);
  }

  listManagerPoint() {
    return this.http.get(this.url);
  }

  deleteManagerPoint(id:any) {
    return this.http.delete(this.url + id);
  }

  singleManagerPoint(managerPoint: any) {
    return this.http.get(this.url + managerPoint);
  }

  updateManagerPoint(id: any, managerPoint: any) {
    return this.http.patch(this.url + id, managerPoint);
  }
}
