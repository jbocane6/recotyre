import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionPointService } from '../../services/collection-point.service';

@Component({
  selector: 'app-collection-point-list',
  templateUrl: './collection-point-list.component.html',
  styleUrls: ['./collection-point-list.component.css'],
})
export class CollectionPointListComponent implements OnInit {
  collectionPoints: any;
  collectionPoint: any;
  constructor(
    private collectionPointService: CollectionPointService,
    private routes: Router
  ) {}

  ngOnInit(): void {
    this.loadCollectionPoint();
  }

  loadCollectionPoint() {
    this.collectionPointService.listCollectionPoint().subscribe((data: any) => {
      this.collectionPoints = data;
    });
  }

  delCollectionPoint(datas: any) {
    this.collectionPointService
      .deleteCollectionPoint(datas)
      .subscribe((data) => {
        this.collectionPoints = this.collectionPoints.filter(
          (u: any) => u._id !== datas
        );
      });
  }

  showCollectionPoint(collectionPoint: any) {
    this.collectionPoint =
      'ID :\t\t\t' +
      collectionPoint.shortId +
      '\nName :\t\t' +
      collectionPoint.pointName +
      '\nNIT :\t\t' +
      collectionPoint.nit +
      '\nAddress :\t' +
      collectionPoint.address +
      '\nCity :\t\t' +
      collectionPoint.city +
      '\nEmail :\t\t' +
      collectionPoint.email +
      '\nPhone :\t\t' +
      collectionPoint.phone +
      '\nContact :\t' +
      collectionPoint.contactPerson +
      '\nCellPhone :\t' +
      collectionPoint.cellPhone +
      '\nSchedule :\t' +
      collectionPoint.schedule;
    alert(this.collectionPoint);
  }
}
