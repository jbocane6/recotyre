import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinalManagerService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:4000/FinalManagers/';

  addFinalManager(finalManager: any) {
    return this.http.post(this.url + 'create', finalManager);
  }

  listFinalManager() {
    return this.http.get(this.url);
  }

  deleteFinalManager(id:any) {
    return this.http.delete(this.url + id);
  }

  singleFinalManager(finalManager: any) {
    return this.http.get(this.url + 'id');
  }

  updateFinalManager(id: any, finalManager: any) {
    return this.http.patch(this.url + id, finalManager);
  }
}
