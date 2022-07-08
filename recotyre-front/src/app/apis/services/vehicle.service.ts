import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:4000/vehicles/';

  addVehicle(vehicle: any) {
    return this.http.post(this.url + 'create', vehicle);
  }

  listVehicle() {
    return this.http.get(this.url);
  }

  deleteVehicle(id: any) {
    return this.http.delete(this.url + id);
  }

  singleVehicle(vehicle: any) {
    return this.http.get(this.url + 'id');
  }

  updateVehicle(id: any, vehicle: any) {
    return this.http.patch(this.url + id, vehicle);
  }
}
