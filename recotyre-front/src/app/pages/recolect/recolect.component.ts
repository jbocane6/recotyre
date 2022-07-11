import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { TireService } from 'src/app/apis/services/tire.service';

@Component({
  selector: 'app-recolect',
  templateUrl: './recolect.component.html',
  styleUrls: ['./recolect.component.css'],
})
export class RecolectComponent implements OnInit {
  faCheck = faCheck;
  faTrash = faTrash;
  tireForm : FormGroup;
  tireList: any;
  rhineList: any;
  tyres: any;

  constructor(private tireService: TireService, private fb: FormBuilder) {
    this.tireList=[];
    this.tireForm = this.fb.group({
      tireType: ['', Validators.required],
      tireRhine: ['', Validators.required],
      tireAmount: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadTire();
  }
  loadTire() {
    this.tireService.listUnique().subscribe((data: any) => {
      this.tyres = data;
      console.log(data);
    });
  }
  public addToTable(): void {
    this.tireList.push(this.tireForm.value);
    this.tireForm.reset();
  }
  removeItem(element: any) {
    this.tireList.forEach((value:any, index:any) => {
      if (value == element)
        this.tireList.splice(index, 1);
    })
  }
  loadRhine(element: any) {
    this.tireService.listRhine(element).subscribe((data:any)=> {
      this.rhineList = data;
    })
  }
}
