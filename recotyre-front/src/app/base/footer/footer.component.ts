import { Component } from '@angular/core';
import { faCompass, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faCompass = faCompass;
  faPhone = faPhone;
  faMailBulk = faMailBulk;
}
