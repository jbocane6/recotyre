import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrierService } from '../../services/carrier.service';

@Component({
  selector: 'app-edit-carrier',
  templateUrl: './edit-carrier.component.html',
  styleUrls: ['./edit-carrier.component.css'],
})
export class EditCarrierComponent implements OnInit {
  editCarrier: any;
  id: any;
  constructor(
    private fb: FormBuilder,
    private routes: Router,
    private carrierService: CarrierService,
    private url: ActivatedRoute
  ) {
    this.editCarrier = fb.group({
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

  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
    this.carrierService.singleCarrier(this.id).subscribe((data) => {
      this.editCarrier.patchValue(data);
    });
  }

  onSubmit() {
    this.carrierService
      .updateCarrier(this.id, this.editCarrier.value)
      .subscribe((data: any) => {
        console.log(data);
        this.routes.navigate(['/carrierList']);
      });
  }
}
