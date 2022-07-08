import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollectionPointService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:4000/collectionPoints/';

  addCollectionPoint(collectionPoint: any) {
    return this.http.post(this.url + 'create', collectionPoint);
  }

  listCollectionPoint() {
    return this.http.get(this.url);
  }

  deleteCollectionPoint(shortId:any) {
    return this.http.delete(this.url + shortId);
  }

  singleCollectionPoint(collectionPoint: any) {
    return this.http.get(this.url + 'id');
  }

  updateCollectionPoint(id: any, collectionPoint: any) {
    return this.http.patch(this.url + id, collectionPoint);
  }
}
