import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinalManagerService } from '../../services/final-manager.service';

@Component({
  selector: 'app-final-manager-list',
  templateUrl: './final-manager-list.component.html',
  styleUrls: ['./final-manager-list.component.css'],
})
export class FinalManagerListComponent implements OnInit {
  finalManagers: any;
  constructor(private finalManagerService: FinalManagerService, private routes: Router) {}

  ngOnInit(): void {
    this.loadFinalManager();
  }

  loadFinalManager() {
    this.finalManagerService.listFinalManager().subscribe((data: any) => {
      this.finalManagers = data;
    });
  }

  delFinalManager(datas: any) {
    this.finalManagerService.deleteFinalManager(datas.nit).subscribe((data: any) => {
      this.finalManagers = this.finalManagers.filter((u: any) => u !== datas);
    });
  }
}
