import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent implements OnInit {
  addVehicle: any;
  id: any;
  constructor(
    private fb: FormBuilder,
    private routes: Router,
    private vehicleService: VehicleService, private url:ActivatedRoute
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

  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
    this.vehicleService.singleVehicle(this.id).subscribe(data => {
      this.addVehicle.patchValue(data);
    });
  }

  onSubmit() {
    this.vehicleService
      .updateVehicle(this.id, this.addVehicle.value)
      .subscribe((data: any) => {
        console.log(data);
        this.routes.navigate(['/vehicleList']);
      });
  }
}
