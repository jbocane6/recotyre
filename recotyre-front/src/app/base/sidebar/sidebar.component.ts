import { Component } from '@angular/core';
import { faWarehouse, faHelmetSafety, faTruckPickup, faUserFriends, faGear, faUserTie, faIndustry, faTruck, faRing } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  faTruck = faTruck;
  faWarehouse = faWarehouse;
  faHelmetSafety = faHelmetSafety;
  faUserTie = faUserTie;
  faIndustry = faIndustry;
  faRing = faRing;
  faTruckPickup = faTruckPickup;
  faUserFriends = faUserFriends;
  faGear = faGear;

}
