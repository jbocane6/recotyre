import { Component } from '@angular/core';
import { faCompass, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faCompass = faCompass;
  faWhatsapp = faWhatsapp;
  faMailBulk = faMailBulk;
}
