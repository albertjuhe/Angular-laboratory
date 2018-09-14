import { Component, OnInit, HostBinding, Input, EventEmitter, Output } from '@angular/core';
import { Location } from '../location/location.model';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() locationsList: Array<Location>;
  @Output() onLocationSelected: EventEmitter<Location>;

  currentLocation: Location;

  constructor() {
    this.onLocationSelected = new EventEmitter();
  }

  sortedTravels(): Location[] {
    return this.locationsList.sort((a: Location, b: Location) => b.stars - a.stars);
  }

  ngOnInit() {
  }

  clicked(location: Location) {
    this.currentLocation = location;
    this.onLocationSelected.emit(location);
  }

  isSelected(location: Location) {
    if (!location || !this.currentLocation) {
      return false;
    }
    return this.currentLocation.equal(location);
  }

}
