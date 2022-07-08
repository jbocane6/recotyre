import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicles: any;
  constructor(private vehicleService: VehicleService, private routes: Router) {}

  ngOnInit(): void {
    this.loadVehicle();
  }

  loadVehicle() {
    this.vehicleService.listVehicle().subscribe((data: any) => {
      this.vehicles = data;
    });
  }

  delVehicle(datas: any) {
    this.vehicleService.deleteVehicle(datas._id).subscribe((data: any) => {
      this.vehicles = this.vehicles.filter((u: any) => u !== datas);
    });
  }
}
