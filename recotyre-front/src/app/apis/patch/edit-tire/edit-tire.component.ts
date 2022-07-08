import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TireService } from '../../services/tire.service';

@Component({
  selector: 'app-edit-tire',
  templateUrl: './edit-tire.component.html',
  styleUrls: ['./edit-tire.component.css'],
})
export class EditTireComponent implements OnInit {
  addTire: any;
  id: any;
  constructor(
    private fb: FormBuilder,
    private routes: Router,
    private tireService: TireService,
    private url: ActivatedRoute
  ) {
    this.addTire = fb.group({
      type: ['', Validators.required],
      rhine: ['', Validators.required],
      brand: ['', Validators.required],
      heightDimensions: ['', Validators.required],
      widthDimensions: ['', Validators.required],
      lengthDimensions: ['', Validators.required],
      weight: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
    this.tireService.singleTire(this.id).subscribe((data) => {
      this.addTire.patchValue(data);
    });
  }

  onSubmit() {
    this.tireService
      .updateTire(this.id, this.addTire.value)
      .subscribe((data: any) => {
        console.log(data);
        this.routes.navigate(['/tireList']);
      });
  }
}
