import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrierService } from '../../services/carrier.service';

@Component({
  selector: 'app-carrier-list',
  templateUrl: './carrier-list.component.html',
  styleUrls: ['./carrier-list.component.css'],
})
export class CarrierListComponent implements OnInit {
  carriers: any;
  constructor(private carrierService: CarrierService, private routes: Router) {}

  ngOnInit(): void {
    this.loadCarrier();
  }

  loadCarrier() {
    this.carrierService.listCarrier().subscribe((data: any) => {
      this.carriers = data;
    });
  }

  delCarrier(datas: any) {
    this.carrierService.deleteCarrier(datas.nit).subscribe((data: any) => {
      this.carriers = this.carriers.filter((u: any) => u !== datas);
    });
  }
}
