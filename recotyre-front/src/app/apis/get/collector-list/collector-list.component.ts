import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectorService } from '../../services/collector.service';

@Component({
  selector: 'app-collector-list',
  templateUrl: './collector-list.component.html',
  styleUrls: ['./collector-list.component.css'],
})
export class CollectorListComponent implements OnInit {
  collectors: any;
  collector: any;
  constructor(
    private collectorService: CollectorService,
    private routes: Router
  ) {}

  ngOnInit(): void {
    this.loadCollector();
  }

  loadCollector() {
    this.collectorService.listCollector().subscribe((data: any) => {
      this.collectors = data;
    });
  }

  delCollector(datas: any) {
    this.collectorService.deleteCollector(datas).subscribe((data) => {
      this.collectors = this.collectors.filter((u: any) => u._id !== datas);
    });
  }

  showCollector(collector: any) {
    this.collector =
      'Name :\t\t\t' +
      collector.companyName +
      '\nNIT :\t\t\t' +
      collector.nit +
      '\nAddress :\t\t' +
      collector.address +
      '\nCity :\t\t\t' +
      collector.city +
      '\nEmail :\t\t\t' +
      collector.email +
      '\nPhone :\t\t\t' +
      collector.phone +
      '\nContact :\t\t' +
      collector.contactPerson +
      '\nPosition :\t\t' +
      collector.businessPosition +
      '\nCellPhone :\t\t' +
      collector.cellPhone +
      '\nVehicle Plate :\t' +
      collector.vehiclePlate;
    alert(this.collector);
  }
}
