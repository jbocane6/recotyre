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
  carrier: any;
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
    this.carrierService.deleteCarrier(datas).subscribe((data) => {
      this.carriers = this.carriers.filter((u: any) => u._id !== datas);
    });
  }

  showCarrier(carrier: any) {
    this.carrier =
      'Name :\t\t\t' +
      carrier.companyName +
      '\nNIT :\t\t\t' +
      carrier.nit +
      '\nAddress :\t\t' +
      carrier.address +
      '\nCity :\t\t\t' +
      carrier.city +
      '\nEmail :\t\t\t' +
      carrier.email +
      '\nPhone :\t\t\t' +
      carrier.phone +
      '\nContact :\t\t' +
      carrier.contactPerson +
      '\nPosition :\t\t' +
      carrier.businessPosition +
      '\nCellPhone :\t\t' +
      carrier.cellPhone +
      '\nVehicle Plate :\t' +
      carrier.vehiclePlate;
    alert(this.carrier);
  }
}
