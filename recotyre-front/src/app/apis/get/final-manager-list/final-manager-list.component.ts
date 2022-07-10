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
  finalManager: any;
  constructor(
    private finalManagerService: FinalManagerService,
    private routes: Router
  ) {}

  ngOnInit(): void {
    this.loadFinalManager();
  }

  loadFinalManager() {
    this.finalManagerService.listFinalManager().subscribe((data: any) => {
      this.finalManagers = data;
    });
  }

  delFinalManager(datas: any) {
    this.finalManagerService.deleteFinalManager(datas).subscribe((data) => {
      this.finalManagers = this.finalManagers.filter(
        (u: any) => u._id !== datas
      );
    });
  }

  showFinalManager(finalManager: any) {
    this.finalManager =
      'Name :\t\t\t\t' +
      finalManager.companyName +
      '\nNIT :\t\t\t\t' +
      finalManager.nit +
      '\nAddress :\t\t\t' +
      finalManager.address +
      '\nCity :\t\t\t\t' +
      finalManager.city +
      '\nEmail :\t\t\t\t' +
      finalManager.email +
      '\nPhone :\t\t\t\t' +
      finalManager.phone +
      '\nContact :\t\t\t' +
      finalManager.contactPerson +
      '\nPosition :\t\t\t' +
      finalManager.businessPosition +
      '\nCellPhone :\t\t\t' +
      finalManager.cellPhone +
      '\nManager Point :\t' +
      finalManager.managerPointId;
    alert(this.finalManager);
  }
}
