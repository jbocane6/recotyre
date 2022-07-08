import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarrierService } from '../../services/carrier.service';

@Component({
  selector: 'app-add-carrier',
  templateUrl: './add-carrier.component.html',
  styleUrls: ['./add-carrier.component.css']
})
export class AddCarrierComponent implements OnInit {
  addCarrier: any;
  constructor(
    private fb: FormBuilder,
    private routes: Router,
    private carrierService: CarrierService
  ) {
    this.addCarrier = fb.group({
      companyName: ['', Validators.required],
      nit: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      contactPerson: ['', Validators.required],
      businessPosition: ['', Validators.required],
      cellPhone: ['', Validators.required],
      vehiclePlate: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.carrierService
      .addCarrier(this.addCarrier.value)
      .subscribe((data: any) => {
        console.log(data);
        this.routes.navigate(['/carrierList']);
      });
  }
}
