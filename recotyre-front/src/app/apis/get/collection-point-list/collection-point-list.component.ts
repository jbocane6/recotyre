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
}
