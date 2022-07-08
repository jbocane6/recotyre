import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CollectorService } from '../../services/collector.service';

@Component({
  selector: 'app-edit-collector',
  templateUrl: './edit-collector.component.html',
  styleUrls: ['./edit-collector.component.css']
})
export class EditCollectorComponent implements OnInit {
  addCollector: any;
  id: any;
  constructor(
    private fb: FormBuilder,
    private routes: Router,
    private collectorService: CollectorService, private url:ActivatedRoute
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
      collectorPlate: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
    this.collectorService.singleCollector(this.id).subscribe(data => {
      this.addCollector.patchValue(data);
    });
  }

  onSubmit() {
    this.collectorService
      .updateCollector(this.id, this.addCollector.value)
      .subscribe((data: any) => {
        console.log(data);
        this.routes.navigate(['/collectorList']);
      });
  }
}
