import { Component } from '@angular/core';
import { faSearch, faHome, faCalendar, faUserFriends, faGear, faChartLine, faInbox } from '@fortawesome/free-solid-svg-icons';
import { faFileText, faImage } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  faSearch = faSearch;
  faHome = faHome;
  faFile = faFileText;
  faChartLine = faChartLine;
  faInbox = faInbox;
  faImage = faImage;
  faCalendar = faCalendar;
  faUserFriends = faUserFriends;
  faGear = faGear;

}
