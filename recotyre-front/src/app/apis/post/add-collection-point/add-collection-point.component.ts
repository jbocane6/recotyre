import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CollectionPointService } from '../../services/collection-point.service';

@Component({
  selector: 'app-add-collection-point',
  templateUrl: './add-collection-point.component.html',
  styleUrls: ['./add-collection-point.component.css'],
})
export class AddCollectionPointComponent implements OnInit {
  addCollectionPoint: any;
  constructor(
    private fb: FormBuilder,
    private routes: Router,
    private collectionPointService: CollectionPointService
  ) {
    this.addCollectionPoint = fb.group({
      shortId: ['', Validators.required],
      pointName: ['', Validators.required],
      nit: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      contactPerson: ['', Validators.required],
      cellPhone: ['', Validators.required],
      schedule: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.collectionPointService
      .addCollectionPoint(this.addCollectionPoint.value)
      .subscribe((data: any) => {
        console.log(data);
        this.routes.navigate(['/collectionPointList']);
      });
  }
}
