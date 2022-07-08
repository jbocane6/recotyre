import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TireService } from '../../services/tire.service';

@Component({
  selector: 'app-add-tire',
  templateUrl: './add-tire.component.html',
  styleUrls: ['./add-tire.component.css'],
})
export class AddTireComponent implements OnInit {
  addTire: any;
  constructor(
    private fb: FormBuilder,
    private routes: Router,
    private tireService: TireService
  ) {
    this.addTire = fb.group({
      type: ['', Validators.required],
      rhine: ['', Validators.required],
      brand: ['', Validators.required],
      heightDimensions: ['', Validators.required],
      widthDimensions: ['', Validators.required],
      lengthDimensions: ['', Validators.required],
      weight: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.tireService.addTire(this.addTire.value).subscribe((data: any) => {
      console.log(data);
      this.routes.navigate(['/tireList']);
    });
  }
}
