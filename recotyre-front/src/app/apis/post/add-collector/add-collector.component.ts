import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CollectorService } from '../../services/collector.service';

@Component({
  selector: 'app-add-collector',
  templateUrl: './add-collector.component.html',
  styleUrls: ['./add-collector.component.css'],
})
export class AddCollectorComponent implements OnInit {
  addCollector: any;
  constructor(
    private fb: FormBuilder,
    private routes: Router,
    private collectorService: CollectorService
  ) {
    this.addCollector = fb.group({
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
    this.collectorService
      .addCollector(this.addCollector.value)
      .subscribe((data: any) => {
        console.log(data);
        this.routes.navigate(['/collectorList']);
      });
  }
}
