import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FinalManagerService } from '../../services/final-manager.service';

@Component({
  selector: 'app-edit-final-manager',
  templateUrl: './edit-final-manager.component.html',
  styleUrls: ['./edit-final-manager.component.css']
})
export class EditFinalManagerComponent implements OnInit {
  addFinalManager: any;
  id: any;
  constructor(
    private fb: FormBuilder,
    private routes: Router,
    private finalManagerService: FinalManagerService, private url:ActivatedRoute
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

  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
    this.finalManagerService.singleFinalManager(this.id).subscribe(data => {
      this.addFinalManager.patchValue(data);
    });
  }

  onSubmit() {
    this.finalManagerService.updateFinalManager(this.id, this.addFinalManager.value).subscribe((data: any) => {
      console.log(data);
      this.routes.navigate(['/finalManagerList']);
    });
  }
}
