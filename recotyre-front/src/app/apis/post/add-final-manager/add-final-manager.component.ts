import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FinalManagerService } from '../../services/final-manager.service';

@Component({
  selector: 'app-add-final-manager',
  templateUrl: './add-final-manager.component.html',
  styleUrls: ['./add-final-manager.component.css'],
})
export class AddFinalManagerComponent implements OnInit {
  addFinalManager: any;
  constructor(
    private fb: FormBuilder,
    private routes: Router,
    private finalManagerService: FinalManagerService
  ) {
    this.addFinalManager = fb.group({
      companyName: ['', Validators.required],
      nit: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      contactPerson: ['', Validators.required],
      businessPosition: ['', Validators.required],
      cellPhone: ['', Validators.required],
      managerPointId: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.finalManagerService.addFinalManager(this.addFinalManager.value).subscribe((data: any) => {
      console.log(data);
      this.routes.navigate(['/finalManagerList']);
    });
  }
}
