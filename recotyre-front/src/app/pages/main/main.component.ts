import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  companies = [
    { path: './../../assets/company-1.jpeg' },
    { path: './../../assets/company-2.jpeg' },
    { path: './../../assets/company-3.jpeg' },
    { path: './../../assets/company-4.jpeg' },
    { path: './../../assets/company-5.png' },
    { path: './../../assets/company-6.jpeg' }
  ];
  images = [
    { path: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/08/13/136129.jpg' },
    { path: 'https://www.waste360.com/sites/waste360.com/files/tiresfeat.png' },
    { path: 'https://previews.123rf.com/images/elarina/elarina1808/elarina180800572/106807093-used-car-tires-remained-in-nature-the-old-unnecessary-tire-of-car-remained-in-the-water-the-problem-.jpg' },
    { path: 'https://tyrerecovery.org.uk/wp-content/uploads/2017/11/Illegal-tyre-dump-waste-1.jpg' },
  ]
}
