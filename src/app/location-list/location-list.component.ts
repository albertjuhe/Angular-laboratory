import { Component, OnInit, HostBinding } from '@angular/core';
import { Location } from '../location/location.model';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  locations: Array<Location>;

  constructor() {
    this.locations = [
      new Location('Roth, Alemanya', 'Challenge Roth', '07/15/2016', '07/18/2016', 5, 91, 0, 'ajuhe'),
      new Location('Toscana, Italia', 'Viatge Toscana', '07/15/2015', '07/18/2015', 58, 12, 0, 'eva'),
      new Location('EDinborough, Escocia', 'Volta HighLands', '03/15/2012', '03/10/2012', 6, 15, 0, 'aina')
    ];
   }

  ngOnInit() {
  }

}
