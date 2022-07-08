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
      this.collectors = this.collectors.filter((u: any) => u.nit !== datas);
    });
  }
}
