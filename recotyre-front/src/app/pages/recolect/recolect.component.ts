import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { TireService } from 'src/app/apis/services/tire.service';

@Component({
  selector: 'app-recolect',
  templateUrl: './recolect.component.html',
  styleUrls: ['./recolect.component.css'],
})
export class RecolectComponent implements OnInit {
  faCheck = faCheck;
  tyres: any;

  constructor(private tireService: TireService){}

  ngOnInit(): void {
    this.loadTire();
  }
  loadTire() {
    this.tireService.listTire().subscribe((data: any) => {
      this.tyres = data;
      console.log(data);
    });
  }
}
