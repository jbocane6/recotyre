import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css'],
})
export class AddVehicleComponent implements OnInit {
  addVehicle: any;
  constructor(
    private fb: FormBuilder,
    private routes: Router,
    private vehicleService: VehicleService
  ) {
    this.addVehicle = fb.group({
      type: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      vehiclePlate: ['', Validators.required],
      capacity: ['', Validators.required],
      heightDimensions: ['', Validators.required],
      widthDimensions: ['', Validators.required],
      lengthDimensions: ['', Validators.required],
      lastMaintenanceDate: ['', Validators.required],
      technicalMechanicalExpiration: ['', Validators.required],
      soatExpiration: ['', Validators.required],
      fuelType: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.vehicleService
      .addVehicle(this.addVehicle.value)
      .subscribe((data: any) => {
        console.log(data);
        this.routes.navigate(['/vehicleList']);
      });
  }
}
