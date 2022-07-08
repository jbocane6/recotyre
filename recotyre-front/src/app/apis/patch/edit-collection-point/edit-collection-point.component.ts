import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CollectionPointService } from '../../services/collection-point.service';

@Component({
  selector: 'app-edit-collection-point',
  templateUrl: './edit-collection-point.component.html',
  styleUrls: ['./edit-collection-point.component.css']
})
export class EditCollectionPointComponent implements OnInit {
  addCollectionPoint: any;
  id:any;
  constructor(
    private fb: FormBuilder,
    private routes: Router,
    private collectionPointService: CollectionPointService, private url:ActivatedRoute
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

  ngOnInit(): void {

    this.id = this.url.snapshot.params['id'];
    this.collectionPointService.singleCollectionPoint(this.id).subscribe(data => {
      this.addCollectionPoint.patchValue(data);
    });
  }

  onSubmit() {
    this.collectionPointService
      .updateCollectionPoint(this.id, this.addCollectionPoint.value)
      .subscribe((data: any) => {
        console.log(data);
        this.routes.navigate(['/collectionPointList']);
      });
  }
}
