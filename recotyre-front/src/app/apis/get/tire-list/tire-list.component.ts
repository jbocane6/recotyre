import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TireService } from '../../services/tire.service';

@Component({
  selector: 'app-tire-list',
  templateUrl: './tire-list.component.html',
  styleUrls: ['./tire-list.component.css'],
})
export class TireListComponent implements OnInit {
  tires: any;
  constructor(private tireService: TireService, private routes: Router) {}

  ngOnInit(): void {
    this.loadTire();
  }

  loadTire() {
    this.tireService.listTire().subscribe((data: any) => {
      this.tires = data;
    });
  }

  delTire(datas: any) {
    this.tireService.deleteTire(datas).subscribe((data) => {
      this.tires = this.tires.filter((u: any) => u._id !== datas);
    });
  }
}
