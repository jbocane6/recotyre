import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerPointService } from '../../services/manager-point.service';

@Component({
  selector: 'app-edit-manager-point',
  templateUrl: './edit-manager-point.component.html',
  styleUrls: ['./edit-manager-point.component.css']
})
export class EditManagerPointComponent implements OnInit {
  addManagerPoint: any;
  id: any;
  constructor(
    private fb: FormBuilder,
    private routes: Router,
    private managerPointService: ManagerPointService, private url:ActivatedRoute
  ) {
    this.addManagerPoint = fb.group({
      shortId: ['', Validators.required],
      managerName: ['', Validators.required],
      nit: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      contactPerson: ['', Validators.required],
      cellPhone: ['', Validators.required],
      schedule: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
    this.managerPointService.singleManagerPoint(this.id).subscribe(data => {
      this.addManagerPoint.patchValue(data);
    });
  }

  onSubmit() {
    this.managerPointService
      .updateManagerPoint(this.id, this.addManagerPoint.value)
      .subscribe((data: any) => {
        console.log(data);
        this.routes.navigate(['/managerPointList']);
      });
  }
}
