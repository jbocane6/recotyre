import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManagerPointService } from '../../services/manager-point.service';

@Component({
  selector: 'app-add-manager-point',
  templateUrl: './add-manager-point.component.html',
  styleUrls: ['./add-manager-point.component.css'],
})
export class AddManagerPointComponent implements OnInit {
  addManagerPoint: any;
  constructor(
    private fb: FormBuilder,
    private routes: Router,
    private managerPointService: ManagerPointService
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

  ngOnInit(): void {}

  onSubmit() {
    this.managerPointService
      .addManagerPoint(this.addManagerPoint.value)
      .subscribe((data: any) => {
        console.log(data);
        this.routes.navigate(['/managerPointList']);
      });
  }
}
