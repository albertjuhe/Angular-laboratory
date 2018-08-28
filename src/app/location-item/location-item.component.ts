import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-location-item',
  templateUrl: './location-item.component.html',
  styleUrls: ['./location-item.component.css']
})
export class LocationItemComponent implements OnInit {

  @Input() name: string; // <!-- Location Name -->
  description: string; // <!-- Location description -->

  constructor() {
   }

  ngOnInit() {
  }

}
