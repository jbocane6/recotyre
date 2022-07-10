import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
})
export class VehicleListComponent implements OnInit {
  vehicles: any;
  vehicle: any;
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
    this.vehicleService.deleteVehicle(datas).subscribe((data) => {
      this.vehicles = this.vehicles.filter((u: any) => u._id !== datas);
    });
  }

  showVehicle(vehicle: any) {
    const m: Date = new Date(vehicle.lastMaintenanceDate);
    const datem =
      m.getDate() + 1 + '-' + (m.getMonth() + 1) + '-' + m.getFullYear();
    const t: Date = new Date(vehicle.technicalMechanicalExpiration);
    const datet =
      t.getDate() + 1 + '-' + (t.getMonth() + 1) + '-' + t.getFullYear();
    const s: Date = new Date(vehicle.soatExpiration);
    const dates =
      s.getDate() + 1 + '-' + (s.getMonth() + 1) + '-' + s.getFullYear();
    this.vehicle =
      'Type :\t\t\t\t\t\t\t\t' +
      vehicle.type +
      '\nBrand :\t\t\t\t\t\t\t\t' +
      vehicle.brand +
      '\nModel :\t\t\t\t\t\t\t\t' +
      vehicle.model +
      '\nPlate :\t\t\t\t\t\t\t\t' +
      vehicle.vehiclePlate +
      '\nCapacity :\t\t\t\t\t\t\t' +
      vehicle.capacity +
      ' Kgs\nHeightDimensions :\t\t\t\t\t' +
      vehicle.heightDimensions +
      ' cm\nWidthDimensions :\t\t\t\t\t' +
      vehicle.widthDimensions +
      ' cm\nLengthDimensions :\t\t\t\t\t' +
      vehicle.lengthDimensions +
      ' cm\nLast Maintenance :\t\t\t\t\t' +
      datem +
      '\nTechnical Mechanical Expiration :\t' +
      datet +
      '\nSOAT Expiration :\t\t\t\t\t' +
      dates +
      '\nFuel Type :\t\t\t\t\t\t\t' +
      vehicle.fuelType;
    alert(this.vehicle);
  }
}
