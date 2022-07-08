import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerPointService } from '../../services/manager-point.service';

@Component({
  selector: 'app-manager-point-list',
  templateUrl: './manager-point-list.component.html',
  styleUrls: ['./manager-point-list.component.css']
})
export class ManagerPointListComponent implements OnInit {
  managerPoints: any;
  constructor(private managerPointService: ManagerPointService, private routes: Router) {}

  ngOnInit(): void {
    this.loadManagerPoint();
  }

  loadManagerPoint() {
    this.managerPointService.listManagerPoint().subscribe((data: any) => {
      this.managerPoints = data;
    });
  }

  delManagerPoint(datas: any) {
    this.managerPointService.deleteManagerPoint(datas.shortId).subscribe((data: any) => {
      this.managerPoints = this.managerPoints.filter((u: any) => u !== datas);
    });
  }
}
