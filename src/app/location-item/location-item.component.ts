import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../location/location.model';

@Component({
  selector: 'app-location-item',
  templateUrl: './location-item.component.html',
  styleUrls: ['./location-item.component.css']
})
export class LocationItemComponent implements OnInit {
  @Input() location: Location;

  constructor() {
  }

  ngOnInit() {
  }

}
