import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerPointService } from '../../services/manager-point.service';

@Component({
  selector: 'app-manager-point-list',
  templateUrl: './manager-point-list.component.html',
  styleUrls: ['./manager-point-list.component.css'],
})
export class ManagerPointListComponent implements OnInit {
  managerPoints: any;
  managerPoint: any;
  constructor(
    private managerPointService: ManagerPointService,
    private routes: Router
  ) {}

  ngOnInit(): void {
    this.loadManagerPoint();
  }

  loadManagerPoint() {
    this.managerPointService.listManagerPoint().subscribe((data: any) => {
      this.managerPoints = data;
    });
  }

  delManagerPoint(datas: any) {
    this.managerPointService.deleteManagerPoint(datas).subscribe((data) => {
      this.managerPoints = this.managerPoints.filter(
        (u: any) => u._id !== datas
      );
    });
  }

  showManagerPoint(managerPoint: any) {
    this.managerPoint =
      'ID :\t\t\t' +
      managerPoint.shortId +
      '\nName :\t\t' +
      managerPoint.managerName +
      '\nNIT :\t\t' +
      managerPoint.nit +
      '\nAddress :\t' +
      managerPoint.address +
      '\nCity :\t\t' +
      managerPoint.city +
      '\nEmail :\t\t' +
      managerPoint.email +
      '\nPhone :\t\t' +
      managerPoint.phone +
      '\nContact :\t' +
      managerPoint.contactPerson +
      '\nCellPhone :\t' +
      managerPoint.cellPhone +
      '\nSchedule :\t' +
      managerPoint.schedule;
    alert(this.managerPoint);
  }
}
