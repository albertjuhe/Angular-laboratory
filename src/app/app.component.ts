import { Component, EventEmitter } from '@angular/core';
import { Location } from './location/location.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  locations: Array<Location>;
  title = 'Travel Yeah!!!!';

  constructor() {
    this.locations = [
      new Location('Roth, Alemanya', 'Challenge Roth', '07/15/2016', '07/18/2016', 5, 91, 0, 'ajuhe'),
      new Location('Toscana, Italia', 'Viatge Toscana', '07/15/2015', '07/18/2015', 4, 12, 0, 'eva'),
      new Location('EDinborough, Escocia', 'Volta HighLands', '03/15/2012', '03/10/2012', 6, 15, 0, 'aina')
    ];
  }

  locationWasSelected(location: Location): void {
      console.log('Location selected: ', location);
  }
}
